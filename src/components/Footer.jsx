import '../styles/Footer.scss'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <p className="footer__text">© {new Date().getFullYear()} Paola T. Todos los derechos reservados.</p>
                <p className="footer__small">
                    <a target="_blank" rel="noopener noreferrer" href='https://jara-portfolio.netlify.app/'>Hecho con 💜 desde Zúrich</a>
                </p>
            </div>
        </footer>
    )
}
