import React from 'react'
import Administration from '../../components/landing/administration/Administration'
import SEO from '../../components/seo/SEO'

function AdministrationPage() {
  return (
    <div>
      <SEO title={`Administration | St. Mary's Jacobite Syrian Soonoro Church (Kannara Palli)`} description={`Learn more about the administration and leadership of St. Mary's Jacobite Syrian Soonoro Church (Kannara Palli). Meet our dedicated team guiding the church community.`} />

      <Administration />
    </div>
  )
}

export default AdministrationPage