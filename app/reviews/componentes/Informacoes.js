function Informacoes() {
    return (  
        <div>
            <div className="centralizar">
                    <img width="400" height="400" src="http://placehold.co/80" />
                    <p><b> CAMISETA NEW OVER KIDS BASIC LOG </b></p>
            </div>

            <div className="valor">
                    <p><del> R$ 149,00 </del></p>
                    <p> R$ 69,00 <strong> 53% OFF </strong></p>
            </div>

            <p>Tamanho</p>
            <button>10</button>
            <button>12</button>
            <button><strong>04</strong></button>
            <button>06</button>
            <button>08</button>

            <p><button>ADICIONAR À SACOLA</button></p>


            <details>
                <summary>DESCRIÇÃO DA PEÇA</summary>
                <p>CAMISETA NEW OVER KIDS BASIC LOGO MARROM</p>
                <p>Camiseta new over manga curta e gola careca.</p>
                <p>04 - Comprimento: 45cm/ Manga: 11cm/ Cava: 16cm/ Torax: 40cm.</p>
                <p>06 - Comprimento: 48cm/ Manga: 11,5cm/ Cava: 17cm/ Torax: 42cm.</p>
                <p>08 - Comprimento: 51cm/ Manga: 12cm/ Cava: 18cm/ Torax: 44cm.</p>
                <p>10 - Comprimento: 54cm/ Manga: 12,5cm/ Cava: 19cm/ Torax: 46cm.</p>
                <p>12 - Comprimento: 57cm/ Manga: 13cm/ Cava: 20cm/ Torax: 48cm.</p>
                <p>14 - Comprimento: 60cm/ Manga: 13,5cm/ Cava: 21cm/ Torax: 50cm</p>
            </details>

            <hr />


        </div>
        
    );
}

export default Informacoes;