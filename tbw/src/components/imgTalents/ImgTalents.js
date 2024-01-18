import React from 'react';

import "./ImgTalents.css";

function ImgTalents(props) {

    const dataSrc = props.dataSrc
    return (
        <div className='pb-5 d-flex justify-content-center col-lg-12'>
            {dataSrc && (
                <div className='text-center d-flex justify-content-around row-img col-lg-9'>
                    {dataSrc.map((value, i) => (
                        <div key={i} className='mt-5 col-lg-4'>
                            <img style={{cursor:'pointer'}} className='img-talents' src={value.src} alt={value.alt} />
                        </div>
                    ))}
                </div>
            )}
        </div>

    );
}

export default ImgTalents;