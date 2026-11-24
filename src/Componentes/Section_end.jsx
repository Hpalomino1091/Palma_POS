import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FuncionaConLoQueTienes = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const paragraphRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del título - slide down
      gsap.fromTo(
        titleRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animación del subtítulo y párrafo - stagger desde abajo
      gsap.fromTo(
        [subtitleRef.current, paragraphRef.current],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          delay: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animación de los bullets - fade in desde la izquierda
      if (benefitsRef.current) {
        gsap.fromTo(
          benefitsRef.current.children,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.2,
            delay: 0.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: benefitsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Animación del CTA - fade in desde abajo
      gsap.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animación del contenedor de imagen - scale up
      gsap.fromTo(
        imageContainerRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      title: 'Requisitos Mínimos',
      description:
        'Con cualquier equipo con Windows, macOS, Linux o tablet con navegador moderno.',
    },
    {
      title: 'Sin Servidor Local',
      description: 'Cero instalaciones complejas; toda la lógica corre en la nube.',
    },
    {
      title: 'Compatibilidad Total',
      description:
        'Funciona en tablets, móviles y pantallas táctiles sin sacrificar velocidad.',
    },
    {
      title: 'Arranque Instantáneo',
      description: 'Entra a tu panel y comienza a vender en segundos.',
    },
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Transición gradual desde la sección superior */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-br from-slate-50 via-blue-50"></div>

      {/* Fondo principal con degradado azulado */}
      <div className="bg-gradient-to-br from-slate-100 via-blue-50/50 to-blue-100/30 pt-32 pb-20 px-4">
        {/* Elementos decorativos de fondo */}
        <div
          className="absolute inset-0 bg-grid-slate-100/30 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.4))]"
        ></div>
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-slate-200/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl"></div>

        {/* Overlay sutil para unificar */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[0.5px]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contenido textual */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2
                  ref={titleRef}
                  className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-slate-800 bg-clip-text text-transparent leading-tight"
                >
                  Funciona con lo que ya tienes
                </h2>

                <p
                  ref={subtitleRef}
                  className="text-xl lg:text-2xl text-gray-600 font-medium leading-relaxed"
                >
                  Olvídate de invertir en equipos caros. Palma POS corre en tu
                  dispositivo actual.
                </p>

                <p
                  ref={paragraphRef}
                  className="text-lg text-gray-600 leading-relaxed"
                >
                  Nuestro sistema es completamente ligero y no requiere servidores
                  locales. Funciona perfectamente en cualquier navegador moderno.
                  Solo necesitas una computadora, tablet o móvil con conexión a
                  internet.
                </p>
              </div>

              {/* Lista de beneficios */}
              <div ref={benefitsRef} className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group hover:bg-white/95"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-r from-slate-700 to-blue-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div ref={ctaRef}>
                <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-700 to-blue-800 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                  <span>Pruébalo en tu dispositivo</span>
                  <svg
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Contenedor para imagen */}
            <div ref={imageContainerRef} className="relative">
              <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden p-8 flex items-center justify-center min-h-[400px]">
                {/* Placeholder para imagen */}
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                  <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-center">
                    Aquí puedes colocar tu imagen<br />
                    <span className="text-xs text-gray-400">Formatos: WebP, PNG, JPG</span>
                  </p>
                </div>

                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
              </div>

              {/* Etiqueta de dispositivo */}
              <div className="absolute -top-3 left-6 bg-gradient-to-r from-slate-700 to-blue-800 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Compatible con cualquier dispositivo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuncionaConLoQueTienes;