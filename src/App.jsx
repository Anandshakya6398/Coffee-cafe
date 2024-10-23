import React from "react";
import Navbar from "./components/navbar/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import  Cart  from "./pages/Cart";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import HomeContainer from "./home-container/HomeContainer";



function App() {

  // const cart = useSelector((state) => state.cart);
  // const getTotalQuantity = () => {
  //   let total = 0;
  //   cart.forEach((item) => {
  //     total += item.quantity;
  //   });
  //   return total;
  // };


  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <>
        <Navbar />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path='cart' element={<Cart/>} />
        </Routes>
        </BrowserRouter>
     {/* <div className="text-white ">
                  <CgShoppingCart
                    id=""
                    size={30}
                    onClick={() => navigate("/cart")}
                  />
                  <p>{getTotalQuantity() || 0}</p>
                </div> */}
    </>
  );
}

export default App;
