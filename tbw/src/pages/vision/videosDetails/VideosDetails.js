import React, { useEffect, useState } from 'react';

import "./VideosDetails.css";
import { useParams, useNavigate } from 'react-router-dom';

import { FaArrowLeft } from "react-icons/fa6";
import axios from 'axios';

function VideosDetails(props) {

    const { page } = useParams();
    const [videosDetails, setVideosDetails] = useState([]);
    const navigate = useNavigate();
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    console.log("pageeee", page);


    useEffect(() => {


        axios.get(`http://localhost:8000/api/${page}Video`)
            .then(response => {
                const videos = response.data[0][0].video;
                console.log("details", videos);

                if (videos.length > 0) {

                    const newvideos = [...videos];

                    if (newvideos[0].src.includes('?background=true&autoPlay=true&loop=true')) {
                        newvideos[0].src = newvideos[0].src.replace('?background=true&autoPlay=true&loop=true', ''); //?autoPlay=true&volume=0&showControls=true
                        setVideosDetails(newvideos);
                    }

                }


            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données de la vidéo:', error);
            });


    }, []);

    const goBack = () => {
        navigate(-1);
    }





    return (
        <div className='video-details'>
            <button onClick={goBack} className='arrow-back' >
                <FaArrowLeft size="30px" />

            </button>


            {videosDetails.map((value, i) => (
                <div key={i}>

                    <section >
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