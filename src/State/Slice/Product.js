// /src/features/counter/counterSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { allproduct } from '../../productdata';

export const ProductSlice = createSlice({
  name: 'Productlist',
  initialState:allproduct,
  reducers: {
    ChangeProductlist: (state,action) => {
      
      state = action.payload;
     
      return state;
    }
   
  },
});

export const { ChangeProductlist } = ProductSlice.actions;
export const selectList = (state) => state.Productlist;

export default ProductSlice.reducer;
