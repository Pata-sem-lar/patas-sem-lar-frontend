function Header() {
  return (    
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-white text-2xl">
              🐾
            </div>
            <span className="text-2xl font-bold">Patas Sem Lar</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Início</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Animais</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Como funciona</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Sobre nós</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Blog</a>
          </div>

          <a href="#"className="px-5 py-2.5 border border-gray-300 rounded-2xl text-sm font-medium hover:bg-gray-50 transition">
            Login?
          </a>
        </div>
      </nav>
  );
}

export default Header;