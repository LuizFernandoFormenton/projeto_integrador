'use client'

import { useState, useEffect } from "react";
import axios from "axios";
import host from "@/app/lib/host";

export default function AdicionarSacola({ produtoId }) {
  const [produtos, setProdutos] = useState([]);
  const [mensagem, setMensagem] = useState(null);
  const [confirmarAdicionar, setConfirmarAdicionar] = useState(false);

  useEffect(() => {
    const produtosSalvos = JSON.parse(localStorage.getItem("produtos")) || [];
    setProdutos(produtosSalvos);
  }, []);

  // Função para mostrar mensagem por 3 segundos
  function mostrarMensagem(texto) {
    setMensagem(texto);
    setTimeout(() => setMensagem(null), 5000);
  }

  async function adicionarCarrinho(id) {
    if (!confirmarAdicionar && produtos.includes(id)) {
      // Produto já está no carrinho, pedir confirmação
      setConfirmarAdicionar(true);
      return;
    }

    let id_carrinho = -1;
    let carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho"));

    if (!carrinhoSalvo || carrinhoSalvo.id === undefined) {
      const usuario = JSON.parse(localStorage.getItem("usuario"));

      if (!usuario || !usuario.id) {
        window.location.href = "/login";
        return;
      }

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

      mostrarMensagem("Produto adicionado ao carrinho :)");
    } catch (err) {
      console.error(err);
      mostrarMensagem("Erro ao se conectar com o servidor");
    }

    setConfirmarAdicionar(false);
  }

  return (
    <div className="relative">
      <button
        onClick={() => adicionarCarrinho(produtoId)}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg mb-6"
      >
        {confirmarAdicionar ? "Adicionar novamente?" : "Adicionar à Sacola"}
      </button>

      {mensagem && (
        <div className="absolute top-full mt-2 w-full bg-emerald-100 text-emerald-800 rounded-md p-2 text-center shadow">
          {mensagem}
        </div>
      )}
    </div>
  );
}