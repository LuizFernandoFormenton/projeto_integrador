import { useState } from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import host from "@/app/lib/host";
import AdicionarSacola from "../produto/components/AdicionarSacola"; // Importe o componente

function Produtos(attr) {
  const [produtos, alteraProdutos] = useState([]);

  function redirecionar() {
    window.location.href = "produto/" + attr.produto.id;
  }

  function calcularDesconto(preco) {
    let precoComDesconto = (preco - (preco * 10 / 100)).toFixed(2);
    return precoComDesconto.toString().replace(".", ",");
  }

  return (
    <div className="relative rounded-sm w-[320px] overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 ease-in-out mr-4 ">
      <div onClick={() => redirecionar()}>
        <div>
          <img
            className="w-full h-auto cursor-pointer transition-transform duration-300 ease-out crescer-menos bg-[#E8E8E8]"
            src={attr.produto.imagem}
            alt={attr.produto.nome}
          />
        </div>

        <div className="pr-2 pl-2 relative bg-white ">
          <div>
            <p>{attr.produto.avaliacao}</p>
          </div>

          <div>
            <p className="uppercase text-sm font-bold tracking-wide font-serif">
              {attr.produto.nome}
            </p>
          </div>

          <div className="flex flex-col items-start leading-tight gap-0">
            <p className="text-gray-500 line-through text-sm m-0 p-0">De R$ {attr.produto.preco.toString().replace(".", ",")}</p>
            <p className="text-green-600 font-bold text-xl m-0 p-0">Por R$ {calcularDesconto(attr.produto.preco, attr.produto.desconto)}</p>
          </div>

          <div>
            <p>
              <span className="font-bold">Tamanho :</span> {attr.produto.tamanho}
            </p>
          </div>
        </div>
      </div>

      {/* Usando o componente AdicionarSacola */}
      <AdicionarSacola produtoId={attr.produto.id} />
    </div>
  );
}

export default Produtos;