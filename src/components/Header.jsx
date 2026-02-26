import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '/assets/logo.svg'
import '../styles/Header.scss'
import { Instagram } from "lucide-react";

export default function Header() {
    const location = useLocation()
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(!menuOpen)
    const closeMenu = () => setMenuOpen(false)

    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/" onClick={closeMenu}>
                    <img src={logo} alt="Paola T. logo" />
                </Link>
            </div>

            <button className="header__toggle" onClick={toggleMenu} aria-label="Abrir menú">
                ☰
            </button>

            <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
                <Link
                    to="/"
                    onClick={closeMenu}
                    className={`header__link${location.pathname === '/' ? ' header__link--active' : ''}`}
                >
                    Home
                </Link>
                <Link
                    to="/docencia-laboratorio"
                    onClick={closeMenu}
                    className={`header__link${location.pathname === '/docencia-laboratorio'
                            ? ' header__link--active'
                            : ''
                        }`}
                >
                    Docencia / Laboratorio
                </Link>

                {/* <Link
                    to="/agenda"
                    onClick={closeMenu}
                    className={`header__link${location.pathname === '/agenda' ? ' header__link--active' : ''}`}
                >
                    Agenda
                </Link> */}
                <Link
                    to="/sobre-mi"
                    onClick={closeMenu}
                    className={`header__link${location.pathname === '/sobre-mi' ? ' header__link--active' : ''}`}
                >
                    Sobre mí
                </Link>
                <Link
                    to="/contacto"
                    onClick={closeMenu}
                    className={`header__link${location.pathname === '/contacto' ? ' header__link--active' : ''}`}
                >
                    Contacto
                </Link>
                <a
                    href="https://instagram.com/paolat.danzalab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="header__instagram"
                >
                    <Instagram size={18} />
                </a>
            </nav>
        </header>
    )
}
