import { useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/ContactForm.scss'

const SERVICE_ID = 'service_2oie90s'
const TEMPLATE_ID = 'template_pnrhak3'
const PUBLIC_KEY = 'klociK9Ho-duQYiMB'

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
            SERVICE_ID,
            TEMPLATE_ID,
            formData,
            PUBLIC_KEY
        )
            .then((response) => {

                console.log('SUCCESS!', response.status, response.text)

                alert('Mensaje enviado con éxito ✔︎')

                setFormData({
                    from_name: '',
                    reply_to: '',
                    message: ''
                })

                setSending(false)

            })
            .catch((error) => {

                console.error('FAILED...', error)

                alert('Ocurrió un error al enviar el mensaje ✖︎')

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