import React from 'react'
import { Helmet } from 'react-helmet-async';

function SEO({ title, description }) {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta property="og:title" content={title}/>
            </Helmet>
        </div>
    )
}

export default SEO