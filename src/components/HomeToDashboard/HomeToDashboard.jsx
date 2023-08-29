import { Link } from "react-router-dom";
import sImg from "../../assets/HomepageImg/s1.jpg";
import sImg3 from "../../assets/HomepageImg/s2.jpg";
import sImg2 from "../../assets/HomepageImg/s3.jpg";
import './Hometodash.css'
import tImg from "../../assets/HomepageImg/t1.jpg";
import tImg2 from "../../assets/HomepageImg/t2.jpg";
import tImg3 from "../../assets/HomepageImg/t3.jpg";

const HomeToDashboard = () => {
  // working
  // const isAdmin = true;
  return (
    <div className="hometodash">
      <h1 className="text-4xl font-semibold text-center my-3">Features that we provide</h1>
      <div className="students-sec">
        <div className="my-5">
          <h1 className="text-center text-3xl font-semibold">For Students</h1>
          <hr className="border-2 border-black w-[25%] mt-4 mx-auto" />
        </div>
        <div className="grid lg:grid-cols-3 gap-7 text-center text-[20px] w-[90%] mx-auto">
          <div className="students">
            <img className="mb-3" src={sImg} alt="" />
            <Link>View Result</Link>
          </div>
          <div className="students">
            <img className="mb-3" src={sImg2} alt="" />
            <Link>Download Result Sheet</Link>
          </div>
          <div className="students">
            <img className="mb-3" src={sImg3} alt="" />
            <Link>Apply For Reevaluate</Link>
          </div>
        </div>
      </div>
      <div className="teachers-sec mt-5">
        <div className="my-5">
          <h1 className="text-center text-3xl font-semibold">For Teacher</h1>
          <hr className="border-2 border-black w-[25%] mt-4 mx-auto" />
        </div>
        <div className="grid lg:grid-cols-3 gap-7 text-center text-[20px] w-[90%] mx-auto">
          <div className="teachers">
            <img className="mb-3" src={tImg} alt="" />
            <Link>Publish Result</Link>
          </div>
          <div className="teachers">
            <img className="mb-3" src={tImg2} alt="" />
            <Link>Update Marks</Link>
          </div>
          <div className="teachers">
            <img className="mb-3" src={tImg3} alt="" />
            <Link>Check the Recheck</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeToDashboard;
