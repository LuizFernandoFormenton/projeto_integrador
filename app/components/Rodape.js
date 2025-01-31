function Rodape() {
    return ( 
<footer className="mt-40">
    <div className="bg-black text-white p-2 flex justify-center">

        <div className="text-center px-12 ">
            <p> Produtos</p>
            <br/>
                <p className="pb-2">Camisas</p>
                <p className="pb-2">Acessórios</p>
        </div>

        <div className="text-center px-12">
            <p>Atendimento e Suporte</p>
            <br/>
                <p className="pb-2">Central de atendimento</p>
                <p className="pb-2">Dúvidas sobre produto</p>
                <p className="pb-2">FAQ</p>

        </div>
    
        <div className="text-center px-12">
        <p> Institucional</p>
        <br/>
            <p className="pb-2">Sobre</p>
            <p className="pb-2">Investidores</p>
        </div>

    </div> 
</footer>
     );
}

export default Rodape;