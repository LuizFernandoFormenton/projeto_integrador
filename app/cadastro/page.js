function Cadrasto () {
    return ( 
        <div>
            <h1> Cadastra-se </h1>

            <hr/>

            <p> <label> Nome completo </label> <br/> <input/> </p>
            <p> <label> Data de nascimento </label> <br/> <input type="date"/> </p>
            <p> <label> Sexo </label> <br/> <input/> </p>
            <p> <label> E-mail </label> <br/> <input/> </p>
            <p> <label> Senha </label> <br/> <input type="password "/> </p>
            <p> <label> CPF </label> <br/> <input/> </p>
            <p> <label> Telefone </label> <br/> <input/> </p>
            <p> <label> CEP </label> <br/> <input/> </p>

            <form> 
               <button> Conlcuído </button>
            </form>

        </div>
     );
}

export default Cadrasto ;