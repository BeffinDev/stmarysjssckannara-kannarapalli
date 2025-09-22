import React, { useRef, useState } from 'react'
import LandingPageNavbar from '../../navbar/LandingPageNavbar'
import HomePageBreadcrumb from '../breadcrumb/HomePageBreadcrumb'
import LandingPageFooter from '../../footer/LandingPageFooter'
import { Form, Input, Button, message } from 'antd';
import { FiMail, FiPhone } from 'react-icons/fi';
import { saveContactMessage } from '../../../api/PublicRequest';
import emailjs from "@emailjs/browser";
import { Link } from 'react-router-dom';

function Contact() {

    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    // const onFinish = async (values) => {
    //     // console.log('Form Values:', values);
    //     // try {
    //     //     const { data } = await saveContactMessage(values)
    //     //     console.log(data);
    //     //     if (data?.success) {

    //     //         message.success("Form submitted successfully");
    //     //     } else {
    //     //         message.warning("Some thing went wrong, please try after sometime!!!.");

    //     //     }
    //     // } catch (error) {
    //     //     console.log(error);

    //     //     message.warning("Something went wrong, please try after sometime.!!!");
    //     // }

    // };

    // const onFinish = () => {
    //     if (!formRef.current) return;

    //     console.log(formRef.current,'formRef.current');

    //     emailjs
    //         .sendForm(
    //             "your_service_id", // Replace with your EmailJS Service ID
    //             "your_template_id", // Replace with your EmailJS Template ID
    //             formRef.current, // Pass the form element
    //             "your_public_key" // Replace with your EmailJS Public Key
    //         )
    //         .then(
    //             () => {
    //                 message.success("Message sent successfully!");
    //                 formRef.current.resetFields(); // Reset the form
    //             },
    //             (error) => {
    //                 console.error("EmailJS Error:", error);
    //                 message.error("Failed to send message. Please try again.");
    //             }
    //         );
    // };


    // Validation function
    const validateForm = (formData) => {
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Enter a valid 10-digit phone number.";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
        if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

        return newErrors;
    };
    const sendEmail = (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: formRef.current.name.value,
            email: formRef.current.email.value,
            phone: formRef.current.phone.value,
            subject: formRef.current.subject.value,
            message: formRef.current.message.value,
        };

        // Validate form
        const formErrors = validateForm(formData);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        setErrors({}); // Clear previous errors

        setLoading(true);
        // console.log(formRef.current,'formRef.current');


        emailjs
            .sendForm(
                 import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    // alert("Message sent successfully!");
                    message.success("Message sent successfully!");
                    formRef.current.reset(); // Reset form fields
                    setLoading(false);
                },
                (error) => {
                    console.error("EmailJS Error:", error);
                    // alert("Failed to send message. Please try again.");
                    message.error("Failed to send message. Please try again.");
                    setLoading(false);
                }
            );
    }



    return (
        <div>
            <LandingPageNavbar />
            <HomePageBreadcrumb title={"Contact Us"} page={"contact"} />

            <div>
                <div className="container-fluid bg-light py-5">
                    <div className="container py-5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                            {/* Left Column - Contact Form */}
                            <div className="h-full wow fadeInUp" data-wow-delay="0.2s">
                                <div className="text-center mx-auto pb-5 max-w-[800px]">
                                    <h4 className="uppercase text-primary">Let's Connect</h4>
                                    <h1 className="text-4xl capitalize mb-3">Send Your Message</h1>
                                    <p className="mb-0">
                                    If you have any questions or need assistance, feel free to leave a message anytime. We’re here to help with whatever you need, and we’ll respond as quickly as possible.                                        {/* <a href="https://htmlcodex.com/contact-form" className="text-primary font-bold"> Download Now</a>. */}
                                    </p>
                                </div>

                                {/* <form>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <div className="col-span-1 lg:col-span-1">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    className="w-full p-3 border-0 rounded focus:ring-2 focus:ring-primary"
                                                />
                                                <label
                                                    htmlFor="name"
                                                    className="absolute left-3 top-[-10px] text-sm bg-white px-1 text-gray-500"
                                                >
                                                    Your Name
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-span-1 lg:col-span-1">
                                            <div className="relative">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    placeholder="Your Email"
                                                    className="w-full p-3 border-0 rounded focus:ring-2 focus:ring-primary"
                                                />
                                                <label
                                                    htmlFor="email"
                                                    className="absolute left-3 top-[-10px] text-sm bg-white px-1 text-gray-500"
                                                >
                                                    Your Email
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-span-1 lg:col-span-1">
                                            <div className="relative">
                                                <input
                                                    type="phone"
                                                    id="phone"
                                                    placeholder="Your Phone"
                                                    className="w-full p-3 border-0 rounded focus:ring-2 focus:ring-primary"
                                                />
                                                <label
                                                    htmlFor="phone"
                                                    className="absolute left-3 top-[-10px] text-sm bg-white px-1 text-gray-500"
                                                >
                                                    Your Phone
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-span-1 lg:col-span-1">
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    placeholder="Subject"
                                                    className="w-full p-3 border-0 rounded focus:ring-2 focus:ring-primary"
                                                />
                                                <label
                                                    htmlFor="subject"
                                                    className="absolute left-3 top-[-10px] text-sm bg-white px-1 text-gray-500"
                                                >
                                                    Subject
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-span-2">
                                            <div className="relative">
                                                <textarea
                                                    id="message"
                                                    placeholder="Leave a message here"
                                                    className="w-full p-3 h-[175px] border-0 rounded focus:ring-2 focus:ring-primary"
                                                />
                                                <label
                                                    htmlFor="message"
                                                    className="absolute left-3 top-[-10px] text-sm bg-white px-1 text-gray-500"
                                                >
                                                    Message
                                                </label>
                                            </div>
                                        </div>

                                        <div className="col-span-2">
                                            <button className="w-full py-3 bg-primary text-white rounded hover:bg-primary-dark transition-colors">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form> */}

                                {/* <Form ref={formRef} onFinish={onFinish} layout="vertical">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <div className="col-span-1 lg:col-span-1">
                                            <Form.Item
                                                name="name"
                                                label="Your Name"
                                                rules={[{ required: true, message: 'Please input your name!' }]}
                                            >
                                                <Input className='h-10' placeholder="Your Name" />
                                            </Form.Item>
                                        </div>

                                        <div className="col-span-1 lg:col-span-1">
                                            <Form.Item
                                                name="email"
                                                label="Your Email"
                                                rules={[
                                                    { required: true, message: 'Please input your email!' },
                                                    { type: 'email', message: 'Please input a valid email!' },
                                                ]}
                                            >
                                                <Input
                                                    className='h-10'
                                                    type="email"
                                                    placeholder="Your Email"
                                                    prefix={<FiMail />}
                                                />
                                            </Form.Item>
                                        </div>

                                        <div className="col-span-1 lg:col-span-1">
                                            <Form.Item
                                                name="phone"
                                                label="Your Phone"
                                                rules={[
                                                    { required: true, message: 'Please input your phone number!' },
                                                    {
                                                        pattern: /^[0-9]{10}$/,
                                                        message: 'Please input a valid phone number (10 digits).',
                                                    },
                                                ]}
                                            >
                                                <Input
                                                    className='h-10'
                                                    placeholder="Your Phone"
                                                    prefix={<FiPhone />}
                                                />
                                            </Form.Item>
                                        </div>

                                        <div className="col-span-1 lg:col-span-1">
                                            <Form.Item
                                                name="subject"
                                                label="Subject"
                                                rules={[{ required: true, message: 'Please input the subject!' }]}
                                            >
                                                <Input className='h-10' placeholder="Subject" />
                                            </Form.Item>
                                        </div>

                                        <div className="col-span-2">
                                            <Form.Item
                                                name="message"
                                                label="Message"
                                                rules={[{ required: true, message: 'Please input a message!' }]}
                                            >
                                                <Input.TextArea rows={5} placeholder="Leave a message here" />
                                            </Form.Item>
                                        </div>

                                        <div className="col-span-2">
                                            <Form.Item>
                                                <Button type="primary" htmlType="submit" className="w-full">
                                                    Send Message
                                                </Button>
                                            </Form.Item>
                                        </div>
                                    </div>
                                </Form> */}

                                {/* <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                                    <div>
                                        <label className="block text-gray-700 font-medium">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                                            placeholder="Your Name"
                                        />
                                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium">Your Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                                            placeholder="Your Email"
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium">Your Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                                            placeholder="Your Phone (10 digits)"
                                        />
                                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                                            placeholder="Subject"
                                        />
                                        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-medium">Message</label>
                                        <textarea
                                            name="message"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                                            rows={5}
                                            placeholder="Leave a message here"
                                        ></textarea>
                                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>
                                </form> */}
                                <form ref={formRef} onSubmit={sendEmail} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Name Field */}
                                    <div className="w-full">
                                        <label className="block text-gray-700 font-medium">Your Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                                            placeholder="Your Name"
                                        />
                                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                    </div>

                                    {/* Email Field */}
                                    <div className="w-full">
                                        <label className="block text-gray-700 font-medium">Your Email</label>
                                        <div className="relative">
                                            <FiMail className="absolute left-2 top-4 text-gray-500 " />
                                            <input
                                                type="email"
                                                name="email"
                                                className="w-full pl-10 mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                                                placeholder="Your Email"
                                            />
                                        </div>
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div>

                                    {/* Phone Field */}
                                    <div className="w-full">
                                        <label className="block text-gray-700 font-medium">Your Phone</label>
                                        <div className="relative">
                                            <FiPhone className="absolute left-2 top-4 text-gray-500" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                className="w-full pl-10 mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                                                placeholder="Your Phone"
                                            />
                                        </div>
                                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                    </div>

                                    {/* Subject Field */}
                                    <div className="w-full">
                                        <label className="block text-gray-700 font-medium">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                                            placeholder="Subject"
                                        />
                                        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                                    </div>

                                    {/* Message Field */}
                                    <div className="sm:col-span-2">
                                        <label className="block text-gray-700 font-medium">Message</label>
                                        <textarea
                                            name="message"
                                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                                            rows={5}
                                            placeholder="Leave a message here"
                                        ></textarea>
                                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                    </div>

                                    {/* Submit Button */}
                                    <div className="sm:col-span-2">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
                                        >
                                            {loading ? "Sending..." : "Send Message"}
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Right Column - Contact Info */}
                            <div className="wow fadeInUp" data-wow-delay="0.4s">
                                <div className="grid grid-cols-1 gap-4">
                                    {/* Address */}
                                    <div className="col-span-1">
                                        <div className="flex bg-white rounded p-4 items-center">
                                            <i className="fas fa-map-marker-alt text-3xl text-secondary mr-4"></i>
                                            <div>
                                                <h4 className="text-lg font-bold">Address</h4>
                                                <p className="mb-0">St. Mary's Jacobite Syrian Soonoro Church, <br />
                                                    P.O kannara, Karadiyala, Kerala 680652</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mail */}
                                    <div className="col-span-1 lg:col-span-1">
                                        <div className="flex bg-white rounded p-4 items-center">
                                            <i className="fas fa-envelope text-3xl text-secondary mr-4"></i>
                                            <div>
                                                <h4 className="text-lg font-bold">Mail Us</h4>
                                                <Link to={'mailto:stmarysjssckannara@gmail.com'} className="mb-0">stmarysjssckannara@gmail.com</Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="col-span-1 lg:col-span-1">
                                        <div className="flex bg-white rounded p-4 items-center">
                                            <i className="fa fa-phone-alt text-3xl text-secondary mr-4"></i>
                                            <div>
                                                <h4 className="text-lg font-bold">Telephone</h4>
                                                <Link to={'tel:+919539966866'} className="mb-0">(+91) 95 39 96 68 66</Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Map */}
                                    <div className="col-span-1">
                                        <div className="h-full overflow-hidden">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17992.001780370767!2d76.33373083080967!3d10.537784490011937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7e4ee9e05676d%3A0x2ecefd2d48cbea4!2sSt.%20Mary&#39;s%20Jacobite%20Syrian%20Soonoro%20Church!5e0!3m2!1sen!2sin!4v1734181164124!5m2!1sen!2sin"
                                                className="w-full rounded h-[400px]"
                                                allowfullscreen=""
                                                loading="lazy"
                                                referrerpolicy="no-referrer-when-downgrade"
                                            />


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LandingPageFooter />
        </div>
    )
}

export default Contact