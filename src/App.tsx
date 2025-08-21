import Header from './components/header';
import Image from './components/image';
import ProductDescription from './components/productdescription';
import { imageThumbnials } from './constant/constant';
import ProductModal from './components/productmodal';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './store';
import { closeModal } from './slices/cartSlice';


function App() {
    const currentImage = useSelector((state: RootState) => state.cart.currentImage);

    const dispatch = useDispatch();

    return (
        <main className="max-w-7xl mx-auto p-4 md:p-12 h-screen flex flex-col items-center">
            <Header />

            <div className="flex flex-col md:flex-row items-center justify-between mt-16 w-full">
                <div className="flex flex-col items-center justify-center gap-6 flex-1">
                    <div>
                        <img 
                            src={currentImage} 
                            alt="Product Image" 
                            className="w-[80%] md:w-[70%] h-auto mx-auto rounded-lg"
                            onClick={() => dispatch(closeModal(true))}
                        />
                    </div>
                    <div className="flex gap-4 overflow-x md:overflow-x-auto">
                        {imageThumbnials.map((thumbnail) => (
                            <Image 
                                key={thumbnail.id}
                                thumbnail={thumbnail} 
                                currentImage={currentImage} 
                            />
                        ))}
                    </div>
                </div>
                <div className="flex-1 mt-4 flex flex-col gap-3 items-start justify-center p-6 md:mt-0">
                    <ProductDescription/>
                </div>
            </div>
            
            <ProductModal />

        </main>
    )
}

export default App
