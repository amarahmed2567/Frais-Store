import React from 'react'
import './story.css'

import {motion} from 'framer-motion'
function Story() {

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
        >
            <section>
            <div className='header-story'>
                <img src='https://static.wixstatic.com/media/c837a6_4c4c7005d8554a2eb2ede74cd96cb8da~mv2.jpg/v1/fill/w_416,h_629,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c837a6_4c4c7005d8554a2eb2ede74cd96cb8da~mv2.jpg'alt='story'></img>
            <div className='text-story'>
                <h1>RE-CONNECTING HUMANS TO NATURE</h1>
                <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
            </div>
            </div>
            <div className='about-story'>
                <div className='about-text'>
                    <h2>meet alison</h2>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    <p>This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</p>
                </div>
                <div className='about-img'></div>
            </div>
            <div className='image-end'>
                <img src='https://static.wixstatic.com/media/84770f_38a33c1e10cb4526867aa7bb651145a9f000.jpg/v1/fill/w_1205,h_709,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_38a33c1e10cb4526867aa7bb651145a9f000.jpg' alt='clender'></img>
            </div>
            </section>
        </motion.section>
)

}

export default Story