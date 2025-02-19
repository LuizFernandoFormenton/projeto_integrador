'use client'

import { useState } from "react"
import Compra from "./Compra";

function components () {

    const [ usuario, alteraUsuario ] = useState({
        id: 0,
        nome:"Helena",
        email:"helenasiqueira48@gmail.com",
        telefone:"(16) 9 9324-5129"
    })

  
    const [ compras, alteraCompras ] = useState([
        {
            id: 0,
            imagem: "https://www.hmloja.com.br/camisetas/camiseta-preta-malha-pv-manga-curta-gola-redonda",
            nome: "camisa",
            tipo: "manga longa",
            preco: "19,90",
            quantidade: "1",
            data_da_compra: "18/02/2025"
        },
        {
            id: 1,
            imagem: "https://www.hmloja.com.br/camisetas/camiseta-preta-malha-pv-manga-curta-gola-redonda",
            nome: "calça",
            tipo: "jeans",
            preco: "59,90",
            quantidade: "2",
            data_da_compra: "15/02/2025"
        },
        {
            id: 2,
            imagem: "https://www.hmloja.com.br/camisetas/camiseta-preta-malha-pv-manga-curta-gola-redonda",
            nome: "jaqueta",
            tipo: "couro",
            preco: "199,00",
            quantidade: "1",
            data_da_compra: "10/02/2025"
        },
        {
            id: 3,
            imagem: "https://www.hmloja.com.br/camisetas/camiseta-preta-malha-pv-manga-curta-gola-redonda",
            nome: "tênis",
            tipo: "esportivo",
            preco: "159,90",
            quantidade: "1",
            data_da_compra: "12/02/2025"
        },
        {
            id: 4,
            imagem: "https://www.hmloja.com.br/camisetas/camiseta-preta-malha-pv-manga-curta-gola-redonda",
            nome: "mochila",
            tipo: "backpack",
            preco: "79,90",
            quantidade: "1",
            data_da_compra: "11/02/2025"
        },
        {
            id: 5,
            imagem: "",
            nome: "óculos de sol",
            tipo: "aviador",
            preco: "89,90",
            quantidade: "1",
            data_da_compra: "14/02/2025"
        },
        {
            id: 6,
            nome: "camisa",
            tipo: "polo",
            preco: "49,90",
            quantidade: "3",
            data_da_compra: "17/02/2025"
        },
        {
            id: 7,
            nome: "relógio",
            tipo: "digital",
            preco: "129,00",
            quantidade: "1",
            data_da_compra: "16/02/2025"
        },
        {
            id: 8,
            nome: "fone de ouvido",
            tipo: "bluetooth",
            preco: "149,90",
            quantidade: "1",
            data_da_compra: "13/02/2025"
        },
        {
            id: 9,
            nome: "cinto",
            tipo: "casual",
            preco: "39,90",
            quantidade: "2",
            data_da_compra: "12/02/2025"
        },
        {
            id: 10,
            nome: "bermuda",
            tipo: "moletom",
            preco: "39,90",
            quantidade: "2",
            data_da_compra: "19/02/2025"
        },
        {
            id: 11,
            nome: "blusa",
            tipo: "cropped",
            preco: "29,90",
            quantidade: "1",
            data_da_compra: "14/02/2025"
        },
        {
            id: 12,
            nome: "casaco",
            tipo: "flanelado",
            preco: "89,90",
            quantidade: "1",
            data_da_compra: "16/02/2025"
        },
        {
            id: 13,
            nome: "mochila",
            tipo: "executiva",
            preco: "179,90",
            quantidade: "1",
            data_da_compra: "17/02/2025"
        },
        {
            id: 14,
            nome: "sapato",
            tipo: "social",
            preco: "199,90",
            quantidade: "1",
            data_da_compra: "18/02/2025"
        }
    ]);
    

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

    function salvar(e){
        e.preventDefault();
        const objeto = {
            nome: nome,
            email: email,
            telefone: telefone,
        }
    
}


    return ( 
    <div className=" justify-center flex my-24">
        <div className="justify-items-center w-48 rounded-xl shadow-md p-8 ">

    
                <h1 className="text-red-600 text-3xl">Seu Perfil</h1>

        
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
                    <button onClick={()=>mostrarHistorico(true)}  className={`mt-3 ${historico == true ? `bg-green-500` : `bg-green-500`} ml-3`}>{ historico == true ? <span>Concluído</span> : <span>Mostrar histórico</span> }.</button>
                    
                    { 

                    historico == true ?
                        <div>
                            <h2 className="">Histórico</h2>
                            <ul>

                                {
                                    compras.map( (i)=>
                                        <Compra   imagem={i.imagem} nome={i.nome} tipo={i.tipo} preco={i.preco} quantidade={i.quantidade} data_da_compra={i.data_da_compra}/>
                                    )
                                }

                            </ul>
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




