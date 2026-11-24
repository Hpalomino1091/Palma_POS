import Header        from "./Componentes/Header.jsx";
import Hero          from "./Componentes/Hero.jsx";
import ScrollRotate3D from "./Componentes/information.jsx";
import "./App.css";
import ComputerSection from "./Componentes/Computadora3D.jsx";
import Section_end from "./Componentes/Section_end.jsx";
import Footer from "./Componentes/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="flex justify-center w-full">   
        <Hero />                                      
      </main>
      <ScrollRotate3D />
      <ComputerSection/>
      <Section_end/>     
      <Footer/>    
     

    </>
  );
}
