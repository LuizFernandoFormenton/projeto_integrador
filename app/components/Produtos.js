import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Produtos (attr) {

  
function redirecionar (){
    window.location.href="produto/"+attr.produto.id
}

function adicionarCarrinho(){
  if(localStorage.getItem ("carrinho") == null ){
      const carrinho = [attr.produto]
      localStorage.setItem("carrinho", JSON.stringify(carrinho)) 
  }else{
      let carrinho = localStorage.getItem ("carrinho")
      carrinho = JSON.parse(carrinho)
      carrinho.push(attr.produto)
      carrinho = JSON.stringify (carrinho)
      localStorage.setItem("carrinho", carrinho)
  }

}


return ( 
<div className="relative w-[300px] overflow-hidden bg-[#E8E8E8] rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-500 ease-in-out mr-4">
  
    <img onClick={()=>redirecionar()}  
    className= "w-full h-auto cursor-pointer transition-transform duration-500 ease-in-out hover:scale-110 " 
    src={"imagens/imagens_tela_inicial/"+attr.produto.img}
    />

    <div className="text-gray-700 mt-2 p-2">
      <p className="uppercase text-sm font-light tracking-wide">
        {attr.produto.nome} 
      </p>
      <p className="font-bold text-xs cursor-pointer"  onClick={()=> adicionarCarrinho()}  >
        {attr.produto.preco}
      </p>
    </div>
    
</div>
);
}

export default Produtos;