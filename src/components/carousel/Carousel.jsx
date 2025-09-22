import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = ({ slides = [] }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    // const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    const [activeIndex, setActiveIndex] = useState(0);
    const [autoPlayActive, setAutoPlayActive] = useState(true);
    const [autoPlayInterval, setAutoPlayInterval] = useState(5000);
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    useEffect(() => {
        const timer = setInterval(() => {
            if (autoPlayActive) {
                setActiveIndex((prev) => (prev + 1) % slides.length);
            }
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [slides.length, autoPlayActive, autoPlayInterval]);

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
        setAutoPlayActive(false);
    };

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
        setAutoPlayActive(false);
    };

    const goToSlide = (index) => {
        setActiveIndex(index);
        setAutoPlayActive(false);
    };

    useEffect(() => {
        // Set initial load to false after animation duration
        const timer = setTimeout(() => {
            setIsInitialLoad(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);


    return (

        // <div className="relative w-full  mx-auto h-screen  overflow-hidden group">
        //     <div className="relative w-full h-full">
        //         {slides.map((slide, index) => (
        //             <div
        //                 key={index}
        //                 className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'
        //                     }`}
        //             >
        //                 <img src={slide.img} alt={`carousel-${index}`} className="w-full h-full object-cover" />
        //                 <div className={`absolute inset-0 flex items-center ${index % 2 !== 0 ? 'justify-end' : 'justify-start'} p-20  bg-black bg-opacity-50`} >

        //                     <div className={`max-w-3xl ${index % 2 !== 0 ? 'text-end' : 'text-start'} text-white px-6`}>
        //                         <h4 className="text-2xl font-bold mb-4 text-white">{slide?.heading}</h4>
        //                         <h1 className="text-4xl font-extrabold mb-4 text-white">{slide?.subHeading}</h1>
        //                         <p className="text-lg mb-6">{slide?.description}</p>
        //                         <div className="flex justify-center gap-4">
        //                             {slide?.buttons?.map((button, i) => (
        //                                 <a
        //                                     key={i}
        //                                     href={button?.link}
        //                                     className={`px-6 py-3 rounded-full ${button?.class}`}
        //                                 >
        //                                     {button?.text}
        //                                 </a>
        //                             ))}
        //                         </div>
        //                     </div>


        //                     <div className={`max-w-3xl ${index % 2 !== 0 ? 'text-end' : 'text-start'} text-white px-6 overflow-hidden`}>
        //                         {/* Heading */}
        //                         <div className={`transform transition-all duration-1000 ${index === activeIndex
        //                             ? 'translate-x-0 opacity-100'
        //                             : `${index % 2 !== 0 ? 'translate-x-full' : '-translate-x-full'} opacity-0`
        //                             }`}
        //                             style={{ transitionDelay: '200ms' }}>
        //                             <h4 className="text-2xl font-bold mb-4 text-white">
        //                                 {slide?.heading}
        //                             </h4>
        //                         </div>

        //                         {/* Subheading */}
        //                         <div className={`transform transition-all duration-1000 ${index === activeIndex
        //                             ? 'translate-x-0 opacity-100'
        //                             : `${index % 2 !== 0 ? 'translate-x-full' : '-translate-x-full'} opacity-0`
        //                             }`}
        //                             style={{ transitionDelay: '400ms' }}>
        //                             <h1 className="text-4xl font-extrabold mb-4 text-white">
        //                                 {slide?.subHeading}
        //                             </h1>
        //                         </div>

        //                         {/* Description */}
        //                         <div className={`transform transition-all duration-1000 ${index === activeIndex
        //                             ? 'translate-x-0 opacity-100'
        //                             : `${index % 2 !== 0 ? 'translate-x-full' : '-translate-x-full'} opacity-0`
        //                             }`}
        //                             style={{ transitionDelay: '600ms' }}>
        //                             <p className="text-lg mb-6">
        //                                 {slide?.description}
        //                             </p>
        //                         </div>

        //                         {/* Buttons */}
        //                         <div className={`transform transition-all duration-1000 ${index === activeIndex
        //                             ? 'translate-x-0 opacity-100'
        //                             : `${index % 2 !== 0 ? 'translate-x-full' : '-translate-x-full'} opacity-0`
        //                             }`}
        //                             style={{ transitionDelay: '800ms' }}>
        //                             <div className={`flex ${index % 2 !== 0 ? 'justify-end' : 'justify-start'} gap-4`}>
        //                                 {slide?.buttons?.map((button, i) => (
        //                                     <a
        //                                         key={i}
        //                                         href={button?.link}
        //                                         className={`px-6 py-3 rounded-full ${button?.class}`}
        //                                     >
        //                                         {button?.text}
        //                                     </a>
        //                                 ))}
        //                             </div>
        //                         </div>
        //                     </div>




        //                 </div>
        //             </div>
        //         ))}
        //     </div>

        //     <button
        //         className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full"
        //         onClick={prevSlide}
        //     >
        //         <ChevronLeft className="h-8 w-8" />
        //     </button>
        //     <button
        //         className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full"
        //         onClick={nextSlide}
        //     >
        //         <ChevronRight className="h-8 w-8" />
        //     </button>

        //     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        //         {slides.map((_, index) => (
        //             <button
        //                 key={index}
        //                 onClick={() => goToSlide(index)}
        //                 className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
        //                     }`}
        //             />
        //         ))}
        //     </div>
        // </div>
        <div className="relative w-full mx-auto h-96 md:h-screen overflow-hidden group">
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-full md:h-full transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        {slide?.type === "video" ?
                            <video
                                className={`w-full h-60 md:h-full object-cover transition-transform duration-1000 ${isInitialLoad ? 'scale-110' : 'scale-100'}`}
                                autoPlay muted loop playsInline>
                                <source src={slide.img} type="video/mp4" />
                                {/* <source src="https://zeeqr2.s3.ap-south-1.amazonaws.com/images/videoplayback.mp4" type="video/mp4" /> */}
                                {/* <source src="https://metatestbucket.s3.ap-south-1.amazonaws.com/fbaaf19f37f5a4d5fbb58c88e27f7e7ebc7717d57183247b77ddb3359aeb280f" type="video/mp4" /> */}
                                Your browser does not support the video tag.
                            </video>
                            :

                            <img
                                src={slide.img}
                                alt={`carousel-${index}`}
                                className={`w-full h-96 md:h-full object-cover transition-transform duration-1000 ${isInitialLoad ? 'scale-110' : 'scale-100'
                                    }`}
                            />
                        }

                        {/* <div className={`absolute inset-0 flex items-center ${index % 2 !== 0 ? 'justify-end' : 'justify-start'
                            } p-20 bg-black transition-opacity duration-1000  
                            ${isInitialLoad ? 'bg-opacity-0' : 'bg-opacity-50'}
                            `}> */}
                        <div className={`absolute inset-0 flex items-center ${index % 2 !== 0 ? 'justify-end' : 'justify-start'
                            } md:p-20 bg-black transition-opacity duration-1000  bg-opacity-50 `}>
                            <div className={`md:max-w-3xl ${index % 2 !== 0 ? 'text-end' : 'text-start'} text-white px-6 overflow-hidden`}>
                                {/* Heading */}
                                <div className={`transform transition-all duration-1000 ${index === activeIndex && !isInitialLoad
                                    ? 'translate-x-0 opacity-100'
                                    : `${index % 2 !== 0 ? 'translate-x-full' : '-translate-x-full'} opacity-0`
                                    }`}
                                    style={{ transitionDelay: '200ms' }}>
                                    <h4 className="md:text-2xl mt-5 md:mt-0 font-bold mb-4 text-white">
                                        {slide?.heading}
                                    </h4>
                                </div>

                                {/* Subheading */}
                                <div className={`transform transition-all duration-1000 ${index === activeIndex && !isInitialLoad
                                    ? 'translate-x-0 opacity-100'
                                    : `${index % 2 !== 0 ? 'translate-x-full' : '-translate-x-full'} opacity-0`
                                    }`}
                                    style={{ transitionDelay: '400ms' }}>
                                    <h1 className="md:text-4xl font-extrabold mb-4 text-white">
                                        {slide?.subHeading}
                                    </h1>
                                </div>

                                {/* Description */}
                                <div className={`transform transition-all duration-1000 ${index === activeIndex && !isInitialLoad
                                    ? 'translate-x-0 opacity-100'
                                    : `${index % 2 !== 0 ? 'translate-x-full' : '-translate-x-full'} opacity-0`
                                    } hidden md:block`}
                                    style={{ transitionDelay: '600ms' }}>
                                    <p className="md:text-lg mb-6">
                                        {slide?.description}
                                    </p>
                                </div>

                                {/* Buttons */}
                                <div className={`transform transition-all duration-1000 ${index === activeIndex && !isInitialLoad
                                    ? 'translate-x-0 opacity-100'
                                    : `${index % 2 !== 0 ? 'translate-x-full' : '-translate-x-full'} opacity-0`
                                    }`}
                                    style={{ transitionDelay: '800ms' }}>
                                    <div className={`flex ${index % 2 !== 0 ? 'justify-end' : 'justify-start'} gap-4`}>
                                        {slide?.buttons?.map((button, i) => (
                                            <a
                                                key={i}
                                                href={button?.link}
                                                className={` text-sm px-6 py-3 md:text-lg rounded-full ${button?.class}`}
                                            >
                                                {button?.text}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full hidden md:block"
                onClick={prevSlide}
            >
                <ChevronLeft className="h-8 w-8" />
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full hidden md:block"
                onClick={nextSlide}
            >
                <ChevronRight className="h-8 w-8" />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                    />
                ))}
            </div>
        </div>

    )
};

export default Carousel;