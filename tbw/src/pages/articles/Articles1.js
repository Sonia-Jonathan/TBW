import React from 'react';

import './Article.css'
import BlocText from '../../components/blockText/BlocText';

function Articles1(props) {
  return (
    <div className='bg-article'>
      <div>
        <BlocText title="TITRE" subtitle="Sous-titre" />
      </div>


      <div className='col-8 col-lg-8 m-auto mt-4'>
        <div className='text-center'>
          <img className='col-12 col-lg-12' src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' />
        </div>

        <div className='my-5'>
          <h1>Titre</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className='text-center'>
          <img className='col-12 col-lg-12 ' src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' />
        </div>

        <div className='my-5'>
          <h1>Titre</h1>
          <p className='text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className='text-center pb-5'>
          <img className='col-12 col-lg-12' src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' />
        </div>
      </div>

    </div>
  );
}

export default Articles1;