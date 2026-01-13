import About from "./sections/about/About";
import Footer from "./sections/footer/Footer";
import Hero from "./sections/hero/Hero";
import Navbar from "./sections/navbar/Navbar";
import Programs from "./sections/programs/Programs";

const App = () => {
  return (
    <div>
      <div className="border-b border-b-neutral-200 fixed top-0 left-0 w-full bg-white z-50">
        <Navbar />
      </div>
      <div className="pt-12">
        <Hero />
      </div>
      <div className="bg-[#FBF9FF]" id="about">
        <About />
      </div>
      <div> 
        <Programs />
      </div>
      <div> 
        <Footer />
      </div>
    </div>
  );
};

export default App;
