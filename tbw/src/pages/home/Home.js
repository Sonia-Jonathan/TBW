import React from 'react';

import "./Home.css";

function Home(props) {
    return (
        <div className='text-center py-lg-3 bg-home'>
            <h1 className='white'>Racine 81</h1>
            <h2 className='white'> Vivre le moment présent.</h2>
            <a href='#' className='text-decoration-none blue'>En savoir plus</a>
        </div>
    );
}

export default Home;