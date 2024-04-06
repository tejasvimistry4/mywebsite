import React from 'react'
import './Services.css';
import 'aos/dist/aos.css';


function Services({  image, title, description }) {
  return (
    <div className='services' data-aos="fade-up" data-aos-duration="1000" >
        <img className="service-img" src={image} alt={title} />
            <div className='service-detail'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
    </div>
            
                    
    
  )
}

export default Services



