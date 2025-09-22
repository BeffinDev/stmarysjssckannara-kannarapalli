import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../../assets/carousel/carousel02.jpg"


function HomePageBreadcrumb({ title, page, image }) {

    // const img = "https://content.jdmagicbox.com/comp/thrissur/g7/9999px487.x487.171203022651.t2g7/catalogue/st-mary-s-jacobite-syrian-orthodox-church-kannara-thrissur-churches-1hglq9faki.jpg"
    return (
        <div>
            <div
                className="container-fluid bg-breadcrumb position-relative"
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Opacity overlay */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the last value (0.5) for opacity
                        position: 'absolute',
                        zIndex: 1
                    }}
                ></div>

                <div
                    className="container text-center py-5 position-relative"
                    style={{
                        maxWidth: '900px',
                        zIndex: 2 // Ensure content is above the overlay
                    }}
                >
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">
                        {title}
                    </h4>
                    <ol
                        className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
                        data-wow-delay="0.3s"
                    >
                        <li className="breadcrumb-item">
                            <Link to={'/'} >Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to={"/"}>Pages</Link>
                        </li>
                        <li className="breadcrumb-item active text-primary">
                            {page}
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default HomePageBreadcrumb