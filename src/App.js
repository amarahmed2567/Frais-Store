// import  {MdDoubleArrow}from 'react-icons/md'
import React from 'react';
import Footer from './components/footer/footer';
import Help from './components/help/help';
import Home from './components/home/home';
import Nav from './components/nav/nav';
import Shop from './components/shop/shop';
import Story from './components/story/story';
import Blog from './components/blog/blog';
import Contact from './components/contact/contact';
import Login from './components/login/login';
import {AnimatePresence} from 'framer-motion'

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Social from './components/social/social';
import Cart from './components/cart/cart';
import NullCart from './components/cart/nullcart';
import Sale from './components/shop/sale shop/sale';


function App() {

        //cheak if login or not
        const [isAuth,setisAuth]=React.useState(false)
        //show cart
        const [showCart,setshowCart] = React.useState(false)
    //switsh router anmion
    

return(
    <BrowserRouter>
<AnimatePresence >

            {/* Nav Bar  */}
            <Nav setAuth={setisAuth} IsAuth={isAuth} setshowCart={setshowCart} showCart ={showCart}/>

            {/* Help chat */}
            <Help/>

            {/* Cart Shop */}
            {
            isAuth ? 
            <Cart setshowCart={setshowCart} showCart ={showCart}/>
            :
            <NullCart setshowCart={setshowCart} showCart ={showCart}/>
            }
            {/* Social links */}
            <Social/>
    <Routes >

        <Route path="/" element={<Home/>} />

        <Route path="shop" element={<Shop/>} />

        <Route path="story" element={<Story/>} />

        <Route path="sale" element={<Sale/>} />

        <Route path="blog" element={<Blog/>} />

        <Route path="contact" element={<Contact/>} />

        <Route path="login" element={<Login setAuth={setisAuth} IsAuth={isAuth}/>}  />

    </Routes>

        <Footer/>
        </AnimatePresence>
    </BrowserRouter>


)
}

export default App;