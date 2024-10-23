import React from "react";
import Offer1 from "../assets/offer-1.jpg";
import Offer2 from "../assets/offer-2.jpg";

// import Slider from  "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/effect-flip';
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

function Offer() {
  const offer = [
    {
      id: 1,
      img: Offer1,
      title: "Cappuccino Arabica",
      discount: "Get 40% Offer",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its normal distribution layout.",
    },
    {
      id: 2,
      img: Offer2,
      title: "Cappuccino Arabica",
      discount: "Get 40% Offer",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its normal distribution layout.",
    },
  ];

  return (
    <div
      className="bg-black relative before:content-['']
    before:absolute left-0 top-0  w-[100%] h-[100%]"
    >
      <div
        className="text-white text-center relative 
      "
      >
        <h1 className="text-3xl font-serif text-orange-500 font-bold">
          Offers
        </h1>
        <h3 className="text-2xl mt-4">Special Offer For You</h3>
        
        <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className=""
      >
          {offer.map(({ img, title, discount, description }, index) => {
            return (
              <SwiperSlide
                className="grid sm:grid-cols-[7fr_5fr]  items-center sm:mt-4 mt-6 px-4 sm:h-[26rem]"
                key={index}
              >
                <div className="sm:px-32 sm:mr-[-8rem] -mb-16 mr-[.5rem]">
                  <img src={img} alt="" className="h-80" />
                </div>
                <div className="text-sky-600 sm:h-60  sm:w-96  bg-zinc-800 before:content-[''] before:absolute before:inset-2  before:border-2 before:border-dashed before:border-gray-200 sm:p-[1.75rem] p-[1rem] sm:pr-[2.25rem] pr-[1rem] relative ">
                  <h3 className="text-2xl font-bold pb-4">{title}</h3>
                  <span className=" text-white border px-4 py-1 border-dashed ">
                    {discount}
                  </span>
                  <p className="text-white pt-4 pb-5">{description}</p>
                <button className="border hover:bg-fuchsia-800 transition-all duration-200  rounded-md px-8 py-1 sm:mt-3 sm:mb-1 mb-8  ">
                Order Now
              </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default Offer;
