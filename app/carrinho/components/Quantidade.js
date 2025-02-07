'use client'
import { useState } from "react";

function Quantidade () {

    const [ carrinho, alteraCarrinho ] = useState(0);

    function manipulaCarrinho( adicionar ){
        let novoCarrinho = carrinho;
   
       if(adicionar == true){
         alteraCarrinho(carrinho + 1)  
         novoCarrinho++
       }else{
           alteraCarrinho( carrinho -1 )
           novoCarrinho--
   
       }
    }
    function limpaCarrinho(){
        alteraCarrinho ( 0 )
      }
    

    return ( 


        <div>
            <br/>
            <p><small>Quantidade</small></p>
            <button onClick={()=>manipulaCarrinho(false)} className="buttonnegativo"> - </button>
            <input value={carrinho} className="imputmenor"/> 
            <button onClick={()=>manipulaCarrinho(true)} className="buttonpositivo">+</button>
      

        </div>
        
     );
}

export default Quantidade;