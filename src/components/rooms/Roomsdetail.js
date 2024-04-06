import React, { useState } from 'react'
import Rooms from './Rooms'
import './Rooms.css';


function Roomsdetail() {
  const roomData = [

    {
      image: 'Room-images/Room-1.jpg',
      title: ' Single Room ',
      price: '$100',
      description: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there',
    },
    {
      image: 'Room-images/Room-2.jpg',
      title: 'Double Room ',
      price: '$100',
      description: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there',
    },
    {
      image: 'Room-images/Room-3.jpg',
      title: 'Family Room ',
      price: '$100',
      description: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there',
    },

  ];
  return (
    <div className='our-rooms'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 '>
            <div className='titlepage'>
              <h2>Rooms</h2>
              <p>Lorem Ipsum available, but the majority have suffered</p>
            </div>
          </div>
        </div>

        <div className='row'>
          {roomData.map((rooms, index) => (
            <div key={index} className="col-sm-6 col-md-4">
              <Rooms className="roomdetail"
                image={rooms.image}
                title={rooms.title}
                price={rooms.price}
                description={rooms.description} />
            </div>
          ))}
        </div>
        <button type='button' className='btn btn-dark btn-lg view-button'> View More</button>
      </div>
    </div>
  )
}

export default Roomsdetail