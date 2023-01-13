import React from 'react';
import Data from'../Data/shopeItem'
// Import Swiper React components
import { Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Slid = ()=> {
    const [DataSlide,setDataSlide]=React.useState([
        Data[0],
        Data[1],
        Data[2],
        Data[3],
        Data[4],
        Data[5],
        Data[6],
        Data[7],
    ]);
    
    return (
        <Swiper
        className='Swiper'
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        speed={500}
        navigation={
        {   nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',}
        }
        pagination={{ clickable: true }}
        >
            {
                DataSlide.map((item)=>{
                    const {id,name,price,sale,dis_cont,image} =item
                    return(
                <SwiperSlide key={id} className='slider-box-slide'>
                    <div  className='box-slide'>

                            <div className='box-slide-img'>
                                <img src={image} alt={name}/>
                                {sale ? <span className='sale-title'>sale</span>:null}
                            <div className='quick-viwe'>quick viwe</div>
                            </div>

                            <div className='box-slide-text'>
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
                    </div>
                </SwiperSlide>
                    )
                })
            }
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        </Swiper>
    );
};
export default Slid