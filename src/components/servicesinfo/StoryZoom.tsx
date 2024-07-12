import React, { useState, useRef, useEffect } from "react";
import "./VideoCarousel.css";

const videos = [
  {
    id: 1,
    url: "https://mdbootstrap.com/img/video/Tropical.mp4",
    title: "Video 1",
    label: "Web Development and Designing",
    content: "Some representative placeholder content for the first slide."
  },
  {
    id: 2,
    url: "https://mdbootstrap.com/img/video/Lines.mp4",
    title: "Video 2",
    label: "App Development and Designing",
    content: "Some representative placeholder content for the second slide."
  },
  {
    id: 3,
    url: "https://mdbootstrap.com/img/video/forest.mp4",
    title: "Video 3",
    label: "Digital Marketing and SEO",
    content: "Some representative placeholder content for the third slide."
  },
];

const VideoCarousel = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [currentVideoIndex]);

  const previousVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="video-carousel-container">
      <video
        ref={videoRef}
        className="video-carousel-video"
        autoPlay
        muted
        loop
        controls={false}
        key={videos[currentVideoIndex].url}
      >
        <source src={videos[currentVideoIndex].url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-carousel-controls">
        <button className="carousel-button left-button" onClick={previousVideo}>
          &lt;
        </button>
        {/* <button className="carousel-button middle-button" onClick={() => {}}>
          || Play/Pause button (Placeholder for future functionality)
        </button> */}
        <button className="carousel-button right-button" onClick={nextVideo}>
          &gt;
        </button>
      </div>
      <div className="video-carousel-text">
        <h5 className="text-xl">{videos[currentVideoIndex].label}</h5>
        <p>{videos[currentVideoIndex].content}</p>
      </div>
    </div>
  );
};

export default VideoCarousel;
