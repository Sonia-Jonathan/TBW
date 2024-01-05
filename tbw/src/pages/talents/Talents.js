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

            <div className='mt-5 pb-5 d-flex justify-content-center col-lg-12'>
                <div className='d-flex  justify-content-around col-lg-9'>
                    <div className='col-lg-3'>
                        <img className='img-talents' src='https://img.freepik.com/photos-premium/portrait-jeune-femme-mexicaine_79390-494.jpg' alt='' />
                    </div>

                    <div className='col-lg-3'>
                        <img className='img-talents' src='https://us.123rf.com/450wm/nuevoimg/nuevoimg2309/nuevoimg230902059/212246214-portrait-d-un-beau-jeune-homme-avec-barbe-et-moustache-mode-beaut%C3%A9-pour-hommes.jpg?ver=6' alt='' />
                    </div>

                    <div className='col-lg-3'>
                        <img className='img-talents' src='https://egeriephotographies.com/wp-content/uploads/2020/04/Femme.jpg' alt='' />
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Talents;