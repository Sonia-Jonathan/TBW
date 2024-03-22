import React, { useState } from 'react';
import "./Home.css";
import BlocText from '../../components/blockText/BlocText';
import CarouselFullscreen from '../../components/carousel/CarouselFullscreen';
import VideosDetails from '../../components/videosDetails/VideosDetails';


function Home(props) {
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
                    src: "https://videos.sproutvideo.com/embed/4490d4b11a1be1cbcd/0b4273a5c3f5f705?autoPlay=true&background=true&loop=true",
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
                    src: "https://videos.sproutvideo.com/embed/4490d4b11a1be1cbcd/0b4273a5c3f5f705?autoPlay=true&background=true&loop=true",
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

export default Home;






// import React from "react";

// import "./Home.css";
// import BlocText from "../../components/blockText/BlocText";

// function Home(props) {
//     const blocText = [
//         {
//             title: "Racine 81",
//             subtitle: "Vivre le moment présent.",
//             link: {
//                 title: "En savoir plus",
//                 href: "#"
//             }
//         },
//     ];
//     return (
//         <div className=" bg-home">
//             {blocText && (
//                 <div className="text-center">
//                     {blocText.map((value,i) => (
//                         <BlocText key={i} title={value.title} subtitle={value.subtitle} link={value.link} />
//                     ))}
//                 </div>
//             )
//             }
//         </div>
//     );
// }

// export default Home;
