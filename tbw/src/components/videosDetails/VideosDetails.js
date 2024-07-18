import React, { useEffect, useState } from 'react';

import "./VideosDetails.css";

import { FaArrowLeft } from "react-icons/fa6";


function VideosDetails(props) {

    const videosDetails = props.videosDetails
    //const [videosDetails, setVideosDetails] = useState(props.videosDetails);
    const play = props.play
    const setPlay = props.setPlay

    const firstVideo = videosDetails[0];
    console.log("detail2", firstVideo);
    if (firstVideo.src.includes('?background=true&autoPlay=true&loop=true')) {
        firstVideo.src = firstVideo.src.replace('?background=true&autoPlay=true&loop=true', '');
    }




    const goBack = () => {
        setPlay(false)
    }

    // const SEL = "bloc-video";
    // const SECTION_SEL = `.${SEL}`;

    // useEffect(() => {

    //     if (videosDetails.length > 0) {
    //         setVideosDetails(videosDetails => {
    //             const newVideosDetails = [...videosDetails];
    //             const firstVideo = newVideosDetails[0];
    //             if (firstVideo.src.includes('autoPlay=true&background=true&loop=true')) {
    //                 firstVideo.src = firstVideo.src.replace('autoPlay=true&background=true&loop=true', 'showControls=true&bigPlayButton=true');
    //                 return newVideosDetails;
    //             }
    //             return videosDetails;
    //         });
    //     }

    // }, [videosDetails]);



    return (
        <div className='video-details'>

            <button onClick={goBack} className='arrow-back' >
                <FaArrowLeft size="30px" />

            </button>

            {videosDetails.map((value, i) => (
                <div key={i}>

                    <section >{/*className='bloc-video col-lg-12' */}
                        <div key={i} className="">
                            <iframe
                                allowFullScreen
                                className="bg-video"
                                src={value.src}
                                title="Remonter OG"
                            ></iframe>
                        </div>
                    </section>

                    {value.videosLinked.map((val, j) => (
                        <div key={j}>
                            <section className='bloc-video col-lg-12'>
                                <div className="" key={j}>
                                    <iframe
                                        allowFullScreen
                                        frameBorder={0}
                                        className="bg-video"
                                        src={val.src}
                                        title="Remonter OG"
                                    ></iframe>
                                </div>
                            </section>
                        </div>
                    ))}
                </div>
            ))}

        </div>
    );
}

export default VideosDetails;