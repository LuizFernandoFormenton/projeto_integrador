'use client'

import { useEffect, useState } from "react";
import axios from "axios";

function Avaliacoes(attr) {

    const [estrelas, alteraEstrelas] = useState(0);
     const [avaliacao, alteraAvaliacao]  = useState([]);



    async function buscaAvaliacoes(){
        console.log(attr)
        const res = await axios.get ("http://localhost:4000/avaliacao")
        console.log(res.data)
        alteraAvaliacao(res.data)

    }
    
    useEffect(()=>{
        buscaAvaliacoes();

        const usuarioLocal = JSON.parse(localStorage.getItem("usuario"));
        if (usuarioLocal && usuarioLocal.id) {
            alteraUsuario(usuarioLocal)
        }
    }, [])

    const [usuario, alteraUsuario] = useState({});


    return ( 
        <div>

            <h2>Avaliações do Produto</h2>

{/*
            <button onClick={()=> alteraEstrelas (1)}> ⭐ </button>
            <button onClick={()=> alteraEstrelas (2)}> ⭐ </button>
            <button onClick={()=> alteraEstrelas (3)}> ⭐ </button>
            <button onClick={()=> alteraEstrelas (4)}> ⭐ </button>
            <button onClick={()=> alteraEstrelas (5)}> ⭐ </button>
            

            <p> Classificação Média: {estrelas} (avaliações) </p>
            
           
            <select>
                <option value="Mais Recentes">Mais Recentes</option>
                <option value="Mais Antigas">Mais Antigas</option>
                <option value="Classificação mais alta">Classificação mais alta</option>
                <option value="Classificação mais baixa">Classificação mais baixa</option>
            </select>
*/}

            <select>
                <option value="Todos">Todos</option>
                <option value="1 Estrelas">1 Estrelas</option>
                <option value="2 Estrelas">2 Estrelas</option>
                <option value="3 Estrelas">3 Estrelas</option>
                <option value="4 Estrelas">4 Estrelas</option>
                <option value="5 Estrelas">4 Estrelas</option>

            </select>

            {
                usuario.id == undefined?           
                    (
                        <button><strong> FAÇA LOGIN PARA ESCREVER UMA AVALIAÇÃO </strong></button>
                    ): (
                        avaliacao.length > 0 ?
                        avaliacao.map(
                            (i) => (
                                <div key={i.id}>
                                    {i.nota}
    
                                    <h2 className="text-xl font-semibold text-black-800">Nota: {i.nota}</h2>
                                    <p className="text-black-600 italic mt-2">Comentário: {i.comentario}</p>
                                    <p className="text-sm text-black-500 mt-2">Usuário: {i.usuario?.nome}</p>
                                    
                                </div>
                            )
                        ):
                        (
                            <>
                                <p><strong> Nenhuma Avaliação </strong></p>
                                <p>Seja o primeiro a avaliar este produto</p>
                            </>
                        )
                    
                    )
            }


        </div>
     );
}

export default Avaliacoes;