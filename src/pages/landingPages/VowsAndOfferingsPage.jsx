import React from 'react'
import VowsAndOfferings from '../../components/landing/VowsAndOfferings/VowsAndOfferings'
import LandingPageNavbar from '../../components/navbar/LandingPageNavbar'
import HomePageBreadcrumb from '../../components/landing/breadcrumb/HomePageBreadcrumb'

function VowsAndOfferingsPage() {
  return (
    <div>
         <div>
            <LandingPageNavbar />
            <HomePageBreadcrumb title={"Vows & Offerings"} page={"vows & offerings"} />
            <VowsAndOfferings />
        </div>
    </div>
  )
}

export default VowsAndOfferingsPage