'use client'

import { useEffect, useState } from "react"
import Compra from "./Compra";

function components () {

    const [usuario, alteraUsuario] = useState({})
    
    useEffect(()=> {
        const dados = JSON.parse( localStorage.getItem("usuario") );
        alteraUsuario(dados);
    }, [])

    const [novoNome, alteraNovoNome] = useState(usuario.nome);
    const [novoEmail, alteraNovoEmail] = useState(usuario.email);
    const [novoTelefone, alteraNovoTelefone] = useState(usuario.telefone);

    const [nomeOriginal, alteraNomeOriginal] = useState(usuario.nome);
    const [emailOriginal, alteraEmailOriginal] = useState(usuario.email);
    const [telefoneOriginal, alteraTelefoneOriginal] = useState(usuario.telefone);

    const [editandoNome, alteraEditandoNome] = useState(false);
    const [editandoEmail, alteraEditandoEmail] = useState(false);
    const [editandoTelefone, alteraEditandoTelefone] = useState(false);
    const [historico, alteraHistorico] = useState(false);

    const [ compras, alteraCompras ] = useState([
        {
            id: 0,
            imagem: <img width="100" height="100" src="https://placehold.co/1000"/>,
            nome: "camisa",
            tipo: "manga longa",
            preco: "19,90",
            quantidade: "1",
            data_da_compra: "18/02/2025"
        },
        {
            id: 1,
            imagem: <img width="100" height="100" src="https://placehold.co/1000"/>,
            nome: "calça",
            tipo: "jeans",
            preco: "59,90",
            quantidade: "2",
            data_da_compra: "15/02/2025"
        },
        {
            id: 2,
            imagem: <img width="100" height="100" src="https://placehold.co/1000"/>,
            nome: "jaqueta",
            tipo: "couro",
            preco: "199,00",
            quantidade: "1",
            data_da_compra: "10/02/2025"
        },
        {
            id: 3,
            imagem: <img width="100" height="100" src="https://placehold.co/1000"/>,
            nome: "tênis",
            tipo: "esportivo",
            preco: "159,90",
            quantidade: "1",
            data_da_compra: "12/02/2025"
        },
        {
            id: 4,
            imagem: <img width="100" height="100" src="https://placehold.co/1000"/>,
            nome: "mochila",
            tipo: "backpack",
            preco: "79,90",
            quantidade: "1",
            data_da_compra: "11/02/2025"
        },
        {
            id: 5,
            imagem: <img width="100" height="100" src="https://placehold.co/1000"/>,
            nome: "óculos de sol",
            tipo: "aviador",
            preco: "89,90",
            quantidade: "1",
            data_da_compra: "14/02/2025"
        },
        {
            id: 6,
            nome: "camisa",
            tipo: "polo",
            preco: "49,90",
            quantidade: "3",
            data_da_compra: "17/02/2025"
        },
        {
            id: 7,
            nome: "relógio",
            tipo: "digital",
            preco: "129,00",
            quantidade: "1",
            data_da_compra: "16/02/2025"
        },
        {
            id: 8,
            nome: "fone de ouvido",
            tipo: "bluetooth",
            preco: "149,90",
            quantidade: "1",
            data_da_compra: "13/02/2025"
        },
        {
            id: 9,
            nome: "cinto",
            tipo: "casual",
            preco: "39,90",
            quantidade: "2",
            data_da_compra: "12/02/2025"
        },
        {
            id: 10,
            nome: "bermuda",
            tipo: "moletom",
            preco: "39,90",
            quantidade: "2",
            data_da_compra: "19/02/2025"
        },
        {
            id: 11,
            nome: "blusa",
            tipo: "cropped",
            preco: "29,90",
            quantidade: "1",
            data_da_compra: "14/02/2025"
        },
        {
            id: 12,
            nome: "casaco",
            tipo: "flanelado",
            preco: "89,90",
            quantidade: "1",
            data_da_compra: "16/02/2025"
        },
        {
            id: 13,
            nome: "mochila",
            tipo: "executiva",
            preco: "179,90",
            quantidade: "1",
            data_da_compra: "17/02/2025"
        },
        {
            id: 14,
            nome: "sapato",
            tipo: "social",
            preco: "199,90",
            quantidade: "1",
            data_da_compra: "18/02/2025"
        }
    ]);

    


    function manipulaEdicaoNome() {
        alteraEditandoNome(!editandoNome);
        if (editandoNome) { 
            alteraNomeOriginal(usuario.nome);
        }
    }

    function manipulaEdicaoEmail() {
        alteraEditandoEmail(!editandoEmail);
        if (editandoEmail) {
            alteraEmailOriginal(usuario.email);
        }
    }

    function manipulaEdicaoTelefone() {
        alteraEditandoTelefone(!editandoTelefone);
        if (editandoTelefone) {
            alteraTelefoneOriginal(usuario.telefone);
        }
    }

    function salvarNome(e) {
        e.preventDefault();   
        alteraUsuario({
            ...usuario, 
            nome: novoNome
        });
        alteraEditandoNome(false);
    }

    function salvarEmail(e) {
        e.preventDefault();
        alteraUsuario({
            ...usuario,
            email: novoEmail
        });
        alteraEditandoEmail(false);
    }

    function salvarTelefone(e) {
        e.preventDefault();
        alteraUsuario({
            ...usuario,
            telefone: novoTelefone
        });
        alteraEditandoTelefone(false);
    }

    function cancelarEdicaoNome() {
        alteraNovoNome(nomeOriginal);
        alteraEditandoNome(false);
    }

    function cancelarEdicaoEmail() {
        alteraNovoEmail(emailOriginal);
        alteraEditandoEmail(false);
    }

    function cancelarEdicaoTelefone() {
        alteraNovoTelefone(telefoneOriginal);
        alteraEditandoTelefone(false);
    }

    
    return ( 
        <div className="justify-center flex my-24">
            <div className="justify-items-center w-48 rounded-xl shadow-md p-8 ">
                <h1 className="text-red-600 text-3xl">Seu Perfil</h1>
                <div className="flex gap-5 flex text-center">
                    <img 
                        width="100" 
                        height="100" 
                        src="https://placehold.co/1000" 
                        className="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50% items-center"
                    />
                </div>    

                <div className="text-center">
                    {editandoNome ? 
                        <input 
                            type="text" 
                            placeholder="Digite seu nome" 
                            value={novoNome} 
                            onChange={(e) => alteraNovoNome(e.target.value)} 
                        /> : 
                        <p><strong>{usuario.nome}</strong></p>
                    }
                    <button 
                        onClick={editandoNome ? salvarNome : manipulaEdicaoNome} 
                        className={`mt-5 ${editandoNome ? `bg-blue-500` : `bg-green-500 flex`}`}
                    >
                        {editandoNome ? <span>Concluído</span> : <span>Alterar</span>}
                    </button>
                    {editandoNome && 
                        <button 
                            onClick={cancelarEdicaoNome} 
                            className="mt-3 bg-red-500 ml-2"
                        >
                            Cancelar
                        </button>
                    }

                    {editandoEmail ? 
                        <input 
                            type="email" 
                            placeholder="Digite seu email" 
                            value={novoEmail} 
                            onChange={(e) => alteraNovoEmail(e.target.value)} 
                        /> : 
                        <p><strong>{usuario.email}</strong></p>
                    }
                    <button 
                        onClick={editandoEmail ? salvarEmail : manipulaEdicaoEmail} 
                        className={`mt-5 ${editandoEmail ? `bg-blue-500` : `bg-green-500`}`}
                    >
                        {editandoEmail ? <span>Concluído</span> : <span>Alterar</span>}
                    </button>
                    {editandoEmail && 
                        <button 
                            onClick={cancelarEdicaoEmail} 
                            className="mt-3 bg-red-500 ml-2"
                        >
                            Cancelar
                        </button>
                    }

                    {editandoTelefone ? 
                        <input 
                            className="mt-3" 
                            type="tel" 
                            placeholder="Digite seu telefone" 
                            value={novoTelefone} 
                            onChange={(e) => alteraNovoTelefone(e.target.value)} 
                        /> : 
                        <p><strong>{usuario.telefone}</strong></p>
                    }
                    <button 
                        onClick={editandoTelefone ? salvarTelefone : manipulaEdicaoTelefone} 
                        className={`mt-5 ${editandoTelefone ? `bg-blue-500` : `bg-green-500`}`}
                    >
                        {editandoTelefone ? <span>Concluído</span> : <span>Alterar</span>}
                    </button>
                    {editandoTelefone && 
                        <button 
                            onClick={cancelarEdicaoTelefone} 
                            className="mt-3 bg-red-500 ml-2"
                        >
                            Cancelar
                        </button>
                    }
                </div>

                <div className="justify-between rounded-xl">
                    <button 
                        onClick={() => alteraHistorico(!historico)}  
                        className={`mt-3 ${historico ? `bg-green-500` : `bg-green-500`} ml-3`}
                    >
                        {historico ? <span>Concluído</span> : <span>Mostrar histórico</span>}
                    </button>

                    {historico ? 
                        <div>
                            <h2>Histórico</h2>
                            <ul>
                                {compras.map((i) => 
                                    <Compra   
                                        imagem={i.imagem} 
                                        nome={i.nome} 
                                        tipo={i.tipo} 
                                        preco={i.preco} 
                                        quantidade={i.quantidade} 
                                        data_da_compra={i.data_da_compra} 
                                    />
                                )}
                            </ul>
                            <br/>
                        </div>
                        : 
                        <div></div>
                    }
                </div>
            </div>
        </div>
    );
}

export default components;
