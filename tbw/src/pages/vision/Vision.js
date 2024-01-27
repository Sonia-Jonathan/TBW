import React from 'react';

import "./Vision.css";

import BlocText from '../../components/blockText/BlocText';

import clipsVideo from '../../asset/videos/clipsVideo.mp4'

import Carousel from 'react-bootstrap/Carousel';



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
        cssEase: "linear",
    };


    return (
        <div className='bg-vision'>
            {blocText && (
                <div>
                    {blocText.map((value, i) => (
                        // bg-img-${i}
                        <div key={i} className="d-flex   align-items-end">
                            {visionData && (

                                <div className='bloc-video col-lg-12 '>
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
                                                            <div>
                                                                <Carousel controls={false} indicators={false}>
                                                                    <Carousel.Item interval={800}>
                                                                        <img className='slide-img' src="https://brunolarue.com/wp-content/uploads/2021/03/image-photographique-fait-au-quebec.jpg" alt="" />
                                                                    </Carousel.Item>
                                                                    <Carousel.Item interval={800}>
                                                                        <img className='slide-img' src="https://img2.wallspic.com/crops/1/9/0/4091/4091-riviere-neige-congelation-glace-la_photographie_de_paysage-1920x1080.jpg" alt="" />
                                                                    </Carousel.Item>
                                                                    <Carousel.Item interval={800}>
                                                                        <img className='slide-img' src="https://img-19.commentcamarche.net/wzKKufHO7dLH-WPFdXJHEmOmi7E=/1500x/smart/2d8c2b30aee345008ee860087f8bcdc9/ccmcms-commentcamarche/36120212.jpg" alt="" />
                                                                    </Carousel.Item>
                                                                </Carousel>
                                                            </div>

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