import type { CartItems } from './types'
import { useState } from 'react'
import Header from './components/header';
import Image from './components/image';
import ProductDescription from './components/productdescription';
import { imageThumbnials } from './constant/constant';


function App() {
    const [currentImage, setCurrentImage] = useState(imageThumbnials[0].src);
    const [quantity, setQuantity] = useState<number>(0);
    const [showCart, setShowCart] = useState<boolean>(false)
    const [cart, setCart] = useState<CartItems[]>([])


    return (
        <main className="max-w-7xl mx-auto p-4 md:p-12 h-screen flex flex-col items-center">
            <Header 
                cart={cart} 
                setCart={setCart} 
                showCart={showCart} 
                setShowCart={setShowCart} 
            />

            <div className="flex flex-col md:flex-row items-center justify-between mt-16 w-full">
                <div className="flex flex-col items-center justify-center gap-6 flex-1">
                    <div>
                        <img src={currentImage} alt="Product Image" className="w-[80%] md:w-[70%] h-auto mx-auto rounded-lg" />
                    </div>
                    <div className="flex gap-4 md:overflow-x-auto">
                        {imageThumbnials.map((thumbnail) => (
                            <Image 
                                key={thumbnail.id}
                                thumbnail={thumbnail} 
                                setCurrentImage={setCurrentImage}
                                currentImage={currentImage} 
                            />
                        ))}
                    </div>
                </div>
                <div className="flex-1 mt-4 flex flex-col gap-3 items-start justify-center p-6 md:mt-0">
                    <ProductDescription
                        currentImage={currentImage}
                        setCart={setCart}
                        setQuantity={setQuantity} 
                        quantity={quantity} 
                    />
                </div>
            </div>
        </main>
    )
}

export default App
