'use client';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import '../app/globals.css';
// import 'animate.css';

export default function AOSAnimation({ children }) {
  // AOS animation
  const AOS = require('aos');
  useEffect(() => {
    AOS.init();
  }, [AOS]);

  return <div> {children} </div>;
}
