import React, { useEffect } from 'react';
import '../../App.css';

export default function SignUp() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  return <h1 className='sign-up'
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/img-8.jpg'})` }}>
    SIGN UP
  </h1>;
}