/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import './home.css';
    import {Link} from 'react-router-dom'
// Import Swiper styles
import 'swiper/css';
import Slid from "./slideSope";

import { motion } from "framer-motion";

const Home = ()=>{
    return(
        <motion.header 

        initial={{opacity:0,x:"-100%"}}
        animate={{opacity:1,x:"0"}}
        exit={{opacity:0,x:"-100%"}}
        transition={{
            type:"tween",
            duration:1,
            ease:"linear"
        }}
        
        className="contener-home">
            <div className="home">
            <img src="https://static.wixstatic.com/media/84770f_b98c8b47c5b047efb18ac4d17f50462a~mv2.jpg/v1/crop/x_675,y_0,w_6150,h_4237/fill/w_1270,h_875,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pexels-vlada-karpovich-6755753-122.jpg" alt="شمع"></img>
            <div className="header-text">
                <h4> HANDCRAFTED ORGANIC SOAPS & CANDLES</h4>
                <h1>JUST LIKE NATURE<br/> INTENDED</h1>
                <Link to='shop'>
                <button className="btn">
                    shop now
                </button>
                </Link>
            </div>
            </div>
                {/* ==============================
                        Start SHOP OUR FAVORITES
                    ===============================
                */}
            <section className="our-home">
                <div className="header-text-home">
                    <h1>SHOP OUR FAVORITES</h1>
                </div>

                <div className="our-home-contener">

                        <div className="first-box">

                                <div className="first-box-text">
                                    <h2>NATURE’S ESSENCE SCENTED CANDLES</h2>
                                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                                    <button className="btn trans">shop cendles</button>
                                </div>

                                
                                <div className="our-home-img">
                                    <img src="https://static.wixstatic.com/media/84770f_cb0fb3c6238146209f8c82ddcdeef77af000.jpg/v1/fill/w_490,h_687,al_c,q_80,usm_0.33_1.00_0.00,enc_auto/84770f_cb0fb3c6238146209f8c82ddcdeef77af000.jpg" alt="Frais"></img>
                                </div>

                    </div>


                    <div className="first-box sacond-box">

                    <div className="our-home-img">
                            <img src="https://static.wixstatic.com/media/c837a6_fb1cfceae8d442448d7ae3804c378046~mv2.jpg/v1/crop/x_0,y_354,w_4480,h_5873/fill/w_570,h_748,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pexels-meruyert-gonullu-7500302.jpg" alt="Frais"></img>
                    </div>


                        <div className="first-box-text">
                            <h2>PROBIOTIC CLEANSING BARS</h2>
                            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                            <button className="btn trans">shop soap</button>
                        </div>


                    </div>

                </div>
            </section>


                {/* ==============================
                        Start MOST POPULAR slider
                    ===============================
                */}

                <section className="slider-contener">
                <div className="header-text-home">
                    <h1>MOST POPULAR</h1>
                </div>
                <Slid/>
                </section>
                {/* ==============================
                        Start   OUR STORY
                    ===============================
                */}
                <section className="our-story">
                <div className="header-text-home">
                    <h1>NATURALLY SIMPLE</h1>
                </div>
                <p className="our-story-info">
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                </p>
                <button className="btn trans">our story</button>
                <div className="our-story-img">
                <img className="bake-img" src="https://static.wixstatic.com/media/c837a6_de863b1b8e35429c9732c20bec3f38be~mv2.jpg/v1/crop/x_0,y_78,w_2382,h_1434/fill/w_1090,h_655,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ruslan-bardash-K8iJtsWwAoE-unsplash1_edited.jpg" alt="our story"></img>
                    <img className="prov-img" src="https://static.wixstatic.com/media/84770f_49a0e5cce26444fe8958a0c104c897e8~mv2.jpg/v1/crop/x_0,y_597,w_4275,h_5218/fill/w_635,h_775,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pexels-vlada-karpovich-6755866.jpg" alt="our story"></img>
                </div>
                </section>

                {/* ==============================
                        Start   OUR BLOG
                    ===============================
                */}
                <section className="our-blog-contener">

                    <div className="header-text-home">
                        <h1>THE FRAIS BLOG</h1>
                    </div>
                    <div className="our-blog">
                        <div className="box-blog">
                            <img src="https://static.wixstatic.com/media/c837a6_f395e41dff5e45eeb2252f4a02aa4698~mv2.jpg/v1/fill/w_336,h_449,fp_0.50_0.50,q_90,enc_auto/c837a6_f395e41dff5e45eeb2252f4a02aa4698~mv2.webp" alt="our blog"/>
                            <h2>Re-Using Candles</h2>
                            <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.</p>
                        </div>

                        <div className="box-blog">
                            <img src="https://static.wixstatic.com/media/c837a6_80859edc14b34b8d9484a87f260e0ef5~mv2.jpg/v1/fill/w_338,h_449,fp_0.50_0.50,q_90,enc_auto/c837a6_80859edc14b34b8d9484a87f260e0ef5~mv2.webp" alt="our blog"/>
                            <h2>How to Pick the Right Scent</h2>
                            <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.</p>
                        </div>

                        <div className="box-blog">
                            <img src="https://static.wixstatic.com/media/c837a6_b462c5e2801d4f928b27eb720a0cb542~mv2.jpg/v1/fill/w_336,h_449,fp_0.50_0.50,q_90,enc_auto/c837a6_b462c5e2801d4f928b27eb720a0cb542~mv2.webp" alt="our blog"/>
                            <h2>5 Ways to Take Care of Your Candles</h2>
                            <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.</p>
                        </div>
                        
                    </div>
                    <button className="btn">learn more</button>
                </section>
        </motion.header>
    )
}
export default Home
