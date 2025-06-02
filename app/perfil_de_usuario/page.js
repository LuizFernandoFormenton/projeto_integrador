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
            <div className="justify-items-center w-50 rounded-xl shadow-md p-6 pt-0 ">

                <div className="flex flex-col items-center text-center justify-center mb-3 bg-red-500 p-6 rounded-lg mb-8 w-full ">
                    <h1 className="text-white text-3xl font-bold mb-4">Seu perfil</h1>
                </div>   

                <div className="text-center items-center gap-3">

                    {/* Nome */}
                    <div className="flex flex-row border-solid border-red-500 rounded-full items-center px-8 mb-8 .border-0 p-0 grid grid-cols-1 h-15">
                        {editando ? (
                            <input
                                type="text"
                                value={novoNome}
                                onChange={(e) => alteraNovoNome(e.target.value)}
                                className="bg-transparent text-lg font-semibold text-black"
                            />
                        ) : (
                            <p className="text-lg font-semibold text-black">
                                <strong>{usuario.nome}</strong>
                            </p>
                        )}

                        <div className="ml-auto flex gap-2 col-end-4">
                            <button
                                onClick={editando ? salvarNome : manipulaEdicao}
                                className={`${
                                    editando
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                } text-white font-semibold uppercase px-4 py-2 rounded-full shadow-md border-none m-4`}
                            >
                                {editando ? "Concluído" : "Alterar"}
                            </button>
                            {editando && (
                                <button
                                    onClick={cancelarEdicaoNome}
                                    className="bg-red-500 text-white font-semibold uppercase px-4 py-2 rounded-full shadow-m border-none"
                                >
                                    Cancelar
                                </button>
                            )}
                        </div>
                    </div>




                    {/* Gênero */}
                    <div className="flex flex-row border-solid border-red-500 rounded-full items-center px-8 mb-8 .border-0 p-0 grid grid-cols-1 h-15">
                        {editando4 ? (
                            <select
                                value={novoSexo}
                                onChange={(e) => alteraNovoSexo(e.target.value)}
                                className="bg-transparent text-lg font-semibold text-black"
                            >
                                <option value="">Selecione...</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Prefiro não me identificar">Prefiro não me identificar</option>
                            </select>
                        ) : (
                            <p className="text-lg font-semibold text-black">
                                <strong>{usuario.sexo}</strong>
                            </p>
                        )}

                        <div className="ml-auto flex gap-2 col-end-4">
                            <button
                                onClick={editando4 ? salvarSexo : manipulaEdicao4}
                                className={`${
                                    editando4
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                } text-white font-semibold uppercase px-4 py-2 rounded-full shadow-md border-none`}
                            >
                                {editando4 ? "Concluído" : "Alterar"}
                            </button>
                            {editando4 && (
                                <button
                                    onClick={cancelarEdicaoSexo}
                                    className="bg-red-500 text-white font-semibold uppercase px-4 py-2 rounded-full shadow-m border-none"
                                >
                                    Cancelar
                                </button>
                            )}
                        </div>
                    </div>



                    {/* Email */}
                    <div className="flex flex-row border-solid border-red-500 rounded-full items-center px-8 mb-8 .border-0 p-0 grid grid-cols-1 h-15">
                        {editando2 ? (
                            <input
                                type="email"
                                value={novoEmail}
                                onChange={(e) => alteraNovoEmail(e.target.value)}
                                className="bg-transparent text-lg font-semibold text-black"
                            />
                        ) : (
                            <p className="text-lg font-semibold text-black">
                                <strong>{usuario.email}</strong>
                            </p>
                        )}

                        <div className="ml-auto flex gap-2 col-end-4">
                            <button
                                onClick={editando2 ? salvarEmail : manipulaEdicao2}
                                className={`${
                                    editando2
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                } text-white font-semibold uppercase px-4 py-2 rounded-full shadow-md border-none ml-2`}
                            >
                                {editando2 ? "Concluído" : "Alterar"}
                            </button>
                            {editando2 && (
                                <button
                                    onClick={cancelarEdicaoEmail}
                                    className="bg-red-500 text-white font-semibold uppercase px-4 py-2 rounded-full shadow-m border-none"
                                >
                                    Cancelar
                                </button>
                            )}
                        </div>
                    </div>


                    {/* Telefone */}
                    <div className="flex flex-row border-solid border-red-500 rounded-full items-center px-8 mb-8 .border-0 p-0 grid grid-cols-1 h-15">
                        {editando3 ? (
                            <input
                                type="tel"
                                value={novoTelefone}
                                onChange={(e) => alteraNovoTelefone(e.target.value)}
                                className="bg-transparent text-lg font-semibold text-black"
                            />
                        ) : (
                            <p className="text-lg font-semibold text-black">
                                <strong>{usuario.telefone}</strong>
                            </p>
                        )}

                        <div className="ml-auto flex gap-2 col-end-4">
                            <button
                                onClick={editando3 ? salvarTelefone : manipulaEdicao3}
                                className={`${
                                    editando3
                                        ? "bg-green-500"
                                        : "bg-red-500"
                                } text-white font-semibold uppercase px-4 py-2 rounded-full shadow-md border-none`}
                            >
                                {editando3 ? "Concluído" : "Alterar"}
                            </button>
                            {editando3 && (
                                <button
                                    onClick={cancelarEdicaoTelefone}
                                    className="bg-red-500 text-white font-semibold uppercase px-4 py-2 rounded-full shadow-m border-none"
                                >
                                    Cancelar
                                </button>
                            )}
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