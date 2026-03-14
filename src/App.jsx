import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import clickSound from './assets/resident-evil-2-inventario.wav';
import platino1 from './assets/platino1.jpg';
const Home = () => <div className='ventana-inicio'> <h2 className='info'>Este es el inicio de mi pagina, en este intento de pagina web hablare sobre mis juegos platinados y los que platinare en un futuro, sobre los juegos que he jugado, los que abandone y porque. Y sobre futuros proyectos que tenga en mente.</h2> </div>;
const PlatinosPage = () => (<> <div className='ventana-platino'> <h2 className='info'>Aquí hablo de los platinos que he conseguido</h2></div>
  <div className='platino1'>
    <h2 className='resident'>
      Platino de Resident Evil 2 Remake
    </h2>
    <img className='img-plantino1' src={platino1} alt="PlatinoResidentEvil2" />
    <p className='platino1-info'>
      El primer platino que hablare sera de resident evil 2 remake... Este es el platino más reciente que obtuve en mi cuenta de PlayStation4. 
      <br />

    </p>
  </div>
</>);
const JuegosPage = () => <div className='ventana-juegos'> <h2 className='info'>Juegos que he jugado</h2></div>;
const ProyectosPage = () => <div className='ventana-proyectos'> <h2 className='info'>Futuros proyectos y en desarrollo</h2></div>;
const clickAudio = new Audio(clickSound);
clickAudio.preload = "auto";
clickAudio.volume = 0.5;

function App() {
  const [titulo, setTitulo] = useState("SorkiXP Gaming Lab");
  const Proyectos = ["Platinos", "Juegos", "Proyectos"];
  const playClick = () => {
    console.log("intentando que suene");
    clickAudio.currentTime = 0;
    clickAudio.play();
    clickAudio.play().then(() => console.log("Sonando")).catch(e => console.log("navegador bloqueo audio", e));
  }
  return (
    <>

      <BrowserRouter>

        <header className='header'>
          <h1>SorkiXP Gaming Lab</h1>
        </header>

        <nav>
          <Link to="/" onClick={playClick}>Inicio</Link>
          {Proyectos.map((nombre, index) => (
            <Link key={index} to={`/${nombre.toLowerCase()}`}
              onClick={playClick}
            >
              {nombre}
            </Link>
          ))}
        </nav>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Platinos' element={<PlatinosPage />} />
            <Route path='/Juegos' element={<JuegosPage />} />
            <Route path='/Proyectos' element={<ProyectosPage />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>

  )
}

export default App
