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
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const sendEmail = (e) => {
        e.preventDefault()
        setSending(true)

        emailjs.send(
            'service_6h6xncx',
            'template_npk2vai',
            formData,
            'aQ3gFB9I1AeyFCOeJ'
        )
            .then(() => {

                alert('Mensaje enviado con éxito ✔︎')

                setFormData({
                    from_name: '',
                    reply_to: '',
                    message: ''
                })

                setSending(false)

            })
            .catch(() => {

                alert('Ocurrió un error ✖︎')

                setSending(false)

            })
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
                rows={10}
                required
            />

            <button type="submit" disabled={sending}>
                {sending ? 'Enviando...' : 'Enviar mensaje'}
            </button>

        </form>
    )
}