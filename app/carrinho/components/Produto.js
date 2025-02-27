'use client'
import { useState } from "react";

function Produto(attr) {
    


    return ( 

        
        <div>
    <img src="https://placehold.co/200"/> 
  
        <h2>{attr.nome}</h2>
        <p>Tamanho: <strong> {attr.tamanho} </strong></p>
        <p>Total <strong> {attr.preco} </strong></p>
        </div>



     );
}

export default Produto;