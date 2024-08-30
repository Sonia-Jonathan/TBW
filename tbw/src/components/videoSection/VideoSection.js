import React, { useEffect, useRef, useState } from 'react';
import BlocText from '../blockText/BlocText';

import "./VideoSection.css";

function VideoSection({ videoSrc, title, subtitle, btnTitle, btnFunction, link }) {
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
              backgroundImage: 'url(https://i.pinimg.com/564x/ba/33/62/ba33621d4c8c854facf27cd767de65ad.jpg)', 
              backgroundSize:'cover',
              height: '100vh',
              width: '100%',
            }}
          // style={{ backgroundImage: `url(${imageSrc})` }}
          ></div>
        </div>
      ) : (
        <div className="black-screen"></div>
      )}

      {(title || subtitle) && (
        <div className='block-text col-lg-12 my-lg-5'>
          <BlocText title={title} subtitle={subtitle} btnTitle={btnTitle} btnFunction={btnFunction} link={link} />
        </div>
      )}

    </div>
  );
};

export default VideoSection;
