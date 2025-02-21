import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BarraLateral() {
    return ( 

    <div className="fixed right-0 top-20 h-48 w-12 bg-white text-center">

        <button onClick={()=> window.location.href="/login"}>
            <FontAwesomeIcon icon={faUser} className="text-3xl m-2 " />
        </button>

    </div>

    );
};

export default BarraLateral;