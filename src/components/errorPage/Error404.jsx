import React from 'react'

function Error404() {
    return (
        <div>
            <div class="bg-light py-5">
                <div class="container py-5 text-center">
                    <div class="flex justify-center">
                        <div class="lg:w-1/2 wow fadeInUp" data-wow-delay="0.3s">
                            <i class="bi bi-exclamation-triangle text-primary text-6xl"></i>
                            <h1 class="text-6xl font-bold">404</h1>
                            <h1 class="mb-4 text-2xl font-semibold">Page Not Found</h1>
                            <p class="mb-4 text-lg">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                            <a class="bg-blue-500 text-white py-3 px-6 rounded-full inline-block" href="/">Go Back To Home</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Error404