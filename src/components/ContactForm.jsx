import { useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/ContactForm.scss'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        message: ''
    })

    const [sending, setSending] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const sendEmail = (e) => {
        e.preventDefault()
        setSending(true)

        emailjs.send(
            'service_6h6xncx',       // cambia al Service ID tuyo
            'template_npk2vai',      // cambia al Template ID tuyo
            formData,
            'aQ3gFB9I1AeyFCOeJ'     // cambia al Public Key tuyo
        ).then(
            (result) => {
                alert('Mensaje enviado con éxito ✔︎')
                setFormData({ from_name: '', reply_to: '', message: '' })
                setSending(false)
            },
            (error) => {
                alert('Ocurrió un error ✖︎')
                setSending(false)
            }
        )
    }

    return (
        <form onSubmit={sendEmail} className="contact-form">
            <label>Nombre</label>
            <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
            />

            <label>Email</label>
            <input
                type="email"
                name="reply_to"
                value={formData.reply_to}
                onChange={handleChange}
                required
            />

            <label>Mensaje</label>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={10} // para que sea más grande y cómodo el cuadro de enviar textp
            />

            <button type="submit" disabled={sending} className="cta-button">
                {sending ? 'Enviando...' : 'Enviar mensaje'}
            </button>
        </form>
    )
}
