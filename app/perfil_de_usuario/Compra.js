function Compra (attr) {
    return ( 
        <div>
            <p>{attr.imagem}</p>
            <p>{attr.nome}</p>
            <p>{attr.tipo}</p>
            <p>{attr.preco}</p>
            <p>{attr.quantidade}</p>
            <p>{attr.data_da_compra}</p>
        </div>
     );
}

export default Compra ;