import React from "react"
// import './shop.css'
import { motion } from "framer-motion";
import SliceBox from "../sliderBox/sliceBox"

const Shop = ()=>{

    return(
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
        
        className="shop">
            <div className="header-text">
                <h1>SHOP</h1>
                <p>I'm a paragraph. Click here to add your own text and edit me.</p>
            </div>
        
        <SliceBox/>
            
        </motion.section>

    )
}
export default Shop