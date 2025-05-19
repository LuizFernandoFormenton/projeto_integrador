'use client'

import { useEffect, useRef, useState } from "react";
import BarraLateral from "./BarraLateral";
import axios from "axios";

function Cabecalho() {
    const [pesquisa, alteraPesquisa] = useState("");
    const [categoria, alteraCategoria] = useState([]);
    const [menuAberto, setMenuAberto] = useState(false);
    const menuRef = useRef(null);
    const timeoutRef = useRef(null);

    async function buscaCategorias() {
        try {
            const res = await axios.get("http://localhost:4000/categoria");
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

    // Fecha com delay ao clicar fora
    useEffect(() => {
        function handleClickFora(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                timeoutRef.current = setTimeout(() => {
                    setMenuAberto(false);
                }, 300);
            } else {
                clearTimeout(timeoutRef.current);
            }
        }

        document.addEventListener("mousedown", handleClickFora);
        return () => {
            document.removeEventListener("mousedown", handleClickFora);
            clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <main>
            <BarraLateral />
            <div
                style={{ background: "linear-gradient(to right, white, #e5e5e5)" }}
                className="flex h-20 w-full items-center fixed gap-20 px-8 text-[15px] z-50"
            >
                <img
                    onClick={() => (window.location.href = "/")}
                    className="w-20 cursor-pointer"
                    src="https://i.postimg.cc/ydcx1CKX/logo.png"
                    alt="Logo"
                />

                {/* Botão Filtro com Dropdown */}
                <div className="relative" ref={menuRef}  >
                    <button
                        onClick={() => setMenuAberto(!menuAberto)}
                        className="text-black hover:text-gray-700 font-semibold px-4 py-2 rounded"
                    >
                        Filtros
                    </button>

                    {menuAberto && (
                        <div
                            className="absolute top-full left-0 mt-2 w-60 max-h-64 overflow-y-auto rounded-md shadow-xl
                                       bg-gray-100 border border-gray-300 z-50 transition duration-300"
                        >
                            <ul className="p-4 space-y-4 text-sm text-gray-800 list-none">
                                {categoria.map((i) => (
                                    <li key={i.id} className="hover:text-blue-600 transition">
                                        {i.nome}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Campo de pesquisa */}
                <form onSubmit={(e) => pesquisar(e)}>
                    <label>
                        <input
                            className="h-[64px] border-none p-2 w-[250px] bg-gray-300 "
                            type="text"
                            placeholder="🔍 O que você está procurando?"
                            onChange={(e) => alteraPesquisa(e.target.value)}
                            value={pesquisa}
                        />
                        <button className="hidden ml-2"></button>
                    </label>
                </form>
            </div>
        </main>
    );
}

export default Cabecalho;
