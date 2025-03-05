import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import Work from "./components/Work";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Expertise />
      <Work />
      <Experience />
      <Blog />
      <Testimonial />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
