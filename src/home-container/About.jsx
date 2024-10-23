import React from "react";
import img from ".././assets/about-img.jpeg";

const About = () => {
  return (
    <>
      <section className="p-4 lg:p-8 lg:px-24 bg-black">
        <h1  className=" text-center font-semibold text-white uppercase text-5xl pb-14">
          <span className="text-orange-500 font-serif">about</span> us
        </h1>

        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="grid grid-cols-1 lg:grid-cols-2  bg-gray-950/20"
        >
          <div className="flex justify-center items-center">
            <img src={img} alt="" className="w-full" />
          </div>

          <div className="lg:flex-1 lg:p-8 lg:basis-[45rem]">
            <h3 className="text-3xl font-serif  text-wrap text-white">
              What Makes Our Coffee Special?
            </h3>
            <p className=" font-light text-wrap  text-gray-300 py-4 leading-1.8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus qui ea ullam, enim tempora ipsum fuga alias quae
              ratione a officiis id temporibus autem? Quod nemo facilis
              cupiditate. Ex, vel?
            </p>
            <p className="font-light text-gray-300 leading-1.8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              amet enim quod veritatis, nihil voluptas culpa! Neque consectetur
              obcaecati sapiente?
            </p>
            <a
              href="#"
              className="text-white font-serif bg-orange-300 mt-6  px-6 rounded py-1 hover:bg-orange-400 inline-block text-2xl cursor-pointer"
            >
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
