'use client'

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from 'axios';
import Botoes from "./components/Botoes";
import InputPersonalizado from "./components/InputPersonalizado";
import host from "../lib/host";

function Login () {
    const searchParams = useSearchParams();
    const msg = searchParams.get("msg");

    const [email, AlteraEmail] = useState("")
    const [senha, AlteraSenha] = useState("")
    const [usuario, AlteraUsuario] = useState([]);
    
    const [erroSenha, alteraErroSenha] = useState(false);
    const [erroUsuario, alteraErroUsuario] = useState(false);
    const [mostrarSenha, setMostrarSenha] = useState(false); // controle do olho

    async function buscaTodos() {
        const response = await axios.get(host + "/usuarios")
        console.log(response.data)
        AlteraUsuario(response.data)
    }

    useEffect(() => {
        buscaTodos();
    }, [])

    function salvar() {
        let fazendeiro = false

        usuario.map((i) => {
            if (email == i.email && senha == i.senha) {
                console.log("Usuario encontrado!")
                usuario.senha = ""
                localStorage.setItem("usuario", JSON.stringify(i))
                fazendeiro = true
            }
        })

        if (!fazendeiro) {
            alteraErroUsuario(true)
            console.log("Usuário não encontrado")
        } else {
            alteraErroUsuario(false)
            console.log("Login realizado com sucesso")
            window.location.href = "/"
        }

        if (senha === "") {
            alteraErroSenha(true);
        } else {
            alteraErroSenha(false)
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className="rounded-lg p-10 shadow-[0px_0px_30px] shadow-gray-200 w-full max-w-sm">
                <h1 className="text-center font-sans text-red-500 mb-4">Login</h1>
                <hr className="mb-4" />

                {/* Mensagem da query string */}
                {msg && (
                    <div className="bg-red-500 text-white p-3 rounded mb-4 text-center">
                        {msg}
                    </div>
                )}

                {/* Formulário que ativa o salvar ao apertar Enter */}
                <form onSubmit={(e) => {
                    e.preventDefault();
                    salvar();
                }}>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block mb-1 text-gray-700">E-mail</label>
                        <input
                            type="email"
                            onChange={(e) => AlteraEmail(e.target.value)}
                            className="border border-black p-2 w-full rounded"
                            placeholder="E-mail"
                        />
                    </div>

                    {/* Senha */}
                    <div className="mb-4">
                        <label className=" block mb-1 text-gray-700">Senha</label>
                        <div className="relative">
                            <input
                                type={mostrarSenha ? "text" : "password"}
                                onChange={(e) => AlteraSenha(e.target.value)}
                                className="border border-black p-2 w-full rounded"
                                placeholder="Senha"
                            />
                            <button
                                type="button"
                                onClick={() => setMostrarSenha(!mostrarSenha)}
                                className="absolute right-[-14px] top-1/4 -translate-y-1/2 text-gray-600 bg-transparent border-none p-0 m-0 cursor-pointer"
                                style={{ outline: "none", boxShadow: "none" }}
                            ></button>
                        </div>
                    </div>

                    {/* Mensagens de erro */}
                    {erroSenha && (
                        <div className="text-red-500 rounded my-2">
                            <p>Por favor digite sua senha!</p>
                        </div>
                    )}
                    {erroUsuario && (
                        <div className="text-red-500 rounded my-2">
                            <p>Usuário não encontrado!</p>
                        </div>
                    )}

                    {/* Botão */}
                    <Botoes botoes="Entrar" Salvar={salvar} />
                </form>

                {/* Cadastro */}
                <p className="text-center mt-4">
                    Não tem uma conta? <a href="./cadastro" className="text-purple-600">Cadastre-se</a>
                </p>
            </div>
        </div>
    );
}

export default Login;