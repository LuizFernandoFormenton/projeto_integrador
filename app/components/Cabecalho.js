function Cabecalho () {
    return (
    <main>
        <div style={{ background: "linear-gradient(to right, white, #e5e5e5)"}} className="flex  h-20 w-full items-center fixed mb-5 gap-20 px-8 text-[13px]">
        <img className="w-20" src="./imagens/logo.png"/>
        <p> CAMISETAS FEMININAS</p>
        <p> CAMISETAS MASCULINAS </p>
        <p> CAMISETAS UNISEX </p>
        <p> LANÇAMENTOS </p>
        <p> PROMOÇÕES </p>
        <label>
            <input className="rounded-xl p-2" type="text" placeholder="🔍 O que você está procurando?"/>           
        </label>
    </div>
    </main>

      );
}

export default Cabecalho ;
