import { createSlice } from '@reduxjs/toolkit';

export const addSlice = createSlice({
  name: 'addedSlice',
  initialState:[],
  reducers: {
    ChangeProcuctCartArray: (state,actions) => {
      
     console.log(actions.payload)
     state.push(actions.payload);
     
      return state;
    },
    UpdateCartarray: (state,actions)=>{
      state = actions.payload;
      return state;
    }   
  },
});

export const { ChangeProcuctCartArray, UpdateCartarray } = addSlice.actions;
export const cartarray = (state) => state.addedSlice.value;

export default addSlice.reducer;