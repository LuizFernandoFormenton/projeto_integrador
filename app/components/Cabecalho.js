function Cabecalho () {
    return (
    <div>
        <div className="flex justify-center bg-red-500 w-full gap-20 items-center text-white fixed">
        <img className="w-20 justify-start" src="https://placehold.co/200"/>
        <p> <a href="#"> Camisetas Femininas </a></p>
        <p> <a  href="#"> Camisetas Masculinas </a></p>
        <p> <a  href="#"> Camisetas Unisex </a></p>
        <p> <a  href="#"> Lançamentos </a></p>
        <p> <a  href="#"> Promoções </a></p>
        <label>
            <input className="w-300 rounded-lg p-5" type="text" placeholder="🔍 O que você está procurando?"/>           
        </label>
    </div>
    </div>

      );
}

export default Cabecalho ;
