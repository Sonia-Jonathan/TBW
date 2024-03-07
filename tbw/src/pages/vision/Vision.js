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
                    src: "https://videos.sproutvideo.com/embed/d390d7b61510e7c65a/c083544d59773c49?autoPlay=true&amp;showControls=false&amp;loop=true",
                    videosLinked: [
                        {
                            title: "",
                            subtitle: "",
                            src: "https://videos.sproutvideo.com/embed/d390d7b61510e7c65a/c083544d59773c49?autoPlay=true&amp;showControls=false&amp;loop=true"
                        },
                        {
                            title: "",
                            subtitle: "",
                            src: "https://videos.sproutvideo.com/embed/d390d7b61510e7c65a/c083544d59773c49?autoPlay=true&amp;showControls=false&amp;loop=true"
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
                                        <div key={j} className="video-wrapper">
                                            <iframe className="bg-video" src={val.src} title="Video Player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                                            <div key={j} className="video-wrapper">
                                                <iframe className="bg-video" src={val.src} title="Video Player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
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
