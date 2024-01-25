import React from 'react';
import styles from './Contact.module.scss';
import { IoMailOutline, IoPhonePortraitOutline } from 'react-icons/io5';
import { CiLocationOn } from 'react-icons/ci';
import Image from 'next/image';
import contact from '@/public/contact.png';
import { Inputs, contactForm } from '@/components/AllData';

export default function ContactUs() {
  return (
    <main className={styles.contactUs}>
      <section className={styles.hero}>
        <article className='container d-flex flex-column flex-lg-row justify-content-between'>
          <figure className='col-12 col-lg-5'>
            <Image src={contact} alt='' />
          </figure>
          <div className='col-12 col-lg-6 mt-5 mt-lg-0'>
            <h1>How can we help?</h1>
            <p className='my-3'>Get in touch with us</p>

            <h3>Have an appointment?</h3>
            <p className='my-3'>
              Our patient care coordinators are to help. Call or email us. For
              scheduling, refills, or technical issues:
            </p>

            <div className='d-flex flex-wrap gap-3 mt-4 align-items-start'>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <IoPhonePortraitOutline size={20} />
                <a href='tel: 923-213-1234' className='my-2'>
                  {' '}
                  923-213-1234
                </a>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <IoMailOutline size={20} />
                <a href='mailto: hello@danicare.com' className='my-2'>
                  {' '}
                  hello@danicare.com
                </a>
              </div>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <CiLocationOn size={20} />
                <address className='my-2 text-center'>
                  2702 ANEJO DR LAREDO <br /> TX 78054
                </address>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className='col-12 col-md-6 d-flex flex-column mx-auto my-5 py-5'>
        <h1 data-aos='fade-left' className='my-4 text-center'>
          Partner with us
        </h1>

        <form
          data-aos='fade-left'
          className='  d-flex flex-column justify-content-between gap-2 mt-3'
        >
          {contactForm().map(
            ({ id, type, label, placeholder, required, textarea }) => (
              <>
                {textarea ? (
                  <textarea
                    name={id}
                    id={id}
                    cols='30'
                    rows='10'
                    placeholder={placeholder}
                    className='form-control'
                  ></textarea>
                ) : (
                  <div key={id} className={styles.inputWrapper}>
                    {/* <label htmlFor={label}> {label}</label> */}
                    <input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      required={required}
                      className='form-control'
                    />
                  </div>
                )}
              </>
            ),
          )}

          <div className='my-3'>
            <button className='main-btn' type='submit'>
              {' '}
              Submit{' '}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
