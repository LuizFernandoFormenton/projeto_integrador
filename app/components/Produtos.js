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
      
  {/* Imagem do Produto */}
  <img 
    onClick={() => redirecionar()} 
    className="w-full h-auto cursor-pointer transition-transform duration-300 ease-out crescer-menos " 
    src={"imagens/imagens_tela_inicial/" + attr.produto.img} 
  />

  {/* Informações do Produto */}
  <div className="p-4 text-gray-700 relative group">
    <p className="uppercase text-sm font-light tracking-wide">
      {attr.produto.nome} 
    </p>

    {/* Preço do Produto (onde o botão será ativado no hover) */}
    <p className="font-bold text-md cursor-pointer relative group">
      R$ {attr.produto.preco}
    </p>

    <p>{attr.produto.avaliacao}</p>

    {/* Botão de Comprar que aparece no Hover */}
    <button 
      onClick={() => adicionarCarrinho()}  
      className="absolute bottom-0 left-0 w-full h-12 bg-green-600 text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      COMPRAR
    </button>
  </div>

</div>
);
}

export default Produtos;