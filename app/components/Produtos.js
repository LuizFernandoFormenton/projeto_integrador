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
<div>
    <img onClick={()=>redirecionar()}  className="w-[300px] bg-[#E8E8E8] mr-6 cursor-pointer -mb-3" src={"imagens/imagens_tela_inicial/"+attr.produto.img}/>

    <div className="text-gray-700 ">
      <p className="uppercase text-sm font-light tracking-tighter  tracking-wide">
        {attr.produto.nome} 
      </p>
      <p className="font-bold text-xs"  onClick={()=> adicionarCarrinho()}  >
        {attr.produto.preco}
      </p>
    </div>
    
</div>
);
}

export default Produtos;