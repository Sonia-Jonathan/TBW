import React from 'react';

import "./Footer.css";
import { FaRegCopyright } from "react-icons/fa6";
import { RxDotFilled } from "react-icons/rx";


function Footer(props) {
    return (
        <div className='py-3 footer text-center'>
            <FaRegCopyright /> 2023 <RxDotFilled /> TBW
        </div>
    );
}

export default Footer;