import React from 'react';

import "./ImgTalents.css";

function ImgTalents(props) {

    const dataSrc = props.dataSrc
    return (
        <div className='mt-5 pb-5 d-flex justify-content-center col-lg-12'>
            {dataSrc && (
                <div className='d-flex  justify-content-around col-lg-9'>
                    {dataSrc.map((value, i) => (
                        <div key={i} className='col-lg-3'>
                            <img className='img-talents' src={value.src} alt={value.alt} />
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
}

export default ImgTalents;