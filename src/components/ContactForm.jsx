import { useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/ContactForm.scss'

const SERVICE_ID = 'service_2oie90s'
const TEMPLATE_ID = 'template_pnrhak3'        // tu email principal
const REPLY_TEMPLATE_ID = 'template_um9b5ay'  // auto-respuesta
const PUBLIC_KEY = 'klociK9Ho-duQYiMB'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        message: '',
        phone: '' // honeypot invisible
    })
    const [sending, setSending] = useState(false)
    const [statusMessage, setStatusMessage] = useState('')
    const [statusType, setStatusType] = useState('') // 'success' | 'error'

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const sendEmail = (e) => {
        e.preventDefault()

        // honeypot: si se rellena, es spam
        if (formData.phone) return

        setSending(true)
        setStatusMessage('')
        setStatusType('')

        // 1️⃣ Envío principal a tu email
        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
            .then(() => {
                // 2️⃣ Envío de respuesta automática al usuario
                emailjs.send(SERVICE_ID, REPLY_TEMPLATE_ID, formData, PUBLIC_KEY)
                    .then(() => {
                        setStatusMessage('Mensaje enviado con éxito ✔︎')
                        setStatusType('success')
                        setFormData({ from_name: '', reply_to: '', message: '', phone: '' })
                        setSending(false)
                        setTimeout(() => setStatusMessage(''), 5000)
                    })
                    .catch(() => {
                        // si falla la auto-respuesta, no afecta al envío principal
                        setStatusMessage('Mensaje enviado, pero no se pudo enviar la confirmación al usuario ✖︎')
                        setStatusType('error')
                        setFormData({ from_name: '', reply_to: '', message: '', phone: '' })
                        setSending(false)
                        setTimeout(() => setStatusMessage(''), 5000)
                    })
            })
            .catch(() => {
                setStatusMessage('Ocurrió un error al enviar el mensaje ✖︎')
                setStatusType('error')
                setSending(false)
                setTimeout(() => setStatusMessage(''), 5000)
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

            {/* Honeypot invisible */}
            <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{ display: 'none' }}
                autoComplete="off"
            />

            <button type="submit" disabled={sending}>
                {sending ? 'Enviando...' : 'Enviar mensaje'}
            </button>

            {/* Mensaje de estado */}
            {statusMessage && (
                <div className={`status-message ${statusType}`}>
                    {statusMessage}
                </div>
            )}
        </form>
    )
}