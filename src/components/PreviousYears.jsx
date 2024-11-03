import React from 'react'

const PreviousYears = () => {
    const titleSponsor = [
        { src: "https://via.placeholder.com/150", link: "https://titlesponsor.com" }
    ];

    // Array of major sponsors with image and link properties
    const sponsorImages = [
        { src: "https://via.placeholder.com/100?text=Sponsor+1", link: "https://sponsor1.com" },
        { src: "https://via.placeholder.com/100?text=Sponsor+2", link: "https://sponsor2.com" },
        { src: "https://via.placeholder.com/100?text=Sponsor+3", link: "https://sponsor3.com" },
        { src: "https://via.placeholder.com/100?text=Sponsor+4", link: "https://sponsor4.com" },
        { src: "https://via.placeholder.com/100?text=Sponsor+5", link: "https://sponsor5.com" },
        { src: "https://via.placeholder.com/100?text=Sponsor+6", link: "https://sponsor6.com" },
        { src: "https://via.placeholder.com/100?text=Sponsor+7", link: "https://sponsor7.com" },
        { src: "https://via.placeholder.com/100?text=Sponsor+8", link: "https://sponsor8.com" }
    ];
    return (
        <div className="flex w-full flex-col items-center sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto p-6 mt-10 text-black overflow-y-auto px-4">
            {/* Title Sponsor Section */}
            <div className="w-[95%] bg-gray-100 p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Title Sponsor</h2>
                <div className="h-1 w-12 bg-blue-500 mx-auto rounded"></div> 
                <div className="flex justify-center mt-4">
                    {titleSponsor.map((sponsor, index) => (
                        <a 
                            key={index}
                            href={sponsor.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <img 
                                src={sponsor.src} 
                                alt="Title Sponsor Logo" 
                                className="w-64 h-64 object-contain transition-transform duration-300 hover:scale-105"
                            />
                        </a>
                    ))}
                </div>
            </div>

            {/* Major Sponsors Section */}
            <div className="w-[95%] bg-gray-100 p-4 rounded-lg shadow-lg mt-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Major Sponsors</h2>
                <div className="h-1 w-12 bg-blue-500 mx-auto rounded"></div> 
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    {sponsorImages.map((sponsor, index) => (
                        <a 
                            key={index}
                            href={sponsor.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="block"
                        >
                            <img 
                                src={sponsor.src}
                                alt={`Major Sponsor ${index + 1}`} 
                                className="w-full h-32 object-contain mx-auto transition-transform duration-300 hover:scale-105"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PreviousYears