import Botoes from "./components/Botoes";
import InputPersonalizado from "./components/InputPersonalizado";

function Login () {
    return ( 
    <div className=" flex items-center justify-center h-screen  " >

        <div className=" rounded-lg p-10 shadow-[0px_0px_30px] shadow-gray-200"  >
            <h1 className="text-center" > Login </h1>

            <hr/>
            
            <InputPersonalizado label=" E-mail" />
            <InputPersonalizado label=" Senha " />
            
            
            <a  href="#" > Esqueceu sua senha? </a>

           <br/>

           <input type="checkbox" /> Lembrar-me

           <br/>

           <Botoes botoes="Entrar" />

           <p className="text-center" > Não tem uma conta? <a href="./cadastro.html"> Cadastra-se </a> </p>
           
        </div>
            

      </div>
     );
}

export default Login ;