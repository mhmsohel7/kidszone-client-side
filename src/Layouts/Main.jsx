import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import Banner from "../pages/Home/Banner/Banner";
import Gallery from "../pages/Home/Gallery/Gallery";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Gallery />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
