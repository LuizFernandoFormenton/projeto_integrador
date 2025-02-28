'use client'

import Produto from "./components/Produto";
import Quantidade from "./components/Quantidade";
import "./carrinho.css"
import { useEffect, useState } from "react";
import { unstable_rethrow } from "next/navigation";




function carrinho(){

    

    const [produtos, alteraProdutos] = useState([]);
    const [total, alteraTotal] = useState(0)

        function calculaTotal(lista){
            let conta = 0
            lista.map((i)=>{
                conta += i.preco
            })
            alteraTotal(conta)
        }

        function removerProduto(produto){
           const novoCarrinho = produtos.filter(i => produto != i)
           localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
            calculaTotal(novoCarrinho)
            alteraProdutos(novoCarrinho)
        }
    
        useEffect(()=> {
            if (typeof window !== "undefined"){
                
                let produtos = []
                if( localStorage.getItem("carrinho") != null ){
                    produtos = JSON.parse( localStorage.getItem("carrinho") )
                    alteraProdutos( produtos )
                }
                calculaTotal(produtos)
            }

        },[] )
    
    
    
    return(

        <div>

            <h1>Carrinho:</h1>

            <hr/>

            <div className="flex flex-wrap justify-around">
            {
                produtos != 0 && produtos.map((i)=>
                <div className="quadrado">
                        <Produto nome={i.nome} tamanho={i.tamanho} preco={i.preco} />
                        {/* <Quantidade quantidade={i.quantidade}/> */}
                        <button className="botaoremover"  onClick={()=>removerProduto(i) }>Remover</button>
                    </div>
                )
            }
            </div>

            <hr/>

            <div className="w-[300px] m-auto text-center " >
                        

                        <p> Total: R${ !isNaN(total) ? Number(total).toFixed(2) : 0} </p>

                        <br/>

                        <button className="bg-lime-500 text-white p-4 boder"> Finalizar Compra </button>            

            </div>
            <hr/>

        </div>
    );
}

export default carrinho;