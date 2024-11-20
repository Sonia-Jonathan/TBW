import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoSection from '../../components/videoSection/VideoSection';
import fde from '../../asset/imgTest/fdetbw.png';
import "./Home.css";
import Citation from '../../components/citation/Citation';


function Home(props) {
    const urlApi = process.env.REACT_APP_URL_API;

    const [play, setPlay] = useState(false);
    const [citation, setCitation] = useState([]);

    const [article1, setArticle1] = useState([]);

    useEffect(() => {

        axios.get(`${urlApi}/citations/1`)
            .then(response => {
                let citationData = response.data;
                setCitation(citationData);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données de la vidéo:', error);
            });
    }, []);

    useEffect(() => {

        axios.get(`${urlApi}/article1`)
            .then(response => {
                let articleData = response.data;
                setArticle1(articleData);
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
                            imgVideo={value.video?.img_video}
                            title={value.title}
                            subtitle={value.subtitle}
                            btnTitle={value.btnTitle}
                            link={value.link}
                        />
                    ))}
                </section>
            )}
            {citation && !play && (
                <section>
                    <Citation citationDetails={citation}/>
                    {/* <div className=' my-5 tweet-section'>
                        <img src={fde} alt="Background" />

                        <div className=' row  d-flex justify-content-center  '>

                            <div className=' mt-5 p-5 col-lg-10 text-citation citation' >
                                <div className='' >
                                    20/01/2024
                                </div>
                                <div className='citation-bar'>
                                    <hr></hr>
                                </div>
                                <div className='mt-3 '>

                                    <p>
                                        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad. "

                                    </p>

                                </div>
                            </div> */}
                    {/*<div className='  my-5  col-lg-12 d-flex justify-content-center media'>
                                {article1.map((value, i) => (
                                    <div key={i} className='text-white d-flex justify-content-center citation-video'>
                                        <iframe className='sproutvideo-player ' width={450} height={250} src={value.video?.src.split('?')[0]} allowFullScreen></iframe>
                                    </div>
                                ))}
                                <div className='text-white'>image</div> 
                            </div>*/}

                    {/* </div>
                    </div>*/}
                </section>
            )}
            {article1 && !play && (
                <section >
                    {article1.map((value, i) => (
                        <VideoSection
                            key={i}
                            videoSrc={value.video?.src}
                            imgVideo={value.video?.img_video}
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
                            imgVideo={value.video?.img_video}

                            title={value.title}
                            subtitle={value.subtitle}
                            btnTitle={value.btnTitle}
                            link={value.link}
                        />
                    ))}
                </section>
            )}
        </div>
    );
}

export default Home;