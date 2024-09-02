import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoSection from '../../components/videoSection/VideoSection';

import "./Home.css";


function Home(props) {
    const [play, setPlay] = useState(false);
    const [article1, setArticle1] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/article1')
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