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
<div className="relative rounded-sm w-[300px] overflow-hidden bg-[#E8E8E8] shadow-md hover:shadow-2xl transition-shadow duration-500 ease-in-out mr-4 ">
      
 {/* Imagem do Produto */}
 <div>
      <img 
        onClick={() => redirecionar()} 
        className="w-full h-auto cursor-pointer transition-transform duration-300 ease-out crescer-menos" 
        src={"imagens/imagens_tela_inicial/" + attr.produto.img} 
      />
    </div>

    {/* Informações do Produto */}
    <div className="pr-2 pl-2 relative bg-white">
      <p>{attr.produto.avaliacao}</p>
      <p className="uppercase text-sm font-bold tracking-wide font-serif">
        {attr.produto.nome} 
      </p>
      
      {/* Preço do Produto*/}
      <div>
        <p className="font-bold text-md relative group text-xl font-bold text-green-500"> 
          <span className="font-xs text-black"> de </span> R$ {attr.produto.preco}
        </p>
      </div>

      {/* Tamanhos Disponíveis */}
      <div>  
        <p className="">
          <span className="font-bold">Tamanhos disponíveis:</span> {attr.produto.tamanho}
        </p>
      </div>

      {/* Botão de Comprar */}
      <div className="mt-4">  
        <button
          onClick={() => adicionarCarrinho()}  
          className="w-full cursor-pointer h-12 bg-green-600 text-white text-sm font-semibold rounded-full mb-2"> COMPRAR
        </button>
      </div>
    </div>
</div>
);
}

export default Produtos;