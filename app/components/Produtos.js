function Produtos (attr) {

function redirecionar (){
    window.location.href="produto/"+attr.id
}

return ( 
<div>
    <img onClick={()=>redirecionar()}  className="w-[300px] bg-[#E8E8E8] mr-6 cursor-pointer -mb-3" src={"imagens/imagens_tela_inicial/"+attr.img}/>

    <div className="text-gray-700 ">
      <p className="uppercase text-sm font-light tracking-tighter  tracking-wide">
        {attr.nome}
      </p>
      <p className="font-bold text-xs">
        {attr.preco}
      </p>
    </div>
    
</div>
);
}

export default Produtos;