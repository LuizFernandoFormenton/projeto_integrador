'use client'
import { useState } from "react";

function Produto() {

    const [ nome, alteraNome ] = useState("CROPPED 75775757")
    const [ tamanho, alteraTamanho] = useState("P")
    const [preco, alteraPreco] = useState("R$ 19,99")

    return ( 

        
        <div>
    <img src="https://placehold.co/200"/> 
  
        <h2>{nome}</h2>
        <p>Tamanho: <strong> {tamanho} </strong></p>
        <p>Total <strong> {preco} </strong></p>
        </div>



     );
}

export default Produto;