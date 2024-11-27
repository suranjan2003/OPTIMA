import React from 'react'

const PreviousYears = () => {

    // Array of Past Associations with image and link properties
    const pastSponsorImages = [
        { src: "/sponslogosPrev/ACC.png", link: "https://www.acclimited.com/" },
        { src: "/sponslogosPrev/AIBH.jpg", link: "https://www.aibh.in/" },
        { src: "/sponslogosPrev/Allied_publishers.jpg", link: "https://www.alliedpublishers.com/" },
        { src: "/sponslogosPrev/GE_HealthCare.png", link: "https://www.gehealthcare.in/" },
        { src: "/sponslogosPrev/RP_Industrial_Consultant.png", link: "https://rpindustrials.com/" },
        { src: "/sponslogosPrev/Springer.png", link: "https://www.springer.com/in" },
        { src: "/sponslogosPrev/SR_Srinivasan.jpg", link: "https://www.srsrinivasan.com/" },
        { src: "/sponslogosPrev/TATA.png", link: "https://www.tata.com/" },
        { src: "/sponslogosPrev/Total_Library_Solution.png", link: "https://tlsgroup.co.in/" },
    ];

    return (
        <div 
        className="flex w-full flex-col items-center sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto p-6 mt-10 text-black overflow-y-auto px-4">

            {/* Past Associations Section */}
            <div className="w-[95%] bg-gray-100 p-4 rounded-lg shadow-lg mt-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Past Associations</h2>
                <div className="h-1 w-12 bg-blue-500 mx-auto rounded"></div> 
                <div 
                    className={`grid grid-cols-1 md:grid-cols-2 gap-4 mt-4`}
                >
                    {pastSponsorImages.map((sponsor, index) => (
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