import React from 'react'
import './Rooms.css';


function Rooms({ image, title, price, description }) {
  return (
    <div>
      <div className='rooms' data-aos="fade-up" data-aos-duration="1000" >
        <img className="rooms-img" src={image} alt={title} />
        <div className='rooms-detail'>
          <h4>{title}</h4>
          <h6>{price}</h6>
          <h6>{description}</h6>

        </div>

      </div>
    </div>
  )
}

export default Rooms