import Avaliacoes from "./componentes/Avaliacoes";
import Devolucao from "./componentes/Devolucao";
import Frete from "./componentes/Frete";
import Informacoes from "./componentes/Informacoes";
import "./reviews.css"

export default 
function reviews () {
    return (
        <div>
            
            <Informacoes/>
            <Devolucao/>
            <Frete/>
            <Avaliacoes/>
        
        
        </div>


    );
}