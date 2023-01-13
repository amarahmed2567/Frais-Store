import React from 'react'
import Data from "../Data/shopeItem"

function SliceBox() {
    const [item,setItem]= React.useState(Data);


return  <div className="shop-boxes">
                {
        item.map(prevItem=>{
        const {id,name,price,sale,dis_cont,image} = prevItem
            return(
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
                        )
                    })
                }
            </div>
}

export default SliceBox