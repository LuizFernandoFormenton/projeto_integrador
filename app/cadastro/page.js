'use client'
import { useState } from "react";
import Botoes from "../login/components/Botoes";
import InputPersonalizado from "../login/components/InputPersonalizado";
import axios from "axios";
import host from "../lib/host";

function Cadrasto () {

    // const [nome, AlteraNome] = useState("")
    // const [dataNascimento, AlteraDataNascimento] = useState("")
    // const [sexo, AlteraSexo] = useState("")
    // const [email, AlteraEmail] = useState("")
    // const [senha, AlteraSenha] = useState("")
    // const [cpf, AlteraCpf] = useState("")
    // const [telefone, AlteraTelefone] = useState("")
    // const [cep, AlteraCep] = useState("")

    const [usuario, AlteraUsuario] = useState([]);


    
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

    async function salvar(){
        
        if(usuario == 0){
            alert("Dados incorretos, tente novamente")
            return
        }
            
      
        if( usuario.nome.length < 5 ){
            alert("Nome muito curto, digite novamente...")
            return
        }

        if(usuario.dataNascimento == null){
            alert("Data de nascimento inválida")
            return
        }

        if(usuario.sexo == null){
            alert("Gênero inválido")
            return
        }

        if(usuario.email == null){
            alert("Email inválido")
            return
        }
        if(usuario.email.indexOf("@") == -1){
            alert("Email inválido")
            return
        }
        if(usuario.email.indexOf(".") == -1){
            alert("Email inválido")
            return
        }

        
            // Busca usuários existentes
            const resposta = await axios.get(host + "/usuarios");
            const usuariosExistentes = resposta.data;
    
            const emailJaExiste = usuariosExistentes.some(u => u.email === usuario.email);
            const cpfJaExiste = usuariosExistentes.some(u => u.cpf === usuario.cpf);
    
            if (emailJaExiste) {
                alert("Este e-mail já está cadastrado");
                return;
            }
    
            if (cpfJaExiste) {
                alert("Este CPF já está cadastrado");
                return;
            }

        if( usuario.senha == null || usuario.senha.length < 3){
            alert("Senha muito curta")
            return
        }

        if(usuario.cpf == null || usuario.cpf.length != 11){
            alert("CPF inválido, insira com 11 dígitos")
            return
        }

        if(usuario.telefone == null || usuario.telefone.length < 5){
            alert("Telefone inválido")
            return
        }

        if(usuario.cep == null || usuario.cep.length != 9){
            alert("CEP Inválido, insira com 9 digitos")
            return
        }

        axios.post(host + '/usuarios', {
            nome: usuario.nome,
            data_nascimento: usuario.dataNascimento,
            genero: usuario.sexo,
            email: usuario.email,
            senha: usuario.senha,
            cpf: usuario.cpf,
            telefone: usuario.telefone,
            cep: usuario.cep

          })
          .then((resposta) => {
            console.log('Usuário salvo com sucesso!', resposta.data);
            alert("Usuário cadastrado com sucesso!");
            window.location.href = "/login"
          })
          .catch((erro) => {
            console.error('Erro ao salvar:', erro);
            alert("Erro ao cadastrar usuário... verifique o backend");
          });

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
                    <InputPersonalizado label= "Data de nascimento" AlteraValor = {AlteraDataNascimento} type={"date"} />
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