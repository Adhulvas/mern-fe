import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
  name:'cart',
  initialState:{
  cartItems:[],
  },
  reducers: {  
    setCartItems: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartItems.find(item => item._id === product._id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.cartItems.find(item => item._id === productId);
      if (product) product.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.cartItems.find(item => item._id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter(item => item._id !== productId);
      console.log(state.cartItems);
      state.cartCount = state.cartItems.length;
    }
  }
})

export const {setCartItems,increaseQuantity, decreaseQuantity, removeFromCart} = cartSlice.actions
export default cartSlice.reducer