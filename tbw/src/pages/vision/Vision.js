import React from 'react';

import "./Vision.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BlocText from '../../components/blockText/BlocText';

import clipsVideo from '../../asset/videos/clipsVideo.mp4'

import Slider from "react-slick";


function Vision(props) {
    const blocText = [
        {
            title: "Clips",
            subtitle: "A travers le son.",
            btn: {
                title: "Regarder",
                link: "vision/clips"
            }
        },
        {
            title: "Series",
            subtitle: "Du jamais vu.",
            btn: {
                title: "Regarder"
            }
        },
        {
            title: "Pictures",
            subtitle: "Du regard à l'imaginaire.",
            btn: {
                title: "Découvrir"
            }
        }
    ]

    const visionData = [
        {
            type: "video",
            video1: clipsVideo,

        },
        {
            type: "carousel",
            video1: clipsVideo,

        },
        {
            type: "video",
            video1: clipsVideo,

        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };


    return (
        <div className='bg-vision'>
            {blocText && (
                <div>
                    {blocText.map((value, i) => (
                        // bg-img-${i}
                        <div key={i} className="d-flex   align-items-end">
                            {visionData && (

                                <div className='bloc-video col-lg-12 m-auto'>
                                    {visionData.map((val, j) => (
                                        <div >
                                            {j == i ?
                                                (
                                                    <div>
                                                        {val.type == "video" ? (
                                                            <video className=" bg-video" key={j} src={val.video1} autoPlay loop muted />
                                                        ) : null}

                                                        {/* Carousel */}
                                                        {val.type == "carousel" ? (
                                                                <Slider className='slick' {...settings}>
                                                                    <div>
                                                                        <img height={703} width={1704} src="https://brunolarue.com/wp-content/uploads/2021/03/image-photographique-fait-au-quebec.jpg" alt=""/>
                                                                    </div>
                                                                    <div>
                                                                        <h3>2</h3>
                                                                    </div>
                                                                    <div>
                                                                        <h3>3</h3>
                                                                    </div>
                                                                    <div>
                                                                        <h3>4</h3>
                                                                    </div>
                                                                    <div>
                                                                        <h3>5</h3>
                                                                    </div>
                                                                    <div>
                                                                        <h3>6</h3>
                                                                    </div>
                                                                </Slider>
                                                        ) : null}
                                                    </div>
                                                )
                                                : null}

                                        </div>

                                    ))}
                                </div>
                            )}
                            <div className='block-text col-lg-12 my-5'>
                                <BlocText className='text' key={i} title={value.title} subtitle={value.subtitle} btn={value.btn} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Vision;