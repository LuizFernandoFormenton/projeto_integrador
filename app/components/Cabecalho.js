'use client'

import { useEffect, useRef, useState } from "react";
import BarraLateral from "./BarraLateral";
import axios from "axios";
import host from "../lib/host";

function Cabecalho() {
    const [pesquisa, alteraPesquisa] = useState("");
    const [categoria, alteraCategoria] = useState([]);
    const [menuAberto, setMenuAberto] = useState(false);
    const [filtrosSelecionados, setFiltrosSelecionados] = useState({});
    const menuRef = useRef(null);
    const timeoutRef = useRef(null);

    async function buscaCategorias() {
        try {
            const res = await axios.get(host + '/categoria');
            alteraCategoria(res.data);
        } catch (error) {
            console.error("Erro ao buscar categorias:", error);
        }
    }

    useEffect(() => {
        buscaCategorias();
    }, []);

    function pesquisar(e) {
        e.preventDefault();
        console.log("Pesquisa é: " + pesquisa);
    }

    useEffect(() => {
        const menuElement = menuRef.current;

        const handleMouseEnter = () => {
            clearTimeout(timeoutRef.current);
            setMenuAberto(true);
        };

        const handleMouseLeave = () => {
            timeoutRef.current = setTimeout(() => {
                setMenuAberto(false);
            }, 300);
        };

        if (menuElement) {
            menuElement.addEventListener('mouseenter', handleMouseEnter);
            menuElement.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (menuElement) {
                menuElement.removeEventListener('mouseenter', handleMouseEnter);
                menuElement.removeEventListener('mouseleave', handleMouseLeave);
            }
            clearTimeout(timeoutRef.current);
        };
    }, []);

    function limparFiltros() {
        setFiltrosSelecionados({});
    }

    function toggleFiltro(id) {
        setFiltrosSelecionados(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    }

    return (
        <>
            <BarraLateral />
            <div style={{ background: "linear-gradient(to right, white, #e5e5e5)" }} className="flex h-20 w-full items-center fixed px-8 text-[15px] z-50 justify-between">
                <div className="flex items-center gap-20">
                    <img 
                        onClick={() => window.location.href="/"} 
                        className="w-20 cursor-pointer" 
                        src="https://i.postimg.cc/ydcx1CKX/logo.png" 
                        alt="Logo" 
                    />

                    <div className="relative" ref={menuRef}>
                        <button
                            className={`flex items-center gap-2 py-2 px-4 font-medium rounded-md shadow-sm transition-all duration-200
                                    ${menuAberto ? 'bg-black text-white' : 'bg-white text-gray-800 border border-gray-300 hover:bg-black hover:text-white'}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            FILTRAR
                        </button>

                        {menuAberto && (
                            <div
                                className="absolute top-full left-0 mt-2 w-60 max-h-64 overflow-y-auto rounded-md shadow-xl
                                        bg-white border border-gray-200 z-50"
                                onMouseEnter={() => clearTimeout(timeoutRef.current)}
                                onMouseLeave={() => timeoutRef.current = setTimeout(() => setMenuAberto(false), 300)}
                            >
                                <div className="p-4 border-b border-gray-200">
                                    <h3 className="font-semibold text-gray-800">Filtrar por:</h3>
                                </div>
                                <ul className="p-2 space-y-2 text-sm text-gray-800 list-none">
                                    {categoria.map((i) => (
                                        <li key={i.id} className="hover:bg-gray-100 px-3 py-2 rounded transition">
                                            <label className="flex items-center space-x-2 cursor-pointer">
                                                <input 
                                                    type="checkbox" 
                                                    className="rounded text-blue-500" 
                                                    checked={!!filtrosSelecionados[i.id]}
                                                    onChange={() => toggleFiltro(i.id)}
                                                />
                                                <span>{i.nome}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                                <div className="p-3 border-t border-gray-200 flex justify-between">
                                    <button 
                                        onClick={limparFiltros}
                                        className="text-gray-500 hover:text-gray-700 text-sm"
                                    >
                                        Limpar
                                    </button>
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm">
                                        Aplicar
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Creative Xpression logo */}
                    <img 
                        src="https://i.postimg.cc/SKzHZSPC/Chat-GPT-Image-19-de-mai-de-2025-22-01-57.png" 
                        alt="Creative Xpression" 
                        className="h-12 mx-10 hidden lg:block"
                    />
                </div>

                <div className="w-full flex justify-end pr-20">
                    <form 
                        onSubmit={pesquisar}
                        className="flex items-center w-full max-w-[400px] h-10"
                    >
                        <input
                            type="text"
                            placeholder="O que você procura?"
                            value={pesquisa}
                            onChange={(e) => alteraPesquisa(e.target.value)}
                            className="flex-1 h-full px-4 text-gray-800 bg-white border border-gray-300 rounded-l-md focus:outline-none"
                        />
                        <button 
                            type="submit"
                            className="h-full px-4 bg-gray-700 hover:bg-gray-800 text-white rounded-r-md flex items-center justify-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m1.17-5.32a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Cabecalho;