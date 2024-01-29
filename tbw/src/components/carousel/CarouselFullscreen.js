import React from 'react';

import Carousel from 'react-bootstrap/Carousel';


function CarouselFullscreen(props) {
    const img = props.img;

    return (
        <div>
            {
                img && (
                    <Carousel controls={false} indicators={false}>
                        {
                            img.map((value, i) => (
                                <Carousel.Item interval={800}>
                                    <img className='slide-img' src={value.src} alt={value.alt} />
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                )
            }

        </div>
    );
}

export default CarouselFullscreen;