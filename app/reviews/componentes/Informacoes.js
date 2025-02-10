'use client'
import { useState } from "react";

function Informacoes() {

    const [ nome, alteraNome ] = useState("CAMISETA NEW OVER KIDS BASIC LOG");
    const [ preco, alteraPreco] = useState(149.00);
    const [desconto, alteraDesconto] = useState (50);
    

    return (  
        <div>
            <div >
                    <img width="400" height="400" src="http://placehold.co/50" />
                    <p><b> { nome } </b></p>
            </div>

            <div >
                    <p><del> R$ {preco} </del></p>
                    <p>R$ {(preco - preco*desconto/100 ).toFixed(2)} <strong>{desconto}% OFF</strong></p>
            </div>

            <p>Tamanho</p>
            <button>10</button>
            <button>12</button>
            <button><strong>04</strong></button>
            <button>06</button>
            <button>08</button>

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