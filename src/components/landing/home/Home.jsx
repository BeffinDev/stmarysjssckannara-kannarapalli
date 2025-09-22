import React, { useEffect, useState } from 'react'
import LandingPageNavbar from '../../navbar/LandingPageNavbar'
import "/public/css/style.css"
import "/public/css/bootstrap.min.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LandingPageFooter from '../../footer/LandingPageFooter';
import Carousel from '../../carousel/Carousel';
import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import img1 from "../../../assets/carousel/carousel01.jpg"
import img2 from "../../../assets/carousel/carousel02.jpg"
import img3 from "../../../assets/carousel/carousel03.jpg"
import img4 from "../../../assets/carousel/carousel04.jpeg"
import img5 from "../../../assets/carousel/carousel05.jpg"
import palli1 from "../../../assets/images/palli1.jpg"
import video1 from "../../../assets/video/helicam004.mp4"
import KurishuPalliSection from './KurishuPalliSection';

import kurishu1 from "../../../assets/KurishupalliImages/palliThazham.jpg"
import kurishu2 from "../../../assets/KurishupalliImages/karadiyala.jpg"
import kurishu3 from "../../../assets/KurishupalliImages/kollanmukku.jpg"
import kurishu4 from "../../../assets/KurishupalliImages/maraikkal.jpg"
import kurishu5 from "../../../assets/KurishupalliImages/kannara.jpg"
import kurishu6 from "../../../assets/KurishupalliImages/cheenikkadavu.jpg"
import kurishu7 from "../../../assets/KurishupalliImages/manjakunnu.jpg"
import kurishu8 from "../../../assets/KurishupalliImages/palliThazham1.jpg"

import mothermary1 from "../../../assets/mothermary/mother-mary.jpg"
import mothermary from "../../../assets/mothermary/motherMary.jpg"
import geevargheseSahada from "../../../assets/mothermary/geevarghese-sahada.jpg"
import parumalaThirumeni from "../../../assets/mothermary/parumala-thirumeni.jpg"

import holyvisit from "../../../assets/images/holyvisit.jpg"
import bavathirumeni from "../../../assets/images/bavathirumeni.jpg"
import tirthayatra from "../../../assets/images/tirthayatra.jpg"


import soonoro from "../../../assets/tirusesipp/soonoro.jpg"
import eliasBavaTirusesipp from "../../../assets/tirusesipp/eliasBavaTirusesipp.jpg"
import eldhoBavaTirusesipp from "../../../assets/tirusesipp/eldhoBavaTirusesipp.jpg"


import thirinercha from "../../../assets/nercha/thirinercha.jpg"
import muthukudanercha from "../../../assets/nercha/muthukudanercha.jpg"
import Eenthapazhamnercha from "../../../assets/nercha/Eenthapazhamnercha.jpg"
import muthukudanercha1 from "../../../assets/nercha/muthukudanercha1.jpg"
import retham from "../../../assets/retham/retham001.jpg"


function Home() {

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
        );
    };

    const [readMore, setReadMore] = useState(false);

    const handleReadMore = (item) => {
        setReadMore(!readMore);
    };

    const carouselData = [
        {
            img: img1,
            // img: "https://content.jdmagicbox.com/comp/thrissur/g7/9999px487.x487.171203022651.t2g7/catalogue/st-mary-s-jacobite-syrian-orthodox-church-kannara-thrissur-churches-1hglq9faki.jpg",
            heading: "Matthew 18:20",
            subHeading: "For where two or three gather in my name, there am I with them.",
            description: "Jesus emphasizes the importance of communal worship. Even a small group gathered in His name is recognized as His church, and He promises His presence among them.",
            // buttons: [
            //     { text: "Order Now", link: "#", class: "bg-blue-500 text-white" },
            //     { text: "Free Estimate", link: "#", class: "bg-gray-500 text-white" }
            // ]
        },
        {
            // img: "https://content.jdmagicbox.com/comp/thrissur/g7/9999px487.x487.171203022651.t2g7/catalogue/st-mary-s-jacobite-syrian-orthodox-church-kannara-thrissur-churches-1hglq9faki.jpg",
            img: img2,
            heading: "Psalm 31:24",
            subHeading: "Be strong, and let your heart take courage, all you who wait for the Lord!",
            // description: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
            // buttons: [
            //     { text: "Order Now", link: "#", class: "bg-blue-500 text-white" },
            //     { text: "Free Estimate", link: "#", class: "bg-gray-500 text-white" }
            // ]
        },
        {
            // img: "https://lh3.googleusercontent.com/p/AF1QipPNnZVv2vlYrd3yDNeZygqkvaWUkg3fzGjQ9Dup=s680-w680-h510",
            img: img5,
            heading: "Romans 12:10",
            subHeading: "Love one another with brotherly affection. Outdo one another in showing honor.",
            // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            // buttons: [
            //     { text: "Order Now", link: "#", class: "bg-blue-500 text-white" },
            //     { text: "Free Estimate", link: "#", class: "bg-gray-500 text-white" }
            // ]
        },
        {
            // img: "https://lh3.googleusercontent.com/p/AF1QipPNnZVv2vlYrd3yDNeZygqkvaWUkg3fzGjQ9Dup=s680-w680-h510",
            img: img3,
            heading: "Psalm 23:4",
            subHeading: "Even though I walk through the darkest valley, I will fear no evil, for you are with me.",
            // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            // buttons: [
            //     { text: "Order Now", link: "#", class: "bg-blue-500 text-white" },
            //     { text: "Free Estimate", link: "#", class: "bg-gray-500 text-white" }
            // ]
        },
        {
            // img: video1,
            img: img4,
            // type:"video"
            heading: "Proverbs 17:9",
            subHeading: "One who forgives an affront fosters friendship, but one who dwells on disputes will alienate a friend.",
            // description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            // buttons: [
            //     { text: "Order Now", link: "#", class: "bg-blue-500 text-white" },
            //     { text: "Free Estimate", link: "#", class: "bg-gray-500 text-white" }
            // ]
        },
        // Add more items as needed
    ];

    const counters = [
        {
            image: geevargheseSahada,
            // title: "Geevarghese Sahada",
            title: "വി. ഗീവറുഗീസ് സഹദാ",
            count: 456,
        },
        {
            image: mothermary,
            title: "വി. ദൈവമാതാവ്",
            count: 513,
        },
        {
            image: parumalaThirumeni,
            // title: "Parumala Thirumeni",
            title: "വി. പരുമല തിരുമേനി",
            count: 53,
        },
        // {
        //     image: "fas fa-heart",
        //     title: "Years Experience",
        //     count: 17,
        // },
    ];

    const servicesLeft = [
        {
            icon: "fas fa-hand-holding-water",
            title: "Residential Waters",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.",
        },
        {
            icon: "fas fa-dumpster-fire",
            title: "Commercial Waters",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.",
        },
        {
            icon: "fas fa-filter",
            title: "Filtration Plants",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.",
        },
    ];

    const servicesRight = [
        {
            icon: "fas fa-assistive-listening-systems",
            title: "Water Softening",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.",
        },
        {
            icon: "fas fa-recycle",
            title: "Market Research",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.",
        },
        {
            icon: "fas fa-project-diagram",
            title: "Project Planning",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.",
        },
    ];

    const products = [
        {
            image: "img/product-3.png",
            quantity: "2L 1 Bottle",
            title: "Mineral Water Bottle",
            price: "$35.00",
        },
        {
            image: "img/product-2.png",
            quantity: "4L 2 Bottles",
            title: "RO Water Bottle",
            price: "$70.00",
        },
        {
            image: "img/product-1.png",
            quantity: "6L 3 Bottles",
            title: "UV Water Bottle",
            price: "$100.00",
        },
    ];

    const blogs = [
        {
            image: thirinercha,
            date: "Thiri Nercha",
            title: "തിരിനേർച്ച",
            description: "അനേകർക്ക് അത്ഭുതങ്ങളുടെയും അനുഗ്രഹങ്ങളുടെയും കലവറയായി കണ്ണാറ പള്ളിയിലെ പ്രധാന വഴിപാടായ തിരിനേർച്ച",
            link: "#",
        },
        {
            image: muthukudanercha,
            date: "Jan 12, 2025",
            title: "മുത്തുക്കുട നേർച്ച",
            description: "അനേകർക്ക് അത്ഭുതങ്ങളുടെയും അനുഗ്രഹങ്ങളുടെയും കലവറയായി കണ്ണാറ പള്ളിയിലെ പ്രധാന വഴിപാടായ മുത്തുക്കുട നേർച്ച",
            link: "#",
        },
        {
            image: Eenthapazhamnercha,
            date: "september 6",
            title: "ഈന്തപ്പഴ നേർച്ച'",
            description: "ദേശം ചുറ്റിയുള്ള പ്രദക്ഷിണത്തിനുള്ള പ്രധാന നേർച്ച ആയ ഈന്തപ്പഴ നേർച്ച",
            link: "#",
        },
        // {
        //     // image: "https://lh3.googleusercontent.com/p/AF1QipNbXVyvh_aeuzNkQzTeaG17ASLimYNHFGD3NP0D=s680-w680-h510",
        //     image: retham,
        //     date: "september 6",
        //     title: "Deesham chotti pradhishanam'",
        //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?",
        //     link: "#",
        // },
        //  {
        //     id: 3,
        //     title: 'Deesham chotti pradhishanam',
        //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus',
        //     link: '#',
        //     delay: '0.6s',
        //     image: 'https://lh3.googleusercontent.com/p/AF1QipNbXVyvh_aeuzNkQzTeaG17ASLimYNHFGD3NP0D=s680-w680-h510', // Replace with your image URL
        // },
    ];

    const teamMembers = [
        {
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            name: "Hard Branots",
            role: "CEO & Founder",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                linkedin: "#",
                instagram: "#",
            },
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
            name: "Jane Doe",
            role: "CTO",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                linkedin: "#",
                instagram: "#",
            },
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7wxXcVCdY_KmA2g71el3A9fuQwjUBGza8clRajv900-CiDsjdhi9l_L32ExgKbMfHj6E&usqp=CAU",
            name: "John Smith",
            role: "Marketing Head",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                linkedin: "#",
                instagram: "#",
            },
        },
        {
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            name: "Emily Davis",
            role: "Project Manager",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                linkedin: "#",
                instagram: "#",
            },
        },
    ];

    const testimonials = [
        {
            id: 1,
            message:
                "പരിശുദ്ധ പാത്രിയാർക്കീസ് നി.വ.ദി. മ.മ.ശ്രീ.അഫ്രേം രണ്ടാമൻ ബാവ തന്റെ പ്രഥമ മലങ്കരയിലെ ശ്ലൈഹീക സന്ദർശനത്തിൽ ഈ ഇടവക  പള്ളിയിൽ എഴുന്നള്ളി വന്ന് ഇടവക മക്കളെ ശ്ലൈഹീക വാഴ് വുകൾ നൽകി  അനുഗ്രഹിച്ചു.യാക്കോബായ സുറിയാനി ഓർത്തഡോക്സ് സഭ തൃശൂർ ഭദ്രാസനം ഇന്നുവരെ കണ്ടിട്ടില്ലാത്ത ഊഷ്മളമായ വരവേൽപ്പായിരുന്നു ഇടവക ജനങ്ങളും പള്ളി മാനേജിംഗ് കമ്മിറ്റിയും പരിശുദ്ധ മോറാന് അന്ന് നൽകിയത്. ഈ ഇടവകയുടെ ചരിത്രത്തിലെ തങ്ക ലിപികളിൽ എഴുതപ്പെട്ട ഒരു അധ്യായം ആയിരുന്നു അത്. കാലം ചെയ്ത ശ്രേഷ്ഠ കാതോലിക്കാ ശ്രേഷ്ഠ ബസ്സേലിയോസ്  തോമസ് പ്രഥമൻ ബാവ, അന്നത്തെ എപ്പിസ്കോപ്പൽ സുന്നഹദോസ്  സെക്രട്ടറി അഭിവന്ദ്യ ജോസഫ് മോർ ഗ്രീഗോറിയോസ് മെത്രാപ്പോലീത്ത, ഇടവക മെത്രാപ്പോലീത്ത അഭിവന്ദ്യ ഏലിയാസ് മോർ അത്താ നാസിയോസ് എന്നിവർ സന്നിഹിതരായിരുന്നു.",
            image: holyvisit,
            name: "ശ്ലൈഹീക സന്ദർശനo",
            profession: "Profession",
        },
        {
            id: 2,
            message:
                "പകരക്കാരൻ ഇല്ലാത്ത അമരക്കാരൻ , പുണ്യശ്ലോകനായ ശ്രേഷ്ഠ ബസ്സേലിയോസ്‌ തോമസ് പ്രഥമൻ ബാവാ",
            image: bavathirumeni,
            name: "ശ്രേഷ്ഠ ബാവാ",
            link: "/about/about-bava-thirumeni",
        },
        {
            id: 3,
            message:
                "കണ്ണാറ പള്ളിയിൽ നിന്നും കോതമംഗലം ബാവയുടെ കബറിങ്കലേക്കുള്ള കാൽനട തീർത്ഥയാത്ര.",
            image: tirthayatra,
            name: "തീർത്ഥയാത്ര ",
            profession: "Profession",
        },
        {
            id: 4,
            message:
                "കണ്ണാറ പള്ളിയിലെ എട്ടുനോമ്പ് പെരുന്നാളിനോടനുബന്ധിച്ചുള്ള മലയോര ദേശം ചുറ്റിയുള്ള പ്രദക്ഷിണം",
            image: retham,
            name: "ദേശം ചുറ്റിയുള്ള പ്രദക്ഷിണം",
            profession: "Profession",
        },
    ];

    const NextArrow = ({ className, style, onClick }) => {
        return (
            <button
                className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 -translate-x-4"
                onClick={onClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-600"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        );
    };

    const PrevArrow = ({ className, style, onClick }) => {
        return (
            <button
                className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 translate-x-4"
                onClick={onClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-600"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
        );
    };

    const settings = {
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true, // Enable auto-play
        autoplaySpeed: 3000, // Set autoplay interval (in milliseconds)
        pauseOnHover: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const slides = [
        {
            image: "https://lh3.googleusercontent.com/p/AF1QipPuY8lk2IAT5glUcfw0cDaSFWDsIlv5YYr8_eDZ=s680-w680-h510",
            title: "First Slide",
            description: "Description for first slide"
        },
        {
            image: "https://content.jdmagicbox.com/comp/thrissur/g7/9999px487.x487.171203022651.t2g7/catalogue/st-mary-s-jacobite-syrian-orthodox-church-kannara-thrissur-churches-1hglq9faki.jpg",
            title: "Second Slide",
            description: "Description for second slide"
        }
    ];

    const featuresData = [
        {
            id: 1,
            title: 'The Holy Soonoro',
            description: 'അഭൂതപൂർണ്ണമായ വളർച്ചയ്ക്ക് ഇടയാക്കിയ മഹാസംഭവം 2011 സെപ്റ്റംബർ മാസം 7 ആം തീയതി ഭാഗ്യവതിയും ജയം ധരിച്ചവളുമായ തമ്പുരാനെ അമ്മയുടെ വിശുദ്ധ സൂനോറോ ഇടക്കെട്ട്, അന്നത്തെ ഇടവക മെത്രാപ്പോലീത്ത അഭിവന്ദ്യ കുര്യാക്കോസ് മോർ യൗസേബിയോസ് തിരുമനസ്സുകൊണ്ട് പള്ളിയിൽ സ്ഥാപിച്ചു. ',
            link: '#',
            delay: '0.2s',
            image: soonoro, // Replace with your image URL
            // image: 'https://lh3.googleusercontent.com/p/AF1QipNi723703iN2YDLJIfLROU98c5N1_qtfmYXodW8=s680-w680-h510', // Replace with your image URL
        },
        {
            id: 2,
            title: 'Holy Thirusheshippu(Elias Bava)',
            description: 'മലങ്കര മക്കളെ പ്രതി അന്ത്യോഖ്യയിൽ നിന്ന് എഴുന്നള്ളി വന്ന് ഇവിടെ സമാധാനം സ്ഥാപിക്കാൻ ജീവൻ ബലികഴിച്ച ഭാഗ്യ സ്മരണനായ പാർത്രിയർക്കീസ് മോറാൻ മോർ ഇഗ്നാത്യോസ് ഏലിയാസ് തൃതീയൻ ബാവായുടെ തിരുശേഷിപ്പ് കാലം ചെയ്ത ശ്രേഷ്ഠ കാതോലിക്കാ ശ്രേഷ്ഠ ബസ്സേലിയോസ്‌ തോമസ് പ്രഥമൻ ബാവായുടെ മുഖ്യ കാർമികത്വത്തിലും ഇടവക മെത്രാപ്പോലീത്ത അഭിവന്ദ്യ കുര്യാക്കോസ് മാർ ക്ലീമീസ് തിരുമനസ്സുകൊണ്ടിന്റെ സാന്നിധ്യത്തിലും സ്ഥാപിച്ചു.',
            link: '#',
            delay: '0.4s',
            image: eliasBavaTirusesipp, // Replace with your image URL
        },
        {
            id: 3,
            title: 'Holy Thirusheshippu(Eldho Bava)',
            description: 'പരിശുദ്ധനായ യൽദോ മോർ ബസ്സേലിയോസ്  ബാവായുടെ തിരുശേഷിപ്പ് കൊല്ലൻമുക്ക്  കുരിശും തൊട്ടിയിൽ  സ്ഥാപിച്ചു.',
            link: '#',
            delay: '0.6s',
            image: eldhoBavaTirusesipp, // Replace with your image URL
        },
        // {
        //     id: 3,
        //     title: 'Deesham chotti pradhishanam',
        //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus',
        //     link: '#',
        //     delay: '0.6s',
        //     image: 'https://lh3.googleusercontent.com/p/AF1QipNbXVyvh_aeuzNkQzTeaG17ASLimYNHFGD3NP0D=s680-w680-h510', // Replace with your image URL
        // },
        // {
        //     id: 4,
        //     title: 'Lab Control',
        //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus',
        //     link: '#',
        //     delay: '0.8s',
        //     image: 'https://via.placeholder.com/150', // Replace with your image URL
        // },
    ];

    const services = [
        {
            title: "പളളിത്താഴത്തെ വി.ദൈവമാതാവിന്റെ കുരിശുംതൊട്ടി",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.",
            image: kurishu8,
            alignment: "left",
        },
        {
            title: "പരി.പരുമല ചാത്തുരുത്തിൽ മോർ ഗ്രിഗോറിയോസ് കൊച്ചു തിരുമേനിയുടെ കുരിശുംതൊട്ടി, പള്ളിത്താഴം",
            description: "പരി.പരുമല ചാത്തുരുത്തിൽ മോർ ഗ്രിഗോറിയോസ് കൊച്ചു തിരുമേനിയുടെ കുരിശുംതൊട്ടി, പള്ളിത്താഴം",
            image: kurishu1,
            alignment: "left",
        },
        {
            title: "വി. ദൈവമാതാവിന്റെ കുരിശുംതൊട്ടി, കണ്ണാറ",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.",
            image: kurishu5,
            alignment: "left",
        },
        {
            title: "പരി. ഗീവർഗ്ഗീസ് സഹദായുടെ കുരിശുംതൊട്ടി, മാരായ്ക്കൽ",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.",
            image: kurishu4,
            alignment: "left",
        },
        {
            title: "പരി, മോറോൻ മോർ ഇഗ്നാത്തിയോസ് ഏല്യാസ് തൃതീയൻ ബാവയുടെ കുരിശുംതൊട്ടി, കരടിയള",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.",
            image: kurishu2,
            alignment: "right",
        },
        {
            title: "പരി. യെൽദോ മോർ ബസേലിയോസ് ബാവയുടെ നാമത്തിലുളള കുരിശുംതൊട്ടി, കൊല്ലൻമുക്ക്",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.",
            image: kurishu3,
            alignment: "right",
        },

        {
            title: "പരി. ഗീവർഗ്ഗീസ് സഹദായുടെ കുരിശുംതൊട്ടി, മഞ്ഞക്കുന്ന്",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.",
            image: kurishu7,
            alignment: "right",
        },
        {
            title: "വി. ദൈവമാതാവിന്റെ നാമത്തിലുള്ള കുരിശുംതൊട്ടി, ചീനിക്കടവ്",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.",
            image: kurishu6,
            alignment: "right",
        },
    ];


    return (
        <div className='relative p-0'>
            <LandingPageNavbar />
            <div className="relative">
                {/* carousel */}
                {/* <div id="carouselId" className="relative" data-bs-ride="carousel">
                    <ol className="absolute bottom-0 flex justify-center mb-4">
                        <li
                            data-bs-target="#carouselId"
                            data-bs-slide-to="0"
                            className="active"
                        ></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
                    </ol>
                    <div className="relative w-full overflow-hidden">
                        <div className="carousel-item active relative float-left w-full">
                            <img
                                src="https://lh3.googleusercontent.com/p/AF1QipPuY8lk2IAT5glUcfw0cDaSFWDsIlv5YYr8_eDZ=s680-w680-h510"
                                className="block w-full"
                                alt="Image"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="max-w-3xl text-center">
                                    <h4 className="text-white text-uppercase font-bold mb-4 animate__animated animate__fadeInLeft" style={{ animationDelay: '1s', letterSpacing: '3px' }}>
                                        Importance life
                                    </h4>
                                    <h1 className="text-white text-capitalize mb-4 animate__animated animate__fadeInLeft" style={{ animationDelay: '1.3s' }}>
                                        Always Want Safe Water For Healthy Life
                                    </h1>
                                    <p className="text-white mb-5 animate__animated animate__fadeInLeft" style={{ animationDelay: '1.5s' }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                    </p>
                                    <div className="flex justify-center animate__animated animate__fadeInLeft" style={{ animationDelay: '1.7s' }}>
                                        <a
                                            className="btn btn-primary rounded-full py-3 px-5 mr-2"
                                            href="#"
                                        >
                                            Order Now
                                        </a>
                                        <a
                                            className="btn btn-secondary rounded-full py-3 px-5 ml-2"
                                            href="#"
                                        >
                                            Free Estimate
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item relative float-left w-full">
                            <img
                                src="https://lh3.googleusercontent.com/p/AF1QipMDEX2mMNab3wmIOQs2CL7OOcyDUCKMgCaXPQEJ=s680-w680-h510"
                                className="block w-full"
                                alt="Image"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="max-w-3xl text-center">
                                    <h4 className="text-white text-uppercase font-bold mb-4 animate__animated animate__fadeInRight" style={{ animationDelay: '1s', letterSpacing: '3px' }}>
                                        Importance life
                                    </h4>
                                    <h1 className="text-white text-capitalize mb-4 animate__animated animate__fadeInRight" style={{ animationDelay: '1.3s' }}>
                                        Always Want Safe Water For Healthy Life
                                    </h1>
                                    <p className="text-white mb-5 animate__animated animate__fadeInRight" style={{ animationDelay: '1.5s' }}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                    </p>
                                    <div className="flex justify-center animate__animated animate__fadeInRight" style={{ animationDelay: '1.7s' }}>
                                        <a
                                            className="btn btn-primary rounded-full py-3 px-5 mr-2"
                                            href="#"
                                        >
                                            Order Now
                                        </a>
                                        <a
                                            className="btn btn-secondary rounded-full py-3 px-5 ml-2"
                                            href="#"
                                        >
                                            Free Estimate
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none focus:outline-none left-0"
                        type="button"
                        data-bs-target="#carouselId"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon bg-no-repeat bg-center"
                            aria-hidden="true"
                        >
                            <i className="fa fa-angle-left fa-3x"></i>
                        </span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none focus:outline-none right-0"
                        type="button"
                        data-bs-target="#carouselId"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon bg-no-repeat bg-center"
                            aria-hidden="true"
                        >
                            <i className="fa fa-angle-right fa-3x"></i>
                        </span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div> */}

                {/* <Carousel slides={slides} /> */}
                <Carousel slides={carouselData} />
                {/* <div className="relative w-full">
                    <div className="relative w-full  ">
                        {carouselData.map((item, index) => (
                            <div
                                key={index}
                                className={`absolute w-full transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                <img
                                    src={item.img}
                                    alt={`carousel-${index}`}
                                    className="w-full h-[600px] object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                    <div className="max-w-3xl text-center text-white px-6">
                                        <h4 className="text-2xl font-bold mb-4">{item.heading}</h4>
                                        <h1 className="text-4xl font-extrabold mb-4">{item.subHeading}</h1>
                                        <p className="text-lg mb-6">{item.description}</p>
                                        <div className="flex justify-center gap-4">
                                            {item.buttons.map((button, i) => (
                                                <a
                                                    key={i}
                                                    href={button.link}
                                                    className={`px-6 py-3 rounded-full ${button.class}`}
                                                >
                                                    {button.text}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 text-white bg-black bg-opacity-50 hover:bg-opacity-75"
                        onClick={prevSlide}
                    >
                        <i className="fa fa-angle-left fa-3x" />
                    </button>
                    <button
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 text-white bg-black bg-opacity-50 hover:bg-opacity-75"
                        onClick={nextSlide}
                    >
                        <i className="fa fa-angle-right fa-3x" />
                    </button>

                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-4">
                        {carouselData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div> */}



                {/* carousel */}

                {/* feature Start */}
                {/* <div class="bg-light py-16">
                    <div class="container mx-auto py-16">
                        <div class="text-center mx-auto pb-12 max-w-3xl">
                            <h4 class="text-primary uppercase text-lg">Our Feature</h4>
                            <h1 class="text-4xl font-bold mb-3 capitalize">A Trusted Name In Bottled Water Industry</h1>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div class="wow fadeInUp" data-wow-delay="0.2s">
                                <div class="bg-white p-6 rounded-lg shadow-lg">
                                    <div class="bg-primary text-white p-4 rounded-full mb-4">
                                        <i class="fas fa-hand-holding-water text-3xl"></i>
                                    </div>
                                    <a href="#" class="text-xl font-semibold mb-3 block">Quality Check</a>
                                    <p class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus</p>
                                    <a href="#" class="text-secondary flex items-center">Read More <i class="fa fa-angle-right ml-2"></i></a>
                                </div>
                            </div>
                            <div class="wow fadeInUp" data-wow-delay="0.4s">
                                <div class="bg-white p-6 rounded-lg shadow-lg">
                                    <div class="bg-primary text-white p-4 rounded-full mb-4">
                                        <i class="fas fa-filter text-3xl"></i>
                                    </div>
                                    <a href="#" class="text-xl font-semibold mb-3 block">5 Steps Filtration</a>
                                    <p class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus</p>
                                    <a href="#" class="text-secondary flex items-center">Read More <i class="fa fa-angle-right ml-2"></i></a>
                                </div>
                            </div>
                            <div class="wow fadeInUp" data-wow-delay="0.6s">
                                <div class="bg-white p-6 rounded-lg shadow-lg">
                                    <div class="bg-primary text-white p-4 rounded-full mb-4">
                                        <i class="fas fa-recycle text-3xl"></i>
                                    </div>
                                    <a href="#" class="text-xl font-semibold mb-3 block">Composition</a>
                                    <p class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus</p>
                                    <a href="#" class="text-secondary flex items-center">Read More <i class="fa fa-angle-right ml-2"></i></a>
                                </div>
                            </div>
                            <div class="wow fadeInUp" data-wow-delay="0.8s">
                                <div class="bg-white p-6 rounded-lg shadow-lg">
                                    <div class="bg-primary text-white p-4 rounded-full mb-4">
                                        <i class="fas fa-microscope text-3xl"></i>
                                    </div>
                                    <a href="#" class="text-xl font-semibold mb-3 block">Lab Control</a>
                                    <p class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus</p>
                                    <a href="#" class="text-secondary flex items-center">Read More <i class="fa fa-angle-right ml-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="bg-gray-100 py-5 px-4 md:py-10">
                    <div className="container mx-auto md:py-10">
                        <div className="text-center mx-auto pb-12 max-w-3xl">
                            <h4 className="text-primary uppercase text-lg">Holy</h4>
                            <h1 className="text-2xl md:text-4xl font-bold mb-3 capitalize">Thirusheshippu</h1>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {featuresData.map((feature) => (
                                <div
                                    key={feature.id}
                                    className="relative group overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                                    data-wow-delay={feature.delay}
                                >
                                    {/* Image */}
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-56 sm:h-64 md:h-72 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
                                    />

                                    {/* Content */}
                                    <div className="p-6 bg-white">

                                        {/* Title */}
                                        <a href={feature.link} className="text-xl font-semibold mb-3 block hover:underline">
                                            {feature.title}
                                        </a>

                                        {/* Description */}
                                        <p className="mb-3 text-gray-700 line-clamp-6 overflow-hidden">{feature.description}</p>

                                        {/* Read More Link */}
                                        {/* <a href={feature.link} className="text-secondary flex items-center hover:text-white">
                                            Read More <i className="fa fa-angle-right ml-2"></i>
                                        </a> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* feature End */}

                {/* About Start */}
                {/* <div class="overflow-hidden py-16 bg-white">
                    <div class="container mx-auto py-16">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div class="relative bg-primary rounded-lg p-6">
                                <div class="rounded-lg overflow-hidden">
                                    <img src="https://lh3.googleusercontent.com/p/AF1QipOaYysRBfGs4DvFeYfb22_hpXIWga6oFgCL5Mij=s680-w680-h510" class="w-full h-full object-cover rounded-lg" alt="" />
                                </div>
                                <div class="absolute top-4 left-4 bg-white text-primary px-4 py-2 rounded-lg">
                                    <span class="text-sm font-bold">20 Years Experience</span>
                                </div>
                            </div>

                            <div>
                                <div class="about-item">
                                    <h4 class="text-primary text-lg font-semibold uppercase mb-2">Mother Mary</h4>
                                    <h1 class="text-4xl font-bold mb-4">Defender of Orthodoxy</h1>
                                    <p class="mb-6 text-lg text-gray-600">
                                        Anybody who has spent more than one hour in an Orthodox Church understands that the Orthodox Church values St. Mary. Almost every prayer has some mention of her, and the Church calendar sets apart seven days where we celebrate an event in the life of the Mother of God. Furthermore, Wednesdays are dedicated to her, and the sixth hour (noon) of prayer of every day is dedicated to her as well. Therefore, without a doubt one can come to the conclusion that the Theotokos (“the God bearer”) is an important part of the life of any Orthodox Christian. However, the rest of the world, especially evangelical Christian groups tell us that we are wrong for venerating the Mother of God. They call us “Mary worshippers” and condemn us for giving honor to Mary. Their arguments seem logical when we hear them, yet the Christian Church has been venerating the Mother of God since the time of the Apostles. Then, why is it important to ask Mary to intercede on our behalf? The answer to this question requires us to analyze the Holy Virgin herself.
                                    </p>

                                    <Link to="/about-mother-mary" class="btn btn-secondary rounded-full py-3 px-8 text-lg font-medium text-white bg-secondary hover:bg-secondary-dark transition">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="overflow-hidden py-16 bg-white">
                    <div className="container mx-auto ">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* <!-- Left Section --> */}
                            <div className="relative bg-primary rounded-lg p-6">
                                <div className="rounded-lg overflow-hidden">
                                    <img
                                        src={mothermary1}
                                        className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
                                        alt="Mother Mary"
                                    />
                                </div>
                            </div>

                            {/* <!-- Right Section --> */}
                            {/* <div className="flex flex-col justify-between text-black">
                                <div className="about-item">
                                    <h4 className="text-primary text-lg font-semibold uppercase mb-2 opacity-0 animate__animated animate__fadeIn animate__delay-1s">
                                        Mother Mary
                                    </h4>
                                    <h1 className="text-4xl font-bold mb-4 opacity-0 animate__animated animate__fadeIn animate__delay-2s">
                                        Defender of Orthodoxy
                                    </h1>
                                    <p className="mb-6 text-lg text-gray-600 opacity-0 animate__animated animate__fadeIn animate__delay-3s">
                                        Anybody who has spent more than one hour in an Orthodox Church understands that the Orthodox Church values St. Mary. Almost every prayer has some mention of her, and the Church calendar sets apart seven days where we celebrate an event in the life of the Mother of God. Furthermore, Wednesdays are dedicated to her, and the sixth hour (noon) of prayer of every day is dedicated to her as well. Therefore, without a doubt one can come to the conclusion that the Theotokos (“the God bearer”) is an important part of the life of any Orthodox Christian. However, the rest of the world, especially evangelical Christian groups tell us that we are wrong for venerating the Mother of God. They call us “Mary worshippers” and condemn us for giving honor to Mary. Their arguments seem logical when we hear them, yet the Christian Church has been venerating the Mother of God since the time of the Apostles. Then, why is it important to ask Mary to intercede on our behalf? The answer to this question requires us to analyze the Holy Virgin herself.
                                    </p>

                                    <Link
                                        to="/about-mother-mary"
                                        className="btn btn-secondary rounded-full py-3 px-8 text-lg font-medium text-white bg-secondary hover:bg-secondary-dark transition-transform duration-300 ease-in-out transform hover:scale-105"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div> */}
                            <div>
                                <div class="about-item">
                                    <h4 class="text-primary  md:text-lg font-semibold uppercase mb-2">Mother Mary</h4>
                                    <h1 class="text-2xl md:text-4xl font-bold mb-4">Defender of Orthodoxy</h1>
                                    <p class="mb-6 text-lg text-gray-600">
                                        {/* Anybody who has spent more than one hour in an Orthodox Church understands that the Orthodox Church values St. Mary. Almost every prayer has some mention of her, and the Church calendar sets apart seven days where we celebrate an event in the life of the Mother of God. Furthermore, Wednesdays are dedicated to her, and the sixth hour (noon) of prayer of every day is dedicated to her as well. Therefore, without a doubt one can come to the conclusion that the Theotokos (“the God bearer”) is an important part of the life of any Orthodox Christian. However, the rest of the world, especially evangelical Christian groups tell us that we are wrong for venerating the Mother of God. They call us “Mary worshippers” and condemn us for giving honor to Mary. Their arguments seem logical when we hear them, yet the Christian Church has been venerating the Mother of God since the time of the Apostles. Then, why is it important to ask Mary to intercede on our behalf? The answer to this question requires us to analyze the Holy Virgin herself. */}
                                        <br />
                                        The story of the Mother Mary is a remarkable one itself, one that echoes many Old Testament stories. Joachim and Anna were a God fearing couple. Joachim, a wealthy man, gave more than the required ten percent to the Temple. However, the Lord had not blessed them with a child. Many in the community mocked the couple, as in ancient Israelite times infertility was seen as a curse from God. Joachim was so distraught by this barrenness that he went into the desert and fasted for forty days and forty nights. Anna stayed home praying and lamenting over her barren womb as well. Eventually, an angel of the Lord appeared to them both saying they would conceive a child, and Anna promised to dedicate the child to the Temple. Mary was born and dedicated to the Temple at the age of three. At the age of the twelve, she was betrothed to the widower Joseph.[1] It is at this point the story becomes familiar to all. It is during this time of engagement that the angel Gabriel comes to Mary and tells her that she will give birth to the Savior (Luke 1:26-38). During Christ’s ministry, Mary would occasionally accompany him and would be one of the few that would be at the foot of the Cross when Christ was crucified. After Pentecost, Holy Tradition teaches Mary traveling spreading the Gospel of her Son. When the Virgin was on her deathbed, all the apostles, except St. Thomas, were at her side. Thomas, who was teaching the Gospel in India, was taken up on a cloud to see Mary, but he saw her being lifted into the clouds as he arrived. The Virgin Mary gave him her girdle as proof and a memento to remember her by. When the apostles came back to the tomb of the Mother, they found it empty and Thomas showed them the girdle of Christ’s mother as proof that she had been assumed body and soul into the heavens.
                                    </p>

                                    <Link to="/about/about-mother-mary" class="btn btn-secondary rounded-full md:py-3 md:px-8 text-lg font-medium text-white bg-secondary hover:bg-secondary-dark transition">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About End */}






                {/* Fact Counter */}
                <div className="bg-primary py-10">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {counters.map((counter, index) => (
                                <div
                                    key={index}
                                    className={`counter-item text-center text-white wow fadeInUp border `}
                                    data-wow-delay={`${0.2 + index * 0.2}s`}
                                >
                                    {/* <div className="counter-item-icon mx-auto bg-white/20 rounded-full p-6"> */}
                                    {/* <i className={`${counter.icon} fa-3x text-white`}></i> */}
                                    <img className="counter-item-icon w-80  mx-auto bg-white/20 rounded-full p-6" src={counter?.image} alt="" srcset="" />
                                    {/* </div> */}
                                    <h4 className="text-xl text-white font-medium mt-4 mb-2">{counter.title}</h4>
                                    <div className="counter-counting flex items-baseline justify-center">
                                        {/* <span className="text-3xl font-bold">{counter.count}</span> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Fact Counter */}

                {/* Nercha Start */}

                <div className="bg-gray-50 py-16">
                    <div className="container mx-auto px-4">
                        {/* Section Title */}
                        <div className="text-center mx-auto pb-12 max-w-2xl">
                            <h4 className="md:text-lg uppercase text-primary font-bold tracking-wide">Nercha</h4>
                            <h1 className="text-2xl md:text-4xl font-extrabold capitalize mb-4 text-gray-800">
                                Faith meets devotion
                            </h1>
                        </div>

                        {/* Blog Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3  gap-10">
                            {blogs.map((blog, index) => (
                                <div key={index} className="relative rounded-lg overflow-hidden shadow-lg group">
                                    {/* Background Image */}
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />

                                    {/* Overlay Content */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 flex flex-col justify-end">
                                        <h3 className="text-xl font-semibold text-white mb-2 leading-tight">{blog.title}</h3>
                                        <p className="text-sm text-gray-200 mb-3">{blog.description}</p>
                                        {/* <a
                                            href={blog.link}
                                            className="text-white text-sm font-semibold hover:underline inline-flex items-center"
                                        >
                                            Read More <i className="fa fa-angle-right ml-2"></i>
                                        </a> */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Nercha End */}

                {/* Service Start */}
                {/* <div className="bg-gray-100 py-10 overflow-hidden">
                    <div className="container mx-auto">
                        <div className="text-center mx-auto pb-10" style={{ maxWidth: "800px" }}>
                            <h4 className="text-xl uppercase text-primary">Our Service</h4>
                            <h1 className="text-4xl font-bold capitalize mb-3">
                                Protect Your Family with Best Water
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                            <div className="space-y-6">
                                {servicesLeft.map((service, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4"
                                    >
                                        <div className="flex-grow text-right">
                                            <a
                                                href="#"
                                                className="block text-lg font-semibold text-primary mb-2"
                                            >
                                                {service.title}
                                            </a>
                                            <p className="text-gray-600">{service.description}</p>
                                        </div>
                                        <div className="p-4 bg-primary rounded-full text-white">
                                            <i className={`${service.icon} fa-2x`}></i>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="hidden lg:block">
                                <img
                                    src="img/water.png"
                                    alt="Water"
                                    className="w-full object-cover"
                                />
                            </div>

                            <div className="space-y-6">
                                {servicesRight.map((service, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4"
                                    >
                                        <div className="p-4 bg-primary rounded-full text-white">
                                            <i className={`${service.icon} fa-2x`}></i>
                                        </div>
                                        <div className="flex-grow">
                                            <a
                                                href="#"
                                                className="block text-lg font-semibold text-primary mb-2"
                                            >
                                                {service.title}
                                            </a>
                                            <p className="text-gray-600">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="bg-gray-100 py-10 overflow-hidden">
                    <div className="container mx-auto">
                        {/* Section Heading */}
                        <div className="text-center mx-auto pb-10" style={{ maxWidth: "800px" }}>
                            <h4 className="md:text-xl uppercase text-primary">Our Kurishu Palli</h4>
                            <h1 className="text-2xl md:text-4xl font-bold capitalize mb-3">
                                These are Kurishu Palli under our church
                            </h1>
                        </div>

                        {/* Services with Center Image */}
                        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                            <div className="space-y-6">
                                {services
                                    .filter((service) => service.alignment === "left")
                                    .map((service, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-lg shadow-lg  flex items-center space-x-4 animate-fade-in"
                                            style={{ animationDelay: `${index * 0.2}s` }}
                                        >
                                            <div className="flex-grow text-right p-6">
                                                <a
                                                    href="#"
                                                    className="block text-sm font-semibold text-primary mb-2"
                                                >
                                                    {service.title}
                                                </a>
                                                <p className="text-gray-600">{service.description}</p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-24 h-40 object-cover rounded-lg"
                                                />
                                            </div>
                                        </div>
                                    ))}
                            </div>

                            <div className="hidden lg:block">
                                <img
                                    src={palli1}
                                    alt="Water Bottle"
                                    className="w-full object-cover animate-fade-in"
                                    style={{ animationDelay: "0.4s" }}
                                />
                            </div>

                            <div className="space-y-6">
                                {services
                                    .filter((service) => service.alignment === "right")
                                    .map((service, index) => (
                                        <div
                                            key={index}
                                            className="bg-white rounded-lg shadow-lg  flex items-center space-x-4 animate-fade-in"
                                            style={{ animationDelay: `${index * 0.2}s` }}
                                        >
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-24 h-40 object-cover rounded-lg"
                                                />
                                            </div>
                                            <div className="flex-grow text-left p-6">
                                                <a
                                                    href="#"
                                                    className="block text-lg font-semibold text-primary mb-2"
                                                >
                                                    {service.title}
                                                </a>
                                                <p className="text-gray-600">{service.description}</p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div> */}






                    </div>
                    <KurishuPalliSection
                        services={services}
                        backgroundImage={img4}
                    />
                </div>

                {/* Service End */}

                {/* Product start */}
                {/* <div className="bg-gray-50 py-10">
                    <div className="container mx-auto px-4">
                        <div className="text-center mx-auto pb-10" style={{ maxWidth: "800px" }}>
                            <h4 className="text-xl uppercase text-primary font-bold">
                                Our Products
                            </h4>
                            <h1 className="text-4xl font-extrabold capitalize mb-3">
                                We Deliver Best Quality Bottle Packs
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                            {products.map((product, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full object-cover rounded-t-lg"
                                    />
                                    <div className="bg-gray-100 text-center p-6 rounded-b-lg">
                                        <p className="text-gray-600">{product.quantity}</p>
                                        <a
                                            href="#"
                                            className="block text-lg font-semibold text-primary mb-2"
                                        >
                                            {product.title}
                                        </a>
                                        <p className="text-xl font-bold text-primary mb-4">
                                            {product.price}
                                        </p>
                                        <a
                                            href="#"
                                            className="btn btn-secondary rounded-full py-2 px-6 text-white bg-secondary hover:bg-secondary-dark"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
                {/* Product End */}

                {/* Blog Start */}
                {/* <div className="bg-gray-50 py-10">
                    <div className="container mx-auto px-4">
                        <div className="text-center mx-auto pb-10" style={{ maxWidth: "800px" }}>
                            <h4 className="text-xl uppercase text-primary font-bold">Our Blog</h4>
                            <h1 className="text-4xl font-extrabold capitalize mb-3">Latest Blog & News</h1>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((blog, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
                                >
                                    <div className="relative">
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full object-cover rounded-t-lg"
                                        />
                                        <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 text-sm rounded">
                                            <i className="fa fa-calendar-alt mr-1"></i> {blog.date}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <a
                                            href={blog.link}
                                            className="block text-lg font-semibold text-primary mb-3 hover:underline"
                                        >
                                            {blog.title}
                                        </a>
                                        <p className="text-gray-600 mb-4">{blog.description}</p>
                                        <a
                                            href={blog.link}
                                            className="text-secondary font-bold hover:underline"
                                        >
                                            Read More <i className="fa fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}

                {/* Blog End */}

                {/* Team Start */}
                {/* <div className="bg-gray-50 py-10">
                    <div className="container mx-auto px-4">
                        <div className="text-center mx-auto pb-10" style={{ maxWidth: "800px" }}>
                            <h4 className="text-xl uppercase text-primary font-bold">Our Team</h4>
                            <h1 className="text-4xl font-extrabold capitalize mb-3">
                                What is Really SEO & How Can I Use It?
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
                                >
                                    <div className="relative">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full object-cover rounded-t-lg"
                                        />
                                        <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 text-sm rounded">
                                            <i className="fas fa-share-alt"></i>
                                        </div>
                                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                            <a
                                                href={member.socialLinks.facebook}
                                                className="bg-secondary text-white p-2 rounded-full hover:scale-110 transition"
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a
                                                href={member.socialLinks.twitter}
                                                className="bg-secondary text-white p-2 rounded-full hover:scale-110 transition"
                                            >
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a
                                                href={member.socialLinks.linkedin}
                                                className="bg-secondary text-white p-2 rounded-full hover:scale-110 transition"
                                            >
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                            <a
                                                href={member.socialLinks.instagram}
                                                className="bg-secondary text-white p-2 rounded-full hover:scale-110 transition"
                                            >
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="bg-light text-center py-4">
                                        <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                                        <p className="text-gray-600">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> */}
                {/* Team End */}

                {/* Testimonial Start */}
                {/* <div className="bg-gray-50 py-10 mb-5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mx-auto pb-10" style={{ maxWidth: "800px" }}>
                            <h4 className="text-xl uppercase text-primary font-bold">Testimonials</h4>
                            <h1 className="text-4xl font-extrabold capitalize mb-3">Our Clients' Reviews</h1>
                        </div>

                        <Slider {...settings}>
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="px-4">
                                    <div className="bg-white shadow-lg rounded-lg text-center p-6 hover:shadow-xl transition">
                                        <p className="text-gray-600 italic mb-4">{testimonial.message}</p>
                                        <div className="flex justify-center mb-4">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-24 h-24 rounded-full border-4 border-primary object-cover"
                                            />
                                        </div>
                                        <h4 className="text-lg font-bold">{testimonial.name}</h4>
                                        <p className="text-gray-500">{testimonial.profession}</p>
                                        <div className="flex justify-center text-yellow-400 mt-2">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div> */}
                <div className="bg-gray-50 py-10 mb-5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mx-auto pb-10" style={{ maxWidth: "800px" }}>
                            <h4 className="md:text-xl uppercase text-primary font-bold">Blessings</h4>
                            <h1 className="text-2xl md:text-4xl font-extrabold capitalize mb-3">Pouring blessings from the Altar to the World!</h1>
                        </div>

                        <Slider {...settings}>
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="px-4 py-4">
                                    <div className="bg-white shadow-lg rounded-lg  text-center  hover:shadow-xl transition">
                                        <div className="flex justify-center mb-4">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-full  h-80  object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <Link to={testimonial?.link}>
                                            <div className='px-6 py-2 text-start cursor-pointer h-56'>

                                                <h4 className="text-lg font-bold mb-2 hover:underline">{testimonial.name}</h4>
                                                <p className={` text-gray-600 italic w-60 mb-4   line-clamp-6 overflow-hidden`} >{testimonial.message}</p>
                                                {/* <p className={` text-gray-600 italic w-60 mb-4  ${readMore ? 'h-auto' : 'line-clamp-5'} overflow-hidden`} >{testimonial.message}</p>
                                            <p className="text-sm text-end font-semibold cursor-pointer mt-1" onClick={(e) => handleReadMore(testimonial)}  >
                                                        {readMore ? "View Less >" : "View More >"}
                                                    </p> */}
                                            </div>
                                        </Link>


                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
                {/* Testimonial End */}

                {/* Footer Start */}
                <LandingPageFooter />
                {/* Footer End */}


            </div>
        </div>
    )
}

export default Home