import React from 'react';

import "./VideosDetails.css";

import { FaArrowLeft } from "react-icons/fa6";


function VideosDetails(props) {

    const videosDetails = props.videosDetails
    const play = props.play
    const setPlay = props.setPlay

    const goBack = () => {
        setPlay(false)
    }

    // const SEL = "bloc-video";
    // const SECTION_SEL = `.${SEL}`;



    return (
        <div className='video-details'>
            <button onClick={goBack} className='arrow-back' >
                <FaArrowLeft size="30px" />

            </button>

            {videosDetails.map((value, i) => (
                <div key={i}>

                    <section className='bloc-video col-lg-12'>
                        <div className="video-wrapper" key={i}>
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
                                <div className="video-wrapper" key={j}>
                                    <iframe
                                        allowFullScreen
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