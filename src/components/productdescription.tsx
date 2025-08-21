import { ShoppingCart } from 'lucide-react';
import type { CartItems } from '../types';

type ProductDescriptionProps = {
    quantity: number,
    setQuantity: React.Dispatch<React.SetStateAction<number>>,
    setCart: React.Dispatch<React.SetStateAction<CartItems[]>>,
    currentImage: string,
    cart: CartItems[]
}


function ProductDescription({
    quantity, 
    currentImage, 
    setCart, 
    setQuantity,
    // cart
}: ProductDescriptionProps) {
    
    const productPrice: number = 125;
    const productName: string = 'Fall Limited Edition Sneakers' 


    function handleReduceQuantity() {
        if (quantity > 0) {
            setQuantity(quantity => quantity - 1)
        }
    }

    function handleIncreaseQuantity() {
        setQuantity(quantity => quantity + 1)
    }

    function handleSubmit() {

        // if no quantity, return 
        if(!quantity) return;

        // cart item
        const cartItem: CartItems = {
            id: crypto.randomUUID(),
            productName: productName,
            productPrice: productPrice,
            image: currentImage,
            quantity: quantity
        }

        // console.log(exitProduct)
        
        setCart(cart => {
            const exitProduct = cart?.findIndex(item => item.productName === cartItem.productName)
            if(exitProduct !== -1) {
                const updatedCart = [...cart];
                updatedCart[exitProduct].quantity += quantity;
                return updatedCart
            }
            return [...cart, cartItem]
        });
        setQuantity(0);
    }

    return (
        <>
            <div className='space-y-2'>
                <h3 className='uppercase text-darkgrayish font-semibold'>Sneaker Company</h3>
                <h1 className='font-semibold md:text-5xl'>{productName}</h1>
            </div>
            <p className='max-w-[90%] md:max-w-[80%] mt-4 text-darkgrayish text-primarySize'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className="flex flex-row items-center justify-between w-full md:items-start md:flex-col gap-2 mt-4">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">${productPrice}.00</span>
                    <span className="text-lightgrayish text-sm bg-verydark px-2 py-1 rounded-sm">50%</span>
                </div>
                <span className="line-through text-darkgrayish">$250.00</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-6 w-full md:w-[80%]">
                <div className='bg-lightgrayish rounded-sm flex-1 w-full flex items-center justify-between px-4 md:px-0 py-2 md:py-0'>
                    <button 
                        className=" px-4 py-2 md:px-6 md:py-4 rounded-lg text-primary font-bold cursor-pointer hover:bg-primary hover:text-verydark transition-colors duration-300"
                        onClick={handleReduceQuantity}
                    >
                            -
                        </button>
                    <span className="mx-2 md:px-6 md:py-4">{quantity}</span>
                    <button 
                        className="text-primary px-4 py-2 md:px-6 md:py-4 font-bold rounded-lg cursor-pointer hover:bg-primary hover:text-verydark transition-colors duration-300"
                        onClick={handleIncreaseQuantity}
                    >
                        +
                    </button>
                </div>
                <button 
                    className="bg-orange-500 w-full flex-1 text-verydark text-sm font-bold px-4 md:px-10 py-4 md:py-4 rounded-lg flex items-center justify-center gap-3 md:gap-2  cursor-pointer hover:bg-orange-500/80 transition-colors duration-300 hover:text-white"
                    onClick={handleSubmit}
                >
                    <ShoppingCart />
                    <span>Add to Cart</span>
                </button>
            </div>
        </>
    )
}

export default ProductDescription
