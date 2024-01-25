import React from 'react';
import { Inputs } from '@/components/AllData';
import become from '@/public/becomePatient.png';
import Image from 'next/image';
import styles from './patient.module.scss';

export default function Patients() {
  return (
    <main
      className={`${styles.patient} container d-flex flex-column flex-lg-row justify-content-between`}
    >
      <section className='col-12 col-lg-4 d-flex flex-column order-1 order-lg-0'>
        <article className='py-4' data-aos='fade-left'>
          <h1>Become a Patient</h1>
          <p className='my-3'>
            Kindly fill the following information to become a Patient on
            DaniCare
          </p>
        </article>

        <form
          data-aos='fade-left'
          className='  d-flex flex-wrap justify-content-between gap-2 mt-3'
        >
          {Inputs().map(({ id, type, label, placeholder, required }) => (
            <div key={id} className={styles.inputWrapper}>
              <label htmlFor={label}> {label}</label>
              <input
                id={id}
                type={type}
                // placeholder={placeholder}
                required={required}
                className='form-control'
              />
            </div>
          ))}

          <div className='my-3'>
            <button className='main-btn' type='submit'>
              {' '}
              Submit{' '}
            </button>
          </div>
        </form>
      </section>
      <aside data-aos='zoom-in' className='col-12 col-lg-7 order-0 order-lg-1'>
        <figure>
          <Image src={become} alt='Become Patient' />
        </figure>
      </aside>
    </main>
  );
}
