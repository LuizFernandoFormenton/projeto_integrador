import Produto from "./components/Produto";
import Quantidade from "./components/Quantidade";

function carrinho(){
    return(

        <div>
            <h1>Carrinho:</h1>
<hr/>
    <Produto/>
    <Quantidade/>


<p><strong>Total ValorR$99,99</strong></p>    

<button class="buttonfinalizarcompras"> Finalizar Compra </button>            
<hr/>

        </div>
    );
}

export default carrinho