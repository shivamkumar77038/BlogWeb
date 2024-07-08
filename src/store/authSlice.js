import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
  name: 'auth',
 initialState: {
    status : false ,
    userData :''
 },
  
  reducers: {
       loginbtn: (state) => {
      state.status = true
       },
          logoutbtn: (state) => {
          state.status = false
        
          },
  
  },
})


export const {loginbtn,logoutbtn } = authSlice.actions

export default authSlice.reducer