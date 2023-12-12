import logo from "../../../assets/Banner/logo2.png";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaLocationArrow,
  FaLink,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer items-center p-10 bg-[#281652] text-white">
        <div>
          <img src={logo} className="w-20" alt="" />
          <h3 className="text-2xl font-bold">KidZone Store</h3>
        </div>
        <div>
          <div>
            <h3 className="flex items-center gap-2 text-lg uppercase">
              <FaLink />
              Connect with me
            </h3>
            <div className="flex gap-4 my-5 text-xl">
              <Link to="https://github.com/mhmsohel7" target="_blank">
                <FaGithub />
              </Link>
              <Link to="" target="_blank">
                <FaLinkedin />
              </Link>
              <Link to="" target="_blank">
                <FaYoutube />
              </Link>
              <Link to="" target="_blank">
                <FaFacebook />
              </Link>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-lg uppercase">
                <FaLocationArrow />
                Find Us
              </h3>
              <p className=" mt-3">Motijheel-301, Dhaka, Bangladesh.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
