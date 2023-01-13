import React from "react";
import './contact.css'
import { motion } from "framer-motion";

function Contact() {
    return (

        <motion.section

        //switsh rout anmion
        initial={{opacity:0,x:"-100%"}}
        animate={{opacity:1,x:"0"}}
        exit={{opacity:0,x:"-100%"}}
        transition={{
            type:"tween",
            duration:1,
            ease:"linear"
        }}
        className="contact-contener"
        >





            <div className="get-in-thuch">
                <img className="get-in-thuch-img" src="https://static.wixstatic.com/media/c837a6_1e5ac650ac814a5d908f21bd78e529ae~mv2.jpg/v1/fill/w_513,h_629,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_1e5ac650ac814a5d908f21bd78e529ae~mv2.jpg" alt="get-in-thuch"/>
                <div className="get-in-thuch-text">
                    <h1>GET IN TOUCH</h1>

                    <div className="tb-all">

                        <div className="tb">
                            <p className="header-p">Opening Hours</p>
                            <div className="tb-contenes">
                                <p>Mon - Fri: 8am - 8pm</p>
                                <p>Saturday: 9am - 7pm</p>
                                <p>Sunday: 9am - 8pm</p>
                            </div>
                            </div>

                            <div className="tb">
                            <p className="header-p">Address</p>
                            <div className="tb-contenes">
                                <p>500 Terry Francois Street</p>
                                <p>San Francisco, CA 94158</p>
                                <p>123-456-7890</p>
                            </div>
                            </div>


                        </div>
                        <span className="link-email">info@mysite.com</span>

                    </div>

                </div>





                <div className="contact-section">

                    <div className="contact-info-inputs">

                        <div className="contact-info">

                            <h1>LET'S STAY CONNECTED</h1>
                            <p>If you have questions or special inquiries, you're welcome to contact me or fill out this form</p>
                        
                        </div>

                        <div className="contact-input">

                            <div className="input-one">
                                <input type='text' placeholder="first name"></input>
                                <input type='text' placeholder="last name"></input>
                            </div>

                            <div className="input-towe">
                                <input type="email" placeholder="email"></input>
                                <input type="tel" placeholder="phone"></input>
                            </div>
                            <textarea></textarea>
                            <button className="btn">subimt</button>
                        </div>
                    </div>


                    <div className="contact-img"></div>

                </div>


                    <div className="end-img"></div>

        </motion.section>

    )
}

export default Contact