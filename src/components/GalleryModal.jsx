import { useState, useEffect } from 'react';
import '../styles/GalleryModal.scss';

export default function GalleryModal({ work, onClose }) {
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        setActiveImage(0);
    }, [work]);

    if (!work) return null;

    // Función para formatear la descripción del poema en estrofas
    const formatDescription = (description) => {
        // Si la descripción es un array (poema con estrofas), ya está bien formateada
        if (Array.isArray(description)) {
            return description.map((line, index) => {
                if (line === '') {
                    return <br key={index} />; // Esto es un salto de línea entre estrofas
                }
                return <p key={index}>{line}</p>;
            });
        }

        // Si la descripción es un solo string, lo dividimos por saltos de línea
        if (typeof description === 'string') {
            const lines = description.split('\n');
            return lines.map((line, index) => {
                if (line === '') {
                    return <br key={index} />; // Salto de línea entre estrofas
                }
                return <p key={index}>{line}</p>;
            });
        }

        return null;
    };

    return (
        <div className="gallery-modal-overlay">
            <div className="gallery-modal-content">
                <button onClick={onClose} className="gallery-modal-close-button">✕</button>
                {/* Título y año */}
                <h2 className="gallery-modal-title">{work.title}</h2>
                <p className="gallery-modal-year">{work.year}</p>

                {/* Descripción (formateada como poema) */}
                {work.description && (
                    <div className="gallery-modal-description">
                        {formatDescription(work.description)}
                    </div>
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
    );
}
