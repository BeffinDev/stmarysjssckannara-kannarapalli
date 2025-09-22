import React from 'react'
import AboutMotherMary from '../../components/abouts/AboutMotherMary'
import LandingPageNavbar from '../../components/navbar/LandingPageNavbar'
import LandingPageFooter from '../../components/footer/LandingPageFooter'
import HomePageBreadcrumb from '../../components/landing/breadcrumb/HomePageBreadcrumb'
import SingleAbout from '../../components/landing/about/SingleAbout'
import { aboutCatholicaBava, motherMaryData } from '../../contents/aboutContent'
import { useLocation } from 'react-router-dom'
import SEO from '../../components/seo/SEO'

function SingleAboutPage() {

    const location = useLocation();
    const { pathname } = location;
    console.log(pathname, 'pathname');
    const getPageName = (pathname) => {
        switch (pathname) {
            case "/about/about-mother-mary":
                return motherMaryData;
            case "/about/about-bava-thirumeni":
                return aboutCatholicaBava;

            default:
                return {}; // Fallback for undefined routes
        }
    };

    // console.log(getPageName(pathname));
    const about = getPageName(pathname)

    return (
        <div>
            <LandingPageNavbar />
            {/* <HomePageBreadcrumb title={"Vows & Offerings"} page={"vows & offerings"} />
            <div className='my-5'>

                <AboutMotherMary />
            </div> */}
            <SEO title={`${about.title} | St. Mary's Jacobite Syrian Soonoro Church (Kannara Palli)`} description={`Learn more about ${about.title}.`} />

            <SingleAbout props={getPageName(pathname)} />
            <LandingPageFooter />
        </div>
    )
}

export default SingleAboutPage