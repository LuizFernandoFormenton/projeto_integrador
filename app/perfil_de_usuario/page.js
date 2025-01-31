function components () {
    return ( 
    <div className=" justify-center flex my-24">
        <div className="justify-items-center w-48 rounded-xl shadow-md p-8 ring-red-1000 ">

    
            <h1 className="text-red-600 text-3xl">Meu Perfil</h1>

      
        <div className="flex gap-5 flex text-center">
            <img width="100" height="100" src="https://placehold.co/1000" className="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50% items-center"></img>

        </div>    
                
        <div className="text-center">

             <p><strong>Nome</strong></p>
            <input type="text" placeholder="Digite seu nome"></input>
        </div>
        


        <p><strong>Telefone</strong></p>
        <input type="number" placeholder="Digite seu telefone"></input>
        <br/>
        <br/>
        <input type="number" placeholder="Digite seu CPF"></input>
        <br/>
        <br/>
        <button>Salvar</button>
        <br/>

        </div>

    </div>
     );
}

export default components ;