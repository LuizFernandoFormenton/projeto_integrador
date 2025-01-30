function usuário () {
    return ( 
    <div>
        <div>
            <h1 className="text-red-600 text-3xl">Meu Perfil</h1>
            <p><strong>Dados do Usuário</strong></p>
            <hr/>
            <img width="50" height="50" src="https://placehold.co/500"></img>
            <br/>
        </div>
       
    
    
        <h1>Login*</h1>
        <input type="email" placeholder="Digite seu email"></input>
        <button>Alterar sua senha</button>
        <br/>


        <p><strong>Nome*</strong></p>
        <input type="text" placeholder="Digite seu nome"></input>
        <input readonly type="datetime-local" placeholder=""></input>
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

export default usuário ;