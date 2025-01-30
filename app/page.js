import Image from "next/image";
import Cabecalho from "./components/Cabecalho";

export default function Home() {
  return (
    <div>

      <Cabecalho/>

   
     <div className="barraLateral">
        <button className="botoes"><i class="fa-regular fa-user"></i> </button>
        <button className="botoes"><i class="fa-regular fa-heart"></i></button>
        <button className="botoes"><i class="fa-solid fa-cart-shopping"></i></button>
    </div>
    <br/>

   <main>
        <h1 className="textosite">Lançamentos</h1>
        <br/>
        <div>            
            <img className="camisetas" src="../imagens/imagens_tela_inicial/camisetas_fundo/Mockup - Camiseta (1).png" width="500"/>
            <img className="camisetas" src="../imagens/imagens_tela_inicial/camisetas_fundo/Mockup - Camiseta 2 (1).png" width="500"/>
        </div>
    </main>

    <footer>
    <div className="rodape">

        <div>
            <h1> Produtos</h1>
            <ul>
                <li> <a href="#">Camisas</a></li>
                <li><a href="#">Acessórios</a></li>
            </ul>
        </div>

        <div>
            <h1>Atendimento e Suporte</h1>
            <ul>
                <li><a href="#">Central de atendimento</a></li>
                <li><a href="#">Dúvidas sobre produto</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
        </div>
    
        <div>
        <ul>
            <h1> Institucional</h1>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Insvestidores</a></li>
        </ul>

        </div>
    </div> 


</footer>
    </div>
  );
}
