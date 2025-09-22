// import React, { useState, useEffect } from 'react';
// import { ChevronDown } from 'lucide-react';

// function LandingPageNavbar() {
//     // return (
//     //     <div>
//     //         <nav className="flex items-center justify-between px-5 py-4">
//     //             <a href="#" className="text-primary flex items-center">
//     //                 <h1 className="text-primary flex items-center">
//     //                     {/* <i className="fas fa-hand-holding-water mr-3"></i> */}
//     //                     <img className='rounded-full w-16 h-16 mx-2' src="https://content.jdmagicbox.com/comp/thrissur/g7/9999px487.x487.171203022651.t2g7/catalogue/st-mary-s-jacobite-syrian-orthodox-church-kannara-thrissur-churches-zzg8i67pmk-250.jpg" alt="" srcset="" />
//     //                     <p>St.Marys Jacobite Syrian Soonoro Church Kannara</p>
//     //                 </h1>
//     //             </a>
//     //             <button className="block lg:hidden">
//     //                 <span className="fa fa-bars"></span>
//     //             </button>
//     //             <div className="hidden lg:flex lg:flex-grow lg:items-center lg:w-auto">
//     //                 <div className="ml-auto flex items-center">
//     //                     <a href="index.html" className="nav-item nav-link active">
//     //                         Home
//     //                     </a>
//     //                     <a href="about.html" className="nav-item nav-link">
//     //                         About
//     //                     </a>
//     //                     <a href="service.html" className="nav-item nav-link">
//     //                         Service
//     //                     </a>
//     //                     <a href="blog.html" className="nav-item nav-link">
//     //                         Blog
//     //                     </a>
//     //                     <div className="relative">
//     //                         <button className="nav-item nav-link">
//     //                             Pages
//     //                             <i className="fas fa-chevron-down ml-2"></i>
//     //                         </button>
//     //                         <div className="absolute hidden dropdown-menu">
//     //                             <a href="feature.html" className="dropdown-item">
//     //                                 Our Feature
//     //                             </a>
//     //                             <a href="product.html" className="dropdown-item">
//     //                                 Our Product
//     //                             </a>
//     //                             <a href="team.html" className="dropdown-item">
//     //                                 Our Team
//     //                             </a>
//     //                             <a href="testimonial.html" className="dropdown-item">
//     //                                 Testimonial
//     //                             </a>
//     //                             <a href="404.html" className="dropdown-item">
//     //                                 404 Page
//     //                             </a>
//     //                         </div>
//     //                     </div>
//     //                     <a href="contact.html" className="nav-item nav-link">
//     //                         Contact
//     //                     </a>
//     //                 </div>
//     //                 <div className="hidden xl:flex items-center mr-3">
//     //                     <div className="flex flex-col pr-3 border-r border-primary">
//     //                         <span className="text-body">Get Free Delivery</span>
//     //                         <a href="tel:+4733378901" className="text-primary">
//     //                             Free: + 0123 456 7890
//     //                         </a>
//     //                     </div>
//     //                 </div>
//     //                 <button
//     //                     className="btn btn-primary rounded-full h-10 w-10 flex justify-center items-center mb-3 lg:mb-0 mr-3"
//     //                     data-bs-toggle="modal"
//     //                     data-bs-target="#searchModal"
//     //                 >
//     //                     <i className="fas fa-search"></i>
//     //                 </button>
//     //                 <a
//     //                     href="#"
//     //                     className="btn btn-primary rounded-full py-2 px-4"
//     //                 >
//     //                     Order Now
//     //                 </a>
//     //             </div>
//     //         </nav>
//     //     </div>
//     // )
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.pageYOffset > 0);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <nav
//             className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
//                     ? 'bg-white shadow-lg text-primary'
//                     : 'bg-transparent text-white'
//                 }`}
//         >
//             <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//                 <a href="#" className="flex items-center">
//                     <img
//                         className="rounded-full w-12 h-12 mr-2"
//                         src="https://content.jdmagicbox.com/comp/thrissur/g7/9999px487.x487.171203022651.t2g7/catalogue/st-mary-s-jacobite-syrian-orthodox-church-kannara-thrissur-churches-zzg8i67pmk-250.jpg"
//                         alt=""
//                     />
//                     <h1 className="text-lg font-bold text-primary">St.Marys Jacobite Syrian Soonoro Church Kannara</h1>
//                 </a>
//                 <div className="hidden lg:flex items-center">
//                     <a href="index.html" className="nav-link active">
//                         Home
//                     </a>
//                     <a href="about.html" className="nav-link">
//                         About
//                     </a>
//                     <a href="service.html" className="nav-link">
//                         Service
//                     </a>
//                     <a href="blog.html" className="nav-link">
//                         Blog
//                     </a>
//                     <div className="relative">
//                         <button className="nav-link">
//                             Pages
//                             <ChevronDown className="ml-2 inline-block" />
//                         </button>
//                         <div className="absolute hidden dropdown-menu bg-white shadow-lg py-2 px-4 rounded-md">
//                             <a href="feature.html" className="dropdown-item block py-2 hover:text-primary">
//                                 Our Feature
//                             </a>
//                             <a href="product.html" className="dropdown-item block py-2 hover:text-primary">
//                                 Our Product
//                             </a>
//                             <a href="team.html" className="dropdown-item block py-2 hover:text-primary">
//                                 Our Team
//                             </a>
//                             <a href="testimonial.html" className="dropdown-item block py-2 hover:text-primary">
//                                 Testimonial
//                             </a>
//                             <a href="404.html" className="dropdown-item block py-2 hover:text-primary">
//                                 404 Page
//                             </a>
//                         </div>
//                     </div>
//                     <a href="contact.html" className="nav-link">
//                         Contact
//                     </a>
//                     <button
//                         className="btn btn-primary rounded-full h-10 w-10 flex justify-center items-center ml-4"
//                         data-bs-toggle="modal"
//                         data-bs-target="#searchModal"
//                     >
//                         <i className="fas fa-search"></i>
//                     </button>
//                     <a href="#" className="btn btn-primary rounded-full py-2 px-4 ml-4">
//                         Order Now
//                     </a>
//                 </div>
//                 <button className="block lg:hidden">
//                     <span className="fa fa-bars text-2xl"></span>
//                 </button>
//             </div>
//         </nav>
//     )
// }

// export default LandingPageNavbar



// import React, { useState, useEffect } from 'react';
// import { ChevronDown } from 'lucide-react';
// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

// function LandingPageNavbar() {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.pageYOffset > 0);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <nav
//             className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg text-primary' : 'bg-transparent text-white'
//                 }`}
//         >
//             <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//                 {/* Logo Section */}
//                 <a href="#" className="flex items-center">
//                     <img
//                         className="rounded-full w-12 h-12 mr-2"
//                         src="https://content.jdmagicbox.com/comp/thrissur/g7/9999px487.x487.171203022651.t2g7/catalogue/st-mary-s-jacobite-syrian-orthodox-church-kannara-thrissur-churches-zzg8i67pmk-250.jpg"
//                         alt=""
//                     />
//                     <h1 className="text-lg font-bold text-primary">
//                         St. Marys Jacobite Syrian Soonoro Church Kannara
//                     </h1>
//                 </a>

//                 {/* Desktop Navigation */}
//                 <div className="hidden lg:flex items-center">
//                     <a href="index.html" className="nav-link active">
//                         Home
//                     </a>
//                     <a href="about.html" className="nav-link">
//                         About
//                     </a>
//                     <a href="service.html" className="nav-link">
//                         Service
//                     </a>
//                     <a href="blog.html" className="nav-link">
//                         Blog
//                     </a>
//                     <div className="relative">
//                         <button className="nav-link">
//                             Pages
//                             <ChevronDown className="ml-2 inline-block" />
//                         </button>
//                         <div className="absolute hidden dropdown-menu bg-white shadow-lg py-2 px-4 rounded-md">
//                             <a href="feature.html" className="dropdown-item block py-2 hover:text-primary">
//                                 Our Feature
//                             </a>
//                             <a href="product.html" className="dropdown-item block py-2 hover:text-primary">
//                                 Our Product
//                             </a>
//                             <a href="team.html" className="dropdown-item block py-2 hover:text-primary">
//                                 Our Team
//                             </a>
//                             <a href="testimonial.html" className="dropdown-item block py-2 hover:text-primary">
//                                 Testimonial
//                             </a>
//                             <a href="404.html" className="dropdown-item block py-2 hover:text-primary">
//                                 404 Page
//                             </a>
//                         </div>
//                     </div>
//                     <a href="contact.html" className="nav-link">
//                         Contact
//                     </a>

//                     {/* Social Media Icons */}
//                     <div className="flex items-center ml-4 space-x-3">
//                         <a
//                             href="https://facebook.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-primary hover:text-blue-600"
//                         >
//                             <FaFacebook size={24} />
//                         </a>
//                         <a
//                             href="https://instagram.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-primary hover:text-pink-500"
//                         >
//                             <FaInstagram size={24} />
//                         </a>
//                         <a
//                             href="https://twitter.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-primary hover:text-blue-400"
//                         >
//                             <FaTwitter size={24} />
//                         </a>
//                     </div>
//                 </div>

//                 {/* Mobile Hamburger Menu */}
//                 <button
//                     className="block lg:hidden"
//                     onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 >
//                     <span className="fa fa-bars text-2xl"></span>
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <div className="lg:hidden bg-white shadow-lg text-primary">
//                     <a href="index.html" className="block py-2 px-4">
//                         Home
//                     </a>
//                     <a href="about.html" className="block py-2 px-4">
//                         About
//                     </a>
//                     <a href="service.html" className="block py-2 px-4">
//                         Service
//                     </a>
//                     <a href="blog.html" className="block py-2 px-4">
//                         Blog
//                     </a>
//                     <a href="contact.html" className="block py-2 px-4">
//                         Contact
//                     </a>
//                     <div className="flex justify-center py-3 space-x-4">
//                         <a
//                             href="https://facebook.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-primary hover:text-blue-600"
//                         >
//                             <FaFacebook size={24} />
//                         </a>
//                         <a
//                             href="https://instagram.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-primary hover:text-pink-500"
//                         >
//                             <FaInstagram size={24} />
//                         </a>
//                         <a
//                             href="https://twitter.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-primary hover:text-blue-400"
//                         >
//                             <FaTwitter size={24} />
//                         </a>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// }

// export default LandingPageNavbar;


// import React, { useState, useEffect } from 'react';
// import { ChevronDown } from 'lucide-react';
// import { FaFacebook, FaInstagram, FaSearch, FaTwitter } from 'react-icons/fa';

// function LandingPageNavbar() {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isSearchOpen, setIsSearchOpen] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.pageYOffset > 0);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <nav
//             className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg text-primary' : 'bg-transparent text-white'
//                 }`}
//         >
//             <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//                 {/* Logo Section */}
//                 <a href="#" className="flex items-center">
//                     <img
//                         className="rounded-full w-12 h-12 mr-2"
//                         src="https://content.jdmagicbox.com/comp/thrissur/g7/9999px487.x487.171203022651.t2g7/catalogue/st-mary-s-jacobite-syrian-orthodox-church-kannara-thrissur-churches-zzg8i67pmk-250.jpg"
//                         alt=""
//                     />
//                     <h1 className="text-lg font-bold text-primary">
//                         St. Marys Jacobite Syrian Soonoro Church Kannara
//                     </h1>
//                 </a>

//                 {/* Desktop Navigation */}
//                 <div className="hidden lg:flex items-center">
//                     <a href="index.html" className="nav-link active">
//                         Home
//                     </a>
//                     <a href="about.html" className="nav-link">
//                         About
//                     </a>
//                     <a href="service.html" className="nav-link">
//                         Service
//                     </a>
//                     <a href="blog.html" className="nav-link">
//                         Blog
//                     </a>
//                     <div className="relative">
//                         <button className="nav-link">
//                             Pages
//                             <ChevronDown className="ml-2 inline-block" />
//                         </button>
//                         <div className="absolute hidden dropdown-menu bg-white shadow-lg py-2 px-4 rounded-md">
//                             <a href="feature.html" className="dropdown-item block py-2 hover:text-primary">
//                                 Our Feature
//                             </a>
//                             <a href="product.html" className="dropdown-item block py-2 hover:text-primary">
//                                 Our Product
//                             </a>
//                             <a href="team.html" className="dropdown-item block py-2 hover:text-primary">
//                                 Our Team
//                             </a>
//                             <a href="testimonial.html" className="dropdown-item block py-2 hover:text-primary">
//                                 Testimonial
//                             </a>
//                             <a href="404.html" className="dropdown-item block py-2 hover:text-primary">
//                                 404 Page
//                             </a>
//                         </div>
//                     </div>
//                     <a href="contact.html" className="nav-link">
//                         Contact
//                     </a>

//                     {/* Search Button */}
//                     <button
//                         className="btn btn-primary rounded-full h-10 w-10 flex justify-center items-center ml-4"
//                         onClick={() => setIsSearchOpen(!isSearchOpen)}
//                     >
//                         {/* <i className="fas fa-search text-white"></i> */}
//                         <FaSearch />
//                     </button>

//                     {/* Social Media Icons */}
//                     {/* <div className="flex items-center ml-4 space-x-3">
//                         <a
//                             href="https://facebook.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-primary hover:text-blue-600"
//                         >
//                             <FaFacebook size={24} />
//                         </a>
//                         <a
//                             href="https://instagram.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-primary hover:text-pink-500"
//                         >
//                             <FaInstagram size={24} />
//                         </a>
//                         <a
//                             href="https://twitter.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-primary hover:text-blue-400"
//                         >
//                             <FaTwitter size={24} />
//                         </a>
//                     </div> */}

//                     {/* Social Media Icons */}
//                     <div className="flex items-center ml-4 space-x-3">
//                         <a
//                             href="https://facebook.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-blue-600 text-white p-2 rounded-full hover:opacity-80"
//                         >
//                             <FaFacebook size={20} />
//                         </a>
//                         <a
//                             href="https://instagram.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-pink-500 text-white p-2 rounded-full hover:opacity-80"
//                         >
//                             <FaInstagram size={20} />
//                         </a>
//                         <a
//                             href="https://twitter.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-blue-400 text-white p-2 rounded-full hover:opacity-80"
//                         >
//                             <FaTwitter size={20} />
//                         </a>
//                     </div>
//                 </div>

//                 {/* Mobile Hamburger Menu */}
//                 <button
//                     className="block lg:hidden"
//                     onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 >
//                     <span className="fa fa-bars text-2xl"></span>
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <div className="lg:hidden bg-white shadow-lg text-primary">
//                     <a href="index.html" className="block py-2 px-4">
//                         Home
//                     </a>
//                     <a href="about.html" className="block py-2 px-4">
//                         About
//                     </a>
//                     <a href="service.html" className="block py-2 px-4">
//                         Service
//                     </a>
//                     <a href="blog.html" className="block py-2 px-4">
//                         Blog
//                     </a>
//                     <a href="contact.html" className="block py-2 px-4">
//                         Contact
//                     </a>
//                     {/* <div className="flex justify-center py-3 space-x-4">
//                         <a
//                             href="https://facebook.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-primary hover:text-blue-600"
//                         >
//                             <FaFacebook size={24} />
//                         </a>
//                         <a
//                             href="https://instagram.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-primary hover:text-pink-500"
//                         >
//                             <FaInstagram size={24} />
//                         </a>
//                         <a
//                             href="https://twitter.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-primary hover:text-blue-400"
//                         >
//                             <FaTwitter size={24} />
//                         </a>
//                     </div> */}
//                     <div className="flex justify-center py-3 space-x-4">
//                         <a
//                             href="https://facebook.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-blue-600 text-white p-2 rounded-full hover:opacity-80"
//                         >
//                             <FaFacebook size={20} />
//                         </a>
//                         <a
//                             href="https://instagram.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-pink-500 text-white p-2 rounded-full hover:opacity-80"
//                         >
//                             <FaInstagram size={20} />
//                         </a>
//                         <a
//                             href="https://twitter.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-blue-400 text-white p-2 rounded-full hover:opacity-80"
//                         >
//                             <FaTwitter size={20} />
//                         </a>
//                     </div>
//                 </div>
//             )}

//             {/* Search Modal */}
//             {isSearchOpen && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
//                     <div className="bg-white p-4 rounded-md shadow-lg w-3/4 max-w-md">
//                         <button
//                             className="text-red-500 font-bold float-right"
//                             onClick={() => setIsSearchOpen(false)}
//                         >
//                             Close
//                         </button>
//                         <input
//                             type="text"
//                             placeholder="Search..."
//                             className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                         />
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// }

// export default LandingPageNavbar;

// finil 1

// import React, { useState, useEffect } from 'react';
// import { ChevronDown } from 'lucide-react';
// import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// function LandingPageNavbar() {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isSearchOpen, setIsSearchOpen] = useState(false);
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.pageYOffset > 0);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <nav
//             className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg text-primary' : 'bg-transparent text-white'
//                 }`}
//         >
//             <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//                 {/* Logo Section */}
//                 <a href="#" className="flex items-center">
//                     <img
//                         className="rounded-full w-12 h-12 mr-2"
//                         src="https://content.jdmagicbox.com/comp/thrissur/g7/9999px487.x487.171203022651.t2g7/catalogue/st-mary-s-jacobite-syrian-orthodox-church-kannara-thrissur-churches-zzg8i67pmk-250.jpg"
//                         alt=""
//                     />
//                     <h1 className="text-lg font-bold text-primary">
//                         St. Marys Jacobite Syrian Soonoro Church Kannara
//                     </h1>
//                 </a>

//                 {/* Desktop Navigation */}
//                 <div className="hidden lg:flex items-center space-x-6">
//                     <Link to="/" className="nav-link active">
//                         Home
//                     </Link>
//                     {/* <Link to="/about" className="nav-link">
//                         About
//                     </Link> */}
//                     <div
//                         className="relative"
//                         onMouseEnter={() => setIsAboutDropdownOpen(true)}
//                         onMouseLeave={() => setIsAboutDropdownOpen(false)}
//                     >
//                         <button className="nav-link flex items-center">
//                             About <ChevronDown className="ml-2 inline-block" />
//                         </button>
//                         {isAboutDropdownOpen && (
//                             <div className="absolute top-full left-0 bg-white shadow-lg py-2 px-4 rounded-md z-40">
//                                 <Link to="/about" className="dropdown-item block py-2 hover:text-primary">
//                                     About Church
//                                 </Link>
//                                 <Link to="/about/holy-soonooro" className="dropdown-item block py-2 hover:text-primary">
//                                     The Holy Soonooro
//                                 </Link>
//                                 <Link to="/about/about-mother-mary" className="dropdown-item block py-2 hover:text-primary">
//                                     Mother Mary
//                                 </Link>
//                                 <Link to="/about/ettunombu" className="dropdown-item block py-2 hover:text-primary">
//                                     Ettunombu
//                                 </Link>
//                             </div>
//                         )}
//                     </div>
//                     <Link to="/administration" className="nav-link">

//                         Administration
//                     </Link>
//                     {/* <a href="blog.html" className="nav-link">
//                         Blog
//                     </a> */}

//                     {/* Pages Dropdown */}
//                     <div
//                         className="relative"
//                         onMouseEnter={() => setIsDropdownOpen(true)}
//                         onMouseLeave={() => setIsDropdownOpen(false)}
//                     >
//                         <button className="nav-link flex items-center">
//                             Pages <ChevronDown className="ml-2 inline-block" />
//                         </button>
//                         {isDropdownOpen && (
//                             <div className="absolute top-full left-0 bg-white shadow-lg py-2 px-4 rounded-md z-40">
//                                 <Link to="/vows-and-offerings" className="dropdown-item block py-2 hover:text-primary">
//                                     Vows & Offerings
//                                 </Link>
//                                 <Link to="/gallery" className="dropdown-item block py-2 hover:text-primary">
//                                     Gallery
//                                 </Link>

//                                 <Link to="/events" className="dropdown-item block py-2 hover:text-primary">
//                                     Events
//                                 </Link>
//                                 <Link to="/social-media" className="dropdown-item block py-2 hover:text-primary">
//                                     Social Medias
//                                 </Link>

//                                 <Link to="/404" className="dropdown-item block py-2 hover:text-primary">
//                                     Holy Visit
//                                 </Link>
//                                 <Link to="/404" className="dropdown-item block py-2 hover:text-primary">
//                                     Theertha yathra
//                                 </Link>
//                                 <Link to="/404" className="dropdown-item block py-2 hover:text-primary">
//                                     Charity
//                                 </Link>
//                                 <Link to="/blog" className="dropdown-item block py-2 hover:text-primary">
//                                     Blog
//                                 </Link>
//                                 <Link to="/404" className="dropdown-item block py-2 hover:text-primary">
//                                     404 Page
//                                 </Link>
//                             </div>
//                         )}
//                     </div>

//                     <Link to="/contact" className="nav-link">
//                         Contact
//                     </Link>

//                     {/* Search Input */}
//                     <div className="relative">
//                         <button
//                             className="btn btn-primary rounded-full h-10 w-10 flex justify-center items-center ml-4"
//                             onClick={() => setIsSearchOpen(!isSearchOpen)}
//                         >
//                             <i className="fas fa-search text-white"></i>
//                         </button>
//                         {isSearchOpen && (
//                             <div className="absolute top-full left-0 mt-2 w-64">
//                                 <input
//                                     type="text"
//                                     placeholder="Search..."
//                                     className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
//                                 />
//                             </div>
//                         )}
//                     </div>

//                     {/* Social Media Icons */}
//                     <div className="flex items-center ml-4 space-x-3">
//                         <a
//                             href="https://facebook.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-blue-600 text-white p-2 rounded-full hover:opacity-80"
//                         >
//                             <FaFacebook size={20} />
//                         </a>
//                         <a
//                             href="https://instagram.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-pink-500 text-white p-2 rounded-full hover:opacity-80"
//                         >
//                             <FaInstagram size={20} />
//                         </a>
//                         <a
//                             href="https://twitter.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-blue-400 text-white p-2 rounded-full hover:opacity-80"
//                         >
//                             <FaTwitter size={20} />
//                         </a>
//                         <a
//                             href="https://youtuber.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-red-600 text-white p-2 rounded-full hover:opacity-80"
//                         >
//                             <FaYoutube size={20} />
//                         </a>
//                     </div>
//                 </div>

//                 {/* Mobile Hamburger Menu */}
//                 <button
//                     className="block lg:hidden"
//                     onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 >
//                     {/* <span className="fa fa-bars text-2xl"></span> */}
//                     <FaBars />
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <div className="lg:hidden bg-white shadow-lg text-primary">
//                     <Link href="/" className="block py-2 px-4">
//                         Home
//                     </Link>
//                     <a href="/" className="block py-2 px-4">
//                         About
//                     </a>
//                     <Link href="s/administration" className="block py-2 px-4">
//                     Administration
//                     </Link>
//                     <a href="blog.html" className="block py-2 px-4">
//                         Blog
//                     </a>
//                     <Link href="/contact" className="block py-2 px-4">
//                         Contact
//                     </Link>
//                 </div>
//             )}
//         </nav>
//     );
// }

// export default LandingPageNavbar;



// import React, { useState, useEffect } from 'react';
// import { ChevronDown, X, Menu, Search } from 'lucide-react';
// import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import img1 from "../../assets/images/carousel1.jpg"
// import { Link } from 'react-router-dom';

// const LandingPageNavbar = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
//     const [isMobilePagesOpen, setIsMobilePagesOpen] = useState(false);
//     const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
//     const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);



//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 50);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const NavLink = ({ href, children, className = "" }) => (
//         <Link to={href} className={`hover:text-blue-600 transition-colors ${className}
//              ${isMenuOpen
//                 ? 'text-primary'
//                 : isScrolled
//                     ? 'text-primary'
//                     : 'text-white '
//             }`}>
//             {children}
//         </Link>
//     );


//     const SocialIcon = ({ href, icon: Icon, bgColor }) => (
//         <a
//             href={href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`${bgColor} text-white p-2 rounded-full hover:opacity-80 transition-opacity`}
//         >
//             <Icon size={18} />
//         </a>
//     );

//     return (
//         <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
//       ${isMenuOpen
//                 ? 'bg-white shadow-lg'
//                 : isScrolled
//                     ? 'bg-white shadow-lg'
//                     : 'bg-transparent '
//             }`}>
//             <div className="container mx-auto px-4 py-3">
//                 <div className="flex items-center justify-between">
//                     {/* Logo */}
//                     <div className="flex items-center flex-shrink-0">
//                         <img
//                             className="w-10 h-10 md:w-12 md:h-12 rounded-full"
//                             src={img1}
//                             alt="Church Logo"
//                         />
//                         <h1 className={`ml-2 text-sm md:text-lg font-bold 
//                             ${isMenuOpen
//                                 ? 'text-primary'
//                                 : isScrolled
//                                     ? 'text-primary'
//                                     : 'text-white '
//                             }`}>
//                             St. Marys Jacobite Syrian Soonoro Church
//                         </h1>
//                     </div>

//                     {/* Desktop Navigation */}
//                     <div className="hidden lg:flex items-center space-x-6">
//                         <NavLink href="/">Home</NavLink>

//                         {/* About Dropdown */}
//                         <div className="relative group">
//                             <button
//                                 className={`flex items-center hover:text-blue-600 ${isScrolled ? 'text-primary' : 'text-white'
//                                     }`}
//                                 onMouseEnter={() => setIsAboutDropdownOpen(true)}
//                                 onMouseLeave={() => setIsAboutDropdownOpen(false)}
//                             >
//                                 About <ChevronDown className="ml-1 w-4 h-4" />
//                             </button>
//                             {isAboutDropdownOpen && (
//                                 <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2  w-48">
//                                     <NavLink href="/about" className="block px-4 py-2  text-primary">About Church</NavLink>
//                                     <NavLink href="/holy-soonoro" className="block px-4 py-2 text-primary">Holy Soonoro</NavLink>
//                                     <NavLink href="/mother-mary" className="block px-4 py-2 text-primary">Mother Mary</NavLink>
//                                 </div>
//                             )}
//                         </div>

//                         <NavLink href="/administration">Administration</NavLink>

//                         {/* Pages Dropdown */}
//                         <div className="relative group">
//                             <button
//                                 className={`flex items-center hover:text-blue-600 ${isScrolled ? 'text-primary' : 'text-white'
//                                     }`}
//                                 onMouseEnter={() => setIsPagesDropdownOpen(true)}
//                                 onMouseLeave={() => setIsPagesDropdownOpen(false)}
//                             >
//                                 Pages <ChevronDown className="ml-1 w-4 h-4" />
//                             </button>
//                             {isPagesDropdownOpen && (
//                                 <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2  w-48">
//                                     <NavLink href="/gallery" className="block px-4 py-2 text-primary">Gallery</NavLink>
//                                     <NavLink href="/events" className="block px-4 py-2 text-primary">Events</NavLink>
//                                     <NavLink href="/blog" className="block px-4 py-2 text-primary">Blog</NavLink>
//                                 </div>
//                             )}
//                         </div>

//                         <NavLink href="/contact">Contact</NavLink>

//                         {/* Social Icons */}
//                         <div className="flex items-center space-x-2">
//                             <SocialIcon href="https://facebook.com" icon={FaFacebook} bgColor="bg-blue-600" />
//                             <SocialIcon href="https://instagram.com" icon={FaInstagram} bgColor="bg-pink-500" />
//                             <SocialIcon href="https://twitter.com" icon={FaTwitter} bgColor="bg-blue-400" />
//                             <SocialIcon href="https://youtube.com" icon={FaYoutube} bgColor="bg-red-600" />
//                         </div>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <button
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         className="lg:hidden p-2 text-primary hover:text-blue-600"
//                     >
//                         {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>

//                 {/* Mobile Menu */}
//                 {isMenuOpen && (
//                     <div className="lg:hidden mt-4 pb-4">
//                         <NavLink href="/" className="block py-2 px-4 text-primary">Home</NavLink>

//                         {/* Mobile About Dropdown */}
//                         <div>
//                             <button
//                                 onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
//                                 className="w-full flex items-center justify-between py-2 px-4 text-primary"
//                             >
//                                 About <ChevronDown className={`w-4 h-4 transform transition-transform ${isMobileAboutOpen ? 'rotate-180' : ''}`} />
//                             </button>
//                             {isMobileAboutOpen && (
//                                 <div className="pl-8 space-y-2 bg-gray-50">
//                                     <NavLink href="/about" className="block py-2 text-primary">About Church</NavLink>
//                                     <NavLink href="/holy-soonoro" className="block py-2 text-primary">Holy Soonoro</NavLink>
//                                     <NavLink href="/mother-mary" className="block py-2 text-primary">Mother Mary</NavLink>
//                                 </div>
//                             )}
//                         </div>

//                         <NavLink href="/administration" className="block py-2 px-4 text-primary">Administration</NavLink>

//                         {/* Mobile Pages Dropdown */}
//                         <div>
//                             <button
//                                 onClick={() => setIsMobilePagesOpen(!isMobilePagesOpen)}
//                                 className="w-full flex items-center justify-between py-2 px-4 text-primary"
//                             >
//                                 Pages <ChevronDown className={`w-4 h-4 transform transition-transform ${isMobilePagesOpen ? 'rotate-180' : ''}`} />
//                             </button>
//                             {isMobilePagesOpen && (
//                                 <div className="pl-8 space-y-2 bg-gray-50">
//                                     <NavLink href="/gallery" className="block py-2 text-primary">Gallery</NavLink>
//                                     <NavLink href="/events" className="block py-2 text-primary">Events</NavLink>
//                                     <NavLink href="/blog" className="block py-2 text-primary">Blog</NavLink>
//                                 </div>
//                             )}
//                         </div>

//                         <NavLink href="/contact" className="block py-2 px-4 text-primary">Contact</NavLink>

//                         {/* Mobile Social Icons */}
//                         <div className="flex items-center space-x-2 mt-4 px-4">
//                             <SocialIcon href="https://facebook.com" icon={FaFacebook} bgColor="bg-blue-600" />
//                             <SocialIcon href="https://instagram.com" icon={FaInstagram} bgColor="bg-pink-500" />
//                             <SocialIcon href="https://twitter.com" icon={FaTwitter} bgColor="bg-blue-400" />
//                             <SocialIcon href="https://youtube.com" icon={FaYoutube} bgColor="bg-red-600" />
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default LandingPageNavbar;


import React, { useState, useEffect } from "react";
import { ChevronDown, X, Menu } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import img1 from "../../assets/carousel/carousel01.jpg";

const LandingPageNavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
    const [isMobilePagesOpen, setIsMobilePagesOpen] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const NavLink = ({ href, children, className = "", item }) => {
        const isActive = location.pathname === href;
        return (
            <Link
                to={href}
                className={`hover:text-blue-600 transition-colors px-4 py-2 ${className} ${isActive ? "text-blue-600 font-bold" : isScrolled || item ? "text-primary" : "text-white"
                    }`}
            >
                {children}
            </Link>
        );
    };

    const SocialIcon = ({ href, icon: Icon, bgColor }) => (
        <Link to={href} target="_blank" rel="noopener noreferrer" className={`${bgColor} text-white p-2 rounded-full hover:opacity-80 transition-opacity`}>
            <Icon size={18} />
        </Link>
    );

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-white shadow-lg" : "bg-transparent "}`}>
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <img className="w-10 h-10 md:w-12 md:h-12 rounded-full" src={img1} alt="Church Logo" />
                    <Link to={'/'}>
                        <h1 className={`ml-2 text-sm md:text-lg font-bold ${isScrolled || isMenuOpen ? "text-primary" : "text-white"}`}>
                            St. Marys Jacobite Syrian Soonoro Church
                        </h1>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6">
                    <NavLink href="/">Home</NavLink>

                    {/* About Dropdown */}
                    <div className="relative group" onMouseEnter={() => setIsAboutDropdownOpen(true)} onMouseLeave={(e) => !e.currentTarget.contains(e.relatedTarget) && setIsAboutDropdownOpen(false)}>
                        <button className={`flex items-center hover:text-blue-600 ${isScrolled ? "text-primary" : "text-white"}`}>
                            About <ChevronDown className="ml-1 w-4 h-4" />
                        </button>
                        {isAboutDropdownOpen && (
                            <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48">
                                <NavLink href="/about" className="block px-4 py-2  text-primary" item={true} children={'About Church'}  >About Church</NavLink>
                                {/* <NavLink href="/about/holy-soonooro" className="block px-4 py-2  text-primary" item={true}>Holy Soonoro</NavLink> */}
                                <NavLink href="/about/about-mother-mary" className="block px-4 py-2  text-primary" children={'Mother Mary'} item={true}>Mother Mary</NavLink>
                                <NavLink href="/about/about-bava-thirumeni" className="block  px-4 py-2   text-primary" children={'Bava Thirumeni'} item={true}>Bava Thirumeni</NavLink>
                                {/* <NavLink href="/about/ettunombu" className="block px-4 py-2  text-primary" item={true}> Ettunombu</NavLink> */}
                            </div>
                        )}
                    </div>

                    <NavLink href="/administration">Administration</NavLink>

                    {/* Pages Dropdown */}
                    <div className="relative group" onMouseEnter={() => setIsPagesDropdownOpen(true)} onMouseLeave={(e) => !e.currentTarget.contains(e.relatedTarget) && setIsPagesDropdownOpen(false)}>
                        <button className={`flex items-center hover:text-blue-600 ${isScrolled ? "text-primary" : "text-white"}`}>
                            Pages <ChevronDown className="ml-1 w-4 h-4" />
                        </button>
                        {isPagesDropdownOpen && (
                            <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48">
                                {/* <NavLink href="/vows-and-offerings" className="block px-4 py-2  text-primary" item={true}> Vows & Offerings</NavLink> */}
                                <NavLink href="/gallery" className="block px-4 py-2  text-primary" children={'Gallery'} item={true}>Gallery</NavLink>
                                <NavLink href="/social-media" className="block px-4 py-2  text-primary" children={'Social Medias'} item={true}>Social Medias</NavLink>
                                {/* <NavLink href="/blog" className="block px-4 py-2  text-primary" item={true}>Blog</NavLink> */}
                            </div>
                        )}
                    </div>

                    <NavLink href="/contact">Contact</NavLink>

                    {/* Social Icons */}
                    <div className="flex items-center space-x-2">
                        <SocialIcon href="https://www.facebook.com/share/1BAVT7Zfby/" icon={FaFacebook} bgColor="bg-blue-600" />
                        <SocialIcon href="https://www.instagram.com/kannara_palli?igsh=MWlmZjhsbWdvaTBoMw==" icon={FaInstagram} bgColor="bg-pink-500" />
                        {/* <SocialIcon href="https://twitter.com" icon={FaTwitter} bgColor="bg-blue-400" /> */}
                        <SocialIcon href="https://youtube.com/@kannarapalli3338?si=Zv7yjEZjUXPVAsnb" icon={FaYoutube} bgColor="bg-red-600" />
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-primary hover:text-blue-600">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden mt-4 pb-4">
                    <NavLink href="/" className="block py-2 px-4 text-primary" item={true}>Home</NavLink>

                    {/* Mobile About Dropdown */}
                    <div>
                        <button onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)} className="w-full flex items-center justify-between py-2 px-4 text-primary">
                            About <ChevronDown className={`w-4 h-4 transform transition-transform ${isMobileAboutOpen ? "rotate-180" : ""}`} />
                        </button>
                        {isMobileAboutOpen && (
                            <div className="pl-8 space-y-2 bg-gray-50">
                                <NavLink href="/about" className="block  py-2  text-primary" item={true}  >About Church</NavLink>
                                {/* <NavLink href="/about/holy-soonooro" className="block  py-2  text-primary" item={true}>Holy Soonoro</NavLink> */}
                                <NavLink href="/about/about-mother-mary" className="block  py-2  text-primary" children={'Mother Mary'} item={true}>Mother Mary</NavLink>
                                <NavLink href="/about/about-bava-thirumeni" className="block  py-2  text-primary" children={'Bava Thirumeni'} item={true}>Bava Thirumeni</NavLink>
                                {/* <NavLink href="/about/ettunombu" className="block  py-2  text-primary" item={true}> Ettunombu</NavLink> */}
                            </div>
                        )}
                    </div>

                    <NavLink href="/administration" className="block py-2 px-4 text-primary" item={true}>Administration</NavLink>

                    {/* Mobile Pages Dropdown */}
                    <div>
                        <button onClick={() => setIsMobilePagesOpen(!isMobilePagesOpen)} className="w-full flex items-center justify-between py-2 px-4 text-primary">
                            Pages <ChevronDown className={`w-4 h-4 transform transition-transform ${isMobilePagesOpen ? "rotate-180" : ""}`} />
                        </button>
                        {isMobilePagesOpen && (
                            <div className="pl-8 space-y-2 bg-gray-50">
                                {/* <NavLink href="/vows-and-offerings" className="block py-2  text-primary" item={true}> Vows & Offerings</NavLink> */}
                                <NavLink href="/gallery" className="block py-2  text-primary" children={'Gallery'} item={true}>Gallery</NavLink>
                                <NavLink href="/social-media" className="block py-2  text-primary" children={'Social Medias'} item={true}>Social Medias</NavLink>
                                {/* <NavLink href="/blog" className="block py-2 text-primary" item={true}>Blog</NavLink> */}
                            </div>
                        )}
                    </div>

                    <NavLink href="/contact" className="block py-2 px-4 text-primary" children={'Contact'} item={true}>Contact</NavLink>

                    {/* Mobile Social Icons */}
                    <div className="flex items-center space-x-2 mt-4 px-4">
                        <SocialIcon href="https://www.facebook.com/share/1BAVT7Zfby/" icon={FaFacebook} bgColor="bg-blue-600" />
                        <SocialIcon href="https://www.instagram.com/kannara_palli?igsh=MWlmZjhsbWdvaTBoMw==" icon={FaInstagram} bgColor="bg-pink-500" />
                        {/* <SocialIcon href="https://twitter.com" icon={FaTwitter} bgColor="bg-blue-400" /> */}
                        <SocialIcon href="https://youtube.com/@kannarapalli3338?si=Zv7yjEZjUXPVAsnb" icon={FaYoutube} bgColor="bg-red-600" />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default LandingPageNavbar;




