import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Geist, Geist_Mono } from "next/font/google";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body
        className={`antialiased`} 
      >
        <Cabecalho/>
        <div className="mt-32" ></div>
        {children}
        <Rodape/>
      </body>


      
    </html>
  );
}
