import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import SocialIcon from "./SocialIcon";
const Footer = () => {
  return (
    <footer className="relative z-[-1]">
      <div>
        <div className="footer p-10 bg-white text-black">
          <div>
            <img className="w-20 h-20 mb-2 rounded-2xl" src={logo} alt="" />
            <p>
              Result Service
              <br />
              Providing reliable result since 2020
            </p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Board Result</a>
            <a className="link link-hover">UGC Link</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Menu</span>
            <Link to="/" className="link link-hover">
              Home
            </Link>
            <Link to="/contact" className="link link-hover">
              Contact
            </Link>
            <Link to="/viewAll" className="link link-hover">
              All Result
            </Link>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
          <div>
            <SocialIcon></SocialIcon>
          </div>
        </div>
      </div>
      <p className="bg-black text-white text-center">
        © 2023 Result Services. All rights reserved.{" "}
      </p>
    </footer>
  );
};

export default Footer;
