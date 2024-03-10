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
                    src: "",
                    videosLinked: [
                        {
                            title: "",
                            subtitle: "",
                            src: "https://videos.sproutvideo.com/embed/ea90d7b91b1debc363/bb4d263853600cb6 "
                        },
                        {
                            title: "",
                            subtitle: "",
                            src: "https://videos.sproutvideo.com/embed/ea90d7b91b1debc363/bb4d263853600cb6 "
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
                                        // <div key={j} className="video-wrapper">
                                        //     {/* allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; mute; background" allowfullscreen="allowfullscreen" referrerpolicy="no-referrer-when-downgrade" */}
                                        //     <iframe 
                                        //         className="bg-video" 
                                        //         src={val.src} 
                                        //         title="Video Player"
                                        //     ></iframe>
                                        // </div>

                                        // <div style={{position:'relative',height:0,paddingBottom:'56.25%'}}>
                                        //     <iframe className='sproutvideo-player' src='https://videos.sproutvideo.com/embed/ea90d7b91b1debc363/bb4d263853600cb6?autoPlay=true&amp;showControls=false&amp;loop=true' style={{position:'absolute',width:'100%',height:'100%',left:0,top:0}} frameborder='0' allowfullscreen referrerpolicy='no-referrer-when-downgrade' title='Video Player'>
                                        //     </iframe></div>

                                        <div className="video-wrapper">
                                            <iframe
                                            className="bg-video" 
                                                allow='autoplay; fullscreen'
                                                allowFullScreen
                                                src="https://player.vimeo.com/video/921746965?autoPlay=1&amp;loop=1&amp;muted=1"
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

            {clips && !clipsPlay && (
                <section className='bg-vision-section'>
                    {clips.map((value, i) => (
                        <div key={i} className="d-flex align-items-end">
                            {value.video && (
                                <div className='bloc-video col-lg-12 '>
                                    {value.video.map((val, j) => (
                                        // <div key={j} className="video-wrapper">
                                        //     <iframe 
                                        //         className="bg-video" 
                                        //         src={val.src} 
                                        //         title="Video Player"
                                        //     ></iframe>
                                        // </div>
                                        <div></div>

                                        // <div style={{ position: 'relative', height: 0, paddingBottom: '56.25%' }}>
                                        //     <iframe className='sproutvideo-player' src='https://videos.sproutvideo.com/embed/ea90d7b91b1debc363/bb4d263853600cb6?autoPlay=true&amp;showControls=false&amp;loop=true' style={{ position: 'absolute', width: '100%', height: '100%', left: 0, top: 0 }} frameborder='0' allowfullscreen referrerpolicy='no-referrer-when-downgrade' title='Video Player'>
                                        //     </iframe></div>

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

            {clipsPlay && videosDetails && (
                <div className='bg-pop'>
                    <VideosDetails videosDetails={videosDetails} clipsPlay={clipsPlay} setClipsPlay={setClipsPlay} />
                </div>
            )}
        </div>
    );
}

export default Vision;
