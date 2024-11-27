import React from 'react';

const Year23 = () => {
    // Array for the single Title Sponsor
    const titleSponsor = [
        { src: "/sponslogos23/OPTYM.jpg", link: "https://optym.com/" }
    ];

    // Array of major sponsors with image and link properties
    const majorSponsorImages = [
        { src: "/sponslogos23/AirIndia.png", link: "https://www.airindia.com/" },
        { src: "/sponslogos23/FlexSim.jpg", link: "https://www.flexsim.com/" },
    ];

    const strategicSponsorImages = [
        { src: "/sponslogos23/RahulCommerce.jpg", link: "https://rahulcom.com/" },
        { src: "/sponslogos23/Vicon.png", link: "https://www.vicon.com/" }
    ];

    const eventsSponsorImages = [
        { src: "/sponslogos23/ORMAE.jpeg", link: "https://ormae.com/" },
        { src: "/sponslogos23/DCVisionVR.jpg", link: "https://dcvision.in/" },
        { src: "/sponslogos23/Blue_Yonder.png", link: "https://sponsor1.com" },
        { src: "/sponslogos23/Delhivery_Logo.png", link: "https://www.delhivery.com/" },
        { src: "/sponslogos23/GFG.png", link: "https://www.geeksforgeeks.org/" },
        { src: "/sponslogos23/Sabre.png", link: "https://www.sabre.com/" }
    ];

    const MerchandiseSponsor = [
        { src: "/sponslogos23/OwlPrints.png", link: "https://titlesponsor.com" }
    ];

    const mediaSponsorImages = [
        { src: "/sponslogos23/CampusVarta.png", link: "https://www.campusvarta.com/" },
        { src: "/sponslogos23/WomansEra.png", link: "https://womansera.com/" }
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
                                className="w-64 object-contain transition-transform duration-300 hover:scale-105"
                            />
                        </a>
                    ))}
                </div>
            </div>

            {/* Major Sponsors Section */}
            <div className="w-[95%] bg-gray-100 p-4 rounded-lg shadow-lg mt-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Major Sponsors</h2>
                <div className="h-1 w-12 bg-blue-500 mx-auto rounded"></div> 
                <div 
                    className={`grid grid-cols-1 md:grid-cols-2 gap-4 mt-4`}
                >
                    {majorSponsorImages.map((sponsor, index) => (
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

            {/* Strategic Partners Section */}
            <div className="w-[95%] bg-gray-100 p-4 rounded-lg shadow-lg mt-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Strategic Partners</h2>
                <div className="h-1 w-12 bg-blue-500 mx-auto rounded"></div> 
                <div 
                    className={`grid grid-cols-1  md:grid-cols-2 gap-4 mt-4`}
                >
                    {strategicSponsorImages.map((sponsor, index) => (
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

            {/* Events Partners Section */}
            <div className="w-[95%] bg-gray-100 p-4 rounded-lg shadow-lg mt-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Events Partners</h2>
                <div className="h-1 w-12 bg-blue-500 mx-auto rounded"></div> 
                <div 
                    className={`grid grid-cols-1 md:grid-cols-3  gap-4 mt-4`}
                >
                    {eventsSponsorImages.map((sponsor, index) => (
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

            {/* Merchandise Partners Section */}
            <div className="w-[95%] bg-gray-100 p-4 rounded-lg shadow-lg mt-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Merchandise Partner</h2>
                <div className="h-1 w-12 bg-blue-500 mx-auto rounded"></div> 
                <div 
                    className={`grid grid-cols-1 gap-4 mt-4`}
                >
                    {MerchandiseSponsor.map((sponsor, index) => (
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

            {/* Media Partners Section */}
            <div className="w-[95%] bg-gray-100 p-4 rounded-lg shadow-lg mt-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Media Partners</h2>
                <div className="h-1 w-12 bg-blue-500 mx-auto rounded"></div> 
                <div 
                    className={`grid grid-cols-1 md:grid-cols-2 gap-4 mt-4`}
                >
                    {mediaSponsorImages.map((sponsor, index) => (
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

export default Year23;
