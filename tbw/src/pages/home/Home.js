import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Home.css";
import BlocText from '../../components/blockText/BlocText';
import VideosDetails from '../../components/videoSection/VideoSection';
import VideoSection from '../../components/videoSection/VideoSection';


function Home(props) {
    const [play, setPlay] = useState(false);
    const [article1, setArticle1] = useState([]);
    const [series, setSeries] = useState([]);
    const [videosDetails, setVideosDetails] = useState("");


    useEffect(() => {
        axios.get('http://localhost:8000/api/article1')
            .then(response => {
                let articleData = response.data;
                console.log("data", articleData);

                setArticle1(articleData);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données de la vidéo:', error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:8000/api/seriesVideo')
            .then(response => {
                setSeries(response.data[0]);
                // console.log("data", response.data[0]);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données de la vidéo:', error);
            });
    }, []);

    



    return (
        <div className='bg-vision'>
            {article1 && !play && (
                <section >
                    {article1.map((value, i) => (
                        <VideoSection
                            key={i}
                            videoSrc={value.video?.src}
                            title={value.title}
                            subtitle={value.subtitle}
                            btnTitle={value.btnTitle}
                            link={value.link}
                        />
                    ))}
                </section>
            )}

            {article1 && !play && (
                <section >
                    {article1.map((value, i) => (
                        <VideoSection
                            key={i}
                            videoSrc={value.video?.src}
                            title={value.title}
                            subtitle={value.subtitle}
                            btnTitle={value.btnTitle}
                            link={value.link}
                        />
                    ))}
                </section>
            )}

            {/* {article1 && !play && (
                <section className='bg-vision-section'>
                    {article1.map((value, i) => (
                        <div key={i} className="d-flex align-items-end">
                            {value.video && (
                                <div className=' bloc-video col-lg-12 '>


                                    <div className="video-wrapper">
                                        <iframe
                                            allowFullScreen
                                            className="bg-video"
                                            src={value.video.src}
                                            title="Remonter OG"
                                        ></iframe>
                                    </div>
                                </div>
                            )}
                            <div className='block-text col-lg-12 my-5'>
                                <BlocText key={i} title={value.title} subtitle={value.subtitle} btnTitle={value.btnTitle} link={value.link} />
                            </div>
                        </div>
                    ))}
                </section>
            )}

             */}
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
