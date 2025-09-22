import React from 'react'
import Gallery from '../../components/landing/gallery/Gallery'
import LandingPageNavbar from '../../components/navbar/LandingPageNavbar'
import HomePageBreadcrumb from '../../components/landing/breadcrumb/HomePageBreadcrumb'
import SEO from '../../components/seo/SEO'

function GalleryPage() {
    return (
        <div>
             <LandingPageNavbar />
             <SEO title={`Gallery | St. Mary's Jacobite Syrian Soonoro Church (Kannara Palli)`} description={`Browse the gallery of St. Mary's Jacobite Syrian Soonoro Church (Kannara Palli) to experience the church's events, celebrations, and community moments.`} />

             <HomePageBreadcrumb title={"Gallery"} page={"gallery"} />
            <Gallery />
        </div>
    )
}

export default GalleryPage