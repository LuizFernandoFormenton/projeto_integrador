'use client'

import { useState } from "react";

function Frete() {

    const [frete, alteraFrete] = useState("");
    const [valorFrete, alteraValorFrete] = useState (0);

    function CalculaFrete(){
        alteraValorFrete(14.90)
    }

    return ( 
        <div>

            <p><strong> FRETE E PRAZO </strong></p>
            <input onChange={(e)=> alteraFrete(e.target.value)} type="text" placeholder="Seu cep aqui" />
            <button onClick={()=>CalculaFrete()}> Calcular </button>
            
            {
                valorFrete > 0 ?
                <p>R$ {valorFrete} - 4 a 5 dias uteis </p>
                :
                <div></div>
            }

        </div>

          

     );
}

export default Frete;