import React from "react";
import {
  FaInstagram,
  FaTelegram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CreditCards from "../../assets/credit-cards.webp";
import { motion } from "framer-motion";
import '../../../src/App.css'
import { BiPhone } from "react-icons/bi";


function Footer() {
  return (
    <>
      <div className=" relative " >
        <div className="absolute top-0  left-0 w-[100%] overflow-hidden">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,
                        250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,
                        3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="relative block fill-black"
            ></path>
          </svg>

          {/* <div className=" bg-gradient-to-r from-cyan-900 to-sky-950 pt-12 pb-6 px-16"> */}
          {/* <div className=" bg-gradient-to-r from-cyan-900 to-sky-950 pt-12 pb-6 px-16"> */}
          <div className="grid pt-1  px-16 sm:grid-cols-3 gap-8 sm:gap-36 ">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="space-y-6 "
            >
              <h1 className="text-3xl text-orange-500  font-bold uppercase font-serif text">
                Coder's cafe
              </h1>
              <p className="text-lg font-thin  text-white max-w-[300px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet nulla auctor, vestibulum magna sed, convallis ex.
              </p>
              <div>
                <p className="text-white flex items-center gap-2">
                  <BiPhone />
        +1 234567890
                </p>
                <p className="flex text-white items gap-4 mt-2">
                  <FaMapLocation /> Budaun, Uttar Pradesh
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="space-y-6 text-white"
            >
              <h1 className=" text-3xl text-orange-500 font-bold">
                Quick Links
              </h1>
              <div className="grid grid-cols-2">
                <div className="gap-4">
                  <ul className="gap-4">
                    <li> Home</li>
                    <li> About</li>
                    <li> Features</li>
                    <li> Menu</li>
                    <li> Reviews</li>
                    <li> Contact</li>
                    <li> Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold duration-300 text-orange-500">
                Follows Us
              </h1>
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/anandshakya505/">
                  {" "}
                  <FaInstagram className="text-3xl hover:scale-150 duration-300 text-red " />
                </a>

                <a href="">
                  <FaTelegram className="text-3xl hover:scale-150 duration-300 text-blue-400" />
                </a>
                <a href="https://github.com/Anandshakya6398">
                  {" "}
                  <FaGithub className="text-3xl hover:scale-150 duration-300 text-white" />
                </a>

                <FaLinkedin className="text-3xl hover:scale-150 duration-300 text-blue-600" />
                <FaTwitter className="text-3xl hover:scale-150 duration-300 text-blue-500" />
              </div>
              <div>
                <h1 className="text-white text-xl font-serif mb-4">
                  Payment Methods{" "}
                </h1>
                <img src={CreditCards} alt="creditcards" className="w-[80%]" />
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once:false, amount: 0.5 }}
            transition={{
              delay: 0.8,
              duration: 0.6,
            }}
          >
            <p
              className="text-white text-center mt-4 pt-2 mb-4  border-t-2
        "
            >
              @Copyright &copy; 2024 Company Name. All rights reserved by{" "}
              <span className="text-xl font-serif text-orange-400">
                Anand Shakya
              </span>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Footer;
