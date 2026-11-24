import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 opacity-50"></div>
      
      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">
                P
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                PalmaPOS
              </h3>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Sistema de punto de venta moderno y eficiente. Funciona con lo que ya tienes, sin complicaciones.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {['Inicio', 'Productos', 'Precios', 'Soporte', 'Blog', 'Contacto'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors duration-200 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-px bg-blue-400 transition-all duration-200 mr-0 group-hover:mr-3"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Servicios</h4>
            <ul className="space-y-3">
              {['Sistema POS', 'Inventario', 'Reportes', 'Integración', 'Capacitación', 'Mantenimiento'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-slate-300 hover:text-purple-400 transition-colors duration-200 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-px bg-purple-400 transition-all duration-200 mr-0 group-hover:mr-3"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-10 h-10 bg-slate-700 group-hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200 mt-1">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-slate-300 leading-relaxed">
                    Puerto Vallarta, Jalisco<br />
                    México
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-slate-700 group-hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <Phone size={18} />
                </div>
                <a href="tel:+52" className="text-slate-300 hover:text-green-400 transition-colors duration-200">
                  +52 (322) 000-0000
                </a>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-slate-700 group-hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                  <Mail size={18} />
                </div>
                <a href="mailto:info@palmapos.com" className="text-slate-300 hover:text-purple-400 transition-colors duration-200">
                  info@palmapos.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-12 border-t border-slate-700">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mantente Actualizado
            </h4>
            <p className="text-slate-300 mb-6">
              Recibe las últimas noticias y actualizaciones sobre PalmaPOS
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-slate-700 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-slate-400">
              <p>&copy; 2024 PalmaPOS. Todos los derechos reservados.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">Política de Privacidad</a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">Términos de Uso</a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">Cookies</a>
              </div>
            </div>
            
            {/* Scroll to top button */}
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg group"
              aria-label="Volver arriba"
            >
              <ArrowUp size={20} className="group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;