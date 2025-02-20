function InputPersonalizado(attr) {
    return ( 
        <div>
            <p> <label > {attr.label} </label> <br/> <input className="w-80 size-7 rounded "  type={attr.type} placeholder={attr.placeholder} onChange={(e)=> attr.AlteraValor (e.target.value)  } /> </p>
        </div>
     );
}

export default InputPersonalizado;