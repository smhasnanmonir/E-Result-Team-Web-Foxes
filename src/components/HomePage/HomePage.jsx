import { Helmet } from "react-helmet-async";
import Management from "../Management/Management";
import HomepageLottie from "../../assets/NewHomePageImg/israfil.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

import ReviewSectionHome from "../ReviewSectionHome/ReviewSectionHome";
import HomePageStudent from "../HomePageStudent/HomePageStudent";
import HomePageTeacher from "../HomePageTeacher/HomePageTeacher";
import RolesHomepage from "../RolesHomepage/RolesHomepage";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>E-Result | Home</title>
      </Helmet>
      {/* <div className="lg:grid grid-cols-2 h-[90vh] w-[80%] mx-auto my-10"> */}
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-center md:gap-10 h-[90vh] w-[80%] mx-auto md:my-10 py-5 pb-10"> {/*habibi */}
        <div className="md:my-[100px] my-[30px]">
          {/* text-red-300 */}
          <h1 className="text-5xl my-text">E-Result</h1> 
          <p className="text-4xl my-5">Education</p>
          <p>
            E-Result is an innovative online platform designed to provide
            students with quick and convenient access to their academic results.
          </p>
          <div className="my-5">
            <button>
              <Link className="my-btn" to="/information-page">
                See Your Result
              </Link>
            </button>
          </div>
        </div>
        <div className="my-[20px] md:my-0">
          <Lottie animationData={HomepageLottie}></Lottie>
        </div>
      </div>
      <div className="">
        <HomePageStudent></HomePageStudent>
      </div>
      <div className="">
        <HomePageTeacher></HomePageTeacher>
      </div>
      <div className="">
        <RolesHomepage></RolesHomepage>
      </div>
      <div className="">
        <Management></Management>
      </div>
      <div className="">
        <ReviewSectionHome></ReviewSectionHome>
      </div>
    </>
  );
};

export default HomePage;
