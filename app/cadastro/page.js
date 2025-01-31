import Botoes from "../login/components/Botoes";
import InputPersonalizado from "../login/components/InputPersonalizado";

function Cadrasto () {
    return ( 
        <div className="justify-center flex">
            
            <div className=" mt-2 rounded-lg p-10 shadow-[0px_0px_30px] shadow-gray-200 " >     
            {/* <div className="rounded-lg p-10 outline-outline-gray-100 border-red-500 shadow-[3px_3px_5px] shadow-[#CCC] mt-10"/>      */}
                    <h1 className=" text-center " > Cadastra-se </h1>

                    <hr/>

                    <InputPersonalizado label= "Nome completo" />
                    <InputPersonalizado label= "Data de nascimento" />
                    <InputPersonalizado label= "Sexo" />
                    <InputPersonalizado label= "E-mail" />
                    <InputPersonalizado label= "Senha" />
                    <InputPersonalizado label= "CPF" />
                    <InputPersonalizado label= "Telefone" />    
                    <InputPersonalizado label= "CEP" />
                    
                    <Botoes botoes="Concluído" />
            </div>
            

        </div>
     );
}

export default Cadrasto ;