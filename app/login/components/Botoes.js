function Botoes(attr) {
    return ( 
        <div>  
           
               <button onClick={()=>attr.Salvar()} className={"  text-white p-2 border-none rounded-lg bg-red-500 shadow-lg shadow-red-500/50 w-full "+attr.className} > {attr.botoes}   </button>
           
        </div>
     );
}

export default Botoes;