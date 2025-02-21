'use client'
import Image from "next/image";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import { useState } from "react";
import Produtos from "./components/Produtos";

export default function Home() {
  const [ precoProduto, alteraPreco] = useState(25);

  const [produtos, alteraProdutos] = useState([
    {
      id: 0,
      desconto: 5,
      nome: "Camisa Básica",
      preco: 23.99,
      tamanho: ["PP", "P", "M", "G", "GG"],
      cor: ["Preto", "Rosa", "Verde"],
      img: "camisetas_png/Mockup - Camiseta 2 (1).png",
      avaliacao: "3 estrelas"
    },
    {
      id: 1,
      desconto: 10,
      nome: "Camisa Street",
      preco: 35.90,
      tamanho: ["P", "M", "G"],
      cor: ["Branco", "Azul", "Cinza"],
      img: "camisetas_png/Mockup - Camiseta 3 (1).png",
      avaliacao: "4 estrelas"
    },
    {
      id: 2,
      desconto: 15,
      nome: "Camisa Oversized",
      preco: 49.99,
      tamanho: ["M", "G", "GG"],
      cor: ["Preto", "Branco"],
      img: "camisetas_png/Mockup - Camiseta 4 (1).png",
      avaliacao: "5 estrelas"
    },
    {
      id: 3,
      desconto: 5,
      nome: "Camisa Retrô",
      preco: 29.90,
      tamanho: ["PP", "P", "M", "G"],
      cor: ["Vermelho", "Amarelo", "Azul"],
      img: "camisetas_png/Mockup - Camiseta 5 (1).png",
      avaliacao: "4 estrelas"
    },
    {
      id: 4,
      desconto: 20,
      nome: "Camisa Esportiva",
      preco: 55.00,
      tamanho: ["P", "M", "G", "GG"],
      cor: ["Preto", "Azul"],
      img: "camisetas_png/Mockup - Camiseta 6.png",
      avaliacao: "5 estrelas"
    },
  ]);


  return (
    <div className="flex ml-4">

        {
          produtos.map( (i)=> (
          <Produtos produto = {i} />
        ))
        }

    </div>
  );
}
