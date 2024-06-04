import React from 'react'
import './card.css'
import '../../styles/global.css'

function Card({id, name, price, image, onAddToCart}) {
  return (
  
    <div className='card'>
        <img className='card_image' src={image} alt="image" />
        <div className="card_content">
      <div className="card_name">{name}</div>
      </div>
      
      <div className="card_bottom">
      <div className="card_price">{price} $</div>
      <button className='card_btn' onClick={() => onAddToCart({ id, name, price, image })}>Buy</button>
      </div>
    </div>

  )
}

export default Card
