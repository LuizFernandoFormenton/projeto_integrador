import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BarraLateral() {
    return ( 

    <div className="fixed right-0 top-20 h-48 w-12 bg-white rounded-bl-lg border-none border-gray-200 justify-items-center z-20">

        <button className="bg-transparent border-none my-8 cursor-pointer" onClick={()=> window.location.href="/login"}>
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