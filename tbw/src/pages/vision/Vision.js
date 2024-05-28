import React, { useState } from 'react';
import "./Vision.css";
import BlocText from '../../components/blockText/BlocText';
// import CarouselFullscreen from '../../components/carousel/CarouselFullscreen';
import VideosDetails from '../../components/videosDetails/VideosDetails';


function Vision(props) {
    const [play, setPlay] = useState(false);
    const [videosDetails, setVideosDetails] = useState("");

    const clipsFunction = () => {
        setPlay(true);
        setVideosDetails(clips[0].video);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }

    const clips = [
        {
            title: "Clips",
            subtitle: "A travers le son.",
            btn: {
                title: "Regarder",
                function: clipsFunction
            },
            video: [
                {
                    // ?autoPlay=true&background=true&loop=true
                    src: "https://videos.sproutvideo.com/embed/7990dabc1d12eac4f0/e7be646ddc319ddd?autoPlay=true&amp;background=true&amp;loop=true",
                    videosLinked: [
                        {
                            title: "",
                            subtitle: "",
                            src: "https://videos.sproutvideo.com/embed/7990dabc1d12eac4f0/e7be646ddc319ddd?showControls=true "
                        },
                        {
                            title: "",
                            subtitle: "",
                            src: "https://videos.sproutvideo.com/embed/7990dabc1d12eac4f0/e7be646ddc319ddd "
                        }
                    ]
                }
            ]
        }
    ];

    const series = [
        {
            title: "Series",
            subtitle: "Du jamais vu.",
            btn: {
                title: "Regarder",
                function: clipsFunction
            },
            video: [
                {
                    // ?autoPlay=true&background=true&loop=true
                    src: "https://videos.sproutvideo.com/embed/7990dabc1d12eac4f0/e7be646ddc319ddd?autoPlay=true&amp;background=true&amp;loop=true",
                    videosLinked: [
                        {
                            title: "",
                            subtitle: "",
                            src: "https://videos.sproutvideo.com/embed/4490d4b11a1be1cbcd/0b4273a5c3f5f705 "
                        },
                        {
                            title: "",
                            subtitle: "",
                            src: "https://videos.sproutvideo.com/embed/4490d4b11a1be1cbcd/0b4273a5c3f5f705 "
                        }
                    ]
                }
            ]
        }
    ];



    return (
        <div className='bg-vision'>
            {clips && !play && (
                <section className='bg-vision-section'>
                    {clips.map((value, i) => (
                        <div key={i} className="d-flex align-items-end">
                            {value.video && (
                                <div className=' bloc-video col-lg-12 '>
                                    {value.video.map((val, j) => (

                                        <div className="video-wrapper" key={j}>
                                            <iframe
                                                allowFullScreen
                                                className="bg-video"
                                                src={val.src}
                                                title="Remonter OG"
                                            ></iframe>
                                        </div>



                                    ))}
                                </div>
                            )}
                            <div className='block-text col-lg-12 my-5'>
                                <BlocText key={i} title={value.title} subtitle={value.subtitle} btn={value.btn} />
                            </div>
                        </div>
                    ))}
                </section>
            )}

            {series && !play && (
                <section className='bg-vision-section'>
                    {series.map((value, i) => (
                        <div key={i} className="d-flex align-items-end">
                            {value.video && (
                                <div className='bloc-video col-lg-12 '>
                                    {value.video.map((val, j) => (

                                        <div className="video-wrapper" key={j}>
                                            <iframe
                                                allowFullScreen
                                                className="bg-video"
                                                src={val.src}
                                                title="Remonter OG"
                                            ></iframe>
                                        </div>

                                    ))}
                                </div>
                            )}
                            <div className='block-text col-lg-12 my-5'>
                                <BlocText key={i} title={value.title} subtitle={value.subtitle} btn={value.btn} />
                            </div>
                        </div>
                    ))}
                </section>
            )}

            {play && videosDetails && (
                <div className='bg-pop'>
                    <VideosDetails videosDetails={videosDetails} play={play} setPlay={setPlay} />
                </div>
            )}
        </div>
    );
}

export default Vision;
