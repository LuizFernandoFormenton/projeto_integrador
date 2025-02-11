'use client'

import { useState } from "react"

function components () {

    // const [ nome, alteraNome ] = useState("Helena");
    // const [ email, alteraEmail ] = useState( "helenasiqueira48@gmail.com" )
    // const [ telefone, alteraTeelfone ] = useState( "(16) 9 9324-5129" )
    const [ usuario, alteraUsuario ] = useState({
        nome:"Helena",
        email:"helenasiqueira48@gmail.com",
        telefone:"(16) 9 9324-5129"
    })

    const [ editando, alteraEditando ] = useState(false);
    const [ editando2, alteraEditando2 ] = useState(false);
    const [ editando3, alteraEditando3 ] = useState(false);
    const [ historico, historicoCompras ] = useState(false);

    function manipulaEdicao(){

        if( editando == false ){
            alteraEditando(true)
        }else{   
            alteraEditando(false)
        }
    }

    function alteraNome( pnome ){
         const u  = {
            nome: pnome,
            email: usuario.email,
            telefone: usuario.telefone
        }

        alteraUsuario(u) 
    }

    function alteraEmail( pemail ){
        const u  = {
           nome: usuario.nome,
           email: pemail,
           telefone: usuario.telefone
       }
        
       alteraUsuario(u) 
   }

   function alteraTelefone( ptelefone ){
    const u  = {
       nome: usuario.nome,
       email: usuario.email,
       telefone: ptelefone
   }
    
   alteraUsuario(u) 
}




    function manipulaEdicao2(){

        if( editando2 == false ){
            alteraEditando2(true)
        }else{   
            alteraEditando2(false)
        }
    }


    function manipulaEdicao3(){

        if( editando3 == false ){
            alteraEditando3(true)
        }else{   
            alteraEditando3(false)
        }
    }

    
    
    function mostrarHistorico(){

        if( historico ==  false ){
            historicoCompras( true )
        }else{   
            historicoCompras( false )
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


                {
                    editando == true ?
                    <input type="text" placeholder="Digite seu nome"></input>
                    :
                    <p><strong>{ usuario.nome }</strong></p>
                    
                }

                <button onClick={()=>manipulaEdicao(true)}  className={`mt-5 ${editando == true  ? `bg-blue-500` : `bg-green-500`}`}>{ editando == true ? <span>Concluído</span> : <span>Alterar</span> }</button>

                {
                    editando2 == true ?
                    <input type="number" placeholder="Digite seu telefone"></input> 
                    :
                    <p><strong>{ usuario.telefone }</strong></p>
                    
                }

                <button onClick={()=>manipulaEdicao2(true)}  className={`mt-5 ${editando2 == true  ? `bg-blue-500` : `bg-green-500`}`}>{ editando2 == true ? <span>Concluído</span> : <span>Alterar</span> }</button>

                {
                    editando3 == true ?
                    <input className="mt-3" type="email" placeholder="Digite seu email"></input>
                    :
                    <p><strong>{ usuario.email }</strong></p>
                }
                
                <button onClick={()=>manipulaEdicao3(true)}  className={`m-5 ${editando3 == true  ? `bg-blue-500` : `bg-green-500`}`}>{ editando3 == true ? <span>Concluído</span> : <span>Alterar</span> }</button>
                
            </div>

                
                

                <div className="justify-between rounded-xl">
                    <button className="bg-green-500 transition delay-100 duration-100 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 mt-3">Salvar</button>
                    <button onClick={()=>mostrarHistorico(true)}  className={`mt-3 ${historico == true ? `bg-green-500` : `bg-red-500`} ml-3`}>{ historico == true ? <span>Concluído</span> : <span>Mostrar histórico</span> }.</button>
                    
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




