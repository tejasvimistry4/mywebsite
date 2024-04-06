import React, { useEffect } from 'react'
import './Carousel.css';
import Aos from 'aos';

function Carousel() {

    useEffect(() => {
        Aos.init();
            return () => {  
          Aos.refreshHard();
        };
      }, []);
    
  return (
    <div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" data-aos="fade-up" data-aos-duration="1000" >
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="1000">
                    <img src="\images\image1.jpg" className="d-block w-100 carousel-image" alt="Slide 1"/>
                    <div className="carousel-caption">
                    <h1 className='carousel-text'>Welcome to Your Home Away from Home"</h1>
                    </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <img src="\images\image2.jpg" className="d-block w-100 carousel-image" alt="Slide 2"/> 
                    <div className="carousel-caption">
                    <h1 className='carousel-text'>Where Comfort Meets Elegance</h1>
                    </div> 
                    </div>
                    <div className="carousel-item">
                    <img src="\images\image3.jpg" className="d-block w-100 carousel-image " alt="Slide 3"/>
                    <div className="carousel-caption">
                    <h1 className='carousel-text'>Unwind and Rejuvenate in Style</h1>
                    </div>
                    </div>
                </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
        </div>
    </div>
  )
}

export default Carousel