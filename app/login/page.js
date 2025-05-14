'use client'
import { useState, useEffect } from "react";
import axios from 'axios';
import Botoes from "./components/Botoes";
import InputPersonalizado from "./components/InputPersonalizado";

function Login () {

    const [email, AlteraEmail] = useState("")
    const [senha, AlteraSenha] = useState("")

    const [usuario, AlteraUsuario] = useState([]);
    
    async function buscaTodos(){
        const response = await axios.get("http://localhost:4000/usuarios")
        console.log(response.data)
        AlteraUsuario(response.data)
    }


    useEffect( ()=> {
        buscaTodos();
    }, [] )


    const [erroSenha, alteraErroSenha] = useState(false);
    const [erroUsuario, alteraErroUsuario] = useState(false)

    function salvar(){

        let fazendeiro = false

        usuario.map ((i)=>
        {
            if (email == i.email && senha == i.senha ){
                console.log("Usuario encontrado!")
                usuario.senha = ""
                usuario.cep = ""
                usuario.cpf = ""
                localStorage.setItem( "usuario", JSON.stringify(i) )
                fazendeiro = true
            }
        }
        )

        if(fazendeiro == false){
            alteraErroUsuario(true)
            console.log("Usuário não econtrado")
        }else{
            
        }
        
        if( senha == "" ){
            alteraErroSenha(true);
        }else{
            alteraErroSenha(false)
        }
    }


    return ( 
    <div className=" flex items-center justify-center h-screen  " >

        <div className=" rounded-lg p-10 shadow-[0px_0px_30px] shadow-gray-200"  >
            <h1 className="text-center font-sans text-red-500 " > Login </h1>

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
            {
                erroUsuario == true ?

                <div className="bg-red-500 texg-white" >
                  <p> Usuário não encontrado </p>
                </div>
                :
                    
                    <div></div>
            }
            <InputPersonalizado type="password" label=" Senha " AlteraValor={AlteraSenha}/>
            
            
            <a  href="#" > Esqueceu sua senha? </a>

           <br/>

           <input type="checkbox" /> Lembrar-me

           <br/>

           <Botoes botoes="Entrar" Salvar={salvar} />

           <p className="text-center" > Não tem uma conta? <a href="./cadastro"> Cadastre-se </a> </p>
           
        </div>
            

      </div>
     );
}

export default Login ;