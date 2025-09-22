import React from 'react'
import Home from '../../components/landing/home/Home'
import SEO from '../../components/seo/SEO'

function HomePage() {
    return (
        <div>
            <SEO title={'kannarapalli'} description={'St. Marys Jacobite Syrian Soonoro Church, Kannara'} />
            <Home />
        </div>
    )
}

export default HomePage