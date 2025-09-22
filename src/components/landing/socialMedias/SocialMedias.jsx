import { Card } from 'antd';
import React, { useEffect, useState } from 'react'
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';
import { getSocialMedias } from '../../../api/PublicRequest';
import { Link } from 'react-router-dom';

function SocialMedias() {
    const socialLinks = [
        {
            name: 'WhatsApp',
            handle: '+91 98 56 25 65 36',
            icon: <FaWhatsapp className="h-8 w-8" />,
            // url: 'https://wa.me/your-number-here',
            url: '919856256536',
            color: 'bg-green-500'
        },
        {
            name: 'Facebook',
            handle: '@stmarysyouthassociation',
            icon: <FaFacebook className="h-8 w-8" />,
            url: 'https://www.facebook.com/share/1BAVT7Zfby/',
            color: 'bg-blue-600'
        },
        {
            name: 'Instagram',
            handle: '@kannara_palli',
            icon: <FaInstagram className="h-8 w-8" />,
            url: 'https://www.instagram.com/kannara_palli?igsh=MWlmZjhsbWdvaTBoMw==',
            color: 'bg-pink-600'
        },
        {
            name: 'YouTube',
            handle: '@Kannarapalli',
            icon: <FaYoutube className="h-8 w-8" />,
            url: 'https://youtube.com/@kannarapalli3338?si=Zv7yjEZjUXPVAsnb',
            color: 'bg-red-600'
        }
    ];

    const [socialMedias, setSocialMedias] = useState([])

    useEffect(() => {
        const fetchSocialMedias = async () => {
            try {
                // const { data } = await getSocialMedias()
                // console.log(data);
                setSocialMedias(socialLinks)

            } catch (error) {

            }
        }
        fetchSocialMedias()
    },[])
    return (
        <div>
            <Card className="w-full max-w-md mx-auto">
                <div>
                    {/* <h1 className="text-2xl text-center my-5">Connect With Us</h1> */}
                    <h1 className="text-4xl text-center my-3 font-extrabold capitalize mb-4 text-gray-800">
                        Connect With Us
                    </h1>
                </div>
                <div>
                    <div className="flex flex-col space-y-4">
                        {socialMedias?.map((social) => (
                            <Link
                                key={social.name}
                                // to={social.url}
                                to={`${social.name === 'WhatsApp' ? `https://wa.me/+${social.url}?text=Hi%2C` : social.url}`} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${social.color} text-white p-4 rounded-lg flex items-center justify-between hover:opacity-90 transition-opacity`}
                            >
                                <span className="flex items-center gap-3">
                                    {social.icon}
                                    <span className="flex flex-col">
                                        <span className="text-lg font-medium">{social.name}</span>
                                        <span className="text-sm opacity-90">{social.handle}</span>
                                    </span>
                                </span>
                                <span className="text-sm">View →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default SocialMedias