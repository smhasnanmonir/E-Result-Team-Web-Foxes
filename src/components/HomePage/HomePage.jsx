import { Helmet } from "react-helmet-async";
import HomeToDashboard from "../HomeToDashboard/HomeToDashboard";
import Management from "../Management/Management";
import israfil from '../../../israfil.json';
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>E-Result | Home</title>
      </Helmet>
        <div className="lg:grid grid-cols-2 w-[80%] mx-auto my-10">
           <div className="my-[100px]">
                <h1 className="text-5xl text-red-300">E-Result</h1>
                <p className="text-4xl my-5">Education</p>
                <p >Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit. Libero, mollitia?</p>
                <div className="my-5">
                   <button><Link className="btn" to="/information-page">See Your Result</Link></button>
                </div>
           </div>
           <div className="">
           <Lottie animationData={israfil}></Lottie>
           </div>
        </div>
      <div className="my-10">
        <HomeToDashboard></HomeToDashboard>
      </div>
      <div className="my-5">
        <Management></Management>
      </div>
    </>
  );
};

export default HomePage;
