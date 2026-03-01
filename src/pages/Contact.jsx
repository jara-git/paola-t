import ContactForm from '../components/ContactForm'
import '../styles/Contact.scss'
import AnimatedTitle from '../components/AnimatedTitle';

export default function Contact() {
    return (
        <div className="contact-container">
            <AnimatedTitle text="Contacto" />
            <ContactForm />
            <div className="contact-details">
                <p><strong>Teléfono:</strong> <a href="tel:+34606630190">+34 606 630 190</a></p>
                <p><strong>WhatsApp:</strong> <a href="https://wa.me/34606630190" target="_blank" rel="noopener noreferrer">+34 606 630 190</a></p>
                <p><strong>Email:</strong> <a href="mailto:paolat610@yahoo.es">paolat610@yahoo.es</a></p>
            </div>
        </div>
    )
}

