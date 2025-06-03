'use client'

import { useState, useEffect } from "react";
import axios from "axios";
import host from "@/app/lib/host";

export default function AdicionarSacola({
  produtoId,
  textoBotao = "Adicionar à Sacola",
  textoConfirmar = "Adicionar novamente?",
  mensagemSucesso = "Produto adicionado ao carrinho :)",
  mensagemErroServidor = "Erro ao se conectar com o servidor",
  exibirToast = false, // "embaixo" ou "emcima"
}) {
  const [produtos, setProdutos] = useState([]);
  const [mensagem, setMensagem] = useState(null);
  const [confirmarAdicionar, setConfirmarAdicionar] = useState(false);

  useEffect(() => {
    const produtosSalvos = JSON.parse(localStorage.getItem("produtos")) || [];
    setProdutos(produtosSalvos);
  }, []);

  function mostrarMensagem(texto) {
    setMensagem(texto);
    setTimeout(() => setMensagem(null), 3000);
  }

  async function adicionarCarrinho(id) {
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (!usuario || !usuario.id) {
      // Redireciona para login com mensagem na query string
      const mensagemLogin = encodeURIComponent("Você precisa estar logado para comprar");
      window.location.href = `/login?msg=${mensagemLogin}`;
      return;
    }

    if (!confirmarAdicionar && produtos.includes(id)) {
      setConfirmarAdicionar(true);
      return;
    }

    let id_carrinho = -1;
    let carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho"));

    if (!carrinhoSalvo || carrinhoSalvo.id === undefined) {
      const hoje = new Date().toISOString();

      try {
        const res = await axios.post(host + '/venda', {
          data: hoje,
          usuario_id: usuario.id
        });

        localStorage.setItem("carrinho", JSON.stringify(res.data));
        id_carrinho = res.data.id;
        carrinhoSalvo = res.data;
      } catch (error) {
        console.error("Erro ao criar carrinho:", error);
        mostrarMensagem("Erro ao criar carrinho. Tente novamente.");
        setConfirmarAdicionar(false);
        return;
      }
    } else {
      id_carrinho = carrinhoSalvo.id;
    }

    const novosProdutos = [...produtos, id];
    setProdutos(novosProdutos);
    localStorage.setItem("produtos", JSON.stringify(novosProdutos));

    try {
      await axios.post(host + '/transacao', {
        venda_id: id_carrinho,
        produto_id: id,
        quantidade: 1,
      });

      mostrarMensagem(mensagemSucesso);
    } catch (err) {
      console.error(err);
      mostrarMensagem(mensagemErroServidor);
    }

    setConfirmarAdicionar(false);
  }

  return (
    <div className="relative">
      <button
        onClick={() => adicionarCarrinho(produtoId)}
        className="w-full cursor-pointer h-10 bg-green-600 text-white text-sm font-semibold rounded-full mb-2 border-none"
      >
        {confirmarAdicionar ? textoConfirmar : textoBotao}
      </button>

      {/* Toast embaixo */}
      {exibirToast === "embaixo" && mensagem && (
        <div className="absolute top-full mt-2 w-full bg-emerald-100 text-emerald-800 rounded-md p-2 text-center shadow">
          {mensagem}
        </div>
      )}

      {/* Toast em cima */}
      {exibirToast === "emcima" && mensagem && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-emerald-600 text-white px-6 py-3 rounded shadow-lg z-50">
          {mensagem}
        </div>
      )}
    </div>
  );
}