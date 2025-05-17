import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BarraLateral() {

    function direcionaPerfil (){
        const usuario = JSON.parse(localStorage.getItem("usuario"));

        if (!usuario || !usuario.id) {
            window.location.href = "/login"; 
        }else {
            window.location.href = "/perfil_de_usuario";
        }
    }

    
    return ( 

    <div className="fixed right-0 top-20 h-48 w-12 bg-stone-100/60 rounded-bl-lg border-none border-gray-200 justify-items-center z-20">

        <button className="bg-transparent border-none my-8 cursor-pointer" onClick={()=>{direcionaPerfil()}}>
            <FontAwesomeIcon icon={faUser} className="text-3xl m-2" />
        </button>
        <br/>
        <button className="bg-transparent border-none cursor-pointer" onClick={()=> window.location.href="/carrinho"}>
            <FontAwesomeIcon icon={faCartShopping} className = "text-3xl mt-2" />
        </button>


    </div>

    );
};

export default BarraLateral;