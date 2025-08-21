import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Image from './image';
import { imageThumbnials } from '../constant/constant';
import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import type { RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../slices/cartSlice';


function ProductModal() {

    const showModal = useSelector((state: RootState) => state.cart.showModal)

    const currentImage = useSelector((state: RootState) => state.cart.currentImage);

    const dispatch = useDispatch()

    const [displayModal, setDisplayModal] = useState<boolean>(false);

    // only display modal on larger screens
    useEffect(() => {        
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setDisplayModal(false);
            } else {
                setDisplayModal(true);
                // console.log('Modal is displayed');
            }
        };

        handleResize();


        window.addEventListener('resize', handleResize);

        // clean up function
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    if(!displayModal) return null;


    return (
        <Modal
            open={showModal}
            onClose={() => dispatch(closeModal(false))}
            aria-labelledby="product-modal-title"
            aria-describedby="product-modal-description"
            className='flex items-center justify-center'
            sx={{
                '& .MuiBackdrop-root': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                }
            }}
        >
            <Box 
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    // width: 400,
                    // bgcolor: 'background.paper',
                    // boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                    border: 'none',
                }}
                className='flex flex-col items-center justify-between gap-6'
            >
                    <div className='absolute top-0 right-0' onClick={() => dispatch(closeModal(false))}>
                        <Button><X className='text-white' /></Button>
                    </div>
                    <div className="flex items-center justify-center h-[400px] w-[400px] border-0">
                        <img 
                            src={currentImage} 
                            alt="Product Image" 
                            className="w-[100%] md:w-[100%] h-auto mx-auto rounded-lg"
                        />
                    </div>
                    <div className="flex gap-4">
                        {imageThumbnials.map((thumbnail) => (
                            <Image 
                                key={thumbnail.id}
                                thumbnail={thumbnail} 
                                currentImage={currentImage} 
                            />
                        ))}
                    </div>
            </Box>
        </Modal>
    )
}

export default ProductModal