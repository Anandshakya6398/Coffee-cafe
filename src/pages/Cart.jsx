import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { BiShoppingBag } from "react-icons/bi";
import { decrementQuantity, incrementQuantity, removeItem } from "../redux/cartSlice";
import { IoClose } from "react-icons/io5";


function Cart () {
 
  const cart = useSelector((state) => state.cart.product)
  const dispatch = useDispatch()
  // const getTotal = () => {
  //   let totalQuantity = 0
  //   let totalPrice = 0
  //   cartItems.forEach(item => {
  //     totalQuantity += item.quantity
  //     totalPrice += item.price * item.quantity
  //   })
  //   return {totalPrice, totalQuantity}
  // }
 
  return (
    <div className="h-screen">
      {/* <Navbar /> */}
      <div className="cart-container">
        <div className="cart-title-container">
          <BiShoppingBag className="cart-icon" />
          <h2 className="cart-title text-white">Shopping Cart</h2>
        </div>
        {/* {products.length === 0 ? (
            <p className="text-white">Your cart is empty</p>
        ) : (
          <> */}
            <div className="cart-content">
              <div className="cart-items-section">
                <div className="cart-header">
                  <div className="header-item">products</div>
                  <div className="header-item">price</div>
                  <div className="header-item">quantity</div>
                  <div className="header-item">total</div>
                </div>
                {cart?.map((product) => (                                                   // here map the cart 
                  <div key={product.id} className="cart-item">
                    <div className="cart-product">
                      <img
                        src={product.img}
                        alt=""
                        className="cart-product-image"
                      />
                      <p className="text-white">{product.title}</p>
                    </div>
                    <div className="cart-price text-white">${product.price}</div>
                    <div className="cart-quantity ">
                      <button
                       onClick={() => dispatch(decrementQuantity(product.id))}
                      >
                        -
                      </button>
                      <span className="text-white">{product.quantity}</span>
                      <button
                     onClick={() => dispatch(incrementQuantity(product.id))}
                      >
                        +
                      </button>
                    </div>
                    <div className="cart-total">
                      ${parseFloat(product.price * product.quantity).toFixed(2)}
                    </div>
                    <button
                      onClick={() => dispatch(removeItem(product.id))}
                      className="remove-btn"
                    >
                      <IoClose size={20} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <h3 className="summary-title ">Order Summary</h3>
                <div className="summary-details">
                  <div className="summary-item">
                    <span>Price : </span>
                    {/* <span>${totalPrice.toFixed(2)}</span> */}
                  </div>
                  <div className="summary-item">
                    <span>Delivery: </span>
                    <span>free</span>
                  </div>
                  <div className="summary-item">
               
                  {/* total ({getTotal().totalQuantity} items) 
                  : <strong>${getTotal().totalPrice}</strong> */}
                  </div>
                </div>
                <button className="checkout-btn text-white">
                  proceed to checkout
                </button>
              </div>
            </div>
          {/* </> */}
        {/* )} */}
      </div>
    </div>
  );
}

export default Cart;
