import React from 'react';

import "./Talents.css";
import BlocText from '../../components/blockText/BlocText';


function Talents(props) {
    const blocTexTitle = [
        {
            title: "Talents",
            subtitle: "Graine de génie.",
        }
    ]
    return (
        <div className='bg-talents'>
           {blocTexTitle && (
                <div>
                    {blocTexTitle.map((value, i) => (
                        <div key={i} className="col-lg-12 d-flex justify-content-center">
                            <div>
                                <BlocText key={i} title={value.title} subtitle={value.subtitle} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Talents;