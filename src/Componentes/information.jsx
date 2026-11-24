import React, { useEffect, useRef, useState } from "react";

export default function PalmaPOSLanding() {
  const heroRef = useRef(null);
  const tabletRef = useRef(null);
  const contentRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Manejo de eventos de scroll y resize
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Configuración responsive y cálculos de scroll
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const maxScroll = window.innerHeight * (isMobile ? 0.5 : 0.8);
  const scrollProgress = Math.max(0, Math.min(scrollY / maxScroll, 1));
  
  // Función para calcular las transformaciones 3D de la tablet
  const getTabletTransform = () => {
    if (isMobile) {
      return {
        transform: `
          translateY(${-scrollProgress * 40}px)
          scale(${0.95 + scrollProgress * 0.1})
          rotateX(${-scrollProgress * 5}deg)
        `,
        transition: 'transform 0.05s ease-out'
      };
    }
    
    return {
      transform: `
        translateY(${-scrollProgress * 60}px)
        scale(${1 + scrollProgress * 0.2})
        rotateX(${-scrollProgress * 8}deg)
        rotateY(${scrollProgress * 5}deg)
      `,
      transition: 'transform 0.05s ease-out'
    };
  };

  // Lista de características del producto
  const features = [
    "Gestiona inventario, ventas y clientes en un solo lugar",
    "Funciona sin internet - sincroniza cuando tengas conexión", 
    "Imprime tickets y facturas desde cualquier impresora",
    "Control de caja y arqueo diario automático",
    "Reportes de ventas por producto, vendedor y período"
  ];


  return (
    <div className="bg-slate-900">
      {/* Sección principal del Hero */}
      <section
        ref={heroRef}
        id="hero-section"
        className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        style={{
          perspective: "1500px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Elementos de fondo animados con gradientes */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-slate-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-slate-300/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] bg-slate-500/5 rounded-full blur-3xl" />
        </div>

        {/* Contenedor principal con grid layout */}
        <div className="h-full w-full flex items-center justify-center relative z-10">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center min-h-screen py-16 sm:py-20 lg:py-24">
              
              {/* Tablet 3D animada con placeholder para imagen */}
              <div className="flex justify-center items-center order-2 lg:order-1 py-8 sm:py-12 lg:py-16">
                <div 
                  ref={tabletRef} 
                  className="relative"
                  style={getTabletTransform()}
                >
                  <div className="bg-slate-800 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-2 sm:p-3 lg:p-4 shadow-2xl w-64 h-[420px] sm:w-80 sm:h-[520px] md:w-96 md:h-[600px]">
                    <div className="bg-white rounded-[1.25rem] sm:rounded-[1.75rem] lg:rounded-[2rem] w-full h-full relative overflow-hidden shadow-inner">
                      
                      {/* Área designada para imagen personalizada */}
                      <div className="w-full h-full relative">
                        {/* Placeholder temporal - reemplazar con imagen real */}
                        <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                          <div className="text-center p-6 sm:p-8">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-slate-400 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                              <span className="text-white text-lg sm:text-xl lg:text-2xl font-bold">POS</span>
                            </div>
                            <p className="text-slate-600 text-sm sm:text-base font-medium mb-2">
                              Tu imagen aquí
                            </p>
                            <p className="text-slate-500 text-xs sm:text-sm">
                              Sustituye este contenido<br />con tu imagen
                            </p>
                          </div>
                        </div>
                        
                        {/* Ejemplo de implementación de imagen - descomentar para usar */}
                        {/* 
                        <img 
                          src="/tu-imagen.jpg" 
                          alt="PalmaPOS Dashboard" 
                          className="w-full h-full object-cover rounded-[1.25rem] sm:rounded-[1.75rem] lg:rounded-[2rem]"
                        />
                        */}
                        
                        {/* Overlay sutil para simular efecto de pantalla */}
                        <div className="absolute inset-0 bg-black/5 rounded-[1.25rem] sm:rounded-[1.75rem] lg:rounded-[2rem]" />
                      </div>
                    </div>

                    {/* Accesorio izquierdo - Impresora */}
                    <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -left-4 sm:-left-6 lg:-left-8 w-12 h-8 sm:w-16 sm:h-10 lg:w-20 lg:h-12 bg-slate-700 rounded-lg lg:rounded-xl shadow-xl">
                      <div className="w-full h-2 sm:h-2.5 lg:h-3 bg-slate-600 rounded-t-lg lg:rounded-t-xl" />
                      <div className="flex justify-center items-center flex-1 pt-1 sm:pt-1.5 lg:pt-2">
                        <div className="w-6 h-0.5 sm:w-8 sm:h-0.5 lg:w-12 lg:h-1 bg-white rounded" />
                      </div>
                    </div>

                    {/* Accesorio derecho - Cajón */}
                    <div className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 -right-6 sm:-right-8 lg:-right-10 w-10 h-8 sm:w-12 sm:h-10 lg:w-16 lg:h-12 bg-slate-600 rounded-md lg:rounded-lg shadow-xl">
                      <div className="w-full h-5 sm:h-6 lg:h-8 bg-slate-500 rounded-t-md lg:rounded-t-lg flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sección de contenido principal con mejor espaciado */}
              <div
                ref={contentRef}
                className="flex flex-col justify-center space-y-6 sm:space-y-8 lg:space-y-10 order-1 lg:order-2 text-center lg:text-left px-4 sm:px-6 lg:px-8"
              >
                {/* Título principal con animación */}
                <div 
                  className="animate-fade-in relative z-20 mb-4 sm:mb-6 lg:mb-8"
                  style={{
                    transform: `translateY(${scrollProgress * 20}px)`,
                    transition: 'all 0.1s ease-out'
                  }}
                >
                  <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight transition-all duration-300 ${
                    scrollProgress > 0.2 ? 'text-white drop-shadow-2xl' : 'text-white'
                  }`} style={{
                    textShadow: scrollProgress > 0.2 ? '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' : 'none'
                  }}>
                    Todo en un
                    <br />
                    <span className={`transition-all duration-300 ${
                      scrollProgress > 0.2 ? 'text-slate-200 drop-shadow-2xl' : 'text-slate-300'
                    }`} style={{
                      textShadow: scrollProgress > 0.2 ? '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' : 'none'
                    }}>paquete</span>
                  </h1>
                  <p className={`text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-all duration-300 ${
                    scrollProgress > 0.2 ? 'text-white drop-shadow-xl' : 'text-slate-200'
                  }`} style={{
                    textShadow: scrollProgress > 0.2 ? '1px 1px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.6)' : 'none'
                  }}>
                    Nuestro sistema de punto de venta que te permite adaptarte,
                    conseguir nuevos clientes y mejorar tus ventas.
                  </p>
                </div>

                {/* Lista de características con mejor espaciado */}
                <div className="space-y-4 sm:space-y-5 lg:space-y-6 mb-6 sm:mb-8 lg:mb-10">
                  {features.map((txt, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start space-x-4 sm:space-x-5 lg:space-x-6 opacity-0 animate-slide-up relative z-20"
                      style={{
                        animationDelay: `${idx * 0.1}s`,
                        animationFillMode: 'forwards',
                        transform: `translateY(${scrollProgress * 15}px)`,
                        transition: 'all 0.1s ease-out'
                      }}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center text-black text-sm sm:text-base lg:text-xl font-bold shadow-lg transition-all duration-300 flex-shrink-0 mt-1">
                        ✓
                      </div>
                      <p className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-medium transition-all duration-300 ${
                        scrollProgress > 0.2 ? 'text-white drop-shadow-xl' : 'text-slate-100'
                      }`} style={{
                        textShadow: scrollProgress > 0.2 ? '1px 1px 4px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.7)' : 'none'
                      }}>
                        {txt}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Sección de precios y call to action */}
                <div 
                  className="pt-6 sm:pt-8 lg:pt-10 opacity-0 animate-slide-up relative z-20"
                  style={{
                    animationDelay: '0.8s',
                    animationFillMode: 'forwards',
                    transform: `translateY(${scrollProgress * 15}px)`,
                    transition: 'all 0.1s ease-out'
                  }}
                >
                  <p className={`text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 transition-all duration-300 ${
                    scrollProgress > 0.2 ? 'text-white drop-shadow-lg' : 'text-slate-300'
                  }`} style={{
                    textShadow: scrollProgress > 0.2 ? '1px 1px 4px rgba(0,0,0,0.8)' : 'none'
                  }}>
                    Todo lo que necesitas para comenzar a operar desde hoy
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
                    <span className={`font-medium text-sm sm:text-base lg:text-lg transition-all duration-300 ${
                      scrollProgress > 0.2 ? 'text-slate-200 drop-shadow-lg' : 'text-slate-400'
                    }`} style={{
                      textShadow: scrollProgress > 0.2 ? '1px 1px 4px rgba(0,0,0,0.8)' : 'none'
                    }}>
                      ANTES $1199, AHORA DESDE
                    </span>
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-400" style={{
                      textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(255,165,0,0.3)'
                    }}>
                      $999
                    </span>
                    <span className={`text-sm sm:text-base lg:text-lg transition-all duration-300 ${
                      scrollProgress > 0.2 ? 'text-slate-200 drop-shadow-lg' : 'text-slate-400'
                    }`} style={{
                      textShadow: scrollProgress > 0.2 ? '1px 1px 4px rgba(0,0,0,0.8)' : 'none'
                    }}>
                      *
                    </span>
                  </div>
                  
                  <button className="bg-slate-700 hover:bg-slate-600 text-white font-bold px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-lg text-base sm:text-lg lg:text-xl shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                    Consigue tu oferta
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estilos CSS para animaciones personalizadas */}
      <style jsx>{`
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes slide-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}