'use client'
import { useState } from "react";
import Botoes from "./components/Botoes";
import InputPersonalizado from "./components/InputPersonalizado";

function Login () {

    const [email, AlteraEmail] = useState("")
    const [senha, AlteraSenha] = useState("")

    const [erroSenha, alteraErroSenha] = useState(false);

    function salvar(){
        console.log("Email:" + email)
        console.log("Senha:" + senha)
        
        if( senha == "" ){
            alteraErroSenha(true);
        }else{
            alteraErroSenha(false)
        }
    }


    return ( 
    <div className=" flex items-center justify-center h-screen  " >

        <div className=" rounded-lg p-10 shadow-[0px_0px_30px] shadow-gray-200"  >
            <h1 className="text-center" > Login </h1>

            <hr/>
            
            <InputPersonalizado label=" E-mail" AlteraValor={AlteraEmail} />
            {
                erroSenha == true ?

                <div className="bg-red-500 texg-white" >
                  <p> Por favor digite sua senha </p>
                </div>
                :
                    
                    <div></div>
            }
            <InputPersonalizado label=" Senha " AlteraValor={AlteraSenha}/>
            
            
            <a  href="#" > Esqueceu sua senha? </a>

           <br/>

           <input type="checkbox" /> Lembrar-me

           <br/>

           <Botoes botoes="Entrar" Salvar={salvar} />

           <p className="text-center" > Não tem uma conta? <a href="./cadastro.html"> Cadastre-se </a> </p>
           
        </div>
            

      </div>
     );
}

export default Login ;