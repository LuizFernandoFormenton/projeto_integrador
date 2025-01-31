function InputPersonalizado(attr) {
    return ( 
        <div>
            <p> <label > {attr.label} </label> <br/> <input placeholder={attr.placeholder} /> </p>
        </div>
     );
}

export default InputPersonalizado;