import mobile from "../../assets/NewHomePageImg/images (2).png";
import variability from "../../assets/NewHomePageImg/images (3).png";
import availability from "../../assets/NewHomePageImg/images.png";

// partners
import collage1 from "../../assets/NewHomePageImg/download (1) (1).png";
import collage2 from "../../assets/NewHomePageImg/download (2) (1).png";
import collage3 from "../../assets/NewHomePageImg/download (4).png";
import collage4 from "../../assets/NewHomePageImg/download (5) (1).png";

import "./Management.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Management = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="lg:pt-0 pt-[25px] relative z-0 ">
      <div className="py-5" id="our-value">
        <h1 className="text-3xl text-center font-semibold my-5 mt-10 my-text">Our Values</h1>
        <div className="grid lg:grid-cols-3 w-[90%] mx-auto items-center lk my-10">
          <div data-aos="fade-right" className="mx-auto">
            <img data-aos="zoom-in-right" src={mobile} alt="" />
            <h1>Mobility</h1>
            <p>
              All Education process is online - <br /> study wherever you want
              at your <br /> own comfortable pace
            </p>
          </div>
          <div data-aos="flip-left" className="mx-auto">
            <img data-aos="zoom-in-right" src={variability} alt="" />
            <h1>Variability</h1>
            <p>
              We provide more than 50 branches <br /> for your effective
              studying.Choose <br /> from a variety of training option{" "}
            </p>
          </div>
          <div data-aos="fade-left" className="mx-auto">
            <img data-aos="zoom-in-right" src={availability} alt="" />
            <h1>Availability</h1>
            <p>
              Our platform is available in over 20 <br /> countries around the
              word.Watch <br /> the lectures of the best teacher{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="py-10" id="our-partner">
        <div className=" text-center my-15">
          <h1 className="text-3xl my-10 my-text font-semibold">Our Partner</h1>
          <p className="text-center w-full md:w-1/2 mx-auto md:text-[18px] pt-[12px] px-10">
            We collaborate with top University to create the most actual
            study programs
          </p>
        </div>
        <div className="grid grid-cols-4 col w-[90%] mx-auto my-10 ">
          <img data-aos="zoom-in-down" src={collage1} alt="" />
          <img data-aos="zoom-in-down" src={collage2} alt="" />
          <img data-aos="zoom-in-down" src={collage3} alt="" />
          <img data-aos="zoom-in-down" src={collage4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Management;
