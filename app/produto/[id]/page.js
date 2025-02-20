'use client'

import Avaliacoes from "../components/Avaliacoes";
import Devolucao from "../components/Devolucao";
import Frete from "../components/Frete";
import Informacoes from "../components/Informacoes";

import { useState } from "react";
import "../reviews.css"

export default 
function reviews (attr) {

    const [produto, alteraProduto] = useState({});
    const [produtos, alteraProdutos] = useState([
        {
            id: 1,
            desconto: 15,
            nome: "MOLETOM OVERSIZE AZUL ESCURO",
            preco: 69.90,
            tamanho: ["P", "M", "G"],
            cor: ["Azul Escuro", "Cinza", "Preto"],
            img: "https://example.com/moletom-oversize-azul.jpg",
            descriçãoProduto: "MOLETOM OVERSIZE AZUL ESCURO, confortável e estiloso",
            avaliacoes: 4
        },
        {
            id: 2,
            desconto: 20,
            nome: "CALÇA JEANS DESTROYED",
            preco: 99.90,
            tamanho: ["38", "40", "42", "44"],
            cor: ["Azul Claro", "Azul Escuro"],
            img: "https://example.com/calca-jeans-destroyed.jpg",
            descriçãoProduto: "CALÇA JEANS DESTROYED COM DETALHES DE RASGOS",
            avaliacoes: 5
        },
        {
            id: 3,
            desconto: 10,
            nome: "BOTA DE COURO PRETA",
            preco: 159.90,
            tamanho: ["36", "37", "38", "39", "40"],
            cor: ["Preto", "Marrom"],
            img: "https://example.com/bota-de-couro-preta.jpg",
            descriçãoProduto: "BOTA DE COURO PRETA COM SOLADO TRATORADO",
            avaliacoes: 4
        },
        {
            id: 4,
            desconto: 5,
            nome: "BLUSA DE LÃ CINZA CLARO",
            preco: 89.90,
            tamanho: ["M", "G", "GG"],
            cor: ["Cinza Claro", "Bege"],
            img: "https://example.com/blusa-de-la-cinza.jpg",
            descriçãoProduto: "BLUSA DE LÃ CINZA CLARO COM DETALHE EM PUNHO",
            avaliacoes: 3
        },
        {
            id: 5,
            desconto: 30,
            nome: "JAQUETA DE COURO FOSCO",
            preco: 199.90,
            tamanho: ["P", "M", "G"],
            cor: ["Preto", "Marrom"],
            img: "https://example.com/jaqueta-de-couro-fosco.jpg",
            descriçãoProduto: "JAQUETA DE COURO FOSCO, perfeita para o inverno",
            avaliacoes: 5
        },
        {
            id: 6,
            desconto: 25,
            nome: "TÊNIS DE CORRIDA MASCULINO",
            preco: 149.90,
            tamanho: ["39", "40", "41", "42"],
            cor: ["Azul", "Preto", "Branco"],
            img: "https://example.com/tenis-de-corrida-masculino.jpg",
            descriçãoProduto: "TÊNIS DE CORRIDA MASCULINO, super confortável",
            avaliacoes: 4
        },
        {
            id: 7,
            desconto: 12,
            nome: "SANDÁLIA DE COURO FEMININA",
            preco: 79.90,
            tamanho: ["34", "35", "36", "37", "38"],
            cor: ["Bege", "Preto"],
            img: "https://example.com/sandalia-de-couro-feminina.jpg",
            descriçãoProduto: "SANDÁLIA DE COURO FEMININA, elegante e moderna",
            avaliacoes: 4
        },
        {
            id: 8,
            desconto: 8,
            nome: "SHORTS DE ALÇAS ESTAMPADO",
            preco: 39.90,
            tamanho: ["P", "M", "G"],
            cor: ["Azul", "Preto", "Rosa"],
            img: "https://example.com/shorts-de-alcas-estampado.jpg",
            descriçãoProduto: "SHORTS DE ALÇAS ESTAMPADO, confortável para o verão",
            avaliacoes: 3
        },
        {
            id: 9,
            desconto: 18,
            nome: "VESTIDO LONGO DE FESTA",
            preco: 199.90,
            tamanho: ["P", "M", "G"],
            cor: ["Vermelho", "Preto", "Azul Marinho"],
            img: "https://example.com/vestido-longo-de-festa.jpg",
            descriçãoProduto: "VESTIDO LONGO DE FESTA, perfeito para eventos especiais",
            avaliacoes: 5
        },
        {
            id: 10,
            desconto: 22,
            nome: "CAMISA SOCIAL MASCULINA",
            preco: 69.90,
            tamanho: ["P", "M", "G", "GG"],
            cor: ["Branca", "Azul Claro", "Preto"],
            img: "https://example.com/camisa-social-masculina.jpg",
            descriçãoProduto: "CAMISA SOCIAL MASCULINA, ideal para ocasiões formais",
            avaliacoes: 4
        }
    ]);

    useState(() =>{
        const id_produtos = attr.params.id
        produtos.map( (i) =>{
            if(i.id == id_produtos){
                alteraProduto(i)
            }
        })
    }, [])
    
    

    return (
        <div>
        
            <Informacoes nome={produto.nome} preco={produto.preco} desconto={produto.desconto} tamanho={produto.tamanho} cor={produto.cor}/>
            <Devolucao/>
            <Frete/>
            <Avaliacoes avaliacoes={produto.avaliacoes}/>

                    
        </div>


    );
}