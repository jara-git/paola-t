import React from 'react';
import '../styles/GalleryItem.scss';

export default function GalleryItem({ work, onClick }) {
    return (
        <div className="gallery-item" onClick={() => onClick(work)}>
            <img src={work.image[0]} alt={work.title} />
            <div className="caption">
                <h3>{work.title}</h3>
                <p>{work.year}</p>
            </div>
        </div>
    );
}
