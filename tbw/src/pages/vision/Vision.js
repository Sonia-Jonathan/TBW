import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Vision.css";
import BlocText from '../../components/blockText/BlocText';
import VideoSection from '../../components/videoSection/VideoSection';
import VideosDetails from './videosDetails/VideosDetails';

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
        console.log("clips", response.data[0]);
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
        console.log("data", response.data);
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
              title={value.title}
              subtitle={value.subtitle}
              btnTitle={value.btnTitle}
              btnFunction={seriesFunction}
            />
          ))}
        </section>
      )}

      {/* {play && videosDetails && (
        <div className='bg-pop'>
          <VideosDetails videosDetails={videosDetails} play={play} setPlay={setPlay} />
        </div>
      )} */}
    </div>
  );
}

export default Vision;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import "./Vision.css";
// import BlocText from '../../components/blockText/BlocText';
// import VideosDetails from '../../components/videoSection/VideoSection';


// function Vision(props) {
//     const [play, setPlay] = useState(false);
//     const [clips, setClips] = useState([]);
//     const [series, setSeries] = useState([]);
//     const [page, setPage] = useState("");
//     const [videosDetails, setVideosDetails] = useState("");
//     const navigate = useNavigate();
//     window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
//     useEffect(() => {
//         axios.get('http://localhost:8000/api/clipsVideo')
//         .then(response => {
//             console.log("clips",response.data[0])
//             setClips(response.data[0]);
//          })
//         .catch(error => {
//           console.error('Erreur lors de la récupération des données de la vidéo:', error);
//         });
//     }, []);

//     useEffect(() => {
//         axios.get('http://localhost:8000/api/seriesVideo')
//         .then(response => {
//             setSeries(response.data[0]);
//             console.log("data", response.data);
//         })
//         .catch(error => {
//           console.error('Erreur lors de la récupération des données de la vidéo:', error);
//         });
//     }, []);

//     const clipsFunction = () => {
//         setPlay(true);
//         setVideosDetails(clips[0].video);
//         setPage(clips[0].page);
//         navigate(`/vision/${clips[0].page}/details`);
//     }

//     const seriesFunction = () => {
//         setPlay(true);
//         setVideosDetails(clips[0].video);
//         setPage(series[0].page);
//         navigate(`/vision/${series[0].page}/details`);
//     }

//     return (
//         <div className='bg-vision'>
//             {clips && !play && (
//                 <section className='bg-vision-section'>
//                     {clips.map((value, i) => (
//                         <div key={i} className="d-flex align-items-end">
//                             {value.video && (
//                                 <div className=' bloc-video col-lg-12 '>
//                                     {value.video.map((val, j) => (

//                                         <div className="video-wrapper" key={j}>
//                                             <iframe
//                                                 allowFullScreen
//                                                 className="bg-video"
//                                                 src={val.src}
//                                                 title="Remonter OG"
//                                             ></iframe>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                             <div className='block-text col-lg-12 my-5'>
//                                 <BlocText key={i} title={value.title} subtitle={value.subtitle} btnTitle={value.btnTitle} btnFunction={clipsFunction}/>
//                             </div>
//                         </div>
//                     ))}
//                 </section>
//             )}

//             {series && !play && (
//                 <section className='bg-vision-section'>
//                     {series.map((value, i) => (
//                         <div key={i} className="d-flex align-items-end">
//                             {value.video && (
//                                 <div className='bloc-video col-lg-12 '>
//                                     {value.video.map((val, j) => (

//                                         <div className="video-wrapper" key={j}>
//                                             <iframe
//                                                 allowFullScreen
//                                                 className="bg-video"
//                                                 src={val.src}
//                                                 title="Remonter OG"
//                                             ></iframe>
//                                         </div>

//                                     ))}
//                                 </div>
//                             )}
//                             <div className='block-text col-lg-12 my-5'>
//                                 <BlocText key={i} title={value.title} subtitle={value.subtitle} btnTitle={value.btnTitle} btnFunction={seriesFunction} />
//                             </div>
//                         </div>
//                     ))}
//                 </section>
//             )}

//             {play && videosDetails && (
//                 <div className='bg-pop'>
//                     <VideosDetails videosDetails={videosDetails} play={play} setPlay={setPlay} />
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Vision;
