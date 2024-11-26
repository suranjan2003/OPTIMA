import React, { useState } from 'react';

// Class for managing filters and their images
class PhotoFilter {
  constructor(name, images) {
    this.name = name; // Filter name (e.g., "All Photos", "A Photos")
    this.images = images; // Array of image URLs
  }
}

// Define filter objects dynamically
const filters = [
  new PhotoFilter("All Photos", [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ]),
  new PhotoFilter("A Photos", [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ]),
  new PhotoFilter("B Photos", [
    "https://via.placeholder.com/150",
  ]),
  new PhotoFilter("C Photos", [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ]),
];

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState(filters[0]); // Default to "All Photos"

  return (
    <div className="gallery-container bg-[#170453] text-white min-h-screen p-6">
      {/* Gallery Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">Gallery</h1>
      </div>

      {/* Filter Labels */}
      <div className="filters flex justify-center gap-4 mb-8">
        {filters.map((filter, index) => (
          <label
            key={index}
            className={`cursor-pointer px-4 py-2 rounded ${
              selectedFilter.name === filter.name
                ? 'bg-gray-500'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter.name}
          </label>
        ))}
      </div>

      {/* Display Selected Filter */}
      <div className="text-center mb-6">
        <p className="text-xl">
          Currently Viewing: <span className="font-bold">{selectedFilter.name}</span>
        </p>
      </div>

      {/* Gallery Images */}
      <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {selectedFilter.images.map((image, index) => (
          <div key={index} className="image-card">
            <img
              src={image}
              alt={`Gallery ${selectedFilter.name} ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
