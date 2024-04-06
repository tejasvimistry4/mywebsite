import React, { useEffect } from 'react'
import './Aboutus.css';
import Aos from 'aos';


function About() {

  useEffect(() => {
    Aos.init();  
    return () => {
      Aos.refreshHard();
    };
  }, []);

  return (
    <div>
      <div className='about-us'>
        <div className='container'> 
          <div className='row'>
            <div className='col-md-6'>
              <div className='about-title' data-aos="fade-up" data-aos-duration="1000">
                <h2>About Us</h2>
                <p className='about-paragraph '>The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.
                The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.
                <div>
                <button type="button" className="btn btn-dark btn-lg">Explore More</button>
                </div>

                </p>

              </div>
            </div>

            <div className='col-md-4'>
                <img src='\images\about-us.jpg' className='about-img ' alt='image' data-aos="fade-up" data-aos-duration="1000"  />
            </div>

          </div> 
          
        </div>
      </div>
      
    </div>
  )
}

export default About