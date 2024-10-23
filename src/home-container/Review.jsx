import React from "react";
import Slider from  "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review1 from "../assets/Review1.png"
import Review2 from "../assets/Review2.jpg"
import Review3 from "../assets/Review3.jpg"

function Review() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
       slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive:  [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:  1,
                    slidesToScroll: 1,
                    infinite: true,
                    }
            }
        ]
        };

    const data =  [
        {
            name: `Ajay Sagar`,
            img:Review2,
            review: `I have been using this product for a month now and I must say it has  been a game changer for me. The quality of the product is top-notch.`
            },
            {
                name:`Mahaveer Singh`,
                img:Review3,
                review: `I was a bit skeptical at first but after using it for a week, I  can confidently say that it is one of the best products I have ever used.`
            },
            {
                name:`Anand Shakya`,
                img:Review1,
                review: `I have been using this product for a month now and I must say it has   been a game changer for me. The quality of the product is top-notch.`
                }
            ];


  return (
    <>
    <div className="bg-black" id="Review">
        <h3 className="text-white text-4xl font-serif font-semibold text-center">Customer's <span className="text-orange-600" >Reviews</span></h3>
    <div className="w-3/4 m-auto">
      <div className="mt-10 pb-8 ">
        <Slider {...settings} >
          
        {data.map((d) => (
          
          <div
          key={d.name}
          className="bg-white h-[400px] text-black rounded-xl">
            <div className="h-52 rounded-xl bg-sky-950 flex justify-center items-center">
              <img src={d.img} alt="" className="h-40 w-40 rounded-full  " />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-serif font-semibold" >{d.name}</p>
                <p className="font-extralight font-serif" >{d.review}</p>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
    </div>
    
    </>
  );
}

export default Review;
