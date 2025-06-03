import { useState, useEffect } from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BarraLateral() {
  const [usuarioLogado, setUsuarioLogado] = useState(false);
  const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0);

  function atualizarQuantidade() {
    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    setQuantidadeCarrinho(produtos.length);
  }

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    setUsuarioLogado(!!(usuario && usuario.id));

    atualizarQuantidade();

    function handleCarrinhoAtualizado() {
      atualizarQuantidade();
    }

    window.addEventListener("carrinhoAtualizado", handleCarrinhoAtualizado);

    return () => {
      window.removeEventListener("carrinhoAtualizado", handleCarrinhoAtualizado);
    };
  }, []);

  const iconStyle = usuarioLogado ? { marginTop: "0.6rem" } : {};

  return (
    <div className="fixed right-0 top-20 h-48 w-12 bg-stone-100/60 rounded-bl-lg border-none border-gray-200 justify-items-center z-20">
      <button
        className="bg-transparent border-none my-8 cursor-pointer relative"
        onClick={() => {
          if (!usuarioLogado) {
            window.location.href = "/login";
          } else {
            window.location.href = "/perfil_de_usuario";
          }
        }}
        title={usuarioLogado ? "Perfil" : "Entrar"}
      >
        <FontAwesomeIcon
          icon={usuarioLogado ? faUserCircle : faUser}
          className="text-3xl m-2"
          style={iconStyle}
        />
      </button>
      <br />
      <button
        className="bg-transparent border-none cursor-pointer relative"
        onClick={() => (window.location.href = "/carrinho")}
        title="Carrinho"
      >
        <FontAwesomeIcon icon={faCartShopping} className="text-3xl mt-2" />
        {quantidadeCarrinho > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {quantidadeCarrinho}
          </span>
        )}
      </button>
    </div>
  );
}

export default BarraLateral;