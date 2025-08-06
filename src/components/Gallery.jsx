import Masonry from 'react-masonry-css'
import GalleryItem from './GalleryItem'
import '../styles/Gallery.scss'

export default function Gallery({ works, onSelect }) {

    return (
        <Masonry
            className="gallery-grid"
            columnClassName="gallery-column"
        >
            {works.map(work => (
                <GalleryItem key={work.id} work={work} onClick={() => onSelect(work)} />
            ))}
        </Masonry>
    )
}
