import { Menu, ShoppingCart, X } from 'lucide-react';
import type { CartItems } from '../types';
import Cart from './cart';
import { useState } from 'react';

type CartProps = {
    cart: CartItems[],
    setCart: React.Dispatch<React.SetStateAction<CartItems[]>>,
    setShowCart: React.Dispatch<React.SetStateAction<boolean>>,
    showCart: boolean
}


function Header({
    cart, 
    setCart, 
    setShowCart, 
    showCart
}: CartProps) {

    const [showMenu, setShowMenu] = useState<boolean>(false);

    return (
        <>
            <div className="flex justify-between items-center w-full border-b border-grayish pb-8 px-6">
                <div className="flex items-center justify-center gap-8">
                    <div className='flex items-center gap-4'>
                        <div 
                            className='md:hidden cursor-pointer' 
                            onClick={() => setShowMenu(is => !is)}>
                            <Menu />
                        </div>
                        <img src="/logo.svg" alt="Logo" className="" />
                    </div>
                    
                    <div className="hidden md:flex md:flex-row md:gap-8 text-darkgrayish md:p-0"> 
                        <p>Collections</p>
                        <p>Men</p>
                        <p>Women</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                    
                    { showMenu &&
                        <div className='fixed h-full w-full bg-verydark/70 inset-0 z-50 items-center'>
                            <div className={`flex font-semibold w-[60vw] bg-white h-screen flex-col p-6 gap-4 text-verydark transition-transform duration-300 ease-in-out ${showMenu ? 'translate-x-0' : '-translate-x-full'}`}> 
                                <div 
                                    className='md:hidden mb-10 cursor-pointer'
                                    onClick={() => setShowMenu(false)}
                                >
                                    <X />
                                </div>
                                <p>Collections</p>
                                <p>Men</p>
                                <p>Women</p>
                                <p>About</p>
                                <p>Contact</p>
                            </div>
                        </div>
                    }
                </div>
                <div className="flex items-center gap-10">
                    <div className='relative'>
                        <div className='relative'>
                            <div onClick={() => setShowCart(is => !is)} 
                                className='relative cursor-pointer'>
                                <ShoppingCart />
                            </div>
                            <h1 className='absolute -top-3 -right-2 bg-primary text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center'>
                                {cart.length}
                            </h1>
                        </div>


                        {showCart && 
                            <div className='absolute -right-20 top-20 md:-right-40 md:top-12'>
                                <Cart carts={cart} setCart={setCart}/>
                            </div>
                        }
                        
                    </div>
                    <div 
                        // className='hover:border-1 hover:border-primary transition-all duration-300 rounded-full cursor-pointer'
                    >
                        <img src="/image-avatar.png"className="w-8 h-8" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
