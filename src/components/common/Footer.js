import React, { useEffect } from 'react'
import './Footer.css';
import Aos from 'aos';

function Footer() {

    useEffect(() => {
        Aos.init();  
        return () => {
          Aos.refreshHard();
        };
      }, []);

  return (
    <div className='footer'  data-aos="fade-up" data-aos-duration="1000">
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                    <h2>Hotel</h2>
                    <p className='footer-paragraph'>
                     Far far away, behind the word mountains,
                     far from the countries Vokalia and Consonantia, 
                     there live the blind texts.
                     Far far away, behind the word mountains,
                     far from the countries Vokalia and Consonantia, 
                     there live the blind texts.</p>
                </div>

                <div className='col-md-3'>
                    <h2>Quick Links</h2>
                    <ul className='list-group'>
                        <li>Home </li>
                        <li>Rooms</li>
                        <li>Restaurant</li>
                        <li>Contact US</li>
                    </ul>
                </div>

                <div className='col-md-3'>
                    <h2>Privacy</h2>
                    <ul className='list-group'>
                        <li>About Us</li>
                        <li>Terms And Conditions</li>
                        <li>Services</li>
                        <li>Contact US</li>
                    </ul>
                </div>

                <div className='col-md-3'>
                    <h2>Address</h2>
                    <ul className='list-group'>
                    <li><span className='glyphicon glyphicon-map-marker' ></span> Hotel@gmail.com</li>

                    <li><span className='glyphicon glyphicon-phone'></span>+91 945-456-345</li>

                    <li><span className='glyphicon glyphicon-envelope'></span>98 West 21th Street, Suite 721 New York NY 10016</li>
                    </ul>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Footer