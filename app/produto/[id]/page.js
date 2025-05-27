'use client'

import Avaliacoes from "../components/Avaliacoes";
import { useParams } from 'next/navigation'
import { useEffect, useState } from "react";
import "../reviews.css"
import axios from "axios";
import host from "@/app/lib/host";

export default function Reviews() {
  const params = useParams();
  const id = params.id;

  const [produto, alteraProduto] = useState({});
  const [carregando, alteraCarregando] = useState(true);

  async function buscaUmProduto(id) {
    try {
      const res = await axios.get(host + `/produtos/${id}`);  
      if (res.data) {
        alteraProduto(res.data);
      }
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    } finally {
      alteraCarregando(false);
    }
  }

  useEffect(() => {
    buscaUmProduto(id);
  }, [id]);

  async function adicionarCarrinho(id) {
    try {
      const carrinhoAtual = JSON.parse(localStorage.getItem('carrinho')) || [];
      const index = carrinhoAtual.findIndex(item => item.id === id);

      if (index === -1) {
        const novoCarrinho = [
          ...carrinhoAtual,
          {
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            imagem: produto.imagem,
            quantidade: 1
          }
        ];
        localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
        alert('Produto adicionado à sacola!');
      } else {
        const confirmar = window.confirm('Produto já está na sacola. Deseja adicionar mais uma unidade?');
        if (confirmar) {
          carrinhoAtual[index].quantidade += 1;
          localStorage.setItem('carrinho', JSON.stringify(carrinhoAtual));
          alert('Mais uma unidade adicionada à sacola!');
        } else {
          alert('Nenhuma alteração feita na sacola.');
        }
      }
    } catch (erro) {
      console.error("Erro ao adicionar ao carrinho:", erro);
      alert('Erro ao adicionar produto à sacola.');
    }
  }

  if (carregando) {
    return <div className="p-6 text-center">Carregando...</div>;
  }

  if (!produto.id) {
    return <div className="p-6 text-center">Produto não encontrado</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-6xl mx-auto w-full">
      {/* LADO ESQUERDO - IMAGEM E DESCRIÇÃO */}
      <div className="md:w-2/3 flex flex-col gap-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="w-full h-auto max-h-[500px] object-contain p-4"
          />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Descrição do Produto</h2>
          <p className="text-gray-600 whitespace-pre-line">
            {produto.descricao || "Este produto não possui descrição detalhada."}
          </p>
        </div>
      </div>

      {/* LADO DIREITO - INFORMAÇÕES E AVALIAÇÕES */}
      <div className="md:w-1/3 flex flex-col gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
          <h1 className="text-2xl font-bold mb-2 text-gray-800">{produto.nome}</h1>

          <div className="mb-6">
            <span className="text-3xl font-bold text-emerald-600">
              {produto.preco?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
            {produto.preco_original && produto.preco_original > produto.preco && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                {produto.preco_original.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </span>
            )}
          </div>

          <div className="mb-4">
            <span className="text-gray-700 font-medium">Tamanho: </span>
            <span className="text-gray-600">{produto.tamanho || 'Único'}</span>
          </div>

          <button
            onClick={() => adicionarCarrinho(produto.id)}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg mb-6"
          >
            Adicionar à Sacola
          </button>

          <div className="space-y-3">
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Frete grátis para todo o Brasil
            </div>
            <div className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Devolução fácil em 30 dias
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 sticky top-[400px] h-[600px] overflow-hidden">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Avaliações</h2>
          <div className="h-[calc(100%-40px)] overflow-y-auto pr-2 custom-scrollbar">
            <Avaliacoes produto_id={produto.id} limit={2} />
          </div>
        </div>
      </div>
    </div>
  );
}