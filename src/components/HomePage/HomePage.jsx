import { Helmet } from "react-helmet-async";
import bgImage from "../../assets/allImages/background.jpg";
import HomePageSwipe from "../HomePageSwipe/HomePageSwipe";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>E-Result | Home</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className=" bg-no-repeat bg-cover font-poppins w-full h-[100vh] relative overflow-hidden"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        >
          {/* Text content */}
          <div className="px-[5%] md:px-14 py-4 h-full flex pt-10 md:pt-56 gap-5 md:gap-62 flex-col md:flex-row justify-around items-start">
            <div>
              <h1 className="text-center md:text-left text-white font-semibold mt-24 text-4xl md:text-6xl mb-6">
                E-Result
              </h1>

              <p className="text-white text-center md:text-left my-2 text-sm md:text-md md:w-96">
                E-Result is an innovative online platform designed to provide
                students with quick and convenient access to their academic
                results.
              </p>
              <div className="text-center md:text-left">
              <button className="hover:bg-opacity-75 transition ease-in-out  hover:-translate-y-1 hover:scale-110 text-1xl font-bold mt-4 md:mt-12 mb-4 bg-white text-black rounded-md px-[2%] md:px-6 py-2">
                See Your Result
              </button>
              </div>
              <p className="text-white text-sm md:text-md font-semibold text-center md:text-left ">
              Getting result is easier than ever !!!
              </p>
            </div>
            <div className="px-[4%] md:mt-24">
                <HomePageSwipe></HomePageSwipe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
