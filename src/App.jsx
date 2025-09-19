import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Nav from "./Components/Nav";
import Index from "./Pages/Index";
import CarDetails from "./Pages/CarDetails";
import Footer from "./Components/Footer";



function App() {
  useEffect(() => {
    // Inicializamos Lenis para el efecto de scroll suave
    const lenis = new Lenis({
      duration: 1.2,        // Duración de la animación
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Función de easing
      direction: 'vertical', // Dirección del scroll
      gestureDirection: 'vertical', // Dirección del gesto
      smooth: true,         // Habilitar scroll suave
      mouseMultiplier: 1,   // Multiplicador del mouse
      smoothTouch: false,   // Deshabilitar en touch devices
      touchMultiplier: 2,   // Multiplicador del touch
      infinite: false,      // No infinito
    });

    // Función para el bucle de animación
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Iniciar el bucle
    requestAnimationFrame(raf);

    // Limpiar al desmontar
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/car/:id" element={<CarDetails />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
