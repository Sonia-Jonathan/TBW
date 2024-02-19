import React from 'react';
import "./Sound.css";
import BlocText from '../../components/blockText/BlocText';

function Sound(props) {
    const blocTexTitle = [
        {
            title: "Beats",
            subtitle: "Productions musicales.",
        }
    ];

    return (
        <div className='bg-sound'>
            {blocTexTitle && (
                <div className='blocTitle'>
                    {blocTexTitle.map((value, i) => (
                        <div key={i} className="col-lg-12 d-flex justify-content-center">
                            <div>
                                <BlocText key={i} title={value.title} subtitle={value.subtitle} />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
                <div className='d-flex justify-content-center' style={{ width: '100%' }}>
                    <iframe
                        className='col-lg-9 playlist'
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https://soundcloud.com/user-994437473/sets/miles-morales-playlist?si=1c21fb318c564be7a5aebd25ca49367e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Sound;


 {/* {blocText && (
                <div className='bloc-text d-flex  justify-content-around py-5'>
                    {blocText.map((val, j) => (
                        <div key={j} className="col-lg-3 pb-5">
                            <div>
                                <BlocText key={j} title={val.title} subtitle={val.subtitle} btn={val.btn}/>
                            </div>
                        </div>
                    ))}
                </div>
            )}
             */}