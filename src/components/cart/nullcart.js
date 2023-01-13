import React from 'react'
import'./cart.css'
export default function NullCart({showCart,setshowCart}) {
    return (
        <section >
            <div 
                    className= {showCart ? 'cart-contener show':' cart-contener'}
                    onClick={()=>setshowCart(false)}
            ></div>
            <div 

            className={showCart ? 'cart-nav show-nav    ' : 'cart-nav ' }
            
            >

                    <div className='text-header'>
                        <h1> cart</h1>
                        <p>you should to log in to show your cart </p>
                    </div>
            </div>
        </section>
    )
}