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

function calcularDesconto(preco) {
  let precoComDesconto = (preco - (preco * 10 / 100)).toFixed(2); 
  return precoComDesconto.toString().replace(".", ",");
}




return ( 
<div className="relative rounded-sm w-[320px] overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 ease-in-out mr-4 ">
      
    {/* Imagem do Produto */}
    <div>
      <img onClick={() => redirecionar()} 
      className="w-full h-auto cursor-pointer transition-transform duration-300 ease-out crescer-menos bg-[#E8E8E8]" 
      src={attr.produto.imagem}/>
    </div>

    {/* Informações do Produto */}
    <div className="pr-2 pl-2 relative bg-white ">

      {/* avaliação */}
      <div>
        <p>{attr.produto.avaliacao}</p>
      </div>

      {/* nome */}
      <div>
        <p className="uppercase text-sm font-bold tracking-wide font-serif">
        {attr.produto.nome}
        </p>
      </div>
      
      {/* Preço*/}
      <div className="flex flex-col items-start leading-tight gap-0">
        <p className="text-gray-500 line-through text-sm m-0 p-0">De R$ {attr.produto.preco.toString().replace(".", ",")}</p>
        <p className="text-green-600 font-bold text-xl m-0 p-0">Por R$ {calcularDesconto(attr.produto.preco)}</p>
      </div>

      {/* Tamanhos*/}
      <div>  
        <p>
          <span className="font-bold">Tamanho :</span> {attr.produto.tamanho}
        </p>
      </div>

      {/* Botão de Comprar */}

      <div>  
        <button
          onClick={() => {adicionarCarrinho(); window.location.href = "/carrinho";}}
          className="w-full cursor-pointer h-10 bg-green-600 text-white text-sm font-semibold rounded-full mb-2 border-none"> COMPRAR
        </button> 
      </div>

    </div>
</div>
);
}

export default Produtos;