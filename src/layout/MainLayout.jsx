import { Outlet } from "react-router-dom";
import Footer from "../component/footer/Footer";
import Navbar from "../component/header/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer/>
    </>
  );
};

export default MainLayout;
