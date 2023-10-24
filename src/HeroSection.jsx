import React, { useRef, useState } from "react";
import heroVideo from "./Assets/Videos/bg-vid.mp4";

const HeroSection = ({ isMenuShown }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const videoRef = useRef();

  return (
    <div className="flex items-end justify-center w-full h-screen text-center">
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        loop
        muted
        className="object-cover h-full w-full absolute -z-10"
      />

      <div
        className={`p-8 flex flex-col items-center justify-center duration-500 w-full ${
          isVideoPlaying ? "" : "bg-black/80"
        } ${isMenuShown ? "opacity-20" : "opacity-100"}`}
      >
        <h1 className="text-7xl lg:text-7xl">NewVogue</h1>
        <h1 className="text-5xl lg:text-5xl capitalize mb-12">
          fashion revolution by{" "}
          <span className="text-thBlue font-bold">daabChingri()</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
