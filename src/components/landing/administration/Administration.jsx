import React, { useEffect, useState } from 'react'
import LandingPageNavbar from '../../navbar/LandingPageNavbar'
import HomePageBreadcrumb from '../breadcrumb/HomePageBreadcrumb'
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaShareAlt,
    FaShare
} from 'react-icons/fa';
import LandingPageFooter from '../../footer/LandingPageFooter';
import { administrationDetails } from '../../../api/PublicRequest';
import patriarchofAntioch from "../../../assets/bishopAdministration/patriarchofAntioch.jpg"
import malankaraMetropolitan from "../../../assets/bishopAdministration/malankaraMetropolitan.jpg"
import thirumeni from "../../../assets/bishopAdministration/thirumeni.jpg"

import vicar from "../../../assets/churchAdministartion/vicar.jpg"
import Trustee from "../../../assets/churchAdministartion/bennyKannekkattu.jpg"
import Secretary from "../../../assets/churchAdministartion/manojKadthaliparambil.jpg"


function Administration() {


    const teamMembers = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Patriarch_Ignatius_Aphrem_II%2C_seated.jpg/220px-Patriarch_Ignatius_Aphrem_II%2C_seated.jpg",
            name: "His Holiness Moran Mor Ignatius Aphrem II",
            role: "Patriarch of Antioch",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                linkedin: "#",
                instagram: "#",
            },
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/H.B._Mor_Baselios_Thomas_I.jpg/1200px-H.B._Mor_Baselios_Thomas_I.jpg",
            name: "His Beatitude. Dr. Baselios Thomas",
            role: "Catholicose of India",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                linkedin: "#",
                instagram: "#",
            },
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dr_Joseph_Mor_Gregorios.jpg/200px-Dr_Joseph_Mor_Gregorios.jpg",
            name: "His Eminence Mor Gregorios Joseph",
            role: "Malankara Metropolitan and Catholicos-Elect",
            socialLinks: {
                facebook: "#",
                twitter: "#",
                linkedin: "#",
                instagram: "#",
            },
        },
        // {
        //     image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        //     name: "Emily Davis",
        //     role: "Project Manager",
        //     socialLinks: {
        //         facebook: "#",
        //         twitter: "#",
        //         linkedin: "#",
        //         instagram: "#",
        //     },
        // },
    ];

    const teams = [
        {
            teamName: "Clergy Leaders / Bishops",
            members: [
                {
                    // image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Patriarch_Ignatius_Aphrem_II%2C_seated.jpg/220px-Patriarch_Ignatius_Aphrem_II%2C_seated.jpg",
                    image: patriarchofAntioch,
                    name: "His Holiness Moran Mor Ignatius Aphrem II",
                    role: "Patriarch of Antioch",
                    layout: "single", // Takes the entire row
                    // socialLinks: {
                    //     facebook: "#",
                    //     twitter: "#",
                    //     linkedin: "#",
                    //     instagram: "#",
                    // },
                },
                // {
                //     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/H.B._Mor_Baselios_Thomas_I.jpg/1200px-H.B._Mor_Baselios_Thomas_I.jpg",
                //     name: "His Beatitude. Dr. Baselios Thomas",
                //     role: "Catholicose of India",
                //     layout: "grid", // Part of the grid
                //     socialLinks: {
                //         facebook: "#",
                //         twitter: "#",
                //         linkedin: "#",
                //         instagram: "#",
                //     },
                // },
                {
                    // image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dr_Joseph_Mor_Gregorios.jpg/200px-Dr_Joseph_Mor_Gregorios.jpg",
                    image: malankaraMetropolitan,
                    name: "His Eminence Mor Gregorios Joseph",
                    role: "Malankara Metropolitan and Catholicos-Elect",
                    layout: "grid", // Part of the grid
                    // socialLinks: {
                    //     facebook: "#",
                    //     twitter: "#",
                    //     linkedin: "#",
                    //     instagram: "#",
                    // },
                },
                {
                    // image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Mor_Clemis_Kuriakose.png/220px-Mor_Clemis_Kuriakose.png",
                    image: thirumeni,
                    name: "His Grace Mor Clemis Kuriakose",
                    role: "Metropolitan of the Thrissur Diocese",
                    layout: "grid", // Part of the grid
                    // socialLinks: {
                    //     facebook: "#",
                    //     twitter: "#",
                    //     linkedin: "#",
                    //     instagram: "#",
                    // },
                },
            ],
        },
        {
            teamName: "Vicar",
            members: [
                {
                    image: vicar,
                    name: "Fr.Basil Baby Thekumadam",
                    role: "Vicar",
                    layout: "single", // Takes the entire row
                    structure: "circle",
                    socialLinks: {
                        facebook: "https://www.facebook.com/share/164WmSkfC2/",
                        // twitter: "#",
                        // linkedin: "#",
                        instagram: "https://www.instagram.com/frbasilbaby?igsh=bXNnMDFiODB1dzd1",
                    },
                },
            ]
        },
        {
            teamName: "Trustee",
            members: [
                {
                    image: Trustee,
                    name: "Benny Kannekkattu",
                    role: "Trustee",
                    layout: "single", // Takes the entire row
                    structure: "circle",
                    // socialLinks: {
                    //     facebook: "https://www.facebook.com/share/164WmSkfC2/",
                    //     // twitter: "#",
                    //     // linkedin: "#",
                    //     instagram: "https://www.instagram.com/frbasilbaby?igsh=bXNnMDFiODB1dzd1",
                    // },
                },
            ]
        },
        {
            teamName: "Secretary",
            members: [
                {
                    image: Secretary,
                    name: "Manoj Kadhaliparambil",
                    role: "Secretary",
                    layout: "single", // Takes the entire row
                    structure: "circle",
                    // socialLinks: {
                    //     facebook: "https://www.facebook.com/share/164WmSkfC2/",
                    //     // twitter: "#",
                    //     // linkedin: "#",
                    //     instagram: "https://www.instagram.com/frbasilbaby?igsh=bXNnMDFiODB1dzd1",
                    // },
                },
            ]
        },
        // {
        //     teamName: "Youth Leaders",
        //     members: [
        //         {
        //             image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        //             name: "Emily Davis",
        //             role: "Youth Coordinator",
        //             layout: "single", // Takes the entire row
        //             structure: "circle",
        //             socialLinks: {
        //                 facebook: "#",
        //                 twitter: "#",
        //                 linkedin: "#",
        //                 instagram: "#",
        //             },
        //         },
        //         {
        //             image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        //             name: "Emily Davis",
        //             role: "Youth Coordinator",
        //             layout: "grid", // Takes the entire row
        //             structure: "circle",
        //             socialLinks: {
        //                 facebook: "#",
        //                 twitter: "#",
        //                 linkedin: "#",
        //                 instagram: "#",
        //             },
        //         },
        //         {
        //             image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        //             name: "Emily Davis",
        //             role: "Youth Coordinator",
        //             layout: "grid", // Takes the entire row
        //             structure: "circle",
        //             socialLinks: {
        //                 facebook: "#",
        //                 twitter: "#",
        //                 linkedin: "#",
        //                 instagram: "#",
        //             },
        //         },
        //         {
        //             image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        //             name: "Emily Davis",
        //             role: "Youth Coordinator",
        //             layout: "grid", // Takes the entire row
        //             structure: "circle",
        //             // socialLinks: {
        //             //     facebook: "#",
        //             //     twitter: "#",
        //             //     linkedin: "#",
        //             //     instagram: "#",
        //             // },
        //         },
        //         {
        //             image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        //             name: "Emily Davis",
        //             role: "Youth Coordinator",
        //             layout: "grid", // Takes the entire row
        //             structure: "circle",
        //             socialLinks: {
        //                 facebook: "#",
        //                 twitter: "#",
        //                 linkedin: "#",
        //                 instagram: "#",
        //             },
        //         },
        //     ],
        // },
    ];

    const [adminstrations, setAdminstrations] = useState()

    // useEffect(() => {
    //     const getAdminstrationDetails = async () => {
    //         try {
    //             const { data } = await administrationDetails()
    //             console.log(data);

    //         } catch (error) {

    //         }
    //     }
    //     getAdminstrationDetails()
    // },[])

    return (
        <div>
            <LandingPageNavbar />
            <HomePageBreadcrumb title={"Administration"} page={"Administration"} />
            <div className="bg-gray-50 py-10">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center max-w-[800px] mx-auto pb-10">
                        <h4 className="md:text-xl uppercase text-primary font-bold"> Administration</h4>
                        <h1 className="text-2xl md:text-4xl font-extrabold capitalize mb-3">
                            How carefully would I atone, if I might, for the time I have lost!
                        </h1>
                    </div>



                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out"
                            >
                                <div className="relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-96  object-cover"
                                    />
                                    <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 text-sm rounded">
                                        <FaShare />
                                    </div>

                                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                        {[
                                            { Icon: FaFacebookF, link: member.socialLinks.facebook },
                                            { Icon: FaTwitter, link: member.socialLinks.twitter },
                                            { Icon: FaLinkedinIn, link: member.socialLinks.linkedin },
                                            { Icon: FaInstagram, link: member.socialLinks.instagram }
                                        ].map((social, idx) => (
                                            <a
                                                key={idx}
                                                href={social.link}
                                                className="bg-secondary text-white p-2 rounded-full hover:scale-110 transition duration-200"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                              <social.Icon className="w-4 h-4" />
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <div className="text-center py-4 bg-gray-100">
                                    <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                                    <p className="text-gray-600">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div> */}

                    <div className="bg-gray-100 py-8 px-4">
                        {teams.map((team, teamIndex) => (
                            <div key={teamIndex} className="mb-12">
                                {/* Team Name */}
                                <h2 className="text-2xl md:text-4xl bg-gray-600 font-bold text-white mb-6 text-center">{team.teamName}</h2>

                                {/* Single Members */}
                                {/* {team.members.filter((m) => m.layout === "single").map((member, memberIndex) => (
                                    member.structure === "circle" ?
                                        (
                                            <div key={memberIndex} className=" flex justify-center mb-8">
                                                <div className="bg-white shadow-lg rounded-lg text-center p-6 hover:shadow-xl transition w-3/4 md:w-1/2 lg:w-1/4">
                                                    <div className="flex justify-center mb-4">
                                                        <img
                                                            src={member.image}
                                                            alt={member.name}
                                                            className="w-48 h-48 rounded-full border-4 border-primary object-cover"
                                                        />
                                                    </div>
                                                    <h4 className="text-lg font-bold">{member.name}</h4>
                                                    <p className="text-gray-500">{member.role}</p>
                                                    <div className="flex justify-center text-yellow-400 mt-2">
                                                        {member.socialLinks &&
                                                            <div className=" transform  flex space-x-2">
                                                                {[
                                                                    member.socialLinks.facebook && { Icon: FaFacebookF, link: member.socialLinks.facebook },
                                                                    member.socialLinks.twitter && { Icon: FaTwitter, link: member.socialLinks.twitter },
                                                                    member.socialLinks.linkedin && { Icon: FaLinkedinIn, link: member.socialLinks.linkedin },
                                                                    member.socialLinks.instagram && { Icon: FaInstagram, link: member.socialLinks.instagram },
                                                                ]
                                                                    .filter(Boolean)
                                                                    .map((social, idx) => (
                                                                        <a
                                                                            key={idx}
                                                                            href={social?.link}
                                                                            className="bg-secondary text-white p-2 rounded-full hover:scale-110 transition duration-200"
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                        >
                                                                            <social.Icon className="w-4 h-4" />
                                                                        </a>
                                                                    ))}
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        :
                                        (

                                            <div key={memberIndex} className="flex justify-center mb-8">
                                                <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out w-3/4 md:w-1/2 lg:w-1/3">
                                                    <div className="relative">
                                                        <img
                                                            src={member.image}
                                                            alt={member.name}
                                                            className="w-full h-96 object-cover object-top"
                                                        />
                                                        <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 text-sm rounded">
                                                            <FaShare />
                                                        </div>

                                                        {member.socialLinks &&
                                                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                                {[
                                                                    member.socialLinks.facebook && { Icon: FaFacebookF, link: member.socialLinks.facebook },
                                                                    member.socialLinks.twitter && { Icon: FaTwitter, link: member.socialLinks.twitter },
                                                                    member.socialLinks.linkedin && { Icon: FaLinkedinIn, link: member.socialLinks.linkedin },
                                                                    member.socialLinks.instagram && { Icon: FaInstagram, link: member.socialLinks.instagram },
                                                                ].map((social, idx) => (
                                                                    <a
                                                                        key={idx}
                                                                        href={social.link}
                                                                        className="bg-secondary text-white p-2 rounded-full hover:scale-110 transition duration-200"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                    >
                                                                        <social.Icon className="w-4 h-4" />
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        }
                                                    </div>

                                                    <div className="text-center py-4 bg-gray-100">
                                                        <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                                                        <p className="text-gray-600">{member.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                ))} */}

                                {team.members.filter((m) => m.layout === "single").map((member, memberIndex) => (
                                    member.structure === "circle" ? (
                                        <div key={memberIndex} className="flex justify-center mb-8">
                                            <div className="bg-white shadow-lg rounded-lg text-center p-6 hover:shadow-xl transition 
                w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                                                <div className="flex justify-center mb-4">
                                                    <img
                                                        src={member.image}
                                                        alt={member.name}
                                                        className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-primary object-cover"
                                                    />
                                                </div>
                                                <h4 className="text-lg font-bold">{member.name}</h4>
                                                <p className="text-gray-500">{member.role}</p>
                                                <div className="flex justify-center text-yellow-400 mt-2">
                                                    {member.socialLinks && (
                                                        <div className="flex space-x-2">
                                                            {[
                                                                member.socialLinks.facebook && { Icon: FaFacebookF, link: member.socialLinks.facebook },
                                                                member.socialLinks.twitter && { Icon: FaTwitter, link: member.socialLinks.twitter },
                                                                member.socialLinks.linkedin && { Icon: FaLinkedinIn, link: member.socialLinks.linkedin },
                                                                member.socialLinks.instagram && { Icon: FaInstagram, link: member.socialLinks.instagram },
                                                            ].filter(Boolean).map((social, idx) => (
                                                                <a
                                                                    key={idx}
                                                                    href={social?.link}
                                                                    className="bg-secondary text-white p-2 rounded-full hover:scale-110 transition duration-200"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <social.Icon className="w-4 h-4" />
                                                                </a>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div key={memberIndex} className="flex justify-center mb-8">
                                            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out 
                w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                                                {/* Team Member Image */}
                                                <div className="relative">
                                                    <img
                                                        src={member.image}
                                                        alt={member.name}
                                                        className="w-full h-80 object-cover object-top"
                                                    />
                                                    <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 text-sm rounded">
                                                        <FaShare />
                                                    </div>

                                                    {/* Social Links */}
                                                    {member.socialLinks && (
                                                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                            {[
                                                                member.socialLinks.facebook && { Icon: FaFacebookF, link: member.socialLinks.facebook },
                                                                member.socialLinks.twitter && { Icon: FaTwitter, link: member.socialLinks.twitter },
                                                                member.socialLinks.linkedin && { Icon: FaLinkedinIn, link: member.socialLinks.linkedin },
                                                                member.socialLinks.instagram && { Icon: FaInstagram, link: member.socialLinks.instagram },
                                                            ].filter(Boolean).map((social, idx) => (
                                                                <a
                                                                    key={idx}
                                                                    href={social.link}
                                                                    className="bg-secondary text-white p-2 rounded-full hover:scale-110 transition duration-200"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <social.Icon className="w-4 h-4" />
                                                                </a>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Team Member Details */}
                                                <div className="text-center py-4 bg-gray-100">
                                                    <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                                                    <p className="text-gray-600">{member.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ))}


                                {/* Grid Members */}
                                {/* <div
                                    className={`grid gap-8 ${team.members.filter((m) => m.layout === "grid").length <= 4
                                        ? "grid-cols-auto justify-items-center"
                                        : "sm:grid-cols-2 lg:grid-cols-4"
                                        }`}
                                    style={{
                                        gridTemplateColumns: `repeat(${Math.min(
                                            team.members.filter((m) => m.layout === "grid").length,
                                            4
                                        )}, minmax(0, 1fr))`,
                                    }}
                                >
                                    {team.members
                                        .filter((m) => m.layout === "grid")
                                        .map((member, memberIndex) => (

                                            member.structure === "circle" ?
                                                (
                                                    <div key={memberIndex} className=" flex justify-center mb-8">
                                                        <div className="bg-white shadow-lg rounded-lg text-center p-10 hover:shadow-xl transition ">
                                                            <div className="flex justify-center mb-4">
                                                                <img
                                                                    src={member.image}
                                                                    alt={member.name}
                                                                    className="w-48 h-48 rounded-full border-4 border-primary object-cover"
                                                                />
                                                            </div>
                                                            <h4 className="text-lg font-bold">{member.name}</h4>
                                                            <p className="text-gray-500">{member.role}</p>
                                                            <div className="flex justify-center text-yellow-400 mt-2">
                                                                {member.socialLinks &&
                                                                    <div className=" transform  flex space-x-2">
                                                                        {[
                                                                            member.socialLinks.facebook && { Icon: FaFacebookF, link: member.socialLinks.facebook },
                                                                            member.socialLinks.twitter && { Icon: FaTwitter, link: member.socialLinks.twitter },
                                                                            member.socialLinks.linkedin && { Icon: FaLinkedinIn, link: member.socialLinks.linkedin },
                                                                            member.socialLinks.instagram && { Icon: FaInstagram, link: member.socialLinks.instagram },
                                                                        ].map((social, idx) => (
                                                                            <a
                                                                                key={idx}
                                                                                href={social.link}
                                                                                className="bg-secondary text-white p-2 rounded-full hover:scale-110 transition duration-200"
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                            >
                                                                                <social.Icon className="w-4 h-4" />
                                                                            </a>
                                                                        ))}
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                                :
                                                (
                                                    <div
                                                        key={memberIndex}
                                                        className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out"
                                                    >
                                                        <div className="relative">
                                                            <img
                                                                src={member.image}
                                                                alt={member.name}
                                                                className="w-full h-96 object-cover object-top"
                                                            />
                                                            <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 text-sm rounded">
                                                                <FaShare />
                                                            </div>

                                                            {member.socialLinks &&
                                                                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                                    {[
                                                                        member.socialLinks.facebook && { Icon: FaFacebookF, link: member.socialLinks.facebook },
                                                                        member.socialLinks.twitter && { Icon: FaTwitter, link: member.socialLinks.twitter },
                                                                        member.socialLinks.linkedin && { Icon: FaLinkedinIn, link: member.socialLinks.linkedin },
                                                                        member.socialLinks.instagram && { Icon: FaInstagram, link: member.socialLinks.instagram },
                                                                    ].map((social, idx) => (
                                                                        <a
                                                                            key={idx}
                                                                            href={social.link}
                                                                            className="bg-secondary text-white p-2 rounded-full hover:scale-110 transition duration-200"
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                        >
                                                                            <social.Icon className="w-4 h-4" />
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            }
                                                        </div>

                                                        <div className="text-center py-4 px-3 bg-gray-100">
                                                            <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                                                            <p className="text-gray-600">{member.role}</p>
                                                        </div>
                                                    </div>
                                                )
                                        ))}
                                </div> */}





                                <div
                                    className={`grid gap-6 justify-center
        ${team.members.filter((m) => m.layout === "grid").length === 1 ? "grid-cols-1" :
                                            team.members.filter((m) => m.layout === "grid").length === 2 ? "grid-cols-1 sm:grid-cols-2" :
                                                "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}
    `}
                                >
                                    {team.members
                                        .filter((m) => m.layout === "grid")
                                        .map((member, index) => (
                                            member.structure === "circle" ? (
                                                <div key={index} className="flex justify-center">
                                                    <div className="bg-white shadow-lg rounded-lg text-center p-6 hover:shadow-xl transition w-full max-w-[320px]">
                                                        {/* Image */}
                                                        <div className="flex justify-center mb-4">
                                                            <img
                                                                src={member.image}
                                                                alt={member.name}
                                                                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-primary object-cover"
                                                            />
                                                        </div>

                                                        {/* Name & Role */}
                                                        <h4 className="text-lg font-bold">{member.name}</h4>
                                                        <p className="text-gray-500">{member.role}</p>

                                                        {/* Social Links */}
                                                        {member.socialLinks && (
                                                            <div className="flex justify-center mt-3 space-x-2">
                                                                {[
                                                                    member.socialLinks.facebook && { Icon: FaFacebookF, link: member.socialLinks.facebook },
                                                                    member.socialLinks.twitter && { Icon: FaTwitter, link: member.socialLinks.twitter },
                                                                    member.socialLinks.linkedin && { Icon: FaLinkedinIn, link: member.socialLinks.linkedin },
                                                                    member.socialLinks.instagram && { Icon: FaInstagram, link: member.socialLinks.instagram },
                                                                ].map((social, idx) => social && (
                                                                    <a
                                                                        key={idx}
                                                                        href={social.link}
                                                                        className="bg-secondary text-white p-2 rounded-full hover:scale-110 transition duration-200"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                    >
                                                                        <social.Icon className="w-4 h-4" />
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ) : (
                                                <div key={index} className="flex justify-center">
                                                    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition w-full max-w-[320px]">
                                                        {/* Image & Social Icons */}
                                                        <div className="relative">
                                                            <img src={member.image} alt={member.name} className="w-full h-80 object-cover object-top" />
                                                            <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 text-sm rounded">
                                                                <FaShare />
                                                            </div>

                                                            {/* Social Links */}
                                                            {member.socialLinks && (
                                                                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                                    {[
                                                                        member.socialLinks.facebook && { Icon: FaFacebookF, link: member.socialLinks.facebook },
                                                                        member.socialLinks.twitter && { Icon: FaTwitter, link: member.socialLinks.twitter },
                                                                        member.socialLinks.linkedin && { Icon: FaLinkedinIn, link: member.socialLinks.linkedin },
                                                                        member.socialLinks.instagram && { Icon: FaInstagram, link: member.socialLinks.instagram },
                                                                    ].map((social, idx) => social && (
                                                                        <a
                                                                            key={idx}
                                                                            href={social.link}
                                                                            className="bg-secondary text-white p-2 rounded-full hover:scale-110 transition duration-200"
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                        >
                                                                            <social.Icon className="w-4 h-4" />
                                                                        </a>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Name & Role */}
                                                        <div className="text-center py-4 px-3 bg-gray-100">
                                                            <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                                                            <p className="text-gray-600">{member.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        ))}
                                </div>


                            </div>
                        ))}



                    </div>
                </div>
            </div>
            <LandingPageFooter />
        </div>
    )
}

export default Administration