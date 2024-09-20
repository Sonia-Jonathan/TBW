import React, { useEffect, useRef, useState } from 'react';
import BlocText from '../blockText/BlocText';

import "./VideoSection.css";

function VideoSection({ videoSrc, imgVideo, title, subtitle, btnTitle, btnFunction, link }) {
  const videoRef = useRef(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVideoVisible(true);
          } else {
            setIsVideoVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div ref={videoRef} className='video-section'>
      {isVideoVisible ? (
        <div className="video-wrapper" >
          <iframe
            allowFullScreen
            className="bg-video"
            src={videoSrc}
            title={title}
          ></iframe>

          <div
            className="image-wrapper"
            style={{
              backgroundImage: `url(${imgVideo.src})`, 
              backgroundSize:'cover',
              height: '100vh',
              width: '100%',
            }}
          ></div>
        </div>
      ) : (
        <div className="black-screen"></div>
      )}

      {(title || subtitle) && (
        <div className='br block-text col-lg-12 my-lg-5'>
          <BlocText title={title} subtitle={subtitle} btnTitle={btnTitle} btnFunction={btnFunction} link={link} />
        </div>
      )}

    </div>
  );
};

export default VideoSection;
