'use client';

import React, { useState } from 'react';

// styles
import styles from './NavBar.module.scss';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from '@/public/logo.svg';
import Image from 'next/image';

function NavBar() {
  const currentRoute = usePathname();
  const [toggle, setToggle] = useState(false);

  const handleToggle = (id) => {
    setToggle((prev) => ({ [id]: !prev[id] }));
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
    <div>
      <section
        className={`${styles.navContainer} d-flex flex-row align-items-center justify-content-between`}
      >
        <nav className='d-flex container flex-row align-items-center justify-content-between col-11 col-lg-12'>
          {/* Logo */}
          <Link
            href='/'
            className={` col-4 col-md-2 d-flex flex-row align-items-center`}
            data-aos='zoom-out'
            data-aos-duration='1500'
          >
            <figure>
              <Image src={logo} alt='Danicare Logo' />
            </figure>
          </Link>
          <div
            className={`col-12 col-lg-10 ${
              toggle['navbar'] ? styles.navMove : styles.displayNav
            }`}
          >
            <aside className='col-12 d-flex flex-column  align-items-center justify-content-center '>
              {/* nav Links */}

              <ul
                className={` ${styles.navItems} d-flex flex-column flex-lg-row  col-12 justify-content-end align-items-center `}
                data-aos='fade-right'
                data-aos-duration='1500'
              >
                <ul className='d-flex flex-column flex-lg-row col-10 col-lg-7  justify-content-between '>
                  {linkList.map(({ id, title, url }) => (
                    <li
                      key={id}
                      className={
                        currentRoute === url ? 'isActive' : 'notActive'
                      }
                    >
                      <Link onClick={() => handleToggle('navbar')} href={url}>
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <li className='d-flex justify-content-center justify-content-lg-end col-11 col-md-6 col-lg-4'>
                  <div className='d-flex flex-column flex-lg-row gap-2 col-12 justify-content-end'>
                    <a href='#' className={`${styles.login} text-center`}>
                      Login{' '}
                    </a>
                    <a href='#' className={`${styles.signup} text-center`}>
                      Get Started
                    </a>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
          {/* Hambuger icon */}
          <div
            onClick={() => handleToggle('navbar')}
            className={toggle['navbar'] ? styles.open : styles.ham}
            id='navbar'
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default NavBar;
