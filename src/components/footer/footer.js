/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import './footer.css'

import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineInstagram}from 'react-icons/ai'
import {SiBuymeacoffee}from 'react-icons/si'
import {Link} from 'react-router-dom'

const Footer = ()=>{

    return(

        <footer className="footer-contener">

        <div className="footer">

        <div className="logo">
            <Link to="/">Frais</Link> 
        </div>

        <div className="footer-link-row-one">

            <p className="link-contener">
                <p>shop</p>
                <a href="#">candles</a>
                <a href="#">soaps</a>
                <a href="#">sale</a>
            </p>

            <p className="link-contener">
                <p>help</p>
                <a href="#">TERMS & CONDITIONS</a>
                <a href="#">PRIVACY POLICY </a>
                <a href="#">SHIPPING & RETURNS</a>
            </p>

            </div>

            <div className="footer-link-row-one">

                <p className="link-contener">
                    <p>FRAIS</p>
                    <a href="#">our story</a>
                    <a href="#">contact us</a>
                    <a href="#">faq</a>
                </p>

                <p className="link-contener">
                    <p>CONTACT US</p>
                    <span>+021156802324</span>
                    <span>amarahmed256@gmail.com</span>
                    <span className="sociel">
                <FaFacebookF className="icon-contact"></FaFacebookF>
                <AiOutlineInstagram className="icon-contact"></AiOutlineInstagram>
                <a href="https://www.buymeacoffee.com/amarahmed20?new=1"  target='_blank'>
                <SiBuymeacoffee className="icon-contact">
                </SiBuymeacoffee>
                </a>
                    </span>
                </p>

        </div>


        </div>


        <div className="copy-right">
        © 2022 by Frais. Proudly created with__ amar ahmed
        </div>

    </footer>
    )
}
export default Footer