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
    
    function AlteraNome(pnome){
        const u = {
            nome: pnome,
            dataNascimento: usuario.dataNascimento,
            sexo: usuario.sexo,
            email: usuario.email,
            senha: usuario.senha,
            cpf: usuario.cpf,
            telefone: usuario.telefone,
            cep: usuario.cep
        }

        AlteraUsuario(u)
    }
    
    function AlteraDataNascimento(pdatanascimento){
        const u = {
            nome: usuario.nome,
            dataNascimento: pdatanascimento,
            sexo: usuario.sexo,
            email: usuario.email,
            senha: usuario.senha,
            cpf: usuario.cpf,
            telefone: usuario.telefone,
            cep: usuario.cep
        }

        AlteraUsuario(u)
    }

    function AlteraSexo(psexo){
        const u = {
            nome: usuario.nome,
            dataNascimento: usuario.dataNascimento,
            sexo: psexo,
            email: usuario.email,
            senha: usuario.senha,
            cpf: usuario.cpf,
            telefone: usuario.telefone,
            cep: usuario.cep
        }

        AlteraUsuario(u)
    }

    function AlteraEmail(pemail){
        const u = {
            nome: usuario.nome,
            dataNascimento: usuario.dataNascimento,
            sexo: usuario.sexo,
            email: pemail,
            senha: usuario.senha,
            cpf: usuario.cpf,
            telefone: usuario.telefone,
            cep: usuario.cep
        }

        AlteraUsuario(u)
    }

    function AlteraSenha(psenha){
        const u = {
            nome: usuario.nome,
            dataNascimento: usuario.dataNascimento,
            sexo: usuario.sexo,
            email: usuario.email,
            senha: psenha,
            cpf: usuario.cpf,
            telefone: usuario.telefone,
            cep: usuario.cep
        }

        AlteraUsuario(u)
    }

    function AlteraTelefone(ptelefone){
        const u = {
            nome: usuario.nome,
            dataNascimento: usuario.dataNascimento,
            sexo: usuario.sexo,
            email: usuario.email,
            senha: usuario.senha,
            cpf: usuario.cpf,
            telefone: ptelefone,
            cep: usuario.cep
        }

        AlteraUsuario(u)
    }

    function AlteraCep(pcep){
        const u = {
            nome: usuario.nome,
            dataNascimento: usuario.dataNascimento,
            sexo: usuario.sexo,
            email: usuario.email,
            senha: usuario.senha,
            cpf: usuario.cpf,
            telefone: usuario.telefone,
            cep: pcep
        }

        AlteraUsuario(u)
    }
    function AlteraCpf(pcpf){
        const u = {
            nome: usuario.nome,
            dataNascimento: usuario.dataNascimento,
            sexo: usuario.sexo,
            email: usuario.email,
            senha: usuario.senha,
            cpf: pcpf,
            telefone: usuario.telefone,
            cep: usuario.cep
        }

        AlteraUsuario(u)
    }

    const [erroNome, alteraErroNome] = useState(false);

    function salvar(){
        
        console.log("O nome cadastrado é: " + usuario.nome)
        console.log("Sua data de nascimento é: " + usuario.dataNascimento)
        console.log("Seu sexo: " + usuario.sexo)
        console.log("Email: " + usuario.email)
        console.log("Senha: " + usuario.senha)
        console.log("CPF: " + usuario.cpf)
        console.log("Telefone: " + usuario.telefone)
        console.log("CEP: " + usuario.cep)

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
                    <h1 className=" text-center font-sans text-red-500 " > Cadastre-se </h1>

                    <hr/>

                    {
                erroNome == true ?

                <div className="bg-red-500 texg-white" >
                  <p> O nome deve ter pelomenos 5 caracteres </p>
                </div>
                :
                    
                    <div></div>
            }
                    

                    
                    <InputPersonalizado label = "Nome completo" AlteraValor = {AlteraNome} />
                    <InputPersonalizado label= "Data de nascimento" AlteraValor = {AlteraDataNascimento} />
                    <InputPersonalizado label= "Sexo" AlteraValor = {AlteraSexo} />
                    <InputPersonalizado label= "E-mail" AlteraValor = {AlteraEmail}/>
                    <InputPersonalizado label= "Senha" AlteraValor = {AlteraSenha}/>
                    <InputPersonalizado label= "CPF" AlteraValor = {AlteraCpf}/>
                    <InputPersonalizado label= "Telefone" AlteraValor = {AlteraTelefone} />    
                    <InputPersonalizado label= "CEP" AlteraValor = {AlteraCep} />
                    
                    
                    {/* <button onClick={()=>salvar()} className="crescer bg-blue-500 transition duration-300 ease-in-out hover:bg-indigo-500" > Salvar </button> */}
                     <Botoes botoes = "Concluído" Salvar={salvar} /> 
            </div>
            

        </div>
     );
}

export default Cadrasto ;