

import React from "react"
import Data from "../../Data/shopeItem"
import '../shop.css'
import SliceBox from "../../sliderBox/sliceBox"
import { motion } from "framer-motion"

const Sale = ()=>{
    
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
                <h1>sales</h1>
                <p>I'm a paragraph. Click here to add your own text and edit me.</p>
            </div>

        {Data.sale?<SliceBox/>:null}
        </motion.section>
    )
}
export default Sale






//Old code 

/*
import React from "react"
import Data from "../../Data/shopeItem"
import '../shop.css'

import { motion } from "framer-motion"

const Sale = ()=>{

    const [item,setItem]= React.useState(Data)
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
                <h1>sales</h1>
                <p>I'm a paragraph. Click here to add your own text and edit me.</p>
            </div>
            <div className="shop-boxes">
                { 
                    item.map(prevItem=>{
                    const {id,name,price,sale,dis_cont,image} = prevItem
                        return(
                            sale ?
                            <article className="box" key={id}>

                            <div className='box-img'>
                                <img src={image} alt={name}/>
                                {sale 
                                ? <span className='sale-title'>sale</span>
                                :null}
                                <div className='quick-viwe'>quick viwe</div>
                            </div>

                            <div className='box-text'>
                                <h5>{name}</h5>
                                <p>
                                    {
                                    sale ? 
                                    <span className='dis_cont'>{`$ ${dis_cont}`}</span>
                                    :null
                                    }
                                    <span>${price}</span>
                                </p>
                            </div>
                            
                            </article>
                        :null
                        )
                    })
                    
                }
            </div>
        </motion.section>
    )
}
export default Sale

*/