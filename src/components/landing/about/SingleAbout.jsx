import React from 'react'
import HomePageBreadcrumb from '../breadcrumb/HomePageBreadcrumb'

function SingleAbout({props}) {
    console.log(props,'props');
    
    const { content, title, page } = props
    return (
        <div>
            <HomePageBreadcrumb title={title} page={page} />
            <div className="container mx-auto py-8 space-y-8">
                {content?.map((item, index) => (
                    <div className='mt-4' >

                        <span  >
                            {item?.image &&
                                <img
                                    src={item?.image}
                                    alt={item?.title}
                                    className="w-1/3 md:h-96  rounded-lg shadow-md object-cover object-top m-4"
                                    style={{ float: index % 2 !== 0 ? "right" : "left" }}
                                />
                            }
                            {/* <div className='min-h-80'> */}
                            <div>

                                <h2 className="md:text-2xl font-bold mb-2">{item?.title}</h2>
                                <p className="text-gray-700">{item?.text}</p>
                            </div>
                        </span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SingleAbout