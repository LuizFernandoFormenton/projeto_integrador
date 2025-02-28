'use client'

import { useState } from "react";
import BarraLateral from "./BarraLateral";

function Cabecalho () {
    const [pesquisa, alteraPesquisa] = useState("")

    function pesquisar(e){
        e.preventDefault()
        console.log("Pesquisa é: "+pesquisa);
    }

    return (

    <main>
        <BarraLateral/>
        <div style={{ background: "linear-gradient(to right, white, #e5e5e5)"}} className="flex h-20 w-full items-center fixed gap-20 px-8 text-[15px] z-50">
        <img onClick={()=> window.location.href="/"}  className="w-20  cursor-pointer" src="/imagens/logo.png"/>
        <p> CAMISETAS FEMININAS</p>
        <p> CAMISETAS MASCULINAS </p>
        <p> CAMISETAS UNISEX </p>
        <p> LANÇAMENTOS </p>
        <p> PROMOÇÕES </p>

        <form onSubmit={(e)=>pesquisar(e)}>
        <label>
            <input className="rounded-xl p-2" type="text" placeholder="🔍 O que você está procurando?" 
            onChange={ (e)=> alteraPesquisa(e.target.value)} value={pesquisa} />           
        <button  className=" hidden   ml-2"></button>
        </label>
        </form>
        
    </div>
    </main>

      );
}

export default Cabecalho ;
