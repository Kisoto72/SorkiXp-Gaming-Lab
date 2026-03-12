import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const Home = () => <h1>Esta es la pagina principal</h1>;
const PlatinosPage = () => <h1>Aquí hablo de los platinos que he conseguido</h1>;
const JuegosPage = () => <h1>Juegos que he jugado</h1>;
const ProyectosPage = () => <h1>Futuros proyectos y en desarrollo</h1>;

function App() {
  const [titulo, setTitulo] = useState("SorkiXP Gaming Lab");
  const Proyectos = ["Platinos", "Juegos", "Proyectos"];

  return (
    <>

      <BrowserRouter>
        <div className='container'>
          <header className='header'>
            <h1>SorkiXP Gaming Lab</h1>
          </header>

          <nav>
            <Link to="/">Inicio</Link>
            {Proyectos.map((nombre, index) => (
              <Link key={index} to={`/${nombre.toLowerCase()}`}>
                {nombre}
              </Link>
            ))}
          </nav>
          <div className='ventana'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Platinos' element={<PlatinosPage />} />
              <Route path='/Juegos' element={<JuegosPage />} />
              <Route path='/Proyectos' element={<ProyectosPage />} />
            </Routes>
          </div>

        </div>
      </BrowserRouter>

    </>

  )
}

export default App
