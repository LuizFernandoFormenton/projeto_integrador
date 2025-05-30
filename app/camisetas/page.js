'use client'

import Produtos from '../components/Produtos';
import { useEffect, useState } from 'react';
import axios from 'axios';
import host from '../lib/host';

export default function Camisetas() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchCamisetas() {
      const response = await axios.get(host + '/produtos');
      const camisetas = response.data.filter(p => p.nome.toLowerCase().includes('camiseta'));
      setProdutos(camisetas);
    }
    fetchCamisetas();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Camisetas</h1>
      <div className="flex flex-wrap gap-6">
        {produtos.map(produto => (
          <Produtos key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}