import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import Banner from "../pages/Home/Banner/Banner";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
