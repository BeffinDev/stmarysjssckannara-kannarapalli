import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';

const KurishuPalliSection = ({ services = [], backgroundImage = '' }) => {
    // Safely filter services
    const leftServices = services.filter((service) => service?.alignment === "left") || [];
    const rightServices = services.filter((service) => service?.alignment === "right") || [];

    // Render nothing if no services
    if (leftServices.length === 0 && rightServices.length === 0) {
        return null;
    }

    return (
        // <div className="md:flex justify-between  gap-8 items-center  relative overflow-hidden md:p-10 sm:p-2" >
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 items-center  relative overflow-hidden md:p-10 sm:p-2 xs:p-2" >
            {/* Left Side Services */}
            <div className="space-y-6 relative z-10 ">
                {leftServices.map((service, index) => (
                    <ServiceCard
                        key={index}
                        service={service}
                        direction="left"
                        delay={index * 0.2}
                    />
                ))}
            </div>


            <div></div>

            {/* Center Background Image */}
            {backgroundImage && (
                <div
                    className="hidden lg:block absolute inset-0 w-full h-full bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
            )}

            {/* Right Side Services */}
            <div className="space-y-6 relative z-10 ">
                {rightServices.map((service, index) => (
                    <ServiceCard
                        key={index}
                        service={service}
                        direction="right"
                        delay={index * 0.2}
                    />
                ))}
            </div>
        </div>
    );
};

const ServiceCard = ({ service, direction, delay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [isInView, controls]);

    const variants = {
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -100 : 100,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                delay: delay,
                ease: "easeOut"
            }
        }
    };

    // Fallback for missing service data
    if (!service) return null;

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className={`
        bg-white rounded-lg shadow-lg flex items-center 
        ${direction === 'left' ? 'flex-row' : 'lg:flex-row-reverse'}
        space-x-4 w-full
      `}
        >
            {/* Image */}
            {service.image && (
                <div className="flex-shrink-0">
                    <img
                        src={service.image}
                        alt={service.title || 'Service'}
                        className="w-32 h-40 object-cover rounded-lg"
                    />
                </div>
            )}

            {/* Content */}
            {service.title && (
                <div className={`
          flex-grow p-2 
          ${direction === 'left' ? 'text-left' : 'lg:text-right'}
        `}>
                    {/* <p className="text-gray-600 text-base">{service.title}</p>
          {service.description && (
            <p className="text-sm text-gray-500 mt-2">{service.description}</p>
          )} */}
                    <p className="text-gray-600 text-sm text-balance ">{service.title}</p>
                </div>
            )}
        </motion.div>
    );
};

// PropTypes for type checking
KurishuPalliSection.propTypes = {
    services: PropTypes.arrayOf(
        PropTypes.shape({
            alignment: PropTypes.string,
            image: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string
        })
    ),
    backgroundImage: PropTypes.string
};

ServiceCard.propTypes = {
    service: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string
    }),
    direction: PropTypes.oneOf(['left', 'right']),
    delay: PropTypes.number
};

export default KurishuPalliSection;