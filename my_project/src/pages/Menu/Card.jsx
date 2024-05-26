import React from 'react'
import './card.css'
import '../../styles/global.css'

function Card({name, price, images}) {
  return (
  
    <div className='card'>
        <img className='card_image' src={images} alt="image" />
        <div className="card_content">
      <div className="card_name">{name}</div>
      </div>
      
      <div className="card_bottom">
      <div className="card_price">{price}</div>
      <button className='card_btn'>Buy</button>
      </div>
    </div>

  )
}

export default Card
