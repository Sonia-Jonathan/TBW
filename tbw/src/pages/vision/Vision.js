import React, { useState } from 'react';

import "./Vision.css";

import BlocText from '../../components/blockText/BlocText';

import clipsVideo from '../../asset/videos/clipsVideo.mp4'

import CarouselFullscreen from '../../components/carousel/CarouselFullscreen';
import VideosDetails from '../../components/videosDetails/VideosDetails';



function Vision(props) {

    const [clipsPlay, setClipsPlay] = useState(false);
    const [videosDetails, setVideosDetails] = useState("");


    // const videoRef = useRef(null);


    const clipsFunction = () => {
        // const currentTime = videoRef.current.currentTime;
        // videoRef.current.pause();
        // console.log("Current time:", videoRef);
        setClipsPlay(true);
        setVideosDetails(clips[0].video)
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }

    // const picturesFunction = () => {
    //     console.log("pictures")
    // }

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
                    videosLinked: [
                        {
                            title: "",
                            subtitle: "",
                            src: clipsVideo
                        },
                        {
                            title: "",
                            subtitle: "",
                            src: clipsVideo
                        }
                    ]

                },

            ]



        }
    ]

    // const pictures = [
    //     {
    //         title: "Pictures",
    //         subtitle: "Du regard à l'imaginaire.",
    //         btn: {
    //             title: "Découvrir",
    //         },
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

    //     }
    // ]

    return (
        <div className='bg-vision'>


            {/* CLIPS */}
            {clips && !clipsPlay && (
                <div>
                    {clips.map((value, i) => (
                        <div key={i} className="d-flex align-items-end">

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
                    ))}
                </div>
            )}

            {/* PICTURES */}
            {/* {pictures && !clipsPlay && (
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
            )} */}

            {/* CLIPS */}
            {clips && !clipsPlay && (
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

            {/* VIDEO LINKED*/}
            {clipsPlay && videosDetails && (
                <div className='bg-pop'>
                    <VideosDetails videosDetails={videosDetails} clipsPlay={clipsPlay} setClipsPlay={setClipsPlay} />
                </div>
            )}
        </div>



    );
}

export default Vision;