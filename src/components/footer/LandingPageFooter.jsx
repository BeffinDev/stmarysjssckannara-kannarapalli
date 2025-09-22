import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function LandingPageFooter() {
    return (
        <div>
            {/* <footer className="bg-gray-900 text-white py-10">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center justify-between mb-10 space-y-6 lg:space-y-0">
                        <div className="lg:w-2/3">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter your email to subscribe"
                                    className="w-full py-3 px-5 rounded-full text-gray-700 focus:outline-none"
                                />
                                <button
                                    type="button"
                                    className="absolute right-1 top-1 bg-secondary text-white py-2 px-4 rounded-full hover:bg-secondary-light"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-1/3 flex justify-center lg:justify-end space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full hover:bg-secondary-light"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full hover:bg-secondary-light"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full hover:bg-secondary-light"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full hover:bg-secondary-light"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div>
                            <h3 className="text-lg font-bold mb-4">
                                <i className="fas fa-hand-holding-water text-white text-primary mr-2"></i>
                                Acuas
                            </h3>
                            <p className="text-gray-400">
                                Dolor amet sit justo amet elitr clita ipsum elitr est. Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-4 text-white">About Us</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-primary flex items-center"
                                    >
                                        <i className="fas fa-angle-right mr-2"></i> Why Choose Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-primary flex items-center"
                                    >
                                        <i className="fas fa-angle-right mr-2"></i> Free Water Bottles
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-primary flex items-center"
                                    >
                                        <i className="fas fa-angle-right mr-2"></i> Water Dispensers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-primary flex items-center"
                                    >
                                        <i className="fas fa-angle-right mr-2"></i> Bottled Water
                                        Coolers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-primary flex items-center"
                                    >
                                        <i className="fas fa-angle-right mr-2"></i> Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-primary flex items-center"
                                    >
                                        <i className="fas fa-angle-right mr-2"></i> Terms &
                                        Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-4 text-white">Business Hours</h4>
                            <ul className="space-y-3">
                                <li>
                                    <h6 className="text-gray-500">Mon - Friday:</h6>
                                    <p className="text-gray-400">09.00 am to 07.00 pm</p>
                                </li>
                                <li>
                                    <h6 className="text-gray-500">Saturday:</h6>
                                    <p className="text-gray-400">10.00 am to 05.00 pm</p>
                                </li>
                                <li>
                                    <h6 className="text-gray-500">Vacation:</h6>
                                    <p className="text-gray-400">All Sundays are our vacation</p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold mb-4 text-white">Contact Info</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-primary flex items-center"
                                    >
                                        <i className="fa fa-map-marker-alt mr-2"></i> 123 Street, New
                                        York, USA
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:info@example.com"
                                        className="text-gray-400 hover:text-primary flex items-center"
                                    >
                                        <i className="fas fa-envelope mr-2"></i> info@example.com
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel:+01234567890"
                                        className="text-gray-400 hover:text-primary flex items-center"
                                    >
                                        <i className="fas fa-phone mr-2"></i> +012 345 67890
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer> */}


            <footer className="bg-gray-900 text-white py-10">
                <div className="container mx-auto px-6">
                    {/* Subscription Section */}
                    {/* <div className="flex flex-col lg:flex-row items-center justify-between mb-10 space-y-6 lg:space-y-0">
                        <div className="lg:w-2/3">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter your email to subscribe"
                                    className="w-full py-3 px-5 rounded-full text-gray-700 focus:outline-none"
                                />
                                <button
                                    type="button"
                                    className="absolute right-1 top-1 bg-secondary text-white py-2 px-4 rounded-full hover:bg-secondary-light"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <div className="lg:w-1/3 flex justify-center lg:justify-end space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full hover:bg-secondary-light"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full hover:bg-secondary-light"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full hover:bg-secondary-light"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center bg-secondary rounded-full hover:bg-secondary-light"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div> */}

                    {/* Footer Content */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* About Section */}
                        <div>
                            <h3 className="text-lg text-white font-bold mb-4">

                                St. Marys Jacobite Syrian Soonoro Church Kannara
                            </h3>
                            <p className="text-gray-400">
                                P.O kannara, Karadiyala, <br />
                                Thrissur, Kerala, India <br />
                                680652
                            </p>
                            {/* <p className="text-gray-400 mt-3">(+91) 9539966866</p>
                            <p className="text-gray-400">kannarapalli@gmail.com</p> */}
                            <Link to={'tel:+919539966866'} className="text-gray-400 mt-3">(+91) 95 39 96 68 66 </Link>
                            <Link to={'mailto:stmarysjssckannara@gmail.com'} className="text-gray-400">stmarysjssckannara@gmail.com</Link>

                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        to={'/'}
                                        className="text-gray-400 hover:text-primary flex items-center"
                                    >
                                        <i className="fas fa-angle-right mr-2"></i> Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/about'}
                                        className="text-gray-400 hover:text-primary flex items-center"
                                    >
                                        <i className="fas fa-angle-right mr-2"></i> About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/administration'}
                                        className="text-gray-400 hover:text-primary flex items-center"
                                    >
                                        <i className="fas fa-angle-right mr-2"></i> Administration
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to={'/contact'}
                                        className="text-gray-400 hover:text-primary flex items-center"
                                    >
                                        <i className="fas fa-angle-right mr-2"></i> Contact Us
                                    </Link>
                                </li>

                            </ul>
                        </div>

                        {/* Business Hours */}
                        <div>
                            <h4 className="text-lg font-bold mb-4 text-white">Visiting hours</h4>
                            <ul className="space-y-3">
                                <li>
                                    <h6 className="text-gray-500">Monday - Saturday</h6>
                                    <p className="text-gray-400"> Morning: 05.30 am to 07.00 am</p>
                                    <p className="text-gray-400"> Evening: 05.30 pm to 08.00 pm</p>
                                </li>
                                {/* <li>
                                    <h6 className="text-gray-500">Mon - Saturday Evening:</h6>
                                    <p className="text-gray-400">05.30 pm to 08.00 pm</p>
                                </li> */}
                                <li>
                                    <h6 className="text-gray-500">Sunday </h6>
                                    <p className="text-gray-400">05.30 am to 08.00 pm</p>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        {/* <div>
                            <h4 className="text-lg font-bold mb-4 text-white">Contact Info</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-primary flex items-center"
                                    >
                                        <i className="fa fa-map-marker-alt mr-2"></i> 123 Street, New
                                        York, USA
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:info@example.com"
                                        className="text-gray-400 hover:text-primary flex items-center"
                                    >
                                        <i className="fas fa-envelope mr-2"></i> info@example.com
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel:+01234567890"
                                        className="text-gray-400 hover:text-primary flex items-center"
                                    >
                                        <i className="fas fa-phone mr-2"></i> +012 345 67890
                                    </a>
                                </li>
                            </ul>
                        </div> */}

                        <div>
                            <h4 className="text-lg font-bold mb-4 text-white">Prayer and Holy Qurbana</h4>
                            <ul className="space-y-3">
                                <li>
                                    <h6 className="text-gray-500">Sunday </h6>
                                    <p className="text-gray-400">Morning Prayer : 07.15 am </p>
                                    <p className="text-gray-400">Holy Qurbana : 08.15 am </p>
                                </li>
                                <li>
                                    <h6 className="text-gray-500">Monday - Saturday </h6>
                                    <p className="text-gray-400">Morning Prayer : 07.00 am </p>
                                    <p className="text-gray-400">Holy Qurbana : 07.30 am </p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="bg-gray-900 border-t border-gray-800 text-white py-4">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <span className="text-gray-400 flex">
                                <a href="/" className="border-b border-white hover:border-gray-400 flex">
                                    <FaRegCopyright className='mx-1' />
                                    Kannara palli
                                </a>
                                , All rights reserved.
                            </span>
                        </div>
                        <div className="text-center md:text-right text-gray-400">
                            <span>

                                Powered by{' '}
                                <Link
                                to={'https://www.facebook.com/share/1BAVT7Zfby/'}
                                    className="border-b border-white hover:border-gray-400"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Youth Association &  Marian Media Kannara
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPageFooter