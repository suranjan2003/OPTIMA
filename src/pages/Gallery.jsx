import React, { useState, useEffect } from "react";
import MultipleItems from "../components/MultipleItems";

class PhotoFilter {
  constructor(name, images) {
    this.name = name;
    this.images = images;
  }
}

const filters = [
  new PhotoFilter("All Photos", [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ]),
  new PhotoFilter("A Photos", [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ]),
  new PhotoFilter("B Photos", ["https://via.placeholder.com/300"]),
  new PhotoFilter("C Photos", [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ]),
];

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  const [isAnimating, setIsAnimating] = useState(true); // Start with animation on initial load
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleFilterChange = (filter) => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setSelectedFilter(filter);
  };

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

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
