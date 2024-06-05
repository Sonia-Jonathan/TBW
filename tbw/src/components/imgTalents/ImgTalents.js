import React from 'react';

import "./ImgTalents.css";

function ImgTalents(props) {

    const dataSrc = props.dataSrc

    return (
        
        <div className='mt-5 col-lg-12 '>
            {dataSrc && (
                <div className='text-center d-flex justify-content-around '>
                    {dataSrc.map((value, i) => (
                        <div key={i} className=" m-auto col-lg-12 flip-container ">
                            <div className="flipper ">
                                <div className="front col-lg-12">
                                    {/* Contenu avant (image) */}
                                    <img className='frontRadius' src={value.src} alt={value.src} />
                                </div>
                                <div className="back col-lg-12 ">
                                    <p className=" col-lg-12 ">Nom : {value.nom}</p>
                                    <p className=" col-lg-12 ">Prénom : {value.prenom}</p>
                                    <p className=" col-lg-12 ">Description :  {value.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            )}
        </div>


    );
}

export default ImgTalents;