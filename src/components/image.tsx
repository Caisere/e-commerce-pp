import type { ImageThumbnail } from '../types';

type ImageProps = {
    thumbnail: ImageThumbnail,
    setCurrentImage: React.Dispatch<React.SetStateAction<string>>,
    currentImage: string
}

function Image({thumbnail, setCurrentImage, currentImage}: ImageProps) {

    function handleImageChange(src: string) {
        setCurrentImage(src);
    }

    return (
        <>
            <img 
                key={thumbnail.id} 
                src={thumbnail.src} 
                alt={thumbnail.alt} 
                className={`w-18 h-18 md:w-24 md:h-24 rounded-lg cursor-pointer ${currentImage === thumbnail.src ? 'border-2 border-orange-500 opacity-50' : ''}`} 
                onClick={() => handleImageChange(thumbnail.src)}
            />
        </>
    )
}

export default Image;
