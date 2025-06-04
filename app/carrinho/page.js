'use client'

import Produto from "./components/Produto";
import { useEffect, useState } from "react";
import axios from "axios";
import host from "../lib/host";

function Carrinho() {
  const [produtos, alteraProdutos] = useState([]);
  const [total, alteraTotal] = useState(0);

  function agruparProdutos(lista) {
    const mapa = new Map();
    lista.forEach((item) => {
      if (mapa.has(item.id)) {
        const existente = mapa.get(item.id);
        existente.quantidade += 1;
        existente.precoTotal = existente.preco * existente.quantidade;
      } else {
        mapa.set(item.id, { ...item, quantidade: 1, precoTotal: item.preco });
      }
    });
    return Array.from(mapa.values());
  }

  function calculaTotal(lista) {
    let conta = 0;
    lista.forEach((item) => {
      conta += item.precoTotal;
    });
    alteraTotal(conta);
  }

  function atualizarCarrinho(novoCarrinho) {
    if (novoCarrinho.length === 0) {
      localStorage.removeItem("carrinho");
      localStorage.removeItem("produtos");
      alteraProdutos([]);
      alteraTotal(0);
      window.dispatchEvent(new Event("carrinhoAtualizado"));
    } else {
      alteraProdutos(novoCarrinho);
      localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
      localStorage.setItem("produtos", JSON.stringify(novoCarrinho));
      const agrupados = agruparProdutos(novoCarrinho);
      calculaTotal(agrupados);
      window.dispatchEvent(new Event("carrinhoAtualizado"));
    }
  }

  function removerProduto(produtoId) {
    const novoCarrinho = produtos.filter((item) => item.id !== produtoId);
    atualizarCarrinho(novoCarrinho);
  }

  function diminuirQuantidade(produtoId) {
    const index = produtos.findIndex((item) => item.id === produtoId);
    if (index !== -1) {
      const novoCarrinho = [...produtos];
      novoCarrinho.splice(index, 1);
      atualizarCarrinho(novoCarrinho);
    }
  }

  function aumentarQuantidade(produtoId) {
    const produtoParaAdicionar = produtos.find((item) => item.id === produtoId);
    if (produtoParaAdicionar) {
      const novoItem = { ...produtoParaAdicionar };
      const novoCarrinho = [...produtos, novoItem];
      atualizarCarrinho(novoCarrinho);
    }
  }

  async function lerCarrinho() {
    let carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho"));

    if (!carrinhoSalvo || carrinhoSalvo.id === undefined) {
      const usuario = JSON.parse(localStorage.getItem("usuario"));
      if (!usuario || !usuario.id) {
        window.location.href = "/login";
        return;
      }
      const hoje = new Date().toISOString();
      const res = await axios.post(host + "/venda", {
        data: hoje,
        usuario_id: usuario.id,
      });
      localStorage.setItem("carrinho", JSON.stringify(res.data));
      carrinhoSalvo = res.data;
    }

    const res = await axios.get(host + "/transacao/" + carrinhoSalvo.id);
    const produtos = res.data.map((p) => p.produtos);
    alteraProdutos(produtos);
    const agrupados = agruparProdutos(produtos);
    calculaTotal(agrupados);
  }

  useEffect(() => {
    lerCarrinho();
  }, []);

  const produtosAgrupados = agruparProdutos(produtos);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10 font-rubik">
      <h1 className=" underline text-3xl font-bold text-red-500 mb-6 text-center">
        Seu Carrinho:
      </h1>

      {produtosAgrupados.length === 0 ? (
        <p className="text-center text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="mb-8 text-center">
            <p className="text-xl font-extrabold text-black-700">
              Total: R$ {total.toFixed(2)}
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {produtosAgrupados.map((produto) => (
              <div
                key={produto.id}
                className="flex items-center justify-between bg-gray-50 p-3 rounded-md shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold">{produto.nome}</p>
                    <p className="text-sm text-gray-600">Tamanho: {produto.tamanho}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-md overflow-hidden">
                    <button
                      onClick={() => diminuirQuantidade(produto.id)}
                      className=" cursor-pointer border-solid border-red-500 rounded-lg px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                      aria-label={`Diminuir quantidade de ${produto.nome}`}
                    >
                      -
                    </button>
                    <span className="px-4 py-1">{produto.quantidade}</span>
                    <button
                      onClick={() => aumentarQuantidade(produto.id)}
                      className=" cursor-pointer rounded-lg border-solid border-green-500 px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                      aria-label={`Aumentar quantidade de ${produto.nome}`}
                    >
                      +
                    </button>
                  </div>

                  <p className="font-semibold text-lg">
                    R$ {produto.precoTotal.toFixed(2)}
                  </p>

                  <button
                    onClick={() => removerProduto(produto.id)}
                    aria-label={`Remover ${produto.nome} do carrinho`}
                    className=" cursor-pointer text-red-600 hover:text-red-800 transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4">
            

            <div className="flex gap-4">
              <button
                onClick={() => {
                  localStorage.removeItem("carrinho");
                  localStorage.removeItem("produtos");
                  alert("Compra finalizada com sucesso!");
                  window.location.href = "/";
                }}
                className=" cursor-pointer bg-green-600 border-none hover:bg-green-700 text-white px-6 py-2 rounded-xl font-semibold transition"
              >
                Finalizar Compra
              </button>

              <button
                onClick={() => (window.location.href = "/")}
                className=" cursor-pointer rounded-xl border-none bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 font-semibold transition"
              >
                Continuar Comprando
              </button>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  localStorage.removeItem("carrinho");
                  localStorage.removeItem("produtos");
                  alteraProdutos([]);
                  alteraTotal(0);
                  window.dispatchEvent(new Event("carrinhoAtualizado"));
                }}
                className="text-white border-none rounded-lg bg-red-500 shadow-lg hover:text-black text-sm font-semibold cursor-pointer self-center"
              >
                Limpar Carrinho
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrinho;