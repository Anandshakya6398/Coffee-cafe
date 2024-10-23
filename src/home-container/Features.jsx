import React from "react";
import certified from '../assets/certified.svg';
import coffee from '../assets/coffee.svg';
import coffeeBeans from '../assets/coffee-beans.svg';
import shape  from "../assets/shape.png";
import aos from "aos";
// import {motion} from  'framer-motion';


function Features() {

  const features = [
    {
      id: 1,
      img: certified,
      title: "Organic Certified",
      description:
        "It is a long established fact that a reader will be by the readable content of a page looking at its layout.",
    },
    {
      id: 2,
      img: coffee,
      title: "High Quality",
      description:
        "It is a long established fact that a reader will be by the readable content of a page looking at its layout.",
    },
    {
      id: 3,
      img: coffeeBeans,
      title: "Proper Roasting",
      description:
        "It is a long established fact that a reader will be by the readable content of a page looking at its layout.",
    },
  ];
  return (
    <div className="bg-black py-12 " >
     
      <h3 className="text-orange-500 text-center font-serif text-4xl mb-5 ">Features</h3>

      <h2 className="text-white text-center text-4xl hover:font-serif  ">Our Best Features</h2>
      <div 
      data-aos="zoom-in-up"
     
      //  data-aos="fade-up-left"
      
      className="grid sm:grid-cols-3 md:gap-8 gap-4 md:p-8 p-10">
        {
        features.map(({img, title, description}, index) => {
          return (
            <div 
            
        
            
            id="--item" key={index} className="font-serif p-8 border rounded-lg relative hover:-translate-y-2 ">
              <img src={img} alt=""  className="w-[60px] mb-5"/>
              <h3 className="text-white text-2xl mb-4">{title}</h3>
              <p className="text-white font-light">{description}</p>
              <img src={shape} alt="" className="absolute w-[130px] right-[1.25rem] top-[2rem] opacity-[0.4]" />
            </div>
          );
        })}
      </div>
      </div>
    
  );
}

export default Features;
