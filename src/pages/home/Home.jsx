import BrowseSection from "../../component/browse/BrowseSection";
import FurnitureGallery from "../../component/gallery/FurnitureGallary";
import Hero from "../../component/hero/Hero";
import Products from "../../component/products/Products";

const Home = () => {
  return (
    <>
      <Hero />
      <BrowseSection />
      <Products />
      <FurnitureGallery />
    </>
  );
};

export default Home;
