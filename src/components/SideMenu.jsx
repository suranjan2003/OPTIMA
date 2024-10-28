import React from 'react';

const SideMenu = ({ isSidebarOpen, toggleSidebar, onYearSelect }) => {
  const years = [2025, 2023, 'Previous'];

  const handleYearClick = (year) => {
    toggleSidebar();
    onYearSelect(year);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-200 shadow-lg transition-all duration-300 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          width: '50%', // Base width for mobile
          maxWidth: '240px', // Limit width for larger screens
          zIndex: 100,
        }}
      >
        {/* Sidebar Content */}
        <div className="p-6 h-full overflow-y-auto">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">Years</h1>
          <hr className="mb-4 border-gray-300" />
          <ul className="space-y-4 text-lg">
            {years.map((year, index) => (
              <li
                key={index}
                className="cursor-pointer text-gray-600 hover:text-red-700 transition-colors"
                onClick={() => handleYearClick(year)}
              >
                {year}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleSidebar}
          style={{ zIndex: 99 }}
        ></div>
      )}
    </>
  );
};

export default SideMenu;
