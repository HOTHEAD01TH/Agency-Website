import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import team1 from "../../assets/website/team1.png";
import team2 from "../../assets/website/team2.png";
import team3 from "../../assets/website/team3.png";

const Hero = () => {
  const images = [team1, team2, team3];
  const imageRef = useRef(null);
  let currentImage = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(imageRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          currentImage = (currentImage + 1) % images.length;
          imageRef.current.src = images[currentImage];
          gsap.to(imageRef.current, { opacity: 1, duration: 1 });
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="dark:bg-gray-950 dark:text-white duration-300">
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          {/* Image section */}
          <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
            <img
              ref={imageRef}
              src={team1}
              alt=""
              className="w-full sm:max-w-[400px] md:max-w-[550px] bg-transparent" // Increased size
              style={{ transition: "opacity 1s ease-in-out" }} // Match the duration of the GSAP transition
            />
          </div>

          {/* Text section */}
          <div className="space-y-5 order-2 sm:order-1 xl:pr-40">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl font-semibold"
              style={{ lineHeight: 1.2 }}
            >
              Building Brands in the{" "}
              <span className="text-primary">Digital Agency</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              Your partner in navigating the ever-evolving landscape of digital
              marketing. From conceptualization to execution, we craft tailored
              solutions that drive results and elevate your brand to new
              heights.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="0"
              className="primary-btn"
            >
              Learn More
            </button>
            <button
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-offset="0"
              className="watch-video-btn"
            >
              <FontAwesomeIcon icon={faPlayCircle} className="play-icon w-auto ml-6" />
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
