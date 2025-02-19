function Produtos (attr) {
return ( 
    <div>
    
        <div className=" border bg-red-700 w-fit text-center text-white p-2 mt-32 ml-12 rounded-lg  ">
            <img className="w-[300px]" src={"imagens/imagens_tela_inicial/"+attr.img}/>
             <h3 className="">{attr.nome}</h3>
            <p>R$ {attr.preco}</p>
             <button className="bg-white text-black w-full p-6 font-bold text-base border-none"> ADICIONAR AO CARRINHO</button>
        </div>
            
    </div>
);
}

export default Produtos;