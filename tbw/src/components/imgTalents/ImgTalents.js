import React, { useState } from 'react';
import "./ImgTalents.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function ImgTalents(props) {
    const dataSrc = props.dataSrc;
    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleCardClick = (index) => {
        setFlippedIndex(index === flippedIndex ? null : index);
    };

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        arrows: false,
    };

    return (
        <div className='mt-5 col-lg-12'>
            {dataSrc && (
                <div>
                    <div className='talents-img text-center d-flex justify-content-around'>
                        {dataSrc.map((value, i) => (
                            <div key={i} className={`m-auto col-lg-12 flip-container ${flippedIndex === i ? 'flip' : ''}`}>
                                <div className="flipper">
                                    <div className="front col-lg-12">
                                        <img className='frontRadius' src={value.src} alt={value.src} />
                                    </div>
                                    <div className="back col-lg-12">
                                        <p className="col-lg-12">Nom : {value.nom}</p>
                                        <p className="col-lg-12">Prénom : {value.prenom}</p>
                                        <p className="col-lg-12">Description : {value.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='m-auto talents-slider col-8'>
                        <Slider {...settings}>
                            {dataSrc.map((value, i) => (
                                <div key={i} className='slider-image-container'>
                                    <div className={`slider-flipper ${flippedIndex === i ? 'flip' : ''}`}>
                                        <div className="slider-front" onClick={() => handleCardClick(i)}>
                                            <img className='slider-image' src={value.src} alt={value.nom} />
                                            <div className='bg-blur'></div>
                                            <button className='card-button' onClick={() => handleCardClick(i)} >
                                                En savoir plus ...
                                            </button>
                                        </div>
                                        <div className="back text-center slider-back" onClick={() => handleCardClick()}>
                                            <p className="col-12">Nom : {value.nom}</p>
                                            <p className="col-12">Prénom : {value.prenom}</p>
                                            <p className="col-12">Description : {value.description}</p>
                                        </div>
                                    </div>

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
