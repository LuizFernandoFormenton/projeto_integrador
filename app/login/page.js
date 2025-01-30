function Login () {
    return ( 
    <div className="items-center flex" >
            <div>
            <h1> Login </h1>
            <hr/>
            <p> <label > E-mail </label> <br/> <input placeholder=" Digite o seu email..." /> </p>
            <p> <label > Senha </label> <br/> <input type="password" placeholder=" Digite a sua senha..." /> </p>
            <a href="#"> Esqueceu a sua senha? </a>

           <br/>

           <input type="checkbox" /> Lembrar-me

           <br/>

           <form> 
               <button> Entrar </button>
           </form>

           <p> Não tem uma conta? <a href="./cadastro.html"> Cadastra-se </a> </p>
            </div>
            

      </div>
     );
}

export default Login ;