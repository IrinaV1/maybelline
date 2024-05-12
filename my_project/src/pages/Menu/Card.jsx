import React from 'react'
import './card.css'
import '../../styles/global.css'

function Card({name, price, images}) {
  return (
  
    <div className='card'>
        <img className='card_image' src={images} alt="image" />
      <div className="card_name">{name}</div>
    
      <div className="card_price">{price}</div>
    </div>

  )
}

export default Card
