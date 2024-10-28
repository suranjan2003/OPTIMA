import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';

const Spons = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [selectedYear, setSelectedYear] = useState(2025);

    const toggleSidebar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    const handleYearSelect = (year) => {
        setSelectedYear(year);
    };

    return (
        <div className="relative h-screen bg-[#170453] flex flex-col">
            {/* Header section with button and heading */}
            <div className="items-center justify-between px-5 pt-16 pb-8">
                <div className='mb-4'>
                    <button 
                        onClick={toggleSidebar} 
                        className="bg-blue-500 text-white py-1 px-5 rounded transition duration-300 hover:bg-blue-600"
                    >
                        Year
                    </button>
                </div>
                <h2 className="flex-grow text-center text-2xl font-bold text-white">Sponsorship Partners {selectedYear}</h2>
            </div>

            {/* SideMenu component */}
            <SideMenu 
                isSidebarOpen={isSidebarOpen} 
                toggleSidebar={toggleSidebar} 
                onYearSelect={handleYearSelect}
            />

            {/* Main content section */}
            <section className="flex-grow bg-gray-100 p-6 overflow-y-auto">
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
