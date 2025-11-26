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
        if (Array.isArray(description)) {
            return description.map((line, index) => {
                if (line === '') return <br key={index} />;
                return <p key={index}>{line}</p>;
            });
        }
        if (typeof description === 'string') {
            const lines = description.split('\n');
            return lines.map((line, index) => {
                if (line === '') return <br key={index} />;
                return <p key={index}>{line}</p>;
            });
        }
        return null;
    };

    // Función para generar iframe de YouTube o Vimeo
    const renderVideo = (videoUrl) => {
        if (videoUrl.includes('youtu')) {
            const embedUrl = videoUrl
                .replace('youtu.be/', 'www.youtube.com/embed/')
                .replace('watch?v=', 'embed/');
            return (
                <iframe
                    width="100%"
                    height="360"
                    src={embedUrl}
                    title={work.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            );
        } else if (videoUrl.includes('vimeo')) {
            const embedUrl = videoUrl.replace('vimeo.com', 'player.vimeo.com/video');
            return (
                <iframe
                    width="100%"
                    height="360"
                    src={embedUrl}
                    title={work.title}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                ></iframe>
            );
        } else {
            // Video local o directo
            return (
                <video controls>
                    <source src={videoUrl} type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>
            );
        }
    };

    return (
        <div className="gallery-modal-overlay">
            <div className="gallery-modal-content">
                <button onClick={onClose} className="gallery-modal-close-button">✕</button>

                {/* Título y año */}
                <h2 className="gallery-modal-title">{work.title}</h2>
                <p className="gallery-modal-year">{work.year}</p>

                {/* Descripción */}
                {work.description && (
                    <div className="gallery-modal-description">
                        {formatDescription(work.description)}
                    </div>
                )}

                {/* Imágenes */}
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

                {/* Video */}
                {work.video && (
                    <div className="gallery-modal-video">
                        {renderVideo(work.video)}
                    </div>
                )}

                {/* Créditos */}
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

                {/* Dossier */}
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
