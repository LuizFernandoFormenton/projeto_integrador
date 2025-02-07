'use client'

import { useState } from "react"

function components () {

    const [ historico, historicoCompras ] = useState( true );
    
    function mostrarHistorico(){

        if( historico ==  true ){
            mostrarHistorico( false )
        }else{   
            mostrarHistorico( true )
        }
    }



    return ( 
    <div className=" justify-center flex my-24">
        <div className="justify-items-center w-48 rounded-xl shadow-md p-8 ">

    
                <h1 className="text-red-600 text-3xl">Meu Perfil</h1>

        
            <div className="flex gap-5 flex text-center">
                <img width="100" height="100" src="https://placehold.co/1000" className="size-24 rounded-full bg-conic from-blue-600 to-sky-400 to-50% items-center"></img>

            </div>    
                    
            <div className="text-center">

                <p><strong>Nome</strong></p>
                <input type="text" placeholder="Digite seu nome"></input>
            </div>
            


                <p><strong>Telefone</strong></p>
                <input type="number" placeholder="Digite seu telefone"></input>
                <br/>
                <br/>
                <input type="number" placeholder="Digite seu CPF"></input>
                <br/>
                <input className="mt-3" type="email" placeholder="Digite seu email"></input>
                <br/>
                <div className="justify-between rounded-xl">
                    <button className="bg-green-500 transition delay-100 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 mt-3">Salvar</button>
                    <button onClick={()=>mostrarHistorico()}  className={`mt-3 ${historico == true ? `bg-green-500` : `bg-red-500`} ml-3`}>{ historico == true ? <span>Mostrar histórico</span> : <span></span> }.</button>
                    
                    { 
                    historico == true ?
                        <div>
                            <h2 className="">Histórico</h2>
                            <img width="200" height="200" src="https://placehold.co/1000" className="rounded-xl "></img>
                            <br/>
                        </div>
                    :
                    <div></div>
                            

}
                    
                </div>
            
                <br/>

        </div>

    </div>
     );
}

export default components ;


