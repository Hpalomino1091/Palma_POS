import React, { useEffect, useRef, useState } from "react";

export default function ComputerSection() {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [internalScroll, setInternalScroll] = useState(0);
  const [hasScrolledThrough, setHasScrolledThrough] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar dispositivo móvil
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Lógica de scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (!sectionRef.current || isMobile) return;

      const sectionTop = sectionRef.current.offsetTop;
      const vh = window.innerHeight;
      const moveEnd = sectionTop + vh;

      if (currentScrollY < sectionTop) {
        setHasScrolledThrough(false);
      }

      const inLockZone = currentScrollY >= sectionTop && currentScrollY < moveEnd;
      const shouldLock = inLockZone && !hasScrolledThrough;

      if (shouldLock && !isLocked) {
        setInternalScroll(currentScrollY - sectionTop);
        setIsLocked(true);
        document.body.style.overflow = "hidden";
      }

      if (currentScrollY >= moveEnd && !hasScrolledThrough) {
        setHasScrolledThrough(true);
        if (isLocked) {
          setIsLocked(false);
          document.body.style.overflow = "auto";
        }
      }

      if (isLocked && (currentScrollY < sectionTop || hasScrolledThrough)) {
        setIsLocked(false);
        document.body.style.overflow = "auto";
        if (currentScrollY < sectionTop) {
          setInternalScroll(0);
        }
      }
    };

    const handleWheel = (e) => {
      if (!isLocked || isMobile) return;
      e.preventDefault();

      const vh = window.innerHeight;
      const maxInternalScroll = vh;
      const delta = e.deltaY;

      setInternalScroll((prev) => {
        const newScroll = prev + delta * 2;

        if (newScroll >= maxInternalScroll) {
          setIsLocked(false);
          setHasScrolledThrough(true);
          document.body.style.overflow = "auto";
          return maxInternalScroll;
        }

        if (newScroll <= 0) {
          setIsLocked(false);
          document.body.style.overflow = "auto";
          return 0;
        }

        return Math.max(0, Math.min(newScroll, maxInternalScroll));
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflow = "auto";
    };
  }, [isLocked, hasScrolledThrough, isMobile]);

  // Cálculos de progreso
  const sectionTop = sectionRef.current ? sectionRef.current.offsetTop : 0;
  const vh = window.innerHeight;
  const effectiveScroll = isLocked && !isMobile ? sectionTop + internalScroll : scrollY;

  const zoomStart = sectionTop;
  const zoomEnd = sectionTop + vh * 0.4;
  const zoomProgress = Math.max(0, Math.min((effectiveScroll - zoomStart) / (zoomEnd - zoomStart), 1));

  const moveStart = sectionTop + vh * 0.2;
  const moveEnd = sectionTop + vh * 1.0;
  let moveProgress = Math.max(0, Math.min((effectiveScroll - moveStart) / (moveEnd - moveStart), 1));

  if (hasScrolledThrough) {
    moveProgress = 1;
  }

  // Función para crear transformaciones
  const createTransform = (translateZ, translateX = 0, translateY = 0, rotateX = 0, scale = 1) => {
    const mobileMultiplier = isMobile ? 0.6 : 1;
    return {
      transform: `
        translateZ(${translateZ * mobileMultiplier}px)
        translateX(${translateX * mobileMultiplier}px)
        translateY(${translateY * mobileMultiplier}px)
        rotateX(${rotateX}deg)
        scale(${scale})
      `,
      transition: "transform 0.4s ease-out",
    };
  };

  // Transformaciones simplificadas
  const getTransforms = () => {
    const baseScale = isMobile ? 0.7 : 1;
    
    if (moveProgress > 0) {
      return {
        computer: createTransform(
          100 - moveProgress * 60,
          0,
          -20 + moveProgress * 15,
          -3 + moveProgress * 2,
          baseScale * (0.9 + moveProgress * 0.15)
        ),
        keyboard: createTransform(
          100 - moveProgress * 60,
          0,
          30 + moveProgress * 12,
          -1.5 + moveProgress * 1.5,
          baseScale * (0.95 + moveProgress * 0.15)
        ),
        mouse: createTransform(
          100 - moveProgress * 60,
          0,
          25 + moveProgress * 8,
          0,
          baseScale * (0.95 + moveProgress * 0.15)
        ),
      };
    } else {
      return {
        computer: createTransform(
          zoomProgress * 100,
          0,
          -zoomProgress * 20,
          -zoomProgress * 3,
          baseScale * (0.7 + zoomProgress * 0.2)
        ),
        keyboard: createTransform(
          zoomProgress * 60,
          0,
          zoomProgress * 8,
          -zoomProgress * 1.5,
          baseScale * (0.8 + zoomProgress * 0.15)
        ),
        mouse: createTransform(
          zoomProgress * 40,
          zoomProgress * 15,
          zoomProgress * 3,
          0,
          baseScale * (0.8 + zoomProgress * 0.15)
        ),
      };
    }
  };

  const transforms = getTransforms();

  return (
    <div
      ref={sectionRef}
      className="min-h-[120vh] sm:min-h-[150vh] bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex flex-col justify-center relative overflow-hidden"
      style={{ 
        perspective: isMobile ? "800px" : "1500px", 
        transformStyle: "preserve-3d" 
      }}
    >
      {/* Fondo geométrico */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: isMobile ? '30px 30px' : '50px 50px'
          }}
        />
        <div className={`absolute top-10 right-10 ${isMobile ? 'w-40 h-40' : 'w-80 h-80'} bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl`} />
        <div className={`absolute bottom-10 left-10 ${isMobile ? 'w-40 h-40' : 'w-80 h-80'} bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl`} />
      </div>

      {/* Contenedor principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Títulos */}
        <div
          className="text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-500"
          style={{
            opacity: Math.max(0, 1 - moveProgress * 1.2),
            transform: `translateY(${moveProgress * -100}px) scale(${1 - moveProgress * 0.1})`,
          }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-slate-800 bg-clip-text text-transparent mb-4 sm:mb-6 px-4">
            La solución completa en punto de venta
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
            Controla todo tu negocio desde una interfaz potente, moderna y elegante
          </p>
        </div>

        {/* Layout principal */}
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[50vh] sm:min-h-[60vh] gap-8 lg:gap-16">
          {/* Computadora 3D */}
          <div className="w-full lg:flex-1 flex justify-center px-4 sm:px-8 order-2 lg:order-1">
            <div className="relative" style={{ transformStyle: "preserve-3d" }}>
              {/* Monitor */}
              <div className="relative z-30" style={transforms.computer}>
                <div className={`bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl p-2 sm:p-3 shadow-2xl ${
                  isMobile ? 'w-[280px] h-[180px]' : 'w-[320px] h-[220px] sm:w-[420px] sm:h-[280px]'
                } border border-slate-700`}>
                  {/* Pantalla (vacía para futuras imágenes) */}
                  <div className="bg-white rounded-lg w-full h-full relative overflow-hidden shadow-inner border-2 border-slate-200">
                    {/* Barra superior */}
                    <div className={`absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 ${
                      isMobile ? 'h-8' : 'h-10 sm:h-12'
                    } flex items-center px-2 sm:px-4 rounded-t-lg`}>
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <div className={`${isMobile ? 'w-1.5 h-1.5' : 'w-2 h-2 sm:w-2.5 sm:h-2.5'} bg-red-500 rounded-full`} />
                        <div className={`${isMobile ? 'w-1.5 h-1.5' : 'w-2 h-2 sm:w-2.5 sm:h-2.5'} bg-yellow-500 rounded-full`} />
                        <div className={`${isMobile ? 'w-1.5 h-1.5' : 'w-2 h-2 sm:w-2.5 sm:h-2.5'} bg-green-500 rounded-full`} />
                      </div>
                      <div className="flex-1 text-center">
                        <span className={`text-white font-bold ${isMobile ? 'text-xs' : 'text-sm sm:text-base'}`}>Palma POS</span>
                      </div>
                    </div>
                    
                    {/* Área de contenido vacía para futuras imágenes */}
                    <div className={`${isMobile ? 'pt-10' : 'pt-12 sm:pt-16'} w-full h-full flex items-center justify-center`}>
                      <div className="text-slate-400 text-center">
                        <div className={`${isMobile ? 'text-xs' : 'text-sm'}`}>Contenido aquí</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Base del monitor */}
                  <div className={`${isMobile ? 'w-20 h-1.5' : 'w-24 h-2 sm:w-32 sm:h-2.5'} bg-gradient-to-b from-slate-600 to-slate-700 mx-auto rounded-b-lg mt-1 sm:mt-2`} />
                  <div className={`${isMobile ? 'w-12 h-3' : 'w-16 h-4 sm:w-20 sm:h-6'} bg-gradient-to-b from-slate-700 to-slate-800 mx-auto rounded-lg mt-1 sm:mt-1.5`} />
                </div>
              </div>

              {/* Teclado */}
              <div
                className={`absolute ${isMobile ? '-bottom-12' : '-bottom-16 sm:-bottom-20'} left-1/2 -translate-x-1/2 z-40`}
                style={transforms.keyboard}
              >
                <div className={`bg-gradient-to-b from-slate-100 to-slate-200 rounded-xl p-1.5 sm:p-2.5 shadow-xl ${
                  isMobile ? 'w-56 h-14' : 'w-64 h-16 sm:w-80 sm:h-20'
                } border border-slate-300`}>
                  <div className="grid grid-cols-15 gap-0.5 sm:gap-1 h-full">
                    {Array.from({ length: 60 }, (_, i) => (
                      <div
                        key={i}
                        className="bg-gradient-to-b from-white to-slate-100 rounded border border-slate-200"
                        style={{
                          gridColumn: 
                            i === 14 || i === 28 || i === 42 ? "span 2" : 
                            i === 56 ? "span 4" : "span 1",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Mouse */}
              <div
                className={`absolute ${isMobile ? '-bottom-14 -right-12' : '-bottom-16 -right-16 sm:-bottom-18 sm:-right-20'} z-40`}
                style={transforms.mouse}
              >
                <div className={`bg-gradient-to-b from-slate-200 to-slate-300 rounded-xl ${
                  isMobile ? 'w-10 h-18' : 'w-12 h-20 sm:w-14 sm:h-24'
                } shadow-xl relative border border-slate-400`}>
                  <div className={`absolute ${isMobile ? 'top-2' : 'top-2 sm:top-2.5'} left-1/2 -translate-x-1/2 ${
                    isMobile ? 'w-6 h-10' : 'w-7 h-12 sm:w-8 sm:h-14'
                  } bg-gradient-to-b from-slate-300 to-slate-400 rounded-lg`} />
                  <div className={`absolute ${isMobile ? 'top-2.5' : 'top-2.5 sm:top-3'} left-1/2 -translate-x-1/2 w-0.5 ${
                    isMobile ? 'h-4' : 'h-5 sm:h-6'
                  } bg-slate-500 rounded-full`} />
                </div>
              </div>
            </div>
          </div>

          {/* Panel de información */}
          <div
            className="w-full lg:flex-1 lg:max-w-xl transition-all duration-1000 ease-out px-4 order-1 lg:order-2"
            style={{
              opacity: isMobile ? 1 : Math.max(0, moveProgress * 1.2 - 0.2),
              transform: isMobile ? 'translateX(0)' : `translateX(${Math.max(-50, (1 - moveProgress) * 150)}px)`,
            }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20">
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-4 sm:mb-6">
                Potencia tu negocio
              </h3>
              <p className="text-slate-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                Palma POS te ofrece todas las herramientas que necesitas para hacer crecer tu negocio.
              </p>

              {/* Lista de características */}
              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: "📊", title: "Gestión de inventario", desc: "Control total en tiempo real" },
                  { icon: "💳", title: "Pagos integrados", desc: "Todos los métodos de pago" },
                  { icon: "📈", title: "Reportes en tiempo real", desc: "Dashboards inteligentes" },
                  { icon: "🎯", title: "Interfaz intuitiva", desc: "Fácil de usar" },
                  { icon: "📱", title: "Acceso desde cualquier dispositivo", desc: "Controla desde donde estés" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-slate-50/50 to-white/50 hover:from-blue-50/50 hover:to-indigo-50/50 transition-all duration-500"
                    style={{
                      opacity: isMobile ? 1 : moveProgress,
                      transform: isMobile ? 'translateY(0)' : `translateY(${(1 - moveProgress) * 30}px)`,
                      transitionDelay: `${index * 150}ms`,
                    }}
                  >
                    <div className="text-xl sm:text-2xl mt-1">{feature.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-800 mb-1 text-sm sm:text-base">{feature.title}</h4>
                      <p className="text-slate-600 text-xs sm:text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
               
              
            {/* Sección de tarjetas */}        
            <div
              className="mt-16 sm:mt-24 lg:mt-32 transition-all duration-1000 ease-out"
              style={{
                opacity: isMobile ? 1 : moveProgress,
                transform: isMobile ? 'translateY(0)' : `translateY(${(1 - moveProgress) * 50}px)`,
              }}
            >
              <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30 rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl">
                <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-800 bg-clip-text text-transparent">
                    ¿Por qué elegir Palma POS?
                  </h3>
                  <p className="text-slate-600 text-lg sm:text-xl max-w-3xl mx-auto bg-transparent">
                    La solución integral que tu negocio necesita
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                  {[
                    {
                      number: "01",
                      title: "Implementación Rápida",
                      desc: "Configuración en menos de 24 horas",
                      gradient: "from-blue-50 to-indigo-50",
                    },
                    {
                      number: "02",
                      title: "Soporte 24/7",
                      desc: "Asistencia técnica disponible siempre",
                      gradient: "from-emerald-50 to-teal-50",
                    },
                    {
                      number: "03",
                      title: "Actualizaciones Incluidas",
                      desc: "Mejoras sin costo adicional",
                      gradient: "from-slate-50 to-gray-50",
                    },
                  ].map((point, index) => (
                    <div
                      key={point.number}
                      className={`p-10 sm:p-16 rounded-2xl bg-gradient-to-br ${point.gradient} border-2 border-slate-200/50 hover:border-slate-300/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl`}
                      style={{
                        transform: isMobile ? 'translateY(0)' : `translateY(${(1 - moveProgress) * 30}px)`,
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="text-center">
                        <div className="text-4xl sm:text-5xl font-light mb-6 text-slate-600">
                          {point.number}
                        </div>
                        <h4 className="font-bold mb-4 text-xl sm:text-2xl text-slate-800">
                          {point.title}
                        </h4>
                        <p className="text-slate-600 text-sm sm:text-base">
                          {point.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
      </div>
    </div>
  );
}