'use client'
import { useState } from "react";
import Botoes from "../login/components/Botoes";
import InputPersonalizado from "../login/components/InputPersonalizado";

function Cadrasto () {

    const [nome, AlteraNome] = useState("")
    const [dataNascimento, AlteraDataNascimento] = useState("")
    const [sexo, AlteraSexo] = useState("")
    const [email, AlteraEmail] = useState("")
    const [senha, AlteraSenha] = useState("")
    const [cpf, AlteraCpf] = useState("")
    const [telefone, AlteraTelefone] = useState("")
    const [cep, AlteraCep] = useState("")

    const [erroNome, alteraErroNome] = useState(false);

    function salvar(){

        console.log("O nome cadastrado é:" + nome)
        console.log("Sua data de nascimento é:" + dataNascimento)
        console.log("Seu sexo:" + sexo)
        console.log("Email:" + email)
        console.log("Senha:" + senha)
        console.log("CPF:" + cpf)
        console.log("Telefone:" + telefone)
        console.log("CEP:" + cep)

        if( nome.length < 5 ){
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