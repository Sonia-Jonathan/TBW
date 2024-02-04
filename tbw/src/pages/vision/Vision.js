import React, { useRef, useState } from 'react';

import "./Vision.css";

import BlocText from '../../components/blockText/BlocText';

import clipsVideo from '../../asset/videos/clipsVideo.mp4'

import CarouselFullscreen from '../../components/carousel/CarouselFullscreen';



function Vision(props) {

    const [clipsPlay, setClipsPlay] = useState(false);

    const videoRef = useRef(null);


    const clipsFunction = () => {
        // const currentTime = videoRef.current.currentTime;
        // videoRef.current.pause();
        // console.log("Current time:", videoRef);
        setClipsPlay(true);
    }

    const picturesFunction = () => {
        console.log("pictures")
    }

    const seriesFunction = () => {
        console.log("series")
    }

    const clips = [
        {
            title: "Clips",
            subtitle: "A travers le son.",
            btn: {
                title: "Regarder",
                link: "vision/clips",
                function: clipsFunction
            },
            video: [
                {
                    src: clipsVideo,
                    videoLinked: {
                        title: "",
                        subtitle: "",
                        src: ""
                    }

                }
            ]



        }
    ]

    const pictures = [
        {
            title: "Pictures",
            subtitle: "Du regard à l'imaginaire.",
            btn: {
                title: "Découvrir",
                function: picturesFunction
            },
            img: [
                {
                    src: "https://brunolarue.com/wp-content/uploads/2021/03/image-photographique-fait-au-quebec.jpg",
                    alt: ""

                },
                {
                    src: "https://img2.wallspic.com/crops/1/9/0/4091/4091-riviere-neige-congelation-glace-la_photographie_de_paysage-1920x1080.jpg",
                    alt: ""

                },
                {
                    src: "https://img-19.commentcamarche.net/wzKKufHO7dLH-WPFdXJHEmOmi7E=/1500x/smart/2d8c2b30aee345008ee860087f8bcdc9/ccmcms-commentcamarche/36120212.jpg",
                    alt: ""

                },
            ]

        }
    ]

    console.log("text", clips[0]);

    // const blocText = [
    //     {
    //         title: "Clips",
    //         subtitle: "A travers le son.",
    //         btn: {
    //             title: "Regarder",
    //             link: "vision/clips",
    //             function: clipsFunction
    //         }
    //     },

    //     {
    //         title: "Pictures",
    //         subtitle: "Du regard à l'imaginaire.",
    //         btn: {
    //             title: "Découvrir",
    //             function: picturesFunction
    //         }
    //     },
    //     {
    //         title: "Series",
    //         subtitle: "Du jamais vu.",
    //         btn: {
    //             title: "Regarder",
    //             function: seriesFunction
    //         }
    //     },
    // ];




    // const visionData = [
    //     {

    //         type: "video",
    //         video1: clipsVideo,

    //     },
    //     {
    //         type: "carousel",
    //         img: [
    //             {
    //                 src: "https://brunolarue.com/wp-content/uploads/2021/03/image-photographique-fait-au-quebec.jpg",
    //                 alt: ""

    //             },
    //             {
    //                 src: "https://img2.wallspic.com/crops/1/9/0/4091/4091-riviere-neige-congelation-glace-la_photographie_de_paysage-1920x1080.jpg",
    //                 alt: ""

    //             },
    //             {
    //                 src: "https://img-19.commentcamarche.net/wzKKufHO7dLH-WPFdXJHEmOmi7E=/1500x/smart/2d8c2b30aee345008ee860087f8bcdc9/ccmcms-commentcamarche/36120212.jpg",
    //                 alt: ""

    //             },
    //         ]
    //     },
    //     {
    //         type: "video",
    //         video1: clipsVideo,

    //     },
    // ]

    return (
        <div className='bg-vision'>
            {/* CLIPS */}
            {clips && (
                <div>
                    {clips.map((value, i) => (
                        <div key={i} >
                            <div className="d-flex align-items-end">
                                {value.video && (
                                    <div className='bloc-video col-lg-12 '>
                                        {value.video.map((val, j) => (
                                            <div key={j}>
                                                <video className=" bg-video" src={val.src} autoPlay loop muted />
                                            </div>
                                        ))}

                                    </div>
                                )}

                                <div className='block-text col-lg-12 my-5'>
                                    <BlocText key={i} title={value.title} subtitle={value.subtitle} btn={value.btn} />
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            )}

            {/* PICTURES */}
            {pictures && (
                <div>
                    {pictures.map((value, i) => (
                        <div key={i} >
                            <div className="d-flex align-items-end">
                                {value.img && (
                                    <div className='bloc-video col-lg-12 '>
                                        <div>
                                            {value.img && (<CarouselFullscreen img={value.img} />)}
                                        </div>
                                    </div>
                                )}

                                <div className='block-text col-lg-12 my-5'>
                                    <BlocText key={i} title={value.title} subtitle={value.subtitle} btn={value.btn} />
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            )}

             {/* CLIPS */}
             {clips && (
                <div>
                    {clips.map((value, i) => (
                        <div key={i} >
                            <div className="d-flex align-items-end">
                                {value.video && (
                                    <div className='bloc-video col-lg-12 '>
                                        {value.video.map((val, j) => (
                                            <div key={j}>
                                                <video className=" bg-video" src={val.src} autoPlay loop muted />
                                            </div>
                                        ))}

                                    </div>
                                )}

                                <div className='block-text col-lg-12 my-5'>
                                    <BlocText key={i} title={value.title} subtitle={value.subtitle} btn={value.btn} />
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
        // <div className='bg-vision'>
        //     {blocText && !clipsPlay && (
        //         <div>
        //             {blocText.map((value, i) => (
        //                 // bg-img-${i}
        //                 <div key={i} className="d-flex   align-items-end">
        //                     {visionData && (

        //                         <div className='bloc-video col-lg-12 '>
        //                             {visionData.map((val, j) => (
        //                                 <div key={j}>
        //                                     {j == i ?
        //                                         (
        //                                             <div>
        //                                                 {val.type == "video" ? (
        //                                                     <video ref={videoRef} className=" bg-video" key={j} src={val.video1} autoPlay loop muted />
        //                                                 ) : null}

        //                                                 {/* Carousel */}
        //                                                 {val.type == "carousel" ? (
        //                                                     <div>
        //                                                         {val.img && (<CarouselFullscreen img={val.img} />)}
        //                                                     </div>

        //                                                 ) : null}
        //                                             </div>
        //                                         )
        //                                         : null}

        //                                 </div>

        //                             ))}
        //                         </div>
        //                     )}
        //                     <div className='block-text col-lg-12 my-5'>
        //                         <BlocText className='text' key={i} title={value.title} subtitle={value.subtitle} btn={value.btn} />
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     )}


        //     {/* pop-up test*/}
        //     {
        //         clipsPlay && (
        //             <div className='bg-pop '>
        //                 <div className='bloc-video-pop col-lg-12'>
        //                     <video className=" bg-video" src={clipsVideo} autoPlay loop controls/>

        //                 </div>
        //                 <div>
        //                     <h1>hello</h1>
        //                 </div>
        //             </div>
        //         )
        //     } 

        // </div>

    );
}

export default Vision;