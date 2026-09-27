import BrowseSection from "./component/browse/BrowseSection";
import Navbar from "./component/header/Navbar";
import Hero from "./component/hero/Hero";
import Products from "./component/products/Products";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <BrowseSection />
        <Products />
      </div>
    </>
  );
};

export default App;
