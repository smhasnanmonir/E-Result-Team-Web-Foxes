import { useState } from "react";
import "./RolesHomepage.css";
import { Link } from "react-router-dom";
const RolesHomepage = () => {
  const [isButtonVisible, setButtonVisible] = useState(false);

  const toggleButton = () => {
    setButtonVisible(!isButtonVisible);
  };
  return (
    <div className="relative z-0 grid place-items-center role" id="role">
      <h1 className="my-text text-4xl font-semibold text-center my-3 py-3">
        Choose your role
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:mt-24 mx-2">
        <div
          className={`card md:w-96  bg-base-100 shadow-xl lg:ml-80 card-effect ${
            isButtonVisible ? "button-visible" : ""
          }`}
          onMouseEnter={toggleButton}
          onMouseLeave={toggleButton}
        >
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/cyKCzb9/student.png"
              alt="student"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Become a Student!</h2>
            <p>Start learning from the best teachers all around the world!</p>
            <div
              className={`card-actions ${isButtonVisible ? "show-button" : ""}`}
            >
              <Link to="/login">
                <button className="my-btn">Join</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`card md:w-96 bg-base-100 shadow-xl card-effect ${
            isButtonVisible ? "button-visible" : ""
          }`}
          onMouseEnter={toggleButton}
          onMouseLeave={toggleButton}
        >
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/JmpW1Zn/teacher.png"
              alt="teacher"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Become a Teacher!</h2>
            <p>Ready to share your knowledge and experience? join us!</p>
            <div
              className={`card-actions ${isButtonVisible ? "show-button" : ""}`}
            >
              <Link to="/login">
                <button className="my-btn">Join</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesHomepage;
