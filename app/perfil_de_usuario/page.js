'use client'
import axios from 'axios';
import Compra from "./Compra";
import { useEffect, useState } from "react";


function components () {
    const [usuario, alteraUsuario] = useState({
        id: 11,
        nome: "Mariana Santos",
        dataNascimento: "09/04/2002",
        sexo: "Feminino",
        email: "mariana.santos@gmail.com",
        senha: "mariana2002",
        cpf: "568.943.220-11",
        telefone: "61 99123-4567",
        cep: "72540-270"
    });

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
            telefone: novoSexo
        });
        alteraEditando4(false);
    }

    function salvarCep(e) {
        e.preventDefault();
        alteraUsuario({
            ...usuario,
            telefone: novoCep
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

                <div className="text-center items-center gap-3">
                    {editando ? 
                        <input
                            className="mt-2 mb-2" 
                            type="text" 
                            placeholder="Digite seu nome" 
                            value={novoNome} 
                            onChange={(e) => alteraNovoNome(e.target.value)} 
                        /> : 
                        <p className="bg-gray-200 px-1 py-1.5 rounded text-lg font-semibold text-gray-800"><strong>{usuario.nome}</strong></p>
                    }
                    <button 
                        onClick={editando ? salvarNome : manipulaEdicao} 
                        className={`px-3 py-1 rounded-md crescer-menos border-none ${editando ? `bg-green-500 text-black` : `bg-red-700`} text-white`}
                    >
                        {editando ? <span>Concluído</span> : <span>Alterar</span>}
                    </button>
                    {editando && 
                        <button 
                            onClick={cancelarEdicaoNome} 
                            className="mt-3 bg-red-700 ml-2 px-3 py-1 rounded-md text-white crescer-menos border-none "
                        >
                            Cancelar
                        </button>
                    }



                    {editando4 ?
                        <input
                        className="mt-2 mb-2"
                        type=""
                        placeholder="Digite sua data de nascimento"
                        value={novoSexo}
                        onChange={(e) => alteraNovoSexo(e.target.value)}
                        /> :
                        <p className="bg-gray-200 px-1 py-1.5 rounded text-lg font-semibold text-gray-800"><strong>{usuario.sexo}</strong></p>
                    }
                    <button 
                        onClick={editando ? salvarSexo : manipulaEdicao4} 
                        className={`px-3 py-1 rounded-md crescer-menos border-none ${editando4 ? `bg-green-500 text-black` : `bg-red-700`} text-white`}
                    >
                        {editando ? <span>Concluído</span> : <span>Alterar</span>}
                    </button>
                    {editando && 
                        <button 
                            onClick={cancelarEdicaoSexo} 
                            className="mt-3 bg-red-700 ml-2 px-3 py-1 rounded-md text-white crescer-menos border-none "
                        >
                            Cancelar
                        </button>
                    }






                    {editando2 ? 
                        <input
                            className="mt-2 mb-2" 
                            type="email" 
                            placeholder="Digite seu email" 
                            value={novoEmail} 
                            onChange={(e) => alteraNovoEmail(e.target.value)} 
                        /> : 
                        <p className="bg-gray-200 px-1 py-1.5 rounded text-lg font-semibold text-gray-800"><strong>{usuario.email}</strong></p>
                    }
                    <button 
                        onClick={editando2 ? salvarEmail : manipulaEdicao2} 
                        className={`px-3 py-1 rounded-md crescer-menos border-none mb-2 ${editando2 ? `bg-green-500 text-black` : `bg-red-700`} text-white`}
                    >
                        {editando2 ? <span>Concluído</span> : <span>Alterar</span>}
                    </button>
                    {editando2 && 
                        <button 
                            onClick={cancelarEdicaoEmail} 
                            className="mt-3 bg-red-700 ml-2 px-3 py-1 rounded-md text-white crescer-menos border-none"
                        >
                            Cancelar
                        </button>
                    }





                    {editando3 ? 
                        <input 
                            className="mt-3" 
                            type="tel" 
                            placeholder="Digite seu telefone" 
                            value={novoTelefone} 
                            onChange={(e) => alteraNovoTelefone(e.target.value)} 
                        /> : 
                        <p><strong className="bg-gray-200 px-1 py-1.5 rounded text-lg font-semibold text-gray-800">{usuario.telefone}</strong></p>
                    }
                    {/* <p>{usuario.cpf}</p> */}
                    <button 
                        onClick={editando3 ? salvarTelefone : manipulaEdicao3} 
                        className={`px-3 py-1 rounded-md crescer-menos border-none mt-2 ${editando3 ? `bg-green-500 text-black` : `bg-red-700`} text-white`}
                    >
                        {editando3 ? <span>Concluído</span> : <span>Alterar</span>}
                    </button>
                    {editando3 && 
                        <button 
                            onClick={cancelarEdicaoTelefone} 
                            className="mt-3 bg-red-700 ml-2 px-3 py-1 rounded-md text-white crescer-menos border-none"
                        >
                            Cancelar
                        </button>
                    }
                </div>





                <div className="text-center items-center mr-2">
                    <button 
                        onClick={mostrarHistorico}  
                        className={`mt-5 px-3 py-1 rounded-md crescer-menos border-none ${historico ? `bg-green-500 text-black` : `bg-red-700`} ml-3 text-white`}
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
