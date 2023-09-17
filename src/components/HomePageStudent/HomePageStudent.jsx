import { useEffect, useState } from "react";
import "./HomePageStudent.css";
import { useInView } from "react-intersection-observer";

const HomePageStudent = () => {
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
      id="homePageStudent"
      className={`home-page-student ${isVisible ? "visible" : ""}`}
      ref={ref}
    >
      <div className="">
        <h1 className="md:text-3xl text-2xl font-semibold text-center my-text">
          How this works for Students
        </h1>
        <p className="text-center w-full md:w-1/2 mx-auto md:text-[18px] pt-[12px] px-10">
          Student can see their result and there is a dashboard for them for
          further usage.
        </p>
        <div className="relative flex justify-center items-center">
          <img
            src="https://i.ibb.co/98yS2db/Mac-Book-Air-1student-ss.png"
            alt="Centered Image"
            className={`animated-image ${isVisible ? "visible" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePageStudent;
