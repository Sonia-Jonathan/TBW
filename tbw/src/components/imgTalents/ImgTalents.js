import React from 'react';

import "./ImgTalents.css";

function ImgTalents(props) {

    const dataSrc = props.dataSrc
    
    return (
        <div className='pb-5 d-flex justify-content-center col-lg-12'>
            {dataSrc && (
                <div className='text-center d-flex justify-content-around row-img col-lg-9'>
                    {dataSrc.map((value, i) => (
                        <div key={i} className=" m-auto col-lg-12 flip-container">
                            <div className="flipper">
                                <div className="front col-lg-12">
                                    {/* Contenu avant (image) */}
                                    <img className='frontRadius'  src={value.src} alt="" />
                                </div>
                                <div className="back">
                                    <p>Contenu arrière</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
}

export default ImgTalents;