import React, { useState, useEffect } from "react";
import "./Gallery.css";

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
      </div>

      {/* Filters */}
      <div className="filters flex justify-center gap-4 mb-8">
        {filters.map((filter, index) => (
          <label
            key={index}
            className={`cursor-pointer px-4 py-2 rounded ${
              selectedFilter.name === filter.name
                ? "bg-gray-500"
                : "bg-gray-700 hover:bg-gray-600"
            }`}
            onClick={() => handleFilterChange(filter)}
          >
            {filter.name}
          </label>
        ))}
      </div>

      {/* Gallery */}
      <div
        className={`gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${
          isAnimating ? "animate-fade-in" : ""
        }`}
      >
        {selectedFilter.images.map((image, index) => (
          <div
            key={index}
            className="image-card transition-transform transform hover:scale-105"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image}
              alt={`Gallery ${selectedFilter.name} ${index + 1}`}
              className="w-full h-auto cursor-pointer"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="modal-overlay fixed inset-0 z-50 flex justify-center items-center"
          onClick={closeModal}
        >
          {/* Background blur */}
          <div className="modal-blur absolute inset-0 bg-black bg-opacity-75 backdrop-blur-md"></div>

          {/* Modal Image */}
          <div
            className="modal-image-container relative z-10 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImage}
              alt="Expanded View"
              className="max-w-[90vw] max-h-[80vh] object-contain transition-transform transform scale-100"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
