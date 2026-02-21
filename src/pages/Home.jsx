import { useState } from 'react'
import works from '../data/works'
import Gallery from '../components/Gallery'
import GalleryModal from '../components/GalleryModal'
import { Link } from 'react-router-dom'
import '../styles/Home.scss'

export default function Home() {

    const [selectedWork, setSelectedWork] = useState(null)

    return (
        <div className="home">

            <div className="layout-container">

                <Gallery
                    works={works}
                    onSelect={setSelectedWork}
                />

                <div className="contact-content">
                    <Link to="/contacto" className="cta-button">
                        Contáctame
                    </Link>
                </div>

            </div>

            <GalleryModal
                work={selectedWork}
                onClose={() => setSelectedWork(null)}
            />

        </div>
    )
}

  