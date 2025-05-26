'use client'

import Produto from "./components/Produto";
import Quantidade from "./components/Quantidade";
import "./carrinho.css";
import { useEffect, useState } from "react";
import { unstable_rethrow } from "next/navigation";
import axios from "axios";
import host from "../lib/host";




function carrinho(){

    const [produtos, alteraProdutos] = useState([]);

    function calculaTotal(lista){
        let conta = 0
        lista.map((i)=>{
            conta += i.preco
        })
        alteraTotal(conta)
    }

    const [total, alteraTotal] = useState(0)

    function removerProduto(produto){
        const novoCarrinho = produtos.filter(i => produto != i)
        localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
        calculaTotal(novoCarrinho)
        alteraProdutos(novoCarrinho)
    }

    async function lerCarrinho() {
        let id_carrinho = -1

        let carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho"));
        console.log(carrinhoSalvo)

        
        if (!carrinhoSalvo || carrinhoSalvo.id == undefined) {
            // Se não existir, cria um novo carrinho
            const usuario = JSON.parse(localStorage.getItem("usuario"));
    
            if (!usuario || !usuario.id) {
                window.location.href = "/login"; 
            } 
    
            const hoje = new Date().toISOString();
    
            const res = await axios.post(
                host + ' /venda',
                {
                    data: hoje ,
                    usuario_id:  usuario.id
                }
            )
    
    
            console.log("passo aqui 2")
            console.log(res.data)
                    
    
            console.log("passo aqui 3")
            // Salva no localStorage
            localStorage.setItem("carrinho", JSON.stringify(res.data));
    
            // Atribui o novo id_carrinho
            id_carrinho = res.data.id;
            console.log("Carrinho criado:", res.data);
            carrinhoSalvo =  res.data
        } 
        
        id_carrinho = carrinhoSalvo.id;

        const res = await axios.get(host + '/transacao/'+ id_carrinho)
        
        let produtos = []
        res.data.map(
            (p) => {produtos.push(p.produtos)}
        )
      
        alteraProdutos( produtos )

        calculaTotal(produtos)
    }

    useEffect(()=> {
        lerCarrinho()
    },[] )
    
    
    
    return(

        <div>

            <h1>Carrinho:</h1>

            <hr/>

            <div className="flex flex-wrap justify-around">
            {
                produtos.map((i)=>
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
                        

                        <p> Total: R${total.toFixed(2)} </p>

                        <br/>

                        <div className="flex">

                         <button onClick={()=>{
                            localStorage.removeItem("carrinho")
                            alert("Compra finalizada com sucesso!");
                            window.location.href = "/"
                         }} className="bg-lime-500 text-white p-4 boder"> Finalizar Compra </button> 
                         <button className="bg-lime-500 text-white p-4 boder"> Continuar Comprando </button>      

                        </div>



            </div>
            <hr/>

        </div>
    );
}

export default carrinho;