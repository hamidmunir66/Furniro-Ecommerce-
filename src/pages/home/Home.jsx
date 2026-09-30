import { lazy, Suspense } from "react";
import BrowseSection from "../../component/browse/BrowseSection";

import Hero from "../../component/hero/Hero";

const Products = lazy(() => import("../../component/products/Products"));
const FurnitureGallery = lazy(
  () => import("../../component/gallery/FurnitureGallary"),
);
const Home = () => {
  return (
    <>
      <Hero />
      <BrowseSection />
      <Suspense fallback={<div>Loading Component....</div>}>
        <Products />
        <FurnitureGallery />
      </Suspense>
    </>
  );
};

export default Home;
