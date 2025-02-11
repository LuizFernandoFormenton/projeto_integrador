'use client'
import { useState } from "react";
import Botoes from "../login/components/Botoes";
import InputPersonalizado from "../login/components/InputPersonalizado";

function Cadrasto () {

    // const [nome, AlteraNome] = useState("")
    // const [dataNascimento, AlteraDataNascimento] = useState("")
    // const [sexo, AlteraSexo] = useState("")
    // const [email, AlteraEmail] = useState("")
    // const [senha, AlteraSenha] = useState("")
    // const [cpf, AlteraCpf] = useState("")
    // const [telefone, AlteraTelefone] = useState("")
    // const [cep, AlteraCep] = useState("")

    const [usuario, AlteraUsuario] = useState({
        nome: "",
        dataNascimento: "",
        sexo: "",
        email: "",
        senha: "",
        telefone: "",
        cep: ""
    })

    function AlteraNome(pnome){
        const u = {
            nome: pnome,
            dataNascimento: usuario.dataNascimento,
            sexo: usuario.sexo,
            email: usuario.email,
            senha: usuario.senha,
            telefone: usuario.telefone,
            cep: usuario.cep
        }

        AlteraUsuario(u)
    }
    
    function AlteraSenha(pdatanascimento){
        const u = {
            nome: usuario.nome,
            dataNascimento: pdatanascimento,
            sexo: usuario.sexo,
            email: usuario.email,
            senha: usuario.senha,
            telefone: usuario.telefone,
            cep: usuario.cep
        }

        AlteraUsuario(u)
    }

    function AlteraNome(psexo){
        const u = {
            nome: usuario.nome,
            dataNascimento: usuario.dataNascimento,
            sexo: psexo,
            email: usuario.email,
            senha: usuario.senha,
            telefone: usuario.telefone,
            cep: usuario.cep
        }

        AlteraUsuario(u)
    }

    function AlteraNome(pemail){
        const u = {
            nome: usuario.nome,
            dataNascimento: usuario.dataNascimento,
            sexo: usuario.sexo,
            email: pemail,
            senha: usuario.senha,
            telefone: usuario.telefone,
            cep: usuario.cep
        }

        AlteraUsuario(u)
    }

    function AlteraNome(psenha){
        const u = {
            nome: usuario.nome,
            dataNascimento: usuario.dataNascimento,
            sexo: usuario.sexo,
            email: usuario.email,
            senha: psenha,
            telefone: usuario.telefone,
            cep: usuario.cep
        }

        AlteraUsuario(u)
    }

    function AlteraNome(ptelefone){
        const u = {
            nome: usuario.nome,
            dataNascimento: usuario.dataNascimento,
            sexo: usuario.sexo,
            email: usuario.email,
            senha: usuario.senha,
            telefone: ptelefone,
            cep: usuario.cep
        }

        AlteraUsuario(u)
    }

    function AlteraNome(pcep){
        const u = {
            nome: usuario.nome,
            dataNascimento: usuario.dataNascimento,
            sexo: usuario.sexo,
            email: usuario.email,
            senha: usuario.senha,
            telefone: usuario.telefone,
            cep: pcep
        }

        AlteraUsuario(u)
    }

    const [erroNome, alteraErroNome] = useState(false);

    function salvar(){

        console.log("O nome cadastrado é:" + usuario.nome)
        console.log("Sua data de nascimento é:" + usuario.dataNascimento)
        console.log("Seu sexo:" + usuario.sexo)
        console.log("Email:" + usuario.email)
        console.log("Senha:" + usuario.senha)
        console.log("CPF:" + usuario.cpf)
        console.log("Telefone:" + usuario.telefone)
        console.log("CEP:" + usuario.cep)

        if( usuario.nome.length < 5 ){
            alteraErroNome(true);
        }else{
            alteraErroNome(false)
        }
    }





    return ( 
        <div className="justify-center flex">
            
            <div className=" rounded-lg p-10 shadow-[0px_0px_30px] shadow-gray-200 " >     
            {/* <div className="rounded-lg p-10 outline-outline-gray-100 border-red-500 shadow-[3px_3px_5px] shadow-[#CCC] mt-10"/>      */}
                    <h1 className=" text-center " > Cadastre-se </h1>

                    <hr/>

                    {
                erroNome == true ?

                <div className="bg-red-500 texg-white" >
                  <p> O nome deve ter pelomenos 5 caracteres </p>
                </div>
                :
                    
                    <div></div>
            }
                    

                    
                    <InputPersonalizado label= "Nome completo" AlteraValor={AlteraNome} />
                    <InputPersonalizado label= "Data de nascimento" AlteraValor={AlteraDataNascimento} />
                    <InputPersonalizado label= "Sexo" AlteraValor={AlteraSexo} />
                    <InputPersonalizado label= "E-mail" AlteraValor={AlteraEmail}/>
                    <InputPersonalizado label= "Senha" AlteraValor={AlteraSenha}/>
                    <InputPersonalizado label= "CPF" AlteraValor={AlteraCpf}/>
                    <InputPersonalizado label= "Telefone" AlteraValor={AlteraTelefone} />    
                    <InputPersonalizado label= "CEP" AlteraValor={AlteraCep} />
                    
                    
                    {/* <button onClick={()=>salvar()} className="p-3 mt-5 bg-lime-500 text-white" > Salvar </button> */}
                     <Botoes botoes = "Concluído" Salvar={salvar} /> 
            </div>
            

        </div>
     );
}

export default Cadrasto ;