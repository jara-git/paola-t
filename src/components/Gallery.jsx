import React, { useState, useMemo } from 'react';
import Masonry from 'react-masonry-css';
import GalleryItem from './GalleryItem';
import GalleryModal from './GalleryModal';
import '../styles/Gallery.scss';

const breakpointCols = {
    default: 3,
    1280: 3,
    1024: 2,
    600: 1,
};

/* CONFIGURACIÓN CURATORIAL */

const filterConfig = {

    Todo: [],

    Escena: [
        "esos",
        "romance",
        "cojo de vera",
        "júbilo",
        "salomé",
        "pater",
        "mater",
        "frater",
        "gijoe"
    ],

    Danza: [
        "rosas",
        "utopía",
        "cojo de vera",
        "no estoy aquí",
        "no hay que hacer nada",
        "extracorpórea"
    ],

    Mediación: [
        "salomé",
        "extracorpórea"
    ],

    "Talleres-Lab": [
        "laboratorio",
        "cuerpos bellos",
        "margaritas",
        "patio"
    ]

};

export default function Gallery({ works }) {

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [activeCategory, setActiveCategory] = useState("Todo");
    const [isTransitioning, setIsTransitioning] = useState(false);

    /* FILTRADO */

    const filteredWorks = useMemo(() => {

        if (activeCategory === "Todo") return works;

        const filters = filterConfig[activeCategory];

        return works.filter(work => {

            const title = work.title.toLowerCase();

            return filters.some(keyword =>
                title.includes(keyword.toLowerCase())
            );

        });

    }, [activeCategory, works]);


    /* CAMBIO DE CATEGORÍA */

    const changeCategory = (cat) => {

        if (cat === activeCategory) return;

        setIsTransitioning(true);

        setTimeout(() => {

            setActiveCategory(cat);
            setSelectedIndex(null);
            setIsTransitioning(false);

        }, 200);

    };


    /* MODAL */

    const openModal = (index) => setSelectedIndex(index);

    const closeModal = () => setSelectedIndex(null);

    const handleNavigate = (direction) => {

        if (!filteredWorks.length) return;

        if (direction === 'prev') {

            setSelectedIndex(prev =>
                prev > 0 ? prev - 1 : filteredWorks.length - 1
            );

        }

        if (direction === 'next') {

            setSelectedIndex(prev =>
                prev < filteredWorks.length - 1 ? prev + 1 : 0
            );

        }

    };


    return (

        <div className="gallery-wrapper">

            <div className={`gallery-inner ${isTransitioning ? "fade" : ""}`}>

                <Masonry
                    breakpointCols={breakpointCols}
                    className="gallery-grid"
                    columnClassName="gallery-column"
                >

                    {filteredWorks.map((work, index) => (

                        <GalleryItem
                            key={work.id}
                            work={work}
                            onClick={() => openModal(index)}
                        />

                    ))}

                </Masonry>


                {/* FILTROS */}

                <div className="gallery-filters">

                    {Object.keys(filterConfig).map(cat => (

                        <button
                            key={cat}
                            className={activeCategory === cat ? 'active' : ''}
                            onClick={() => changeCategory(cat)}
                        >

                            {cat}

                        </button>

                    ))}

                </div>

            </div>


            {/* MODAL */}

            {selectedIndex !== null && (

                <GalleryModal
                    work={filteredWorks[selectedIndex]}
                    onClose={closeModal}
                    onNavigate={handleNavigate}
                    isFirst={selectedIndex === 0}
                    isLast={selectedIndex === filteredWorks.length - 1}
                />

            )}

        </div>

    );

}