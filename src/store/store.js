// import { configureStore } from "@reduxjs/toolkit";
// import cartReducers from "../redux/cartSlice"

// export const store = configureStore({
//     reducer: {
//         cart: cartReducers,
//     },
// });


// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from '../redux/cartSlice';

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import  {cartReducer}  from "../redux/cartSlice";
export const store = configureStore({
  reducer: cartReducer,
});

// import {createStore}  from 'redux';
// import { cartReducer}  from "../redux/cartSlice";
// const  store = createStore(cartReducer);
// export default store;

