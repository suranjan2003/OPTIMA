import React, { useState, useEffect } from "react";
import MultipleItems from "../components/MultipleItems";
import Day1Items from "../components/Day1Items";


const Gallery = () => {

  return (
    <div className="gallery-container bg-[#170453] text-white min-h-screen p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <h3 className="text-xl m-2">A Glimpse into life with Optima</h3>
      </div>

      <div className="h-auto w-[85vw] mx-auto pt-10">
        <div className="video-container flex justify-center">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg shadow-lg"
            width="720"
            height="400"
          >
            <source src="/Optima-Gallery/Optima-2023.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="h-auto w-[85vw] mx-auto pt-10">
        <h1 className="flex item-center justify-center text-3xl font-bold m-2">Day 1</h1>
        <Day1Items/>
      </div>

      <div className="h-auto w-[85vw] mx-auto pt-10">
        <h1 className="flex item-center justify-center text-3xl font-bold m-2">Guest Lectures</h1>
        <MultipleItems/>
      </div>
    </div>
  );
};

export default Gallery;
