import React from 'react'
import About from '../../components/landing/about/About'
import SEO from '../../components/seo/SEO'

function AboutPage() {
    return (
        <div>
            <SEO title={`About | St. Mary's Jacobite Syrian Soonoro Church (Kannara Palli)`} description={`Learn more about St. Mary's Jacobite Syrian Soonoro Church (Kannara Palli).  We are a warm, welcoming community dedicated to faith and service in Kannara.`} />
            <About />
        </div>
    )
}

export default AboutPage