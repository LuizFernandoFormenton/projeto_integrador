'use client'
import { useState } from "react";
import Botoes from "./components/Botoes";
import InputPersonalizado from "./components/InputPersonalizado";

function Login () {

    const [email, AlteraEmail] = useState("")
    const [senha, AlteraSenha] = useState("")

    const [usuario, AlteraUsuario] = useState([
        {
            id: 0,
            nome: "Luiz Fernando",
            dataNascimento: "06/10/2004",
            sexo: "Masculino",
            email: "luizfernando@gmail.com",
            senha: "senac123",
            cpf: "894.125-258-98",
            telefone: "21 99825-2541",
            cep: "13573-526"
        },
        {
            id: 1,
            nome: "Ana Clara Silva",
            dataNascimento: "15/02/1998",
            sexo: "Feminino",
            email: "anaclara.silva@hotmail.com",
            senha: "anaClara98",
            cpf: "345.987.456-12",
            telefone: "11 98876-5483",
            cep: "02245-330"
        },
        {
            id: 2,
            nome: "Carlos Eduardo",
            dataNascimento: "03/04/1995",
            sexo: "Masculino",
            email: "carlos.eduardo@gmail.com",
            senha: "carlito95",
            cpf: "123.456.789-01",
            telefone: "31 98765-1234",
            cep: "30123-050"
        },
        {
            id: 3,
            nome: "Juliana Rocha",
            dataNascimento: "10/09/1991",
            sexo: "Feminino",
            email: "julianaroch@outlook.com",
            senha: "juliana1991",
            cpf: "893.217.748-96",
            telefone: "21 99874-7689",
            cep: "23020-040"
        },
        {
            id: 4,
            nome: "Rodrigo Souza",
            dataNascimento: "22/11/1989",
            sexo: "Masculino",
            email: "rodrigo.souza@yahoo.com",
            senha: "rodrigomax89",
            cpf: "672.185.932-07",
            telefone: "41 99223-6578",
            cep: "82040-100"
        },
        {
            id: 5,
            nome: "Beatriz Lima",
            dataNascimento: "18/07/2000",
            sexo: "Feminino",
            email: "beatriz.lima@gmail.com",
            senha: "beatriz2020",
            cpf: "769.248.567-11",
            telefone: "51 99981-2468",
            cep: "90230-060"
        },
        {
            id: 6,
            nome: "Lucas Pereira",
            dataNascimento: "28/03/1997",
            sexo: "Masculino",
            email: "lucas.pereira@hotmail.com",
            senha: "lucas97p",
            cpf: "234.567.890-12",
            telefone: "21 97653-4312",
            cep: "25015-050"
        },
        {
            id: 7,
            nome: "Sofia Martins",
            dataNascimento: "05/06/1993",
            sexo: "Feminino",
            email: "sofia.martins@aol.com",
            senha: "sofia93martins",
            cpf: "546.738.921-56",
            telefone: "61 98987-1234",
            cep: "70730-060"
        },
        {
            id: 8,
            nome: "Ricardo Alves",
            dataNascimento: "17/01/1985",
            sexo: "Masculino",
            email: "ricardo.alves@gmail.com",
            senha: "ricardo85alves",
            cpf: "674.125.984-02",
            telefone: "11 99847-8901",
            cep: "04056-120"
        },
        {
            id: 9,
            nome: "Fernanda Costa",
            dataNascimento: "12/08/1994",
            sexo: "Feminino",
            email: "fernanda.costa@outlook.com",
            senha: "fefehcosta94",
            cpf: "999.548.412-65",
            telefone: "31 99658-3467",
            cep: "30350-150"
        },
        {
            id: 10,
            nome: "Gustavo Oliveira",
            dataNascimento: "23/11/1988",
            sexo: "Masculino",
            email: "gustavo.oliveira@hotmail.com",
            senha: "gustavo88oliveira",
            cpf: "389.485.710-87",
            telefone: "21 93467-2901",
            cep: "22775-350"
        },
        {
            id: 11,
            nome: "Mariana Santos",
            dataNascimento: "09/04/2002",
            sexo: "Feminino",
            email: "mariana.santos@gmail.com",
            senha: "mariana2002",
            cpf: "568.943.220-11",
            telefone: "61 99123-4567",
            cep: "72540-270"
        },
        {
            id: 12,
            nome: "Felipe Barbosa",
            dataNascimento: "11/12/1999",
            sexo: "Masculino",
            email: "felipe.barbosa@outlook.com",
            senha: "felipe99barbosa",
            cpf: "759.201.306-45",
            telefone: "11 96235-9782",
            cep: "04612-250"
        },
        {
            id: 13,
            nome: "Isabela Almeida",
            dataNascimento: "22/01/2001",
            sexo: "Feminino",
            email: "isabela.almeida@gmail.com",
            senha: "isabela2021",
            cpf: "852.741.369-58",
            telefone: "21 94567-8123",
            cep: "23070-010"
        },
        {
            id: 14,
            nome: "André Costa",
            dataNascimento: "30/10/1992",
            sexo: "Masculino",
            email: "andre.costa@gmail.com",
            senha: "andre92costa",
            cpf: "612.536.784-91",
            telefone: "41 99123-6754",
            cep: "80010-000"
        }
    ]);

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