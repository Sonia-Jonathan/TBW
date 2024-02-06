import React from 'react';

import "./VideosDetails.css";

import { FaArrowLeft } from "react-icons/fa6";

function VideosDetails(props) {

    const videosDetails = props.videosDetails
    const clipsPlay = props.clipsPlay
    const setClipsPlay = props.setClipsPlay

    const goBack = () => {
        setClipsPlay(false)
    }



    return (
        <div>
            <button onClick={goBack} className='arrow-back' >
                <FaArrowLeft size="30px" />

            </button>
            {videosDetails.map((value, i) => (
                <div key={i}>

                    <div className='bloc-video col-lg-12'>
                        <video className=" bg-video" src={value.src} autoPlay loop controls muted />

                    </div>

                    {value.videosLinked.map((val, j) => (
                        <div key={j}>
                            <div className='bloc-video col-lg-12'>
                                <video className=" bg-video" src={val.src} autoPlay loop controls muted />
                            </div>
                        </div>
                    ))}
                </div>
            ))}



        </div>
    );
}

export default VideosDetails;