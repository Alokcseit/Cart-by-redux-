import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
let cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      state.push(action.payload);
    },
    removetocart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addtocart, removetocart } = cartslice.actions;
export default cartslice.reducer;

//create reducer
//create action
//use createSice
