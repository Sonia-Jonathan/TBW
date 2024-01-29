import React from 'react';

import "./Talents.css";
import BlocText from '../../components/blockText/BlocText';
import ImgTalents from '../../components/imgTalents/ImgTalents';

import talentDetails from '../../asset/json/talents/talentDetails.json'


function Talents(props) {
    const blocTexTitle = [
        {
            title: "Talents",
            subtitle: "Graine de génie.",
        }
    ]

    const dataSrc = talentDetails;
    
    return (
        <div className='bg-talents pb-5'>
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

            <div>
                <ImgTalents dataSrc={dataSrc}/>
            </div>

        </div>
    );
}

export default Talents;