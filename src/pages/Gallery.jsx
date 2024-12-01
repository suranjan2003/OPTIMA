import React, { useState, useEffect } from "react";
import MultipleItems from "../components/MultipleItems";


const Gallery = () => {

  return (
    <div className="gallery-container bg-[#170453] text-white min-h-screen p-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">Gallery</h1>
        <h3 className="text-xl m-2">A Glimpse into life with Optima</h3>
      </div>

      <div className="h-auto w-[85vw] mx-auto pt-10">
        <h1 className="flex item-center justify-center text-3xl font-bold m-2">Optima</h1>
        <MultipleItems/>
      </div>
    </div>
  );
};

export default Gallery;
