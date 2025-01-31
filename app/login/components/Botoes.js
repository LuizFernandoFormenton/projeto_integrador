function Botoes(attr) {
    return ( 
        <div>  
            <form> 
               <button className={"  text-white p-2 border-none rounded-lg bg-red-500 shadow-lg shadow-red-500/50 w-full "+attr.className} > {attr.botoes} </button>
           </form>
        </div>
     );
}

export default Botoes;