import { useEffect, useState } from "react";
import "./HomePageTeacher.css";
import { useInView } from "react-intersection-observer";

const HomePageTeacher = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <div
      id="homePageTeacher"
      className={`home-page-teacher ${isVisible ? "visible" : ""}`}
      ref={ref}
    >
      <div className="container">
        <h1 className="md:text-3xl text-2xl font-semibold text-center my-text">
          How this works for Teachers
        </h1>
        <p className="text-center w-full md:w-1/2 mx-auto md:text-[18px] pt-[12px] px-10">
          Teachers have a dashboard for them to manage student result easily.
        </p>
        <div className="relative flex justify-center items-center">
          <img
            src="https://i.ibb.co/QNJhLVS/Mac-Book-Air-2teacher-ss.png"
            alt="Centered Image"
            className={`animated-image ${isVisible ? "visible" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageTeacher;
