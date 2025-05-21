import { useState } from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";


function Produtos (attr) {
  const [produtos, alteraProdutos] = useState([]);

    
  function redirecionar (){
      window.location.href="produto/"+attr.produto.id
  }

function calcularDesconto(preco) {
  let precoComDesconto = (preco - (preco * 10 / 100)).toFixed(2); 
  return precoComDesconto.toString().replace(".", ",");
}

async function adicionarCarrinho(id){

  console.log("passo aqui")

    let id_carrinho = -1

    let carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho"));
    console.log(carrinhoSalvo)

    if (!carrinhoSalvo || carrinhoSalvo.id == undefined) {
      // Se não existir, cria um novo carrinho
      const usuario = JSON.parse(localStorage.getItem("usuario"));

      if (!usuario || !usuario.id) {
          window.location.href = "/login"; 
      } 

      const hoje = new Date().toISOString();

      const res = await axios.post(
          'http://localhost:4000/venda',
          {
              data: hoje ,
              usuario_id:  usuario.id
          }
      )


      console.log("passo aqui 2")
      console.log(res.data)
              

      console.log("passo aqui 3")
      // Salva no localStorage
      localStorage.setItem("carrinho", JSON.stringify(res.data));

      // Atribui o novo id_carrinho
      id_carrinho = res.data.id;
      console.log("Carrinho criado:", res.data);
      carrinhoSalvo =  res.data
    } 

    if( localStorage.getItem("produtos") != null ){
        let ps = JSON.parse( localStorage.getItem("produtos") )
        alteraProdutos( ps )
    }
    
    // Adiciona o novo produto
    alteraProdutos([...produtos, id] )

    // Salva novamente
    localStorage.setItem("produtos", JSON.stringify(produtos));

    // Atualiza o id_carrinho
    id_carrinho = carrinhoSalvo.id;
    console.log(id_carrinho)

    try {
      const response = await axios.post('http://localhost:4000/transacao', 
       {
          venda_id: id_carrinho,
          produto_id: id, 
          quantidade: 1, 
        }
      );

      console.log(response.data)

      
    } catch (err) {
      console.error(err);
      alert("Erro ao se conectar com o servidor");
    }

  }


return ( 
<div  className="relative rounded-sm w-[320px] overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 ease-in-out mr-4 ">
      <div onClick={() => redirecionar()}>
    {/* Imagem do Produto */}
    <div>
        <img  
        className="w-full h-auto cursor-pointer transition-transform duration-300 ease-out crescer-menos bg-[#E8E8E8]" 
        src={ attr.produto.imagem}/>
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
          <p className="text-green-600 font-bold text-xl m-0 p-0">Por R$ {calcularDesconto(attr.produto.preco, attr.produto.desconto)}</p>
        </div>

        {/* Tamanhos*/}
        <div>  
          <p>
            <span className="font-bold">Tamanho :</span> {attr.produto.tamanho}
          </p>
        </div>

        

      </div>
      
      </div>
      {/* Botão de Comprar */}

        <div>  
          <button
            onClick={() => {adicionarCarrinho(attr.produto.id)}}
            className="w-full cursor-pointer h-10 bg-green-600 text-white text-sm font-semibold rounded-full mb-2 border-none"> COMPRAR
          </button> 
        </div>
  </div>
  );
}

export default Produtos;