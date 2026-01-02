import Header from './components/Header'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import Menu from './components/Menu'
import Galeria from './components/Galeria'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Nosotros />
      <Menu />
      <Galeria />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
