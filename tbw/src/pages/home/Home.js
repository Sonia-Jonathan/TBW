import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Home.css";
import BlocText from '../../components/blockText/BlocText';
import VideosDetails from '../../components/videosDetails/VideosDetails';


function Home(props) {
    const [play, setPlay] = useState(false);
    const [clips, setClips] = useState([]);
    const [series, setSeries] = useState([]);
    const [videosDetails, setVideosDetails] = useState("");


    useEffect(() => {
        axios.get('http://localhost:8000/api/clipsVideo')
        .then(response => {
            
            setClips(response.data[0]);

              console.log("clips",clips)
         })
        .catch(error => {
          console.error('Erreur lors de la récupération des données de la vidéo:', error);
        });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8000/api/seriesVideo')
        .then(response => {
            setSeries(response.data[0]);
            console.log("data", response.data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données de la vidéo:', error);
        });
    }, []);

    const clipsFunction = () => {
        setPlay(true);
        setVideosDetails(clips[0].video);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }

    // const functionsMap = {
    //     clipsFunction
    // };

    // const clips = [
    //     {
    //         title: "Clips",
    //         subtitle: "A travers le son.",
    //         btn: {
    //             title: "Regarder",
    //             function: clipsFunction
    //         },
    //         video: [
    //             {
    //                 // ?autoPlay=true&background=true&loop=true
    //                 src: "https://videos.sproutvideo.com/embed/4490d4b11a1be1cbcd/0b4273a5c3f5f705?autoPlay=true&background=true&loop=true",
    //                 videosLinked: [
    //                     {
    //                         title: "",
    //                         subtitle: "",
    //                         src: "https://videos.sproutvideo.com/embed/4490d4b11a1be1cbcd/0b4273a5c3f5f705 "
    //                     },
    //                     {
    //                         title: "",
    //                         subtitle: "",
    //                         src: "https://videos.sproutvideo.com/embed/4490d4b11a1be1cbcd/0b4273a5c3f5f705 "
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // ];

    // const series = [
    //     {
    //         title: "Series",
    //         subtitle: "Du jamais vu.",
    //         btn: {
    //             title: "Regarder",
    //             function: clipsFunction
    //         },
    //         video: [
    //             {
    //                 // ?autoPlay=true&background=true&loop=true
    //                 src: "https://videos.sproutvideo.com/embed/4490d4b11a1be1cbcd/0b4273a5c3f5f705?autoPlay=true&background=true&loop=true",
    //                 videosLinked: [
    //                     {
    //                         title: "",
    //                         subtitle: "",
    //                         src: "https://videos.sproutvideo.com/embed/4490d4b11a1be1cbcd/0b4273a5c3f5f705 "
    //                     },
    //                     {
    //                         title: "",
    //                         subtitle: "",
    //                         src: "https://videos.sproutvideo.com/embed/4490d4b11a1be1cbcd/0b4273a5c3f5f705 "
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // ];



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
                                <BlocText key={i} title={value.title} subtitle={value.subtitle} btnTitle={value.btnTitle} btnFunction={clipsFunction}/>
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
                                <BlocText key={i} title={value.title} subtitle={value.subtitle} btnTitle={value.btnTitle} btnFunction={clipsFunction} />
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
