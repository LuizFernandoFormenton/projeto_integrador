'use client'

import { useState } from "react";
import Avaliacoes from "./componentes/Avaliacoes";
import Devolucao from "./componentes/Devolucao";
import Frete from "./componentes/Frete";
import Informacoes from "./componentes/Informacoes";
import "./reviews.css"

export default 
function reviews () {

    const [produto, alteraProduto] = useState(
        {
            id: 0,
            desconto: 10,
            nome: "CAMISETA NEW OVER KIDS BASIC LOGO",
            preco: 25.90,
            tamanho: ["PP", "P", "M", "G", "GG"],
            cor: ["Verde", "Preto", "Branco"],
            img: "https://www.bawclothing.com.br/camiseta-new-over-kids-basic-logo-marrom-0094002035/p",
            descriçãoProduto: "CAMISETA NEW OVER KIDS BASIC LOGO MARROM",
            avaliacoes: 3
    })
    
    

    return (
        <div>
        
            <Informacoes nome={produto.nome} preco={produto.preco} desconto={produto.desconto} tamanho={produto.tamanho} cor={produto.cor}/>
            <Devolucao/>
            <Frete/>
            <Avaliacoes avaliacoes={produto.avaliacoes}/>
                    
        </div>


    );
}