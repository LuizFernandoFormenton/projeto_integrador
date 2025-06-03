import Link from 'next/link';

function Rodape() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-8">
        
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="text-lg font-semibold mb-4">PRODUTOS</h3>
          <Link href="/camisetas" passHref>
            <span className="cursor-pointer text-white no-underline hover:text-gray-400 transition-colors duration-200">Camisetas</span>
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="text-lg font-semibold mb-4">ATENDIMENTO E SUPORTE</h3>
          <Link href="/central-de-atendimento" passHref>
            <span className="cursor-pointer text-white no-underline hover:text-gray-400 transition-colors duration-200">Central de Atendimento</span>
          </Link>
          <Link href="/duvidas-frequentes" passHref>
            <span className="cursor-pointer text-white no-underline hover:text-gray-400 transition-colors duration-200">Dúvidas Frequentes</span>
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="text-lg font-semibold mb-4">INSTITUCIONAL</h3>
          <Link href="/sobre" passHref>
            <span className="cursor-pointer text-white no-underline hover:text-gray-400 transition-colors duration-200">Sobre a CreativeXpression</span>
          </Link>
          <Link href="/nossa-equipe" passHref>
            <span className="cursor-pointer text-white no-underline hover:text-gray-400 transition-colors duration-200">Nossa Equipe</span>
          </Link>
        </div>

      </div>
      <div className="border-t border-gray-700 mt-6 py-2 text-center text-sm text-gray-500">
        © 2025 CreativeXpression. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Rodape;