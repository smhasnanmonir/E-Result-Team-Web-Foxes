import { Helmet } from "react-helmet-async";
import bgImage from "../../../public/allImages/background.jpg";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>E-Result | Home</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="bg-no-repeat bg-cover font-poppins w-full h-[887.414px] relative"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        >
          {/* Text content */}
          <div className="px-14 py-4 h-full flex flex-col justify-center items-start">
            <h1 className="text-white font-semibold mt-24 text-6xl mb-6">
              E-Result
            </h1>

            <p className="text-white my-2  w-96">
              E-Result is an innovative online platform designed to provide
              students with quick and convenient access to their academic
              results.
            </p>
            <button className="hover:bg-opacity-75 transition ease-in-out  hover:-translate-y-1 hover:scale-110 text-1xl font-bold mt-14 mb-4 bg-white text-black rounded-md px-6 py-2">
              See Your Result
            </button>
            <p className="text-white font-semibold ">
            Getting result is easier than ever !!!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
