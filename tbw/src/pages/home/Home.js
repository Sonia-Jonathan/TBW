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
    const [citation2, setCitation2] = useState([]);

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

        axios.get(`${urlApi}/citations/2`)
            .then(response => {
                let citationData = response.data;
                setCitation2(citationData);
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
                </section>
            )}

            {citation2 && !play && (
                <section>
                    <Citation citationDetails={citation2}/>
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