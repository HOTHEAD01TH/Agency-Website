import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { StickyContainer } from 'react-sticky';

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Work from "./components/Works/Work";
import Footer from "./components/Footer/Footer";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import WorkCard from "./components/Works/WorkCard";
import Services2 from "./pages/Services";
import BlogsComp from "./components/Blogs/BlogsComp";
import FabButton from "./components/fab"; // Adjust the import path if needed

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <StickyContainer className="bg-white dark:bg-black dark:text-white text-black overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/service" element={<Services />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
      <FabButton /> {/* Render the FabButton component here */}
      <Footer />
    </StickyContainer>
  );
};

const Home = () => (
  <>
    <Hero />
    <Fade direction="down" triggerOnce>
      <Work />
    </Fade>
    <Fade direction="down" triggerOnce delay={400}>
      <Services2 />
    </Fade>
    <Fade direction="down" triggerOnce delay={400}>
      <BlogsComp />
    </Fade>
    <Fade direction="down" triggerOnce delay={400}>
      <WorkCard />
    </Fade>
  </>
);

export default App;
