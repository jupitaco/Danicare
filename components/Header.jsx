import React from 'react';
import { MdAccessTime, MdCall } from 'react-icons/md';

const Header = () => {
  return (
    <header
      data-aos='zoom-in'
      className='headerSec d-none d-lg-flex justify-content-center gap-4'
    >
      <p className='d-flex gap-2 align-items-center'>
        <MdAccessTime /> <span>Monday to Friday: 8AM - 5PM</span>
      </p>
      <p className='d-flex gap-2 align-items-center'>
        <MdAccessTime /> <span>Saturdays 8AM - 12PM</span>
      </p>
      <p className='d-flex gap-2 align-items-center'>
        <MdAccessTime /> <span>Monday to Friday: 8AM - 5PM</span>
      </p>

      <p className='d-flex gap-2 align-items-center callUs'>
        <MdCall size={20} />
        <a href='tel:956-704-5030'>956-704-5030</a>
      </p>
    </header>
  );
};

export default Header;
