function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white text-gray-900 rounded-xl flex items-center justify-center text-2xl">
                🐾
              </div>
              <span className="text-xl font-bold">Patas Sem Lar</span>
            </div>

            <div className="flex gap-8 text-sm">
              <a href="#" className="hover:text-gray-300 transition">Sobre nós</a>
              <a href="#" className="hover:text-gray-300 transition">Animais</a>
              <a href="#" className="hover:text-gray-300 transition">Contato</a>
              <a href="#" className="hover:text-gray-300 transition">Termos</a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            © Patas Sem Lar 2026 – Todos os direitos reservados.
          </div>
        </div>
      </footer>
  );
}

export default Footer;