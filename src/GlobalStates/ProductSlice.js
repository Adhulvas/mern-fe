import { createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
  name:'products',
  initialState:{
    products:[],
    electronicsData:[],
    jeweleryData:[],
    menClothingData:[],
    womenClothingData:[]
  },
  reducers:{
    setProducts:(state,action)=>{
      state.products=action.payload
    },
    setElectronicsData:(state,action)=>{
      state.electronicsData=action.payload
    },
    setJeweleryData:(state,action)=>{
      state.jeweleryData=action.payload
    },
    setMenClothingData:(state,action)=>{
      state.menClothingData=action.payload
    },
    setWomenClothingData:(state,action)=>{
      state.womenClothingData=action.payload
    }
  }
})

export const {setProducts,setElectronicsData,setJeweleryData,setMenClothingData,setWomenClothingData}=slice.actions
export default slice.reducer