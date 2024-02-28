import React, { useState } from 'react';
import "./Vision.css";
import BlocText from '../../components/blockText/BlocText';
import CarouselFullscreen from '../../components/carousel/CarouselFullscreen';
import VideosDetails from '../../components/videosDetails/VideosDetails';

function Vision(props) {
    const [clipsPlay, setClipsPlay] = useState(false);
    const [videosDetails, setVideosDetails] = useState("");

    const clipsFunction = () => {
        setClipsPlay(true);
        setVideosDetails(clips[0].video);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
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
                    src: "https://videos.sproutvideo.com/embed/0690d7b51b11e3cf8f/8a35ce9e56e23e75?autoPlay=true&showControls=false&loop=true",
                    videosLinked: [
                        {
                            title: "",
                            subtitle: "",
                            src: "https://videos.sproutvideo.com/embed/0690d7b51b11e3cf8f/8a35ce9e56e23e75?autoPlay=true&showControls=false&loop=true"
                        },
                        {
                            title: "",
                            subtitle: "",
                            src: "https://videos.sproutvideo.com/embed/0690d7b51b11e3cf8f/8a35ce9e56e23e75?autoPlay=true&showControls=false&loop=true"
                        }
                    ]
                }
            ]
        }
    ];

    return (
        <div className='bg-vision'>
            {clips && !clipsPlay && (
                <section className='bg-vision-section'>
                    {clips.map((value, i) => (
                        <div key={i} className="d-flex align-items-end">
                            {value.video && (
                                <div className='bloc-video col-lg-12 '>
                                    {value.video.map((val, j) => (
                                        <div key={j}>
                                            <iframe className=" bg-video" src={val.src} title="Video Player" width="640" height="360" frameborder="0" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
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

            {clips && !clipsPlay && (
                <section className='bg-vision-section'>
                    {clips.map((value, i) => (
                        <div key={i}>
                            <div className="d-flex align-items-end">
                                {value.video && (
                                    <div className='bloc-video col-lg-12 '>
                                        {value.video.map((val, j) => (
                                            <div key={j}>
                                                <iframe className=" bg-video" src={val.src} title="Video Player" width="640" height="360" frameborder="0" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                </section>
            )}

            {clipsPlay && videosDetails && (
                <div className='bg-pop'>
                    <VideosDetails videosDetails={videosDetails} clipsPlay={clipsPlay} setClipsPlay={setClipsPlay} />
                </div>
            )}
        </div>
    );
}

export default Vision;
