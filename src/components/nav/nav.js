/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Ad from './ad';
import './nav.css'
import {BiSearch} from 'react-icons/bi';
import {GoPerson} from 'react-icons/go';
import {RiHandbagLine} from 'react-icons/ri';
import {FiLogOut} from 'react-icons/fi'

import { Link } from "react-router-dom";

const Nav = ({IsAuth,setAuth,setshowCart,showCart})=>{

    //singout 
    const userSignout =()=>{
        localStorage.clear();
        setAuth(false);
    }
    
    return(
        <nav >
            <Ad/>
            <div className="Nav">
            <div className="Nav-Bar">
            <Link to="shop">shope</Link> 
            <Link to="story">our story</Link> 
            <Link to="blog">blog</Link> 
            <Link to="sale">sale</Link> 
            <Link to="contact">contact</Link> 
            </div>

                <div className="logo">
            <Link to="/">Frais</Link> 
                </div>
                
                <div className="search-cart">
                    <label className="search-label">
                        <BiSearch className="search-icon"></BiSearch>
                        <input
                        className="search-input"
                        type="text"
                        placeholder="search..."
                        ></input>
                    </label>

                        { IsAuth ? 
                        <label className="login-label" onClick={()=>userSignout()}>
                        <FiLogOut className="login-icon"></FiLogOut>
                        <span>log out</span>
                        </label> 
                        :
                        <Link to="login">
                        <label className="login-label">
                        <GoPerson className="login-icon"></GoPerson>
                        <span>log in</span>
                        </label> 
                    </Link> 
                    }  
                        <RiHandbagLine className="cart-icon" onClick={()=>setshowCart(true)}></RiHandbagLine>
                </div>
            </div>
        </nav>
    )
}
export default Nav