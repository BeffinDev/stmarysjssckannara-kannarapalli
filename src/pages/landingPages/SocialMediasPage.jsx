import React from 'react'
import SocialMedias from '../../components/landing/socialMedias/SocialMedias'
import LandingPageNavbar from '../../components/navbar/LandingPageNavbar'
import HomePageBreadcrumb from '../../components/landing/breadcrumb/HomePageBreadcrumb'
import SEO from '../../components/seo/SEO'

function SocialMediasPage() {
    return (
        <div>
            <LandingPageNavbar />
            <SEO title={`Follow Us on Social Media | St. Mary's Jacobite Syrian Soonoro Church (Kannara Palli)`} description={`Stay connected with St. Mary's Jacobite Syrian Soonoro Church (Kannara Palli) on social media. Follow us for updates, events, and community news!`} />

            <HomePageBreadcrumb title={"Social Medias"} page={"medias"} />
            <SocialMedias />
        </div>
    )
}

export default SocialMediasPage