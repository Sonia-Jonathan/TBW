import React from 'react';

import "./ImgTalents.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function ImgTalents(props) {

    const dataSrc = props.dataSrc

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',

    };

    return (

        <div className='mt-5 col-lg-12 '>
            {dataSrc && (
                <div>
                    <div className='talents-img text-center d-flex justify-content-around '>
                        {dataSrc.map((value, i) => (
                            <div key={i} className=" m-auto col-lg-12 flip-container ">
                                <div className="flipper ">
                                    <div className="front col-lg-12">
                                        {/* Contenu avant (image) */}
                                        <img className='frontRadius' src={value.src} alt={value.src} />
                                    </div>
                                    <div className="back col-lg-12 ">
                                        <p className=" col-lg-12 ">Nom : {value.nom}</p>
                                        <p className=" col-lg-12 ">Prénom : {value.prenom}</p>
                                        <p className=" col-lg-12 ">Description :  {value.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className='m-auto talents-slider col-8'>
                        <Slider {...settings}>
                            {dataSrc.map((value, i) => (
                                <div key={i} className='slider-image-container col-12'>
                                    <img className='col-12 slider-image' src={value.src} alt={value.nom} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

            )}


        </div>


    );
}

export default ImgTalents;