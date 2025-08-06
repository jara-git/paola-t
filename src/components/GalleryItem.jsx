import '../styles/GalleryItem.scss'

export default function GalleryItem({ work, onClick }) {
    return (
        <div className="gallery-item" onClick={onClick}>
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


