import React from 'react';

import "./Sound.css";
import BlocText from '../../components/blockText/BlocText';

function Sound(props) {

    const blocTexTitle = [
        {
            title: "Beats",
            subtitle: "Productions musicales.",
        }
    ]

    const blocText = [
        {
            title: "Blend",
            subtitle: "Mélange d'influences.",
            btn: {
                title: "Écouter"
            }
        },
        {
            title: "Sons",
            subtitle: "Titres uniques.",
            btn: {
                title: "Écouter"
            }
        }
    ]

    return (
        <div className='bg-sound pt-2'>
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

            <div className='d-flex justify-content-center pb-5'>
                <div className='col-lg-10 text-center playlist'>Playlist</div>
            </div>

            {blocText && (
                <div className='mt-5 d-flex  justify-content-around py-5'>
                    {blocText.map((val, j) => (
                        <div key={j} className="col-lg-3 pb-5">
                            <div>
                                <BlocText key={j} title={val.title} subtitle={val.subtitle} btn={val.btn}/>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            
           

        </div>
    );
}

export default Sound;