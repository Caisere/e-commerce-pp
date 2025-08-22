import { Trash2 } from 'lucide-react';
// import type { CartItems } from '../types';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { removeCart } from '../slices/cartSlice';




function Cart() {

    const carts = useSelector((state: RootState) => state.cart.cart)

    const dispatch = useDispatch();


    // delete cart item function
    function handleDeleteCartItem(itemId: string){
        dispatch(removeCart(itemId));
        // setCart(prevCart => prevCart.filter(item => item.id !== id));
    }


    return (
        <div className='max-w-[400px] bg-white p-6 rounded-lg shadow-lg w-[350px]'>
            <h2 className='border-b border-grayish font-semibold pb-2 text-sm text-darkgrayish'>Cart</h2>
            {carts.length === 0 ? (
                <p className='mt-2 text-sm text-darkgrayish'>Your cart is empty</p>
            ) : (
                <>
                    {carts.map((item, index) => (
                        <div key={index} className='flex items-center justify-between mb-4 mt-4 gap-4'>
                            <img src={item.image} alt={item.productName} className='w-8 h-8' />
                            <div>
                                <p className='text-[12px] font-semibold'>{item.productName}</p>
                                <p className='text-[12px]'>${item.productPrice.toFixed(2)} x {item.quantity} = <span className='font-semibold'>${(item.productPrice * item.quantity).toFixed(2)}</span></p>
                            </div>
                            <Button
                                color='error' 
                                onClick={() => handleDeleteCartItem(item.id)}
                            >
                                    <Trash2 className='text-red-500' aria-label="add to shopping cart" />
                            </Button>
                        </div>
                    ))}
                    <Button
                        variant="contained"
                        // color="primary"
                        sx={{ backgroundColor: '#ff7d1a', '&:hover': { backgroundColor: '#ff7d1a', opacity: 0.9 } }}
                        className="w-full mt-2"
                        onClick={() => {/* handle checkout logic here */}}
                    >
                        Checkout
                    </Button>
                </>
            )}
        </div>
    )
}
export default Cart
