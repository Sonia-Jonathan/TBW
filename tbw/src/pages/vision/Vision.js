import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import VideoSection from '../../components/videoSection/VideoSection';

import "./Vision.css";

function Vision(props) {
  const urlApi = process.env.REACT_APP_URL_API;

  const [play, setPlay] = useState(false);
  const [clips, setClips] = useState([]);
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState("");
  const [videosDetails, setVideosDetails] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${urlApi}/clipsVideo`)
      .then(response => {
        setClips(response.data[0]);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données de la vidéo:', error);
      });
  }, []);

  useEffect(() => {
    axios.get(`${urlApi}/seriesVideo`)
      .then(response => {
        setSeries(response.data[0]);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données de la vidéo:', error);
      });
  }, []);

  const clipsFunction = () => {
    document.documentElement.style.scrollSnapType = 'none'; // Désactive le scroll-snap
    setPlay(true);
    setVideosDetails(clips[0].video);
    setPage(clips[0].page);
    navigate(`/vision/${clips[0].page}/details`);
    setTimeout(() => {
      document.documentElement.style.scrollSnapType = 'y mandatory'; // Réactiver le scroll-snap
    }, 500);
  };

  const seriesFunction = () => {
    document.documentElement.style.scrollSnapType = 'none';  // Désactive le scroll-snap
    setPlay(true);
    setVideosDetails(clips[0].video);
    setPage(series[0].page);
    navigate(`/vision/${series[0].page}/details`);
    setTimeout(() => {
      document.documentElement.style.scrollSnapType = 'y mandatory'; // Réactiver le scroll-snap
    }, 500);
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
