import { useEffect, useRef, useState } from 'react'
import '../styles/GalleryItem.scss'

export default function GalleryItem({ work, onClick }) {
    const [isActive, setIsActive] = useState(false)
    const itemRef = useRef(null)

    const handleTouchOrClick = (e) => {
        const isMobile = window.matchMedia('(hover: none)').matches

        if (isMobile) {
            if (!isActive) {
                e.preventDefault()
                e.stopPropagation()
                setIsActive(true) // primer toque → muestra overlay
            } else {
                onClick()         // segundo toque → acción normal
            }
        } else {
            onClick()           // desktop → acción normal
        }
    }

    // Cerrar al tocar fuera
    useEffect(() => {
        if (!isActive) return
        const handler = (e) => {
            if (itemRef.current && !itemRef.current.contains(e.target)) {
                setIsActive(false)
            }
        }
        document.addEventListener('click', handler, { capture: true })
        return () => document.removeEventListener('click', handler, { capture: true })
    }, [isActive])

    return (
        <div
            ref={itemRef}
            className={`gallery-item ${isActive ? 'active' : ''}`}
            onClick={handleTouchOrClick}
        >
            <img
                src={Array.isArray(work.image) ? work.image[0] : work.image}
                alt={work.title}
            />

            <div className="caption">
                <h3>{work.title}</h3>
                <p>{work.year}</p>
            </div>
        </div>
    )
}
