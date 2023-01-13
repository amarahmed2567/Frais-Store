import React from "react";
import './social.css'
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineInstagram}from 'react-icons/ai'
import {SiBuymeacoffee}from 'react-icons/si'

const Social = () => {
    return (
                <div className="fast-contact">
                <FaFacebookF className="icon-contact"></FaFacebookF>
                <AiOutlineInstagram className="icon-contact"></AiOutlineInstagram>
                <a href="https://www.buymeacoffee.com/amarahmed20?new=1"  target='_blank' rel="noreferrer">
                <SiBuymeacoffee className="icon-contact">
                </SiBuymeacoffee>
                </a>
            </div>
    )
}

export default Social
