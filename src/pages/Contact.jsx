import { useState } from 'react'
import '../styles/Contact.scss'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Aquí puedes integrar un servicio como EmailJS, Formspree, etc.
        console.log('Formulario enviado:', formData)
        alert('Mensaje enviado')
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <div className="contact-container">
            <h2>Contacto</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Escribe tu mensaje..."
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <button type="submit" className="cta-button">Enviar mensaje</button>
            </form>

            <div className="contact-details">
                <p><strong>Teléfono:</strong> <a href="tel:+34123456789">+34 123 456 789</a></p>
                <p><strong>WhatsApp:</strong> <a href="https://wa.me/34123456789" target="_blank" rel="noopener noreferrer">+34 123 456 789</a></p>
                <p><strong>Email:</strong> <a href="mailto:contacto@ejemplo.com">contacto@ejemplo.com</a></p>
            </div>
        </div>
    )
}

  