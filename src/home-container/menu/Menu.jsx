import React from "react";
import  {product}  from "./product";
import { useDispatch} from "react-redux";
import { addToCart } from "../../redux/cartSlice";

// function Menu() {
  const Menu = () => {
    const dispatch = useDispatch();
    // const product = useSelector((state) => state.product)
  
    const handleAddToCart = () => {
      dispatch(addToCart(product));
    };
  return (
    <div className="bg-gradient-to-b from-zinc-950  via-slate-900  to-black">
      <h3 className="text-orange-500 font-serif text-4xl text-center p-4">
        Menu
      </h3>

      <h4 className="text-white text-2xl text-center ">
        Let's Check It Our Delicious Menu
      </h4>

      <div className="grid sm:grid-cols-3 sm:p-16 p-6  ">
        {/* {menu.map(({ img, title, description, price }, index) => { */}
        {product.map((product) => {
          return (
            <div
              key={product.id}
              // key={index}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="bg-black hover:bg-gradient-to-r from-zinc-900 to-slate-900  text-center  border border-dashed text-white m-4 rounded shadow hover:-translate-x-2"
            >
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                className="rounded-xl  flex justify-center items-center pt-2 pb-2"
              >
                <img
                  src={product.img}
                  alt="{item.title}"
                  className="w-[85px] rounded-full "
                />
              </div>
              <h5 className="text-center font-serif font-semibold text-sky-600">
                {product.title}
              </h5>
              <p className="text-center font-thin">{product.description}</p>
              <p className="text-center text-orange-700">
                Price: ${product.price}
              </p>
              <button
            onClick={handleAddToCart}
                // onClick={() =>
                //   dispatch(
                //     addToCart({
                //       id,
                //       img,
                //       title,
                //       description,
                //       price,
                //     })
                //   )
                // }
                className="border hover:bg-fuchsia-800 transition-all duration-200  rounded-md px-4 py-1 mt-6 mb-2"
              >
                Add item
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu
