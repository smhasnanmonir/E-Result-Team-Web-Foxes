import { Link } from "react-router-dom";
import sImg from "../../assets/HomepageImg/s1.jpg";
import sImg3 from "../../assets/HomepageImg/s2.jpg";
import sImg2 from "../../assets/HomepageImg/s3.jpg";

import tImg from "../../assets/HomepageImg/t1.jpg";
import tImg2 from "../../assets/HomepageImg/t2.jpg";
import tImg3 from "../../assets/HomepageImg/t3.jpg";

const HomeToDashboard = () => {
  // working
  // const isAdmin = true;
  return (
    <div>
      <div className="">
        <div className="my-5">
          <h1 className="text-center text-3xl">For Students</h1>
          <hr className="border-2 border-black w-[200px] mx-auto" />
        </div>
        <div className="grid lg:grid-cols-3 gap-7 text-center text-[20px] w-[90%] mx-auto">
          <div className="">
            <img src={sImg} alt="" />
          </div>
          <div className="">
            <img src={sImg2} alt="" />
          </div>
          <div className="">
            <img src={sImg3} alt="" />
          </div>
        </div>
      </div>
      <div className="">
        <div className="my-5">
          <h1 className="text-center text-3xl">For Teacher</h1>
          <hr className="border-2 border-black w-[200px] mx-auto" />
        </div>
        <div className="grid lg:grid-cols-3 gap-7 text-center text-[20px] w-[90%] mx-auto">
          <div className="">
            <img src={tImg} alt="" />
          </div>
          <div className="">
            <img src={tImg2} alt="" />
          </div>
          <div className="">
            <img src={tImg3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeToDashboard;
