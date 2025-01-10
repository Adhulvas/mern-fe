import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import UserSlice from './UserSlice'

export const store=configureStore({
  reducer:{
    cart:CartSlice,
    user:UserSlice
  }
})