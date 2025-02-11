'use client'
import Image from "next/image";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import { useState } from "react";

export default function Home() {
  const [ precoProduto, alteraPreco] = useState(25);


  return (
    <div>

  <div className=" border bg-red-700 w-fit text-center text-white p-2 mt-32 ml-12 rounded-lg  ">
        <img className="w-[300px]" src="./imagens/imagens_tela_inicial/camisetas_png/Mockup - Camiseta 2 (1).png"/>
        <h3 className="">CAMISETA RADICAL CEREAL</h3>
        <p> 
          R$ {precoProduto},00
        </p>
        <button className="bg-white text-black w-full p-6 font-bold text-base border-none"> ADICIONAR AO CARRINHO </button>

      </div>
    
    </div>
  );
}
