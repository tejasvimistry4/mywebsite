import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Navbar from '../common/Navbar'
import About from '../about/About'
import Carousel from '../carousel/Carousel'
import Services from '../service/Services'
import Servicesdetail from '../service/Servicesdetail'
import Heading from '../common/Heading'
import Rooms from '../rooms/Rooms'
import Roomsdetail from '../rooms/Roomsdetail'
import Gallary from '../gallary/Gallary'
import Footer from '../common/Footer'
import Products from '../rooms/Products'
import Form from '../form/Form'
import Notification from '../common/Notification'

function Routess() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/navbar' element={<Navbar/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/carousel' element={<Carousel/>}></Route>
        <Route exact path='/service' element={<Services/>}></Route>
        <Route exact path='/servicesdetail' element={<Servicesdetail/>}></Route>
        <Route exact path='/heading' element={<Heading/>}></Route>
        <Route exact path='/rooms' element={<Rooms/>}></Route>
        <Route exact path='/roomsdetail' element={<Roomsdetail/>}></Route>
        <Route exact path='/gallary' element={<Gallary/>}></Route>
        <Route exact path='/footer' element={<Footer/>}></Route>
        <Route exact path='/products' element={<Products/>}></Route>
        <Route exact path='/form' element={<Form/>}></Route>
        <Route exact path='/form' element={<Form/>}></Route>
        <Route exact path='/notification' element={<Notification/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default Routess