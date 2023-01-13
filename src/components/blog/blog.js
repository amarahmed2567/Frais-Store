import React from 'react'
import './blog.css'
import BlogData from '../Data/blogData'
import {BsPersonCircle} from 'react-icons/bs'
import {FiMoreVertical} from 'react-icons/fi'
import {FcLike,FcLikePlaceholder}from 'react-icons/fc'
import { motion } from 'framer-motion'


function Blog() {

    const [Data,setData] =React.useState(BlogData);
    // const [like,setLike]=React.useState(false);

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
            <div className='header-text'>
                <h1>Blog</h1>
                <p>I'm a paragraph. Click here to add your own text and edit me.</p>
            </div>
            <div className='blogs'>
                {
                    Data.map(prev=>{
                        const {id,title,image,info,like_cont,like}= prev;
                        return(
                        <article className='blog-box' key={id}>
                            <div className='image-contener'>
                                <img src={image} alt={title}></img>
                            </div>
                            <div className='text-header'>

                            <div className='profils-slider'>

                                    <div className='profil-info'>
                                    <BsPersonCircle className='icon-profil'></BsPersonCircle>
                                    <div className='date-name'>
                                        <span className='name'>admin</span>
                                        <span className='date'>jan 18 . 1 min</span>
                                    </div>
                                    </div>
                                <FiMoreVertical className='icone-more'></FiMoreVertical>
                                </div>

                                <div className='text-info'>
                                    <h2>{title}</h2>
                                    <p>{info}</p>
                                </div>

                                <hr/>

                                <div className='like-comment'>
                                    <div className='conts-comment-and-view'>
                                        <div>0 views</div>
                                        <div>0 comments</div>
                                    </div>

                                    <div className='likes'>
                                        <span className='like-cont'>{like_cont}</span>
                                        { like?
                                        <FcLike className='love'></FcLike>:
                                        <FcLikePlaceholder className='love' onClick={()=>like.value = true}></FcLikePlaceholder>
                                        }
                                        </div>

                                </div>

                            </div>
                        </article>
                        )
                    })
                }
            </div>
        </motion.section>
    )
}

export default Blog