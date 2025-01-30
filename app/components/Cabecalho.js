function Cabecalho () {
    return (
        <div className="flex justify-center bg-red-500 pt-6 pb-20 fixed w-full gap-10 ">
        <img className="w-90 p-50 fixed -left-40 -top-50  " src="https://placehold.co/200"/>
        <p> <a href="#"> Camisetas Femininas </a></p>
        <p> <a  href="#"> Camisetas Masculinas </a></p>
        <p> <a  href="#"> Camisetas Unisex </a></p>
        <p> <a  href="#"> Lançamentos </a></p>
        <p> <a  href="#"> Promoções </a></p>
        <label>
            <input className="w-200 rounded-lg" type="text" placeholder="🔍 O que você está procurando?"/>           
        </label>
    </div>  

      );
}

export default Cabecalho ;
