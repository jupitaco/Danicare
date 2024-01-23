'use client';
import React, { useState } from 'react';
import './nav-bar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import logo from './../public/logo.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const currentRoute = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const linkList = [
    { id: 1, title: 'Treatment', url: '/treatment' },
    { id: 2, title: 'Patients', url: '/patients' },
    { id: 3, title: 'Insurance', url: '/insurance' },
    { id: 4, title: ' Our Psychiatrist', url: '/our-psych' },
    { id: 5, title: 'Help', url: '/help' },
    { id: 6, title: ' About us', url: 'about-us' },
  ];

  return (
    <header>
      <div className='container container-header'>
        <div className='left'>
          <Link href='/'>
            <Image src={logo} alt='Danicare Logo' />
          </Link>
          <Link href='/'>
            {' '}
            <span>Danicare</span>
          </Link>
        </div>
        <div className={`menuNav ${isOpen ? 'active' : ''}`}>
          <nav>
            {linkList.map(({ id, title, url }) => (
              <Link
                key={id}
                href={url}
                onClick={toggleNavbar}
                className={currentRoute === url ? 'isActive' : 'notActive'}
              >
                {title}
              </Link>
            ))}
          </nav>
          <div className='button'>
            <button className='btn'>Login</button>
            <button className='bon'>Get Started</button>
          </div>
        </div>

        <div onClick={toggleNavbar} className='vvv'>
          <button className='nav-btn'>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
