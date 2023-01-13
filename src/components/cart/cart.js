import React from 'react'
import'./cart.css'
export default function Cart({showCart,setshowCart}) {
    console.log(showCart)
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
                    </div>
            </div>
        </section>
    )
}
