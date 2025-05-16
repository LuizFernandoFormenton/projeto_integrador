'use client'
import Image from "next/image";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import axios from "axios";
import { useState, useEffect } from "react";
import Produtos from "./components/Produtos";

export default function Home() {
  const [ precoProduto, alteraPreco] = useState(25);

  const [produtos, alteraProdutos] = useState([]);

  async function buscarCamisas(){
    const response = await axios.get("http://localhost:4000/produtos")
    console.log(response.data)
    alteraProdutos(response.data)
  }



  useEffect (()=>{
    buscarCamisas()
  }, [])



  return (
    <div className="flex flex-wrap justify-center gap-6 px-6 py-10 ml-4">

        {
          produtos.map( (i)=> (
          <Produtos key= {i.id}  produto = {i} />
        ))
        }

    </div>
  );
}
