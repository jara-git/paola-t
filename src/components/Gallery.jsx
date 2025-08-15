import Masonry from 'react-masonry-css'
import GalleryItem from './GalleryItem'
import '../styles/Gallery.scss'

const breakpointCols = {
    default: 3,
    1280: 3,
    1024: 2,
    600: 1
}

export default function Gallery({ works, onSelect }) {
    return (
        <div className="gallery-wrapper">
            <div className="gallery-inner">
                <Masonry
                    breakpointCols={breakpointCols}
                    className="gallery-grid"
                    columnClassName="gallery-column"
                >
                    {works.map(work => (
                        <GalleryItem
                            key={work.id}
                            work={work}
                            onClick={() => onSelect(work)}
                        />
                    ))}
                </Masonry>
            </div>
            
        </div>
    )
}


