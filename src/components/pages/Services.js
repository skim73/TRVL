import React, { useEffect } from 'react';
import '../../App.css';

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return <h1 className='services'
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/img-2.jpg'})` }}>
    SERVICES
  </h1>;
}