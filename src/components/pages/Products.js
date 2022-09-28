import React, { useEffect } from 'react';
import '../../App.css';

export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return <h1 className='products'
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/img-1.jpg'})` }}>
    PRODUCTS
  </h1>;
}