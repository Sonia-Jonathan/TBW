import React from 'react';
import './Citation.css';
import fde from '../../asset/imgTest/fdetbw.png';

function Citation({ citationDetails }) {
    console.log("citationDetails", citationDetails);
    return (
        <div>
            {citationDetails.map((value, i) => (
                <div key={i} className=' my-5 tweet-section'>
                    {/* <img src={value.bg.src} alt="Background" /> */}
                    <img className='bg' src={fde} alt="Background" />

                    <div className=' row  d-flex justify-content-center  '>
                        <div className=' mt-5 p-5 col-lg-10 text-citation citation' >
                            <div className='' >
                                {value.publication_date}
                            </div>
                            <div className='citation-bar'>
                                <hr></hr>
                            </div>
                            <div className='mt-3 '>

                                <p>
                                    {value.citation}
                                </p>

                            </div>
                        </div>
                        
                        <div className='  my-5  col-lg-12 d-flex justify-content-center media'>
                            <div key={i} className='text-white d-flex justify-content-center citation-media'>
                                {value.video && (
                                    <iframe
                                        className='sproutvideo-player '
                                        width={448}
                                        height={250}
                                        src={value.video?.src.split('?')[0]}
                                        allowFullScreen>
                                    </iframe>
                                )}
                                {value.img && (
                                    <img src={value.img.src} alt={value.img.alt} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Citation;