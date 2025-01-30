function carrinho(){
    return(

        <div>
             <h1>Carrinho:</h1>

<hr/>
<div class="centralizar">
    <img src="https://placehold.co/120"/> 
  <div>
        <h2>CROPPED RAGLAN ITALIC</h2>
        <p>Tamanho: <strong>G</strong></p>
        <p>Total <strong>R$ 99,99</strong></p>
    </div>
</div>

<br/>
<p><small>Quantidade</small></p>
<button className="buttonnegativo"> - </button>
<input className="imputmenor"/> 
<button className="buttonpositivo">+</button>


<hr/>

<hr/>

<p><strong>Total ValorR$99,99</strong></p>    

<button class="buttonfinalizarcompras"> Finalizar Compra </button>            


        </div>
    );
}

export default carrinho