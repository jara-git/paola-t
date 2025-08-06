import { useState, useEffect } from 'react'
import '../styles/GalleryModal.scss'

export default function GalleryModal({ work, onClose }) {
    const [activeImage, setActiveImage] = useState(0)

    useEffect(() => {
        setActiveImage(0)
    }, [work])

    if (!work) return null

    return (
        <div className="gallery-modal-overlay">
            <div className="gallery-modal-content">
                <button onClick={onClose} className="gallery-modal-close-button">✕</button>

                {/* Título y año */}
                <h2 className="gallery-modal-title">{work.title}</h2>
                <p className="gallery-modal-year">{work.year}</p>

                {/* Mini descripción (si hay) */}
                {work.description && (
                    <p className="gallery-modal-description">{work.description}</p>
                )}

                {/* Imágenes: principal + miniaturas */}
                {Array.isArray(work.image) && work.image.length > 0 && (
                    <div className="gallery-modal-images">
                        <img
                            src={work.image[activeImage]}
                            alt={`${work.title} - imagen grande`}
                            className="gallery-modal-image-large"
                        />

                        <div className="gallery-modal-thumbnails">
                            {work.image.map((imgSrc, index) => (
                                <img
                                    key={index}
                                    src={imgSrc}
                                    alt={`${work.title} - thumb ${index + 1}`}
                                    className={`thumbnail ${index === activeImage ? 'active' : ''}`}
                                    onClick={() => setActiveImage(index)}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Video (si hay) */}
                {work.video && (
                    <div className="gallery-modal-video">
                        <video controls>
                            <source src={work.video} type="video/mp4" />
                            Tu navegador no soporta el video.
                        </video>
                    </div>
                )}

                {/* Créditos (opcional) */}
                {work.credits && work.credits.length > 0 && (
                    <div className="gallery-modal-credits">
                        <h3>Créditos</h3>
                        <ul>
                            {work.credits.map((item, index) => (
                                <li key={index}>
                                    <strong>{item.role}:</strong> {item.value}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Dossier (PDF) */}
                {work.dossierUrl && (
                    <div className="gallery-modal-dossier">
                        <a href={work.dossierUrl} target="_blank" rel="noopener noreferrer">
                            Ver dossier PDF
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}
