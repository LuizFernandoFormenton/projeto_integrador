'use client'

import { useState, useEffect } from "react";
import axios from "axios";
import host from "@/app/lib/host";
import Toast from "@/app/components/Toast";

export default function AdicionarSacola({ produtoId }) {
  const [produtos, setProdutos] = useState([]);
  const [mensagem, setMensagem] = useState(null);
  const [confirmarAdicionar, setConfirmarAdicionar] = useState(false);

  useEffect(() => {
    const produtosSalvos = JSON.parse(localStorage.getItem("produtos")) || [];
    setProdutos(produtosSalvos);
  }, []);

  function mostrarMensagem(texto) {
    setMensagem(texto);
  }

  function fecharMensagem() {
    setMensagem(null);
  }

  async function adicionarCarrinho(id) {
    if (!confirmarAdicionar && produtos.includes(id)) {
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
    <>
      <button
        onClick={() => adicionarCarrinho(produtoId)}
        className="w-full cursor-pointer h-10 bg-green-600 text-white text-sm font-semibold rounded-full mb-2 border-none"
      >
        {confirmarAdicionar ? "Adicionar novamente?" : "Adicionar à Sacola"}
      </button>

      <Toast message={mensagem} onClose={fecharMensagem} />
    </>
  );
}