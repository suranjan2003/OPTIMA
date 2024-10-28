import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';

const Spons = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState(2025); // State to store selected year
  
    const toggleSidebar = () => {
      setIsSidebarOpen((prevState) => !prevState);
    };
  
    const handleYearSelect = (year) => {
      setSelectedYear(year); // Set the selected year
    };
  
    return (
      <div className="relative h-screen bg-[#170453] flex flex-col items-start pl-5 pt-16">
        <button 
          onClick={toggleSidebar} 
          className="bg-blue-500 text-white py-3 px-6 rounded transition duration-300 hover:bg-blue-600"
        >
          Years
        </button>
  
        {/* Include the SideMenu component */}
        <SideMenu 
          isSidebarOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar} 
          onYearSelect={handleYearSelect}
        />

        <section className="mt-10 text-white">
          <h2 className="text-2xl font-bold mb-4">Sponsorship Partners for {selectedYear}</h2>
          {selectedYear === 2025 && (
            <p className="mb-6">Details about the 2025 Sponsorship Package.</p>
          )}
          {selectedYear === 2023 && (
            <p className="mb-6">Details about the 2023 Sponsorship Package.</p>
          )}
          {selectedYear === 'Previous' && (
            <p className="mb-6">Details about previous years' sponsorship highlights.</p>
          )}
        </section>
      </div>
    );
};

export default Spons;
