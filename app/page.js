'use client'
import Image from "next/image";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import axios from "axios";
import { useState, useEffect } from "react";
import Produtos from "./components/Produtos";
import host from "./lib/host";

export default function Home() {
  const [ precoProduto, alteraPreco] = useState(25);
  const [produtos, alteraProdutos] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // Estado para o termo de busca
  const [searchResults, setSearchResults] = useState([]); // Estado para os resultados da busca
  const [noResults, setNoResults] = useState(false); // Estado para indicar se não foram encontrados resultados
  const [approximateResults, setApproximateResults] = useState(false); // Estado para indicar se há resultados aproximados

  async function buscarCamisas(){
    const response = await axios.get(host + '/produtos')
    console.log(response.data)
    alteraProdutos(response.data)
    setSearchResults(response.data); // Inicializa os resultados com todos os produtos
  }

  useEffect (()=>{
    buscarCamisas()
  }, [])

  // Função para atualizar os resultados da busca
  const handleSearch = (term) => {
    setSearchTerm(term);
    setNoResults(false); // Reseta o estado de "nenhum produto encontrado"
    setApproximateResults(false); // Reseta o estado de "resultados aproximados"

    if (term) {
      const results = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);

      if (results.length === 0) {
        setNoResults(true); // Define o estado de "nenhum produto encontrado" como verdadeiro

        // Verifica se há resultados aproximados
        const approximate = produtos.filter(produto =>
          produto.nome.toLowerCase().startsWith(term.toLowerCase().substring(0, 3)) // Busca por produtos que começam com as 3 primeiras letras do termo de busca
        );

        if (approximate.length > 0) {
          setApproximateResults(true); // Define o estado de "resultados aproximados" como verdadeiro
          setSearchResults(approximate); // Exibe os resultados aproximados
        }
      }
    } else {
      setSearchResults(produtos);
      setNoResults(false);
      setApproximateResults(false);
    }
  };

  return (
    <>
      <Cabecalho produtos={produtos} onSearch={handleSearch} />
      <div className="flex flex-wrap justify-center gap-6 px-6 py-10 ml-4">
        {noResults ? (
          <p>Nenhum produto encontrado.</p>
        ) : approximateResults ? (
          <p>Produto digitado aproximadamente correto:</p>
        ) : (
          searchResults.map( (i)=> (
            <Produtos key= {i.id}  produto = {i} />
          ))
        )}
      </div>
    </>
  );
}