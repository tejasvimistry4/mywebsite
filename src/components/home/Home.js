import React from 'react'
import Carousel from '../carousel/Carousel'
import Servicesdetail from '../service/Servicesdetail'
import About from '../about/About'
import Roomsdetail from '../rooms/Roomsdetail'
import Gallary from '../gallary/Gallary'
import Footer from '../common/Footer'

function Home() {

  return (
    <div>
      <Carousel />
      <About />
      <Servicesdetail />
      <Roomsdetail />
      <Gallary />
      <Footer />
    </div>
  )
}

export default Home