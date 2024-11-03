import React, { useState } from 'react';
import SideMenu from '../components/SideMenu';
import Year25 from '../components/Year25';
import Year23 from '../components/Year23';
import PreviousYears from '../components/PreviousYears';
import { FaGripLines } from "react-icons/fa6";

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
        <div className="relative bg-[#170453] flex flex-col">
            <div>
                {/* Header section with button and heading */}
            <div className="items-center justify-between px-5 pt-16 ">
                <div>
                <button
                onClick={toggleSidebar}
                className="text-white p-3 rounded transition duration-300 hover:text-blue-300"
                >
                <FaGripLines size={34} />
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
            
                {selectedYear === 2025 && (
                    <Year25/>
                )}
                {selectedYear === 2023 && (
                    <Year23/>
                )}
                {selectedYear === 'Previous' && (
                    <PreviousYears/>
                )}
            </div>
            
        </div>
    );
};

export default Spons;
