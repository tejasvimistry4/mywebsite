import React, { useEffect } from 'react'
import Services from './Services'
import './Services.css';
import Aos from 'aos';


function Servicesdetail() {

  const servicesData = [

    {
      image: 'service-img/service-1.jpg',
      title: 'Service 1',
      description: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there',
    },
    {
      image: 'service-img/service-2.jpg',
      title: 'Service 2',
      description: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there',
    },
    {
      image: 'service-img/service-3.jpg',
      title: 'Service 3',
      description: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there',
    },
    {
      image: 'service-img/service-4.jpg',
      title: 'Service 4',
      description: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there',
    },
    {
      image: 'service-img/service-5.jpg',
      title: 'Service 5',
      description: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there',
    },
    {
      image: 'service-img/service-6.jpg',
      title: 'Service 6',
      description: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there',
    },
  ];

  useEffect(() => {
    Aos.init();
    return () => {
      Aos.refreshHard();
    };
  }, []);

  return (
    <div className='our-servics'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 '>
            <div className='titlepage'>
              <h2>Our Services</h2>
              <p>Lorem Ipsum available, but the majority have suffered</p>

            </div>
          </div>
        </div>

        <div className='row'>
          {servicesData.map((service, index) => (
            <div key={index} className="col-sm-6 col-md-4">
              <Services
                image={service.image}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
          {/* <Services image="service-img/service-1.jpg" title="Service 1" description="If you are going to use a passage of Lorem Ipsum, you need to be sure there"/> */}

        </div>
      </div>


    </div>


  )
}

export default Servicesdetail