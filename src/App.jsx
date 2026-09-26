

import BrowseSection from "./component/browse/BrowseSection";
import Navbar from "./component/header/Navbar";
import Hero from "./component/hero/Hero";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <BrowseSection />
        
      </div>
    </>
  );
};

export default App;
