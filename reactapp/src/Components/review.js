import React from 'react'

export default function ReviewSection(){
    return(
        <>
            <div className="img-show flex-row">
                <div className="img-show-header">
                    <h1 className="text-center">Customer Reviews:</h1>
                    <p className="text-center">Here's What Our Users Have to say: </p>
                </div>
                <div className='review-cards'>
                    <div className='rev-card' data-aos="fade-in">
                        <h1 className='text-center'>Excellent Service.</h1>
                        <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat mi quis id leo finibus pellentesque. Nunc senectus adipiscing ligula ligula nisi senectus facilisi bibendum. Suscipit porta semper natoque ultrices nisl urna et magnis hac. Eros sociosqu ut suspendisse fringilla habitasse. Facilisis auctor dolor gravida pulvinar platea.
                        </p>
                        <p className='text-center'>Michael Scott.</p>
                    </div>
                    <div className='rev-card' data-aos="fade-in">
                        <h1 className='text-center'>Excellent Service.</h1>
                        <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat mi quis id leo finibus pellentesque. Nunc senectus adipiscing ligula ligula nisi senectus facilisi bibendum. Suscipit porta semper natoque ultrices nisl urna et magnis hac. Eros sociosqu ut suspendisse fringilla habitasse. Facilisis auctor dolor gravida pulvinar platea.
                        </p>
                        <p className='text-center'>Jim Halpert.</p>
                    </div>
                    <div className='rev-card' data-aos="fade-in">
                        <h1 className='text-center'>Excellent Service.</h1>
                        <p>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat mi quis id leo finibus pellentesque. Nunc senectus adipiscing ligula ligula nisi senectus facilisi bibendum. Suscipit porta semper natoque ultrices nisl urna et magnis hac. Eros sociosqu ut suspendisse fringilla habitasse. Facilisis auctor dolor gravida pulvinar platea.
                        </p>
                        <p className='text-center'>Dwight Schrute.</p>
                    </div>
                </div>
                <a className='btn'>GET THE APP NOW</a>
            </div>
        </>
    )
}