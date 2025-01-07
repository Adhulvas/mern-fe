import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from './ProductSlice'
import CartSlice from "./CartSlice";
import UserSlice from './UserSlice'

export const store=configureStore({
  reducer:{
    products:ProductSlice,
    cart:CartSlice,
    user:UserSlice
  }
})