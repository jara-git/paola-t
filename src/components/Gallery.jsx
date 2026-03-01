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

const filterConfig = {
    "Piezas escénicas": { include: [], exclude: ["laboratorio", "docencia"] },
    "Investigación": { include: ["investigación"] },
    "Laboratorio": { include: ["laboratorio"] },
    "Performance": { include: ["performance"] }
};

export default function Gallery({ works }) {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [activeCategory, setActiveCategory] = useState("Piezas escénicas");

    const filteredWorks = useMemo(() => {
        const config = filterConfig[activeCategory];
        if (!config) return works;
        return works.filter(work => {
            const cat = (work.category || "").toLowerCase();
            if (config.exclude && config.exclude.some(ex => cat.includes(ex.toLowerCase()))) return false;
            if (config.include && config.include.length > 0) return config.include.some(inc => cat.includes(inc.toLowerCase()));
            return true;
        });
    }, [activeCategory, works]);

    const openModal = (index) => setSelectedIndex(index);
    const closeModal = () => setSelectedIndex(null);
    const handleNavigate = (direction) => {
        if (!filteredWorks.length) return;
        if (direction === 'prev') setSelectedIndex(prev => prev > 0 ? prev - 1 : filteredWorks.length - 1);
        else if (direction === 'next') setSelectedIndex(prev => prev < filteredWorks.length - 1 ? prev + 1 : 0);
    };

    return (
        <div className="gallery-wrapper">
            <div className="gallery-inner">
                <Masonry
                    breakpointCols={breakpointCols}
                    className="gallery-grid"
                    columnClassName="gallery-column"
                >
                    {filteredWorks.map((work, index) => (
                        <GalleryItem key={work.id} work={work} onClick={() => openModal(index)} />
                    ))}
                </Masonry>

                {/* Filtros debajo de la cuadrícula */}
                <div className="gallery-filters">
                    {Object.keys(filterConfig).map(cat => (
                        <button
                            key={cat}
                            className={activeCategory === cat ? 'active' : ''}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

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