'use client'

import { useEffect, useState } from "react";
import axios from "axios";

function Avaliacoes(attr) {
    const [estrelas, alteraEstrelas] = useState(0);
    const [hoverEstrelas, setHoverEstrelas] = useState(0);
    const [avaliacao, alteraAvaliacao] = useState([]);
    const [usuario, alteraUsuario] = useState({});
    const [comentario, alteraComentario] = useState("");

    async function buscaAvaliacoes() {
        const res = await axios.get("http://localhost:4000/avaliacao/" + attr.produto_id);
        alteraAvaliacao(res.data);
    }

    useEffect(() => {
        buscaAvaliacoes();

        const usuarioLocal = JSON.parse(localStorage.getItem("usuario"));
        if (usuarioLocal && usuarioLocal.id) {
            alteraUsuario(usuarioLocal);
        }
    }, []);

    async function enviarAvaliacao() {
        if (!comentario || estrelas === 0) {
            alert("Selecione uma nota e escreva um comentário.");
            return;
        }

        try {
            await axios.post("http://localhost:4000/avaliacao", {
                nota: estrelas,
                comentario,
                usuario_id: usuario.id,
                produto_id: attr.produto_id
            });

            alteraComentario("");
            alteraEstrelas(0);
            buscaAvaliacoes();
        } catch (err) {
            console.error(err);
            alert("Erro ao enviar avaliação.");
        }
    }

    return (
        <div className="mt-6 space-y-4">
            <h3 className="font-semibold text-lg">Deixe seu comentário:</h3>

            <textarea
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Escreva sua opinião aqui..."
                value={comentario}
                onChange={(e) => alteraComentario(e.target.value)}
            />

            <div className="flex space-x-1 text-xl">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        onClick={() => alteraEstrelas(star)}
                        onMouseEnter={() => setHoverEstrelas(star)}
                        onMouseLeave={() => setHoverEstrelas(0)}
                        className={`
                            ${star <= (hoverEstrelas || estrelas) ? 'text-yellow-400' : 'text-gray-300'}
                            transition duration-200
                        `}
                    >
                        ★
                    </button>
                ))}
            </div>

            {
                usuario.id ? (
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        onClick={enviarAvaliacao}
                    >
                        Comentar
                    </button>
                ) : (
                    <p className="text-red-500">Faça login para escrever uma avaliação.</p>
                )
            }

            <hr className="my-6" />

            <h2 className="text-xl font-bold">Avaliações do Produto</h2>

            {avaliacao.length > 0 ? (
                avaliacao.map((i) => (
                    <div key={i.id} className="border-b py-4">
                        <p className="text-yellow-500">
                            {'★'.repeat(i.nota)}{'☆'.repeat(5 - i.nota)}
                        </p>
                        <p className="text-gray-800 mt-1">{i.comentario}</p>
                        <p className="text-sm text-black-500 mt-2">Usuário: {i.usuario?.nome}</p>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">Nenhuma avaliação ainda.</p>
            )}
        </div>
    );
}

export default Avaliacoes;
