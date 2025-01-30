
import Perfil from "./components/Perfil";
import Login from "../login/page";

function components () {
    return ( 
    <div>
        <Perfil/>
        <Login/>
       


        <p><strong>Nome*</strong></p>
        <input type="text" placeholder="Digite seu nome"></input>
        <input readOnly type="datetime-local" placeholder=""></input>
        <br/>

        <p><strong>Telefone*</strong></p>
        <input type="number" placeholder="Digite seu telefone"></input>
        <input type="number" placeholder="Digite seu celular"></input>
        <br/>
        <br/>
        <button>Salvar</button>
        <br/>
        <hr/>

        <h1>Historico de Compras*</h1>

        <p><strong>Boné Dad Hat Court Sports</strong></p>
        <p>Cor: <strong>Azul</strong></p>
        <p>Tamanho: <strong>U</strong></p>
        <img width="50" height="50" src="https://placehold.co/500"></img>

    </div>
     );
}

export default components ;