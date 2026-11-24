// src/Componentes/Hero.jsx
import React from "react"; 

const Hero = () => {
  return (
    /* 1️⃣ Ocupa toda la pantalla y centra en ambos ejes (horizontal y vertical) */
    <div
      className="
        w-full 
        min-h-screen 
        bg-gradient-to-br from-gray-50 to-blue-50 
        flex items-center justify-center
      "
    >
      {/* 2️⃣ Ancho máximo y centrado interno */}
      <div className="max-w-7xl w-full mx-auto px-4 py-20">
        {/* 3️⃣ Columnas centradas en desktop y apiladas en móvil */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Contenido Principal (Texto + Botones) */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                La solución completa
                <br />
                <span className="text-blue-600">en punto de venta</span>
              </h1>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-lg md:text-xl">
                <span className="text-gray-600 font-medium">
                  ANTES $1199, AHORA DESDE
                </span>
                <span className="text-4xl md:text-5xl font-bold text-pink-500">
                  $999
                </span>
                <span className="text-gray-600 text-base">*</span>
              </div>

              <p className="text-lg md:text-xl text-gray-700 font-medium">
                Sistema de caja | Cajón portamonedas | Impresora
              </p>
            </div>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Consigue tu oferta
              </button>
              <button className="text-blue-600 hover:text-blue-700 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 border-2 border-transparent hover:border-blue-200 hover:bg-blue-50">
                Solicitar sistema
              </button>
            </div>
          </div>

          {/* Sistema POS Visual */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Monitor Principal - Ahora con imagen personalizable */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-4 shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-700 animate-[scaleIn_1.2s_ease-out] hover:shadow-blue-500/20">
                <div className="bg-white rounded-md w-80 h-60 md:w-96 md:h-72 relative overflow-hidden shadow-inner">
                  {/* Barra superior del monitor */}
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 h-12 flex items-center px-4 shadow-sm">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-white rounded-full opacity-90 animate-pulse"></div>
                      <div className="w-3 h-3 bg-white rounded-full opacity-70"></div>
                      <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
                    </div>
                    <div className="ml-auto text-white font-bold text-sm tracking-wide">
                      Palma POS
                    </div>
                  </div>

                  {/* Área para tu imagen personalizada */}
                  <div className="absolute top-12 left-0 right-0 bottom-0 bg-gray-100 flex items-center justify-center">
                    {/* Placeholder para tu imagen - reemplaza el src con tu imagen */}
                    <img 
                      src="/ruta-a-tu-imagen.jpg" 
                      alt="Tu sistema POS" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback si la imagen no carga
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback content si no hay imagen */}
                    <div className="flex flex-col items-center justify-center text-gray-400 space-y-2" style={{display: 'none'}}>
                      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <p className="text-sm font-medium">Agrega tu imagen aquí</p>
                      <p className="text-xs text-center px-4">
                        Reemplaza "/ruta-a-tu-imagen.jpg" con la ruta de tu imagen
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impresora - Animación refinada */}
              <div className="absolute -bottom-6 -left-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl w-24 h-16 shadow-xl transform -rotate-6 hover:rotate-0 transition-all duration-500 animate-[slideInLeft_1.5s_ease-out] hover:shadow-gray-500/30">
                <div className="bg-gradient-to-r from-gray-600 to-gray-700 h-3 w-full rounded-t-xl"></div>
                <div className="flex justify-center items-center h-full">
                  <div className="w-16 h-1 bg-white rounded-full shadow-sm"></div>
                </div>
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              {/* Cajón - Animación refinada */}
              <div className="absolute -bottom-4 -right-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl w-20 h-12 shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-500 animate-[slideInRight_1.5s_ease-out] hover:shadow-gray-600/30">
                <div className="bg-gradient-to-r from-gray-700 to-gray-800 h-8 w-full rounded-t-xl flex items-center justify-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <div className="flex justify-center items-center h-4">
                  <div className="w-12 h-1 bg-gray-600 rounded-full"></div>
                </div>
              </div>

              {/* Efectos de Brillo Mejorados */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full opacity-70 animate-pulse shadow-lg"></div>
              <div className="absolute -bottom-8 -left-8 w-6 h-6 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-50 animate-pulse delay-1000 shadow-lg"></div>
              <div className="absolute top-1/2 -left-16 w-4 h-4 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-40 animate-bounce delay-500"></div>
              
              {/* Círculos flotantes */}
              <div className="absolute -top-8 left-1/4 w-3 h-3 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-60 animate-bounce delay-300"></div>
              <div className="absolute -bottom-12 right-1/4 w-5 h-5 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-50 animate-pulse delay-700"></div>
            </div>
          </div>
        </div>

        {/* Indicadores de Características */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-md shadow-sm"></div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Sistema Completo</h3>
            <p className="text-gray-600 text-sm">
              Todo lo que necesitas para tu negocio en un solo paquete
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
              <div className="w-6 h-6 bg-gradient-to-br from-green-600 to-green-700 rounded-md shadow-sm"></div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Fácil de Usar</h3>
            <p className="text-gray-600 text-sm">
              Interfaz intuitiva que cualquiera puede manejar
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-purple-700 rounded-md shadow-sm"></div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Soporte 24/7</h3>
            <p className="text-gray-600 text-sm">
              Asistencia técnica cuando la necesites
            </p>
          </div>
        </div>
      </div>

      {/* Estilos CSS personalizados para las animaciones */}
      <style jsx>{`
        @keyframes scaleIn {
          0% {
            transform: scale(0.8) rotate(1deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.05) rotate(0.5deg);
            opacity: 0.8;
          }
          100% {
            transform: scale(1) rotate(1deg);
            opacity: 1;
          }
        }

        @keyframes slideInLeft {
          0% {
            transform: translateX(-100px) rotate(-6deg) scale(0.8);
            opacity: 0;
          }
          100% {
            transform: translateX(0) rotate(-6deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          0% {
            transform: translateX(100px) rotate(3deg) scale(0.8);
            opacity: 0;
          }
          100% {
            transform: translateX(0) rotate(3deg) scale(1);
            opacity: 1;
          }
        }

        .animate-\[scaleIn_1\.2s_ease-out\] {
          animation: scaleIn 1.2s ease-out;
        }

        .animate-\[slideInLeft_1\.5s_ease-out\] {
          animation: slideInLeft 1.5s ease-out;
        }

        .animate-\[slideInRight_1\.5s_ease-out\] {
          animation: slideInRight 1.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Hero;