import React, { useEffect, useState } from 'react';

import "./Talents.css";
import BlocText from '../../components/blockText/BlocText';
import ImgTalents from '../../components/imgTalents/ImgTalents';

import talentDetails from '../../asset/json/talents/talentDetails.json'
import axios from 'axios';


function Talents(props) {
    const blocTexTitle = [
        {
            title: "Talents",
            subtitle: "Graine de génie.",
        }
    ]

    const [talents, setTalents] = useState("");


    useEffect(() => {
        axios.get('http://localhost:8000/api/talents')
            .then(response => {
                setTalents(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des talents:', error);
            });
    }, []);


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
                {talents && (
                    <div>
                        {talents.map((value, i) => (
                            <div key={i}>
                                <h2 className='text-center text-white'>{value.categorie}</h2>
                                {value.talents && (
                                    <div className='col-lg-10 pb-5 m-auto'>

                                        <ImgTalents dataSrc={value.talents} />

                                    </div>
                                )}
                            </div>
                        ))}

                    </div>

                )}
            </div>

        </div>

    );
}

export default Talents;