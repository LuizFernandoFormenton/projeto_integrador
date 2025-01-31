function Cabecalho () {
    return (
    <main>
        <div style={{ background: "linear-gradient(to right, white, #e5e5e5)"}} className="flex  h-20 w-full items-center fixed gap-20 px-8 ">
        <img className="w-20" src="./imagens/logo.png"/>
        <p>  Camisetas Femininas</p>
        <p> Camisetas Masculinas </p>
        <p> Camisetas Unisex </p>
        <p> Lançamentos </p>
        <p> Promoções </p>
        <label>
            <input className="rounded-xl p-2" type="text" placeholder="🔍 O que você está procurando?"/>           
        </label>
    </div>
    </main>

      );
}

export default Cabecalho ;
