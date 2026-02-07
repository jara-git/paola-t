import '../styles/Docencia.scss'
import AnimatedTitle from '../components/AnimatedTitle'
import works from '../data/works'
import { useState } from 'react'
import GalleryModal from '../components/GalleryModal'
import Masonry from 'react-masonry-css'

export default function Docencia() {
    const laboratorio = works.find(work => work.title === "Laboratorio")
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(0)

    const openModal = (index) => {
        setSelectedImage(index)
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
        setSelectedImage(0)
    }

    // Breakpoints idénticos a los de la home
    const breakpointCols = {
        default: 3,
        1280: 3,
        1024: 2,
        600: 1
    }

    return (
        <section className="docencia">
            {/* HEADER */}
            <header className="docencia-header">
                <AnimatedTitle text="FOLKCORP LAB" />
                <h2>Laboratorio de investigación y creación en flamenco contemporáneo y folklore</h2>
            </header>

            {/* CUADRÍCULA DE IMÁGENES (igual que la home) */}
            {laboratorio && (
                <div className="gallery-wrapper">
                    <div className="gallery-inner">
                        <Masonry
                            breakpointCols={breakpointCols}
                            className="gallery-grid"
                            columnClassName="gallery-column"
                        >
                            {laboratorio.image.map((imgSrc, index) => (
                                <div
                                    key={index}
                                    className="gallery-item"
                                    onClick={() => openModal(index)}
                                >
                                    <img src={imgSrc} alt={`Laboratorio ${index + 1}`} />
                                </div>
                            ))}
                        </Masonry>
                    </div>
                </div>
            )}

            {/* INTRO */}
            <section className="docencia-intro">
                <p>
                    FOLKCORP LAB es un laboratorio de investigación y creación escénica que se centra
                    en renovar la perspectiva del flamenco dentro del pensamiento contemporáneo y
                    las nuevas prácticas de las Artes Vivas.
                </p>
                <p>
                    El laboratorio propone un espacio de encuentro práctico entre distintos agentes
                    artísticos, partiendo del flamenco y de la música tradicional hacia la improvisación
                    en danza y la música contemporánea, ampliando las posibilidades de estudio y
                    abriendo el pensamiento teórico sobre el imaginario del folklore, el flamenco y la danza.
                </p>
            </section>

            {/* LÍNEAS DE INVESTIGACIÓN */}
            <section className="docencia-lines">
                <h3>Líneas de investigación</h3>
                <ul>
                    <li>La improvisación como herramienta metodológica</li>
                    <li>Re-significación del flamenco, la danza española y el folklore</li>
                    <li>El movimiento propio dentro del compás, el cante y el toque</li>
                    <li>Cruce entre flamenco y músicas contemporáneas</li>
                    <li>Identidad, distancia y estética</li>
                    <li>El compás y la libertad</li>
                    <li>Etnología folklórica y experimentación sonora</li>
                </ul>
            </section>

            {/* METODOLOGÍA */}
            <section className="docencia-method">
                <h3>Metodología de trabajo</h3>
                <p>
                    El trabajo parte del cuerpo expresivo y de la percepción del movimiento como
                    herramienta de pensamiento. La investigación se desarrolla a través de procesos
                    abiertos, colectivos y situados, donde la improvisación, la escucha y la atención
                    al presente son fundamentales.
                </p>
                <p>
                    Se trabaja desde el ritual, la comunidad y la implicación del espectador,
                    entendiendo la práctica escénica como un espacio de mediación cultural y política.
                </p>
            </section>

            {/* TALLERES REALIZADOS */}
            <section className="docencia-workshops">
                <h3>Talleres y procesos realizados</h3>
                <ul>
                    <li>Cuerpos bellos – El monstruo</li>
                    <li>Patio – El monstruo</li>
                    <li>La Margarita del Tajo</li>
                </ul>
            </section>

            {/* MUESTRAS */}
            <section className="docencia-samples">
                <h3>Muestras de investigación</h3>
                <p>
                    Las investigaciones desarrolladas en el laboratorio se materializan en muestras,
                    piezas escénicas, paseos performativos y dispositivos audiovisuales, adaptándose
                    a diferentes contextos y espacios.
                </p>
            </section>


            {/* CTA */}
            <section className="docencia-cta">
                <p>
                    FOLKCORP LAB se activa en colaboración con centros culturales, festivales,
                    residencias artísticas y comunidades.
                </p>
                <a href="/contacto" className="docencia-contact">
                    Contactar para activación del laboratorio
                </a>
            </section>

            {/* MODAL PARA IMÁGENES */}
            {modalOpen && (
                <GalleryModal
                    work={laboratorio}
                    onClose={closeModal}
                    initialImage={selectedImage}
                />
            )}
        </section>
    )
}
