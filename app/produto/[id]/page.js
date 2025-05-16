'use client'

import Avaliacoes from "../components/Avaliacoes";
import Devolucao from "../components/Devolucao";
import Frete from "../components/Frete";
import Informacoes from "../components/Informacoes";
import { useParams } from 'next/navigation'
import { useEffect, useState } from "react";
import "../reviews.css"
import axios from "axios";

export default 
function reviews () {
  const params = useParams();
  const id = params.id;

    const [produto, alteraProduto] = useState({});

    async function buscaUmProduto(id) {
        const res = await axios.get("http://localhost:4000/produtos/" + id)  

        if (res.data){
            alteraProduto(res.data)
        }
        
    }

    useEffect(() =>{
        buscaUmProduto( id)
    }, [])
    
 
    async function adicionarCarrinho(id){
     
    
        let id_carrinho = -1
    
        const carrinhoSalvo = localStorage.getItem("carrinho");
    
        if (!carrinhoSalvo) {
          // Se não existir, cria um novo carrinho
          const usuario = JSON.parse(localStorage.getItem("usuario"));
    
          if (!usuario || !usuario.id) {
              window.location.href = "/login"; 
          } 
    
          const hoje = new Date().toISOString().split('T')[0];
    
          const res = await axios.post(
              'http://localhost:4000/venda',
              {
                  data: hoje ,
                  usuario_id:  usuario.id
              }
          )
                  
    
          // Salva no localStorage
          localStorage.setItem("carrinho", JSON.stringify(res.data));
    
          // Atribui o novo id_carrinho
          id_carrinho = res.data.id;
          console.log("Carrinho criado:", novoCarrinho);
        } 
    
        if( localStorage.getItem("produtos") != null ){
            let ps = JSON.parse( localStorage.getItem("produtos") )
            alteraProdutos( ps )
        }
        
        // Adiciona o novo produto
        alteraProdutos([...produtos, id] )
    
        // Salva novamente
        localStorage.setItem("produtos", JSON.stringify(produtos));
    
        // Atualiza o id_carrinho
        id_carrinho = carrinhoSalvo.id;
    
        try {
          const response = await axios.post("http://localhost:4000/transacao", 
           {
              venda_id: id_carrinho,
              produto_id: id, 
              quantidade: 1, 
            }
          );
    
          if (response.ok) {
            alert("Produto adicionado com sucesso");
            window.location.href = "/carrinho";
          } else {
            const erro = await response.text();
            alert("Erro ao realizar transação: " + erro);
          }
        } catch (err) {
          console.error(err);
          alert("Erro ao se conectar com o servidor");
        }
    
      }

    return (
        produto.id &&
        <div>
        
            <Informacoes adicionarCarrinho={ ()=>{ adicionarCarrinho(produto.id) } } produto={produto} />
            <Devolucao/>
            <Frete/>
            <Avaliacoes produto_id={produto.id}/>

                    
        </div>


    );
}