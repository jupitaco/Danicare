'use client';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
// import 'animate.css';

export default function AOSAnimation({ children }) {
  // AOS animation
  const AOS = require('aos');
  useEffect(() => {
    AOS.init();
  }, [AOS]);

  return <div> {children} </div>;
}
