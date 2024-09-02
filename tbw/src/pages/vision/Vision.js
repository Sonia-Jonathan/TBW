import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import VideoSection from '../../components/videoSection/VideoSection';

import "./Vision.css";

function Vision(props) {
  const [play, setPlay] = useState(false);
  const [clips, setClips] = useState([]);
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState("");
  const [videosDetails, setVideosDetails] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    axios.get('http://localhost:8000/api/clipsVideo')
      .then(response => {
        setClips(response.data[0]);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données de la vidéo:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:8000/api/seriesVideo')
      .then(response => {
        setSeries(response.data[0]);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données de la vidéo:', error);
      });
  }, []);

  const clipsFunction = () => {
    setPlay(true);
    setVideosDetails(clips[0].video);
    setPage(clips[0].page);
    navigate(`/vision/${clips[0].page}/details`);
  };

  const seriesFunction = () => {
    setPlay(true);
    setVideosDetails(clips[0].video);
    setPage(series[0].page);
    navigate(`/vision/${series[0].page}/details`);
  };

  return (
    <div className='bg-vision'>
      {clips && !play && (
        <section>
          {clips.map((value, i) => (
            <VideoSection
              key={i}
              videoSrc={value.video[0]?.src}
              imgVideo={value.video[0]?.img_video}
              title={value.title}
              subtitle={value.subtitle}
              btnTitle={value.btnTitle}
              btnFunction={clipsFunction}
            />
          ))}
        </section>
      )}

      {series && !play && (
        <section >
          {series.map((value, i) => (
            <VideoSection
              key={i}
              videoSrc={value.video[0]?.src}
              imgVideo={value.video[0]?.img_video}
              title={value.title}
              subtitle={value.subtitle}
              btnTitle={value.btnTitle}
              btnFunction={seriesFunction}
            />
          ))}
        </section>
      )}
    </div>
  );
}

export default Vision;
