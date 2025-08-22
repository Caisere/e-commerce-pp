import { createSlice } from "@reduxjs/toolkit";
import { imageThumbnials } from "../constant/constant";
import type { CartItems } from "../types";
import type { RootState } from "../store";


type InitialState = {
    currentImage: string,
    quantity: number,
    showCart: boolean,
    cart: CartItems[],
    showModal: boolean
}


const initialState: InitialState = {
    currentImage: imageThumbnials[0].src,
    quantity: 0,
    showCart: false,
    cart: [],
    showModal: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart(state, action) {
            state.cart.push(action.payload)
            state.quantity = 0
        },
        // setCart(prevCart => prevCart.filter(item => item.id !== id));
        removeCart(state, action){
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        increaseQuantity(state) {
            state.quantity += 1
        },
        decreaseQuantity(state) {
            if (state.quantity > 0) {
                state.quantity -= 1
            }
        },
        changeImage(state, action) {
            state.currentImage = action.payload
        },
        displayCart(state, action) {
            state.showCart = action.payload
        },
        closeModal(state, action) {
            state.showModal = action.payload
        }
    }
})


export const {
    addCart, 
    increaseQuantity, 
    decreaseQuantity, 
    changeImage, 
    displayCart, 
    removeCart, 
    closeModal
} = cartSlice.actions

export default cartSlice.reducer


// get current image 
export function getCurrentImage () {
    return ((store: RootState) => store.cart.currentImage);
}

export function getCarts () {
    return ((store: RootState) => store.cart.cart);
}






        // const exitProduct = carts?.findIndex(item => item.productName === cartItem.productName)
        //     if(exitProduct !== -1) {
        //         const updatedCart = [...carts];
        //         updatedCart[exitProduct].quantity += quantity;
        //         return updatedCart
        // }