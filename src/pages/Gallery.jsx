import React, { useState, useEffect } from "react";
import MultipleItems from "../components/MultipleItems";
import Day1Items from "../components/Day1Items";
import Day0Items from "../components/Day0Items";


const Gallery = () => {

  return (
    <div className="gallery-container bg-[#170453] text-white min-h-screen p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <h3 className="text-xl m-2">A Glimpse into life with Optima</h3>
      </div>

      <div className="h-auto w-[85vw] mx-auto pt-10">
        <div className="video-container relative w-full max-w-[720px] max-h-[400px] mx-auto">
          <iframe
            src="https://www.youtube.com/embed/MK9qOB40Cic"
            title="Optima Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-lg"
            style={{
              aspectRatio: '16/9',
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          ></iframe>
        </div>
      </div>

      <div className="h-auto w-[85vw] mx-auto pt-10">
        <h1 className="flex item-center justify-center text-3xl font-bold m-2">Day 0</h1>
        <Day0Items/>
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
