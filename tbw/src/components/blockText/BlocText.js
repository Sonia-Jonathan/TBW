import React from 'react';
import Button from 'react-bootstrap/Button';

import "./BlocText.css";


function BlocText(props) {
    const title = props.title
    const subtitle = props.subtitle
    const link = props.link
    const btn = props.btn

    return (
        <div className='bloc-text text-center'>
            <h1 className='white'>{title}</h1>
            <h2 className='white'>{subtitle}</h2>
            {link && (<a href={link.href} className='text-decoration-none blue'>{link.title}</a>)}
            {btn && (
                <div className='mt-2'>
                    <a href={btn.link}><Button variant="outline-light" className='btn px-4'>{btn.title}</Button></a>
                </div>
            )}
            
        </div>
    );
}

export default BlocText;