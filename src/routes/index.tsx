import { createFileRoute } from "@tanstack/react-router";

import Header from '../components/Header';
import Footer from '../components/Footer';

export const Route = createFileRoute("/")({
  component: Index,
});

import '/src/index.css'

function Index() {
  const animals = [
    { name: 'Thor', age: '3 anos', type: 'Cachorro', breed: 'SRD', location: 'Lisboa' },
    { name: 'Bella', age: '2 anos', type: 'Cachorra', breed: 'Poodle', location: 'Porto' },
    { name: 'Max', age: '5 anos', type: 'Cachorro', breed: 'Viralata', location: 'Aveiro' },
    { name: 'Luna', age: '2 anos', type: 'Gata', breed: 'SRD', location: 'Lisboa' },
    { name: 'Simba', age: '1 ano', type: 'Gato', breed: 'SRD', location: 'Porto' },
    { name: 'Mia', age: '4 anos', type: 'Gata', breed: 'Siamesa', location: 'Aveiro' },
  ]

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero */}
      <header className="bg-gray-100 py-20 md:py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Encontre seu novo<br />melhor amigo!
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Milhares de cães, gatos e outros pets esperando por um lar amoroso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-3xl text-lg font-medium hover:bg-gray-800 transition">
              Ver animais para adoção
            </button>
            <button className="bg-white border border-gray-300 px-8 py-4 rounded-3xl text-lg font-medium hover:bg-gray-50 transition">
              Saiba como adotar
            </button>
          </div>
        </div>
      </header>

      {/* Filtros */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex bg-gray-100 rounded-full p-1">
            <button className="px-6 py-2 bg-black text-white rounded-full font-medium">Todos</button>
            <button className="px-6 py-2 text-gray-600 hover:bg-gray-200 rounded-full transition">Cachorros</button>
            <button className="px-6 py-2 text-gray-600 hover:bg-gray-200 rounded-full transition">Gatos</button>
            <button className="px-6 py-2 text-gray-600 hover:bg-gray-200 rounded-full transition">Outros</button>
          </div>

          <div className="flex-1 min-w-55">
            <input
              type="text"
              defaultValue="Localização (São Paulo)"
              className="w-full bg-white border border-gray-300 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
              readOnly
            />
          </div>

          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition">
            Buscar
          </button>
        </div>
      </div>

      {/* Animais */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">
          Últimos animais registrados
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {animals.map((animal, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                Imagem do animal
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {animal.name} {animal.age && `• ${animal.age}`}
                </h3>
                <ul className="text-sm text-gray-600 mb-6 space-y-1">
                  <li>• {animal.type} • {animal.breed}</li>
                  <li>• {animal.location}</li>
                </ul>
                <button className="w-full bg-gray-100 hover:bg-gray-200 transition py-3 rounded-xl font-medium">
                  Quero adotar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Como funciona</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm"
              >
                <div className="w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {step === 1 ? 'Escolha o pet' : step === 2 ? 'Conheça o pet' : 'Adote e seja feliz'}
                </h3>
                <p className="text-gray-600">
                  {step === 1
                    ? 'Navegue e encontre o pet ideal para sua família.'
                    : step === 2
                    ? 'Converse com o responsável e conheça melhor o animal.'
                    : 'Finalize o processo e leve seu novo amigo para casa!'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  )
}

export default Index