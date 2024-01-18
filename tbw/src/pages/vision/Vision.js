import React from 'react';

import "./Vision.css";

import BlocText from '../../components/blockText/BlocText';

import clipsVideo from '../../asset/videos/clipsVideo.mp4'

function Vision(props) {
    const blocText = [
        {
            title: "Clips",
            subtitle: "A travers le son.",
            btn: {
                title: "Regarder",
                link: "vision/clips"
            }
        },
        {
            title: "Series",
            subtitle: "Du jamais vu.",
            btn: {
                title: "Regarder"
            }
        },
        {
            title: "Pictures",
            subtitle: "Du regard à l'imaginaire.",
            btn: {
                title: "Découvrir"
            }
        }
    ]

    const videos = [
        {
            video1: clipsVideo,

        },
        {
            video1: clipsVideo,

        },
        {
            video1: clipsVideo,

        },
    ]
    return (
        <div className='bg-vision'>
            {blocText && (
                <div>
                    {blocText.map((value, i) => (
                        // bg-img-${i}
                        <div key={i} className="d-flex   align-items-end">
                            {videos && (

                                <div className='bloc-video col-lg-12 m-auto'>
                                    {videos.map((val, j) => (
                                        <div >
                                            {j == i ? (<video className=" bg-video" key={i} src={val.video1} autoPlay loop muted />) : null}

                                        </div>

                                    ))}
                                </div>
                            )}
                            <div className='block-text col-lg-12 my-5'>
                                <BlocText className='text' key={i} title={value.title} subtitle={value.subtitle} btn={value.btn} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Vision;