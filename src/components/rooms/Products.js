import React, { useEffect, useState } from 'react';
import './Rooms.css';
import axios from 'axios';
import Heading from '../common/Heading';
import SIdebar from '../common/SIdebar';

function Products() {
  localStorage.setItem('productname', 'Mobile');

  const [allproducts, setAllproducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((response) => {
        setAllproducts(response.data.products);
        console.log(response.data.products);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Sample category list
  const category = ['Category 1', 'Category 2', 'Category 3'];

  return (  
    <div >
      <Heading />
      <div className="row flex-nowrap">
        <div className="col-md-3">
          <SIdebar /> 
        </div>

        <div></div>
        <div className="col-md-9">
          <div className="row">
            {allproducts.map((product) => (
              <div key={product.id} className="col-sm-6 col-md-4">
                <div className="product">
                  <img className="image" src={product.thumbnail} alt={product.title} />
                  <h5 className="productname">{product.title}</h5>
                  <p className="productprice">${product.price}</p>
                  <a className="btn btn-primary" role="button">
                    View Product
                  </a>
                  <a className="btn btn-primary" role="button">
                    Add To Cart
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
