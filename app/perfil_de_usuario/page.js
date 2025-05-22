'use client'
import axios from 'axios';
import Compra from "./Compra";
import { useEffect, useState } from "react";

function components () {
    const [usuario, alteraUsuario] = useState({});

    useEffect(() => {
        const usuarioLocal = JSON.parse(localStorage.getItem("usuario"));
        if (usuarioLocal && usuarioLocal.id) {
            alteraUsuario(usuarioLocal)
        }
    }, []);

    const [novoNome, alteraNovoNome] = useState(usuario.nome);
    const [novoSexo, alteraNovoSexo] = useState(usuario.sexo)
    const [novoEmail, alteraNovoEmail] = useState(usuario.email);
    const [novoTelefone, alteraNovoTelefone] = useState(usuario.telefone);
    const [novoCep, alteraNovoCep] = useState(usuario.cep)

    const [nomeOriginal, alteraNomeOriginal] = useState(usuario.nome);
    const [dataNascimentoOriginal, alteraDataNascimentoOriginal] = useState(usuario.dataNascimento)
    const [sexoOriginal, alteraSexoOriginal] = useState(usuario.sexo)
    const [emailOriginal, alteraEmailOriginal] = useState(usuario.email);
    const [senhaOriginal, alteraSenhaOriginal] = useState(usuario.senha)
    const [cpfOriginal, alteraCpfOriginal] = useState(usuario.cpf)
    const [telefoneOriginal, alteraTelefoneOriginal] = useState(usuario.telefone);
    const [cepOriginal, alteraCepOriginal] = useState (usuario.cep)

    const [editando, alteraEditando] = useState(false);
    const [editando2, alteraEditando2] = useState(false);
    const [editando3, alteraEditando3] = useState(false);
    const [editando4, alteraEditando4] = useState(false);
    const [editando5, alteraEditando5] = useState(false);
    const [historico, historicoCompras] = useState(false);

    function manipulaEdicao() {
        alteraEditando(!editando);
        if (editando) { 
            alteraNomeOriginal(usuario.nome);
        }
    }

    function manipulaEdicao2() {
        alteraEditando2(!editando2);
        if (editando2) {
            alteraEmailOriginal(usuario.email);
        }
    }

    function manipulaEdicao3() {
        alteraEditando3(!editando3);
        if (editando3) {
            alteraTelefoneOriginal(usuario.telefone);
        }
    }

    function manipulaEdicao4() {
        alteraEditando4 (!editando4);
        if (editando4) {
            alteraSexoOriginal(usuario.sexo);
        }
    }

    function manipulaEdicao5() {
        alteraEditando5 (!editando5);
        if (editando5) {
            alteraCepOriginal (usuario.dataNascimento)
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

    function salvarSexo(e) {
        e.preventDefault();
        alteraUsuario({
            ...usuario,
            sexo: novoSexo
        });
        alteraEditando4(false);
    }

    function salvarCep(e) {
        e.preventDefault();
        alteraUsuario({
            ...usuario,
            cep: novoCep
        });
        alteraEditando5(false);
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

    function cancelarEdicaoSexo() {
        alteraNovoSexo(sexoOriginal);
        alteraEditando4(false);
    }

    function cancelarEdicaoCep() {
        alteraNovoCep(cepOriginal);
        alteraEditando5(false);
    }

    function mostrarHistorico() {
        historicoCompras(!historico);
    }

    const [compras, alteraCompras] = useState([]);

    return ( 
        <div className="justify-center flex my-24">
            <div className="justify-items-center w-50 rounded-xl shadow-md p-8 ">

                <h1 className="text-red-600 text-3xl font-bold text-center mb-4">Seu perfil</h1>

                <div className="flex gap-5 flex text-center justify-center mb-3">
                    <img 
                        width="100" 
                        height="100" 
                        src="https://placehold.co/1000" 
                        className="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50% items-center"
                    />
                </div>    

                <div className="text-center items-center gap-3">

                    {/* Nome */}
                    <div className="flex flex-col items-center mb-4">
                        {editando ? 
                            <input type="text" placeholder="Digite seu nome" value={novoNome} onChange={(e) => alteraNovoNome(e.target.value)} /> : 
                            <p className="bg-red-100 py-2 px-12 rounded-full text-lg font-semibold text-black-800 border-2 border-gray-300"><strong>{usuario.nome}</strong></p>
                        }
                        <div className="mt-2 flex gap-2">
                            <button onClick={editando ? salvarNome : manipulaEdicao} className="bg-transparent border-none text-blue-500 underline decoration-1 hover:text-blue-600">
                                {editando ? "Concluído" : "Alterar"}
                            </button>
                            {editando && 
                                <button onClick={cancelarEdicaoNome} className="bg-transparent border-none text-blue-500 underline decoration-1 hover:text-blue-600">
                                    Cancelar
                                </button>
                            }
                        </div>
                    </div>

                    {/* Sexo */}
                    <div className="flex flex-col items-center mb-4">
                        {editando4 ? (
                            <select
                                value={novoSexo}
                                onChange={(e) => alteraNovoSexo(e.target.value)}
                                className="mt-2 mb-2 px-3 py-1 border rounded-full"
                            >
                                <option value="">Selecione...</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Prefiro não me identificar">Prefiro não me identificar</option>
                            </select>
                        ) : (
                            <p className="bg-red-100 px-20 py-2 rounded-full text-lg font-semibold text-black">
                                <strong>{usuario.genero}</strong>
                            </p>
                        )}
                        <div className="mt-2 flex gap-2">
                            <button
                                onClick={editando4 ? salvarSexo : manipulaEdicao4}
                                className="bg-transparent border-none text-blue-500 underline decoration-1 hover:text-blue-600"
                            >
                                {editando4 ? "Concluído" : "Alterar"}
                            </button>
                            {editando4 && (
                                <button
                                    onClick={cancelarEdicaoSexo}
                                    className="bg-transparent border-none text-blue-500 underline decoration-1 hover:text-blue-600"
                                >
                                    Cancelar
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center mb-4">
                        {editando2 ? 
                            <input type="email" placeholder="Digite seu email" value={novoEmail} onChange={(e) => alteraNovoEmail(e.target.value)} /> : 
                            <p className="bg-red-100 px-4 py-2 rounded-full text-lg font-semibold text-gray-800"><strong>{usuario.email}</strong></p>
                        }
                        <div className="mt-2 flex gap-2">
                            <button onClick={editando2 ? salvarEmail : manipulaEdicao2} className="bg-transparent border-none text-blue-500 underline decoration-1 hover:text-blue-600">
                                {editando2 ? "Concluído" : "Alterar"}
                            </button>
                            {editando2 && 
                                <button onClick={cancelarEdicaoEmail} className="bg-transparent border-none text-blue-500 underline decoration-1 hover:text-blue-600">
                                    Cancelar
                                </button>
                            }
                        </div>
                    </div>

                    {/* Telefone */}
                    <div className="flex flex-col items-center mb-4">
                        {editando3 ? 
                            <input type="tel" placeholder="Digite seu telefone" value={novoTelefone} onChange={(e) => alteraNovoTelefone(e.target.value)} /> : 
                            <p className="bg-red-100 px-12 py-2 rounded-full text-lg font-semibold text-gray-800"><strong>{usuario.telefone}</strong></p>
                        }
                        <div className="mt-2 flex gap-2">
                            <button onClick={editando3 ? salvarTelefone : manipulaEdicao3} className="bg-transparent border-none text-blue-500 underline decoration-1 hover:text-blue-600">
                                {editando3 ? "Concluído" : "Alterar"}
                            </button>
                            {editando3 && 
                                <button onClick={cancelarEdicaoTelefone} className="bg-transparent border-none text-blue-500 underline decoration-1 hover:text-blue-600">
                                    Cancelar
                                </button>
                            }
                        </div>
                    </div>

                </div>

                <div className="text-center items-center mr-2 flex gap-2 justify-center">
                    <button 
                        onClick={mostrarHistorico}  
                        className="bg-transparent border-none text-blue-500 underline decoration-1 hover:text-blue-600" 
                    >
                        {historico ? "Concluído" : "Histórico"}
                    </button>

                    <button 
                        onClick={() => {
                            localStorage.removeItem("usuario");
                            window.location.href = "/";
                        }} 
                        className="bg-transparent border-none text-blue-500 underline decoration-1 hover:text-blue-600"
                    >
                        Sair
                    </button>
                </div>

                {historico ? 
                    <div>
                        <h2 className="font-semibold text-center mt-6 mb-2">Histórico</h2>
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
                    : null
                }
            </div>
        </div>
    );
}

export default components;
