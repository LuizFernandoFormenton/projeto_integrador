'use client'

import axios from "axios";
import { useState } from "react";

function Teste() {

    const [dados, alteraDados] = useState ("Aguardando....")

    async function Testar(){
        const response = await axios.get("http://localhost:3001/usuario")
        console.log(response)

        alteraDados(response.data[0])

    }
    return ( 

        <div>
            <h1>Teste!</h1>
            <button onClick={()=> Testar ()} > Testar a API</button>
            <p> O resultado é: {dados.nome} </p>
        </div>
     );
}

export default Teste;