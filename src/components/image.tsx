import { useDispatch } from 'react-redux';
import { changeImage } from '../slices/cartSlice';
import type { ImageThumbnail } from '../types';

type ImageProps = {
    thumbnail: ImageThumbnail,
    currentImage: string
}

function Image({thumbnail, currentImage}: ImageProps) {

    const dispatch = useDispatch();

    function handleImageChange(src: string) {
        // console.log('Image clicked:', src);
        dispatch(changeImage(src))
    }

    return (
        <>
            <img 
                key={thumbnail.id} 
                src={thumbnail.src} 
                alt={thumbnail.alt} 
                className={`w-18 h-18 md:w-24 md:h-24 rounded-lg cursor-pointer ${currentImage === thumbnail.src ? 'border-2 border-orange-500 opacity-50' : ''} hover:opacity-70`} 
                onClick={() => handleImageChange(thumbnail.src)}
            />
        </>
    )
}

export default Image;
