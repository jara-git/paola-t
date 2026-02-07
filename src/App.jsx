import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
// import Agenda from './pages/Agenda'
import Docencia from './pages/Docencia'
import About from './pages/About'
import Contact from './pages/Contact'

import './App.css'

export default function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docencia-laboratorio" element={<Docencia />} />
          {/* <Route path="/agenda" element={<Agenda />} /> */}
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}



