import React from 'react';
import { MdAccessTime, MdCall } from 'react-icons/md';

const Header = () => {
  return (
    <header
      data-aos='zoom-in'
      className='headerSec d-none d-lg-flex flex-column justify-content-center'
    >
      <div className='d-flex justify-content-center gap-4'>
        <p className='d-flex gap-2 align-items-center'>
          <MdAccessTime /> <span>Monday to Friday: 8AM - 5PM</span>
        </p>
        <p className='d-flex gap-2 align-items-center'>
          <MdAccessTime /> <span>Saturdays 9AM - 5PM</span>
        </p>
        <p className='d-flex gap-2 align-items-center'>
          <MdAccessTime /> <span>Monday to Friday: 8AM - 5PM</span>
        </p>

        <p className='d-flex gap-2 align-items-center callUs'>
          <MdCall size={20} />
          <a href='tel:+1 (956) 266-8476'>+1 (956) 266-8476</a>
        </p>
      </div>
      <small className='text-center '>
        (We accommodate after hour appointment upon request)
      </small>
    </header>
  );
};

export default Header;
