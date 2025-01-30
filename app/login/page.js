import Botoes from "./components/Botoes";
import InputPersonalizado from "./components/InputPersonalizado";

function Login () {
    return ( 
    <div className="justify-center flex" >

        <div>
            <h1> Login </h1>
            <hr/>
            
            <InputPersonalizado label=" E-mail" placeholder="Digite seu email: " />
            <InputPersonalizado label=" Senha " placeholder="Digite sua senha: " />
            
            
            <a href="#"> Esqueceu a sua senha? </a>

           <br/>

           <input type="checkbox" /> Lembrar-me

           <br/>

           <Botoes/>

           <p> Não tem uma conta? <a href="./cadastro.html"> Cadastra-se </a> </p>
           
        </div>
            

      </div>
     );
}

export default Login ;