import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Experience from "./components/Experience";
import Expertise from "./components/Expertise";
import FrequentlyAQ from "./components/FrequentlyAQ";
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
      <FrequentlyAQ />
      <Footer />
    </>
  );
}

export default App;
