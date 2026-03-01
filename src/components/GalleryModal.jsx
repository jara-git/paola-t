// GalleryModal.jsx
import { useState, useEffect } from 'react';
import '../styles/GalleryModal.scss';

export default function GalleryModal({ work, onClose, onNavigate, isFirst, isLast }) {
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        setActiveImage(0);
    }, [work]);

    if (!work) return null;

    const videoCompletoLink = work.credits?.find(item =>
        item.role.toLowerCase().includes('enlace a video completo') ||
        item.role.toLowerCase().includes('video completo') ||
        item.value?.includes('youtu')
    )?.value;

    const normalCredits = work.credits?.filter(item => item !== videoCompletoLink);

    const laboratorioLink = work.credits?.find(item =>
        item.role.toLowerCase().includes('docencia') ||
        item.role.toLowerCase().includes('laboratorio')
    )?.value;

    const formatDescription = (description) => {
        if (Array.isArray(description)) {
            return description.map((line, index) => line === '' ? <br key={index} /> : <p key={index}>{line}</p>);
        }
        if (typeof description === 'string') {
            const lines = description.split('\n');
            return lines.map((line, index) => line === '' ? <br key={index} /> : <p key={index}>{line}</p>);
        }
        return null;
    };

    const renderVideo = (videoUrl) => {
        if (videoUrl.includes('youtu')) {
            const embedUrl = videoUrl
                .replace('youtu.be/', 'www.youtube.com/embed/')
                .replace('watch?v=', 'embed/');
            return <iframe width="100%" height="360" src={embedUrl} title={work.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>;
        } else if (videoUrl.includes('vimeo')) {
            const embedUrl = videoUrl.replace('vimeo.com', 'player.vimeo.com/video');
            return <iframe width="100%" height="360" src={embedUrl} title={work.title} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>;
        } else {
            return (
                <video controls>
                    <source src={videoUrl} type="video/mp4" />
                    Tu navegador no soporta el video.
                </video>
            );
        }
    };

    return (
        <div className="gallery-modal-overlay" onClick={onClose}>
            <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="gallery-modal-close-button">✕</button>

                {/* Navegación editorial */}
                <div className="gallery-modal-navigation">
                    <button onClick={() => onNavigate('prev')} disabled={isFirst}>← obra anterior</button>
                    <button onClick={() => onNavigate('next')} disabled={isLast}>obra siguiente →</button>
                </div>

                <h2 className="gallery-modal-title">{work.title}</h2>
                <p className="gallery-modal-year">{work.year}</p>

                {work.description && <div className="gallery-modal-description">{formatDescription(work.description)}</div>}

                {Array.isArray(work.image) && work.image.length > 0 && (
                    <div className="gallery-modal-images">
                        <img src={work.image[activeImage]} alt={`${work.title} - imagen grande`} className="gallery-modal-image-large" />
                        <div className="gallery-modal-thumbnails">
                            {work.image.map((imgSrc, index) => (
                                <img key={index} src={imgSrc} alt={`${work.title} - thumb ${index + 1}`} className={`thumbnail ${index === activeImage ? 'active' : ''}`} onClick={() => setActiveImage(index)} />
                            ))}
                        </div>
                    </div>
                )}

                {work.video && <div className="gallery-modal-video">{renderVideo(work.video)}</div>}

                {videoCompletoLink && (
                    <div className="gallery-modal-video-link">
                        <a href={videoCompletoLink} target="_blank" rel="noopener noreferrer" className="video-completo-link" onClick={e => e.stopPropagation()}>
                            Vídeo completo
                        </a>
                    </div>
                )}

                {laboratorioLink && (
                    <div className="gallery-modal-lab-link">
                        <a href={laboratorioLink} target="_blank" rel="noopener noreferrer" className="video-completo-link" onClick={e => e.stopPropagation()}>
                            Docencia / Laboratorio
                        </a>
                    </div>
                )}

                {normalCredits && normalCredits.length > 0 && (
                    <div className="gallery-modal-credits">
                        <h3>Créditos</h3>
                        {normalCredits.map((item, index) => (
                            <p key={index}><strong>{item.role}:</strong> {item.value}</p>
                        ))}
                    </div>
                )}

                {work.externalLinks && work.externalLinks.length > 0 && (
                    <div className="gallery-modal-external-links">
                        {work.externalLinks.map((link, index) => (
                            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="external-link">{link.label}</a>
                        ))}
                    </div>
                )}

                {work.dossierUrl && (
                    <div className="gallery-modal-dossier">
                        <a href={work.dossierUrl} target="_blank" rel="noopener noreferrer">Ver dossier PDF</a>
                    </div>
                )}
            </div>
        </div>
    );
}