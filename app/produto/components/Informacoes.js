'use client'
import Produto from "@/app/carrinho/components/Produto";
import { useState } from "react";

function Informacoes(attr) {

    return (  
        <div>
            <div >
                    <img width="300" height="450" src="https://bawclothing.vtexassets.com/arquivos/ids/336819-1240-1860/0094002035_01.jpg?v=638663473337600000" />
                    <p><b> { attr.nome } </b></p>
            </div>

            <div >
                
                    <p><del> R$ { attr.preco } </del></p>
                    <p>R$ {( attr.preco - attr.preco*attr.desconto/100 ).toFixed(2)} <strong>{ attr.desconto }% OFF</strong></p>

                    <ul> 
                        {attr.cor.map((i) =>

                                <li>
                                    <p> {i}  </p>
                                </li>
                        )}
                    </ul>    


            </div>

            
            <ul>
                {attr.tamanho.map((i) => 

                    <li>

                        <p>{i}</p>
                        
                    </li>
                )}
            </ul>

            <p><button>ADICIONAR À SACOLA</button></p>


            <details>
                <summary>DESCRIÇÃO DA PEÇA</summary>
                <p>CAMISETA NEW OVER KIDS BASIC LOGO MARROM</p>
                <p>Camiseta new over manga curta e gola careca.</p>
                <p>04 - Comprimento: 45cm/ Manga: 11cm/ Cava: 16cm/ Torax: 40cm.</p>
                <p>06 - Comprimento: 48cm/ Manga: 11,5cm/ Cava: 17cm/ Torax: 42cm.</p>
                <p>08 - Comprimento: 51cm/ Manga: 12cm/ Cava: 18cm/ Torax: 44cm.</p>
                <p>10 - Comprimento: 54cm/ Manga: 12,5cm/ Cava: 19cm/ Torax: 46cm.</p>
                <p>12 - Comprimento: 57cm/ Manga: 13cm/ Cava: 20cm/ Torax: 48cm.</p>
                <p>14 - Comprimento: 60cm/ Manga: 13,5cm/ Cava: 21cm/ Torax: 50cm</p>
            </details>

            <hr />


        </div>
        
    );
}

export default Informacoes;