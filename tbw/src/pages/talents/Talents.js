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

            <div className='mt-5 '>
                <h2 className='text-center text-white'>Catégories/ Thèmes</h2>
                <div className='col-lg-10 pb-5 m-auto'>
                    <ImgTalents dataSrc={dataSrc} />

                </div>
            </div>
            <div className='mt-5 '>
                <h2 className='text-center text-white'>Catégories/ Thèmes</h2>
                <div className='col-lg-10 pb-5 m-auto'>
                    <ImgTalents dataSrc={dataSrc} />

                </div>
            </div>
            <div className='mt-5 '>
                <h2 className='text-center text-white'>Catégories/ Thèmes</h2>
                <div className='col-lg-10 pb-5 m-auto'>
                    <ImgTalents dataSrc={dataSrc} />

                </div>
            </div>

        </div>

    );
}

export default Talents;