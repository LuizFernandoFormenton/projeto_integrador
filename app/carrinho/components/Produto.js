'use client'
import { useState } from "react";

function Produto(attr) {

    return ( 

        
        <div id="produtoCarrinho" >
         <img src= {attr.produto.imagem} style={{width:"100%"}} /> 
  
            <h2>{attr.produto.nome}</h2>
            <p>Tamanho: <strong> {attr.produto.tamanho} </strong></p>
            <p>Total <strong> {attr.produto.preco} </strong></p>
        </div>



     );
}

export default Produto;