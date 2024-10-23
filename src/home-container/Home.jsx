import React from "react";
// import Button from "../layout/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../components/Animation";
import { useSelector } from "react-redux";
import { CgShoppingCart } from "react-icons/cg";
// import { ShoppingCart } from "react-icons/cg";

const Home = () => {
 
  return (
    <>
      <div>
        <main className="min-h-screen bg-hero bg-center bg-cover h-[calc(100vh-1ch)] ">
          <div className=" px-24 py-24">
            <div className="">
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className=" md:mt-16 mt-32 text-center md:text-left"
              >
                <h3 className=" text-white leading-tight md:text-6xl text-4xl font-bold mb-6">
                  FRESH COFFEE IN <br />
                  THE MORNING
                </h3>
                <p className="text-sm font-serif md:text-xl text-white mb-8">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  <br />
                  Placeat labore, sint cupiditate distinctio tempora reiciendis.
                </p>
                <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded-full">
                  Get Yours Now
                </button>
               
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
