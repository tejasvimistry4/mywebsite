import React, { useEffect } from 'react'
import './Form.css';

function Form() {
    const name = localStorage.getItem('productname')

    useEffect (() => {
        const clearLocalStorage = setTimeout(() => {
            localStorage.removeItem('productname')
              }, 5000);
        
          return () => clearTimeout(clearLocalStorage)
    }, []);

  return (
    <div className='name'>
        <div> Name is {name}</div>
        
    </div>
    
  )
}

export default Form