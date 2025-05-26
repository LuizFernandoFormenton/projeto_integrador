'use client'
import { useState } from "react";

function Produto(attr) {
    


    return ( 

        
        <div>
         <img src= {attr.produtos.imagem} /> 
  
            <h2>{attr.nome}</h2>
            <p>Tamanho: <strong> {attr.tamanho} </strong></p>
            <p>Total <strong> {attr.preco} </strong></p>
        </div>



     );
}

export default Produto;