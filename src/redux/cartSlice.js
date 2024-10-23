import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) =>item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
  },
});

export const  cartReducer = cartSlice.reducer;
export const  {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} = cartSlice.actions;



















// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//     cartItems:[],
// }

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart: (state, action) => {

//             const  item = state.cartItems.find(item => item.id === action.payload);
//             if (item) {
//                 item.quantity += 1;
//                 } else {
//                     state.cartItems.push({ ...action.payload, quantity: 1 });
//                     }
                    

//            console.log("add");

          

//         },
//         removeFromCart : (state, action)=> {
//             state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id
//             )
//         },
//         increaseQuantity : (state, action)=> {
//             const itemIndex = state.cartItems.findIndex(
//                 (item) => item.id === action.payload.id
//             )
//             if (itemIndex >= 0) {
//                 state.cartItems[itemIndex].quantity += 1
//             }
//         },
//         decreaseQuantity : (state, action)=> {
//             const itemIndex = state.cartItems.findIndex(
//                 (item) => item.id === action.payload.id
//                 )
//                 if (itemIndex >= 0 && state.cartItems[itemIndex].quantity > 1){
//                     state.cartItems[itemIndex].quantity -= 1

//                 }
//                 else if (state.cartItems[itemIndex].quantity === 1){
//                     state.cartItems = state.cartItems.filter(
//                         (item) => item.id !== action.payload.id
//                     )
//                 }

          
//         }
//     }
// })

// export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
// export default cartSlice.reducer;





// import { createSlice } from '@reduxjs/toolkit';

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: [],
//     reducers: {
//         add(state, action) {
//             state.push(action.payload);
//         },
//         remove(state, action) {
//             return state.filter((item) => item.id !== action.payload);
//         },
//     },
// });

// export const { add, remove } = cartSlice.actions;
// export default cartSlice.reducer;










// -- import create slice method
// -- initialize initial state
// -- create slice by using createslice -> give a name, mention initial state, actions
// -- at the end import those actions you will be using in your components

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

// const cartSlice = createSlice({
//   name: "cartItems",
//   initialState,
//   reducers: {
//     // here we will create all the actions
//     addToCart(state, action) {
//       console.log(action);
//       state.push(action.payload);
//     },
//     removeFromCart(state, action) {
//       return state.filter((item) => item.id !== action.payload);
//     },
//   },
// });

// // to export the actions
// export const { addToCart, removeFromCart } = cartSlice.actions;

// export default cartSlice.reducer;
