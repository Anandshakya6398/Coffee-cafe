import React, { useState, useContext } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import { Link as Lin } from "react-router-dom";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BsCart } from "react-icons/bs";


const Navbar = () => {

  // const {} = useContext(CartContext)

  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <>
      <div className="fixed w-full z-10">
        <div>
          <div className=" flex justify-between bg-black md:p-6  md:px-32 ">
            <div
              // data-aos="fade-down"
              // data-aos-delay="100"
              className="flex flex-row justify-center items-center gap-12"
            >
              <img src={logo} alt="Cafena Logo" className="md:h-9 h-18" />
            </div>
            <nav
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="100"
              className="hidden  text-white  gap-8 md:flex"
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="hover:text-red cursor-pointer hover:border-b transition-all"
              >
                Home
              </Link>
              <Link
                to="About"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="hover:text-red cursor-pointer hover:border-b transition-all"
              >
                About
              </Link>
              <Link
                to="features"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="hover:text-red cursor-pointer hover:border-b transition-all"
              >
                Features
              </Link>
              <Link
                to="menu"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="hover:text-red cursor-pointer hover:border-b transition-all"
              >
                Menu
              </Link>
              <Link
                to="review"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="hover:text-red cursor-pointer hover:border-b transition-all"
              >
                Reviews
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="hover:text-red cursor-pointer hover:border-b transition-all"
              >
                Contact
              </Link>
            </nav>

            <div className="md:hidden flex text-white items-center  ">
              {menu ? (
                <AiOutlineClose size={25} onClick={handleChange} />
              ) : (
                <AiOutlineMenuUnfold size={25} onClick={handleChange} />
              )}
            </div>

            <div className="flex text-white items-center cursor-pointer px-4 ">
            </div>
          </div>
          <hr />
          <div
            className={` ${
              menu ? "translate-x-0" : "-translate-x-full"
            } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
              className="hover:text-red cursor-pointer hover:border-b transition-all"
            >
              Home
            </Link>
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={closeMenu}
              className="hover:text-red cursor-pointer hover:border-b transition-all"
            >
              About
            </Link>
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMenu}
              className="hover:text-red cursor-pointer hover:border-b transition-all"
            >
              Features
            </Link>
            <Link
              to="menu"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMenu}
              className="hover:text-red cursor-pointer hover:border-b transition-all"
            >
              Menu
            </Link>
            <Link
              to="review"
              spy={true}
              smooth={true}
              offset={-115}
              duration={500}
              onClick={closeMenu}
              className="hover:text-red cursor-pointer hover:border-b transition-all"
            >
              Reviews
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMenu}
              className="hover:text-red cursor-pointer hover:border-b transition-all"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
