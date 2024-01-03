import React from 'react';

import "./Vision.css";

import BlocText from '../../components/blockText/BlocText';

function Vision(props) {
    const blocText = [
        {
            title: "Clips",
            subtitle: "A travers le son.",
            btn: {
                title: "Regarder"
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
    return (
        <div className='bg-vision'>
            {blocText && (
                <div>
                    {blocText.map((value, i) => (
                        <div className={`bg-img bg-img-${i} col-lg-12 d-flex justify-content-center align-items-end`}>
                            <div className='col-lg-3 my-5'>
                                <BlocText key={i} title={value.title} subtitle={value.subtitle} btn={value.btn} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Vision;