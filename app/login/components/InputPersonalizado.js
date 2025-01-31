function InputPersonalizado(attr) {
    return ( 
        <div>
            <p> <label> {attr.label} </label> <br/> <input className="w-80 size-7" placeholder={attr.placeholder} /> </p>
        </div>
     );
}

export default InputPersonalizado;