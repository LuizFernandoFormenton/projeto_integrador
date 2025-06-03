import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Geist, Geist_Mono } from "next/font/google";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased flex flex-col min-h-screen`} 
      >
        <Cabecalho/>
        <div className="pt-32 flex-grow" ></div>
        {children}
        <Rodape/>
      </body>

      
    </html>
  );
}
