import React from 'react';
import "./Sound.css";
import BlocText from '../../components/blockText/BlocText';

function Sound(props) {
    const blocTexTitle = [
        {
            title: "Music",
            subtitle: "For the soul.",
        }
    ];

    return (
        <div className='bg-sound'>
            {blocTexTitle && (
                <div className='blocTitle'>
                    {blocTexTitle.map((value, i) => (
                        <div key={i} className="col-lg-12 d-flex justify-content-center">
                            <div className='mt-lg-4'>
                                <BlocText key={i} title={value.title} subtitle={value.subtitle} />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
                <div className='sound-container'>
                    <div className='sound-wrapper'>
                        <iframe
                            width="100%"
                            height="100%"
                            scrolling="no"
                            frameBorder="no"
                            allow="autoplay"
                            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1858673151&amp;color=%23050406&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sound;