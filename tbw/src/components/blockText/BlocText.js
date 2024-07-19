import React from 'react';
import Button from 'react-bootstrap/Button';

import "./BlocText.css";


function BlocText(props) {
    const title = props.title
    const subtitle = props.subtitle
    const link = props.link
    const btn = props.btn
    const btnTitle = props.btnTitle
    const btnFunction = props.btnFunction

    const handleClick = () => {
        if (btnFunction) {
            btnFunction();
        }else if(btn.function){
            console.log("btn.function", btn.function)
            btn.function();
        }
    };


    return (
        <div className='bloc-text text-center'>
            <h1 className='white'>{title}</h1>
            <h2 className='white'>{subtitle}</h2>
            {link && (
                <a href={link}><Button variant="outline-light" className='btn px-4'>{btnTitle}</Button></a>
                // <a href={link.href} className='text-decoration-none blue'>{link.title}</a>
            )}
            {btnFunction || btn && (
                <div className='mt-2'>
                    <Button onClick={handleClick}variant="outline-light" className='btn px-4'>{btnTitle}</Button>
                </div>
            )}
            
            
        </div>
    );
}

export default BlocText;