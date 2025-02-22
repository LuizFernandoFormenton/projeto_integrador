'use client'

import { useState } from "react"
import Compra from "./Compra";

function components () {

    const [usuario, alteraUsuario] = useState({
        id: 0,
        nome: "Helena",
        email: "helenasiqueira48@gmail.com",
        telefone: "(16) 9 9324-5129"
    });

    const [novoNome, alteraNovoNome] = useState(usuario.nome);
    const [novoEmail, alteraNovoEmail] = useState(usuario.email);
    const [novoTelefone, alteraNovoTelefone] = useState(usuario.telefone);


    const [nomeOriginal, alteraNomeOriginal] = useState(usuario.nome);
    const [emailOriginal, alteraEmailOriginal] = useState(usuario.email);
    const [telefoneOriginal, alteraTelefoneOriginal] = useState(usuario.telefone);


    const [editando, alteraEditando] = useState(false);
    const [editando2, alteraEditando2] = useState(false);
    const [editando3, alteraEditando3] = useState(false);
    const [historico, historicoCompras] = useState(false);

    
    function manipulaEdicao() {
        alteraEditando(editando);
        if (editando) { 
            alteraNomeOriginal(usuario.nome);
        }
    }

    function manipulaEdicao2() {
        alteraEditando2(editando2);
        if (editando2) {
            alteraEmailOriginal(usuario.email);
        }
    }

    function manipulaEdicao3() {
        alteraEditando3(editando3);
        if (editando3) {
            alteraTelefoneOriginal(usuario.telefone);
        }
    }

    function salvarNome(e) {
        e.preventDefault();   
        alteraUsuario({
            ...usuario, 
            nome: novoNome
        });
        alteraEditando(false);
    }

    function salvarEmail(e) {
        e.preventDefault();
        alteraUsuario({
            ...usuario,
            email: novoEmail
        });
        alteraEditando2(false);
    }

    function salvarTelefone(e) {
        e.preventDefault();
        alteraUsuario({
            ...usuario,
            telefone: novoTelefone
        });
        alteraEditando3(false);
    }

    function cancelarEdicaoNome() {
        alteraNovoNome(nomeOriginal);
        alteraEditando(false);
    }

    function cancelarEdicaoEmail() {
        alteraNovoEmail(emailOriginal);
        alteraEditando2(false);
    }

    function cancelarEdicaoTelefone() {
        alteraNovoTelefone(telefoneOriginal);
        alteraEditando3(false);
    }

    const [compras, alteraCompras] = useState([
    ]);

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
                    {editando ? 
                        <input 
                            type="text" 
                            placeholder="Digite seu nome" 
                            value={novoNome} 
                            onChange={(e) => alteraNovoNome(e.target.value)} 
                        /> : 
                        <p><strong>{usuario.nome}</strong></p>
                    }
                    <button 
                        onClick={editando ? salvarNome : manipulaEdicao} 
                        className={`mt-5 ${editando ? `bg-blue-500` : `bg-green-500`}`}
                    >
                        {editando ? <span>Concluído</span> : <span>Alterar</span>}
                    </button>
                    {editando && 
                        <button 
                            onClick={cancelarEdicaoNome} 
                            className="mt-3 bg-red-500 ml-2"
                        >
                            Cancelar
                        </button>
                    }

                    {editando2 ? 
                        <input 
                            type="number" 
                            placeholder="Digite seu telefone" 
                            value={novoEmail} 
                            onChange={(e) => alteraNovoEmail(e.target.value)} 
                        /> : 
                        <p><strong>{usuario.email}</strong></p>
                    }
                    <button 
                        onClick={editando2 ? salvarEmail : manipulaEdicao2} 
                        className={`mt-5 ${editando2 ? `bg-blue-500` : `bg-green-500`}`}
                    >
                        {editando2 ? <span>Concluído</span> : <span>Alterar</span>}
                    </button>
                    {editando2 && 
                        <button 
                            onClick={cancelarEdicaoEmail} 
                            className="mt-3 bg-red-500 ml-2"
                        >
                            Cancelar
                        </button>
                    }

                    {editando3 ? 
                        <input 
                            className="mt-3" 
                            type="email" 
                            placeholder="Digite seu email" 
                            value={novoTelefone} 
                            onChange={(e) => alteraNovoTelefone(e.target.value)} 
                        /> : 
                        <p><strong>{usuario.telefone}</strong></p>
                    }
                    <button 
                        onClick={editando3 ? salvarTelefone : manipulaEdicao3} 
                        className={`mt-5 ${editando3 ? `bg-blue-500` : `bg-green-500`}`}
                    >
                        {editando3 ? <span>Concluído</span> : <span>Alterar</span>}
                    </button>
                    {editando3 && 
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
                        onClick={() => mostrarHistorico()}  
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
