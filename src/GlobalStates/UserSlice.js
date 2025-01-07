import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
  name:'user',
  initialState:{
    loginData:{
      username: "",
      password: ""
    },
    signupData:{
      username: '', 
      email: '',
      password: '', 
      mobile: ''    
    }
  },
  reducers:{
    setLoginData:(state,action)=>{
      state.loginData=action.payload
    },
    setSignupData:(state,action)=>{
      state.signupData=action.payload
    }
  }
})

export const {setLoginData,setSignupData}=userSlice.actions
export default userSlice.reducer