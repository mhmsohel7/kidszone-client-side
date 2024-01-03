import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";
import Banner from "../pages/Home/Banner/Banner";
import Gallery from "../pages/Home/Gallery/Gallery";
import TabCategory from "../pages/Home/TabCategory/TabCategory";
import Brands from "../pages/Home/Brands/Brands";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Gallery />
      <TabCategory />
      <Outlet />
      <Brands />
      <Footer />
    </div>
  );
};

export default Main;
