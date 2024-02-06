import React from 'react';

function VideosDetails(props) {

    const videosDetails = props.videosDetails
    console.log(videosDetails)

    return (
        <div className='bg-pop '>
            {videosDetails.map((value, i) => (
                <div key={i}>
                    <div className='bloc-video col-lg-12'>
                        <video className=" bg-video" src={value.src} autoPlay loop controls muted />

                    </div>

                    {value.videosLinked.map((val, j) => (
                        <div key={j}>
                            <div className='bloc-video col-lg-12'>
                                <video className=" bg-video" src={val.src} autoPlay loop controls muted />
                            </div>
                        </div>
                    ))}
                </div>
            ))}



        </div>
    );
}

export default VideosDetails;