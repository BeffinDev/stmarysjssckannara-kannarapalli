import React from 'react'
import Contact from '../../components/landing/contact/Contact'
import SEO from '../../components/seo/SEO'

function ContactPage() {
  return (
    <div>
      <SEO title={`Contact | St. Mary's Jacobite Syrian Soonoro Church (Kannara Palli)`} description={`Contact St. Mary's Jacobite Syrian Soonoro Church (Kannara Palli) for service times, events, and more. We’d love to hear from you!`} />

      <Contact />
    </div>
  )
}

export default ContactPage