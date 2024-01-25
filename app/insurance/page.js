import React from 'react';
import styles from './Insurance.module.scss';
import FaqComps from '@/components/FaqComp/FaqComps';
import Image from 'next/image';
import Humana from '../../public/humana.svg';
import Un from '../../public/un.svg';
import Aetna from '../../public/aetna.svg';
import Cigna from '../../public/cigna.svg';
import find from '@/public/find.svg';
import visitTime from '@/public/visitTime.svg';

export default function Insurance() {
  return (
    <main className={styles.insurance}>
      <section className={styles.hero}>
        <article className='container d-flex flex-column flex-md-row justify-content-between align-items-start'>
          <div className='col-12 col-md-5'>
            <h1>Insurance accepted by DaniCare</h1>
            <p className='my-3'>
              If uninsured or we are not in network with your insurance DaniCare
              can still be right for you. We accept cash and can do sliding
              scale as appropriate. We can provide a superbill for our
              out-of-network clients.
            </p>
          </div>

          <form className='col-12 col-md-5 '>
            <div className='d-flex flex-column '>
              <label>Provider </label>
              <select className='form-select'>
                <option>Select Provider</option>
                <option>aetna</option>
                <option>cigna</option>
                <option>Blue Cross</option>
                <option>United Healthcare</option>
                <option>Humana</option>
              </select>
            </div>
            <div className='d-flex flex-column my-4'>
              <label>Insurance Plan </label>
              <select className='form-select'>
                <option>Select Plan</option>
                <option>Life</option>
                <option>Fire</option>
                <option>BBL</option>
              </select>
            </div>

            <div>
              <button className='main-btn'>Search </button>
            </div>
          </form>
        </article>
      </section>

      <section
        data-aos='fade-left'
        className={` d-flex flex-column justify-content-center col-10 col-md-6 mx-auto my-5`}
      >
        <small className='text-center my-3'>
          Note: We only see patients whose insurance we accept.
        </small>
        <div className={styles.iIcons}>
          <Image src={Humana} alt='Humana icon' />
          <Image src={Un} alt='United healthcare icon' />
          <Image src={Cigna} alt='Cigna icon' />
          <Image src={Aetna} alt='Aetna icon' />
        </div>
      </section>

      <section
        className={`${styles.findSection} d-flex flex-wrap gap-3 container my-5`}
      >
        <article
          data-aos='fade-left'
          className={`${styles.find} d-flex flex-column`}
        >
          <figure className='col-4 col-lg-2'>
            <Image src={find} alt='' />{' '}
          </figure>
          <h4>Find a Psychiatrist who takes your insurance</h4>
          <p className='my-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>

          <div>
            <button className='main-btn' type='button'>
              {' '}
              Get Started
            </button>
          </div>
        </article>
        <article
          data-aos='fade-right'
          className={`${styles.find} d-flex flex-column`}
        >
          <figure className='col-4 col-lg-2'>
            <Image src={visitTime} alt='' />{' '}
          </figure>
          <h4>The majority of visits cost Patients $30 or less</h4>
          <p className='my-3'>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo con
          </p>

          <div>
            <button className='main-btn' type='button'>
              {' '}
              Get Started
            </button>
          </div>
        </article>
      </section>

      <section className=' col-11 col-md-8 mx-auto mt-5 pt-5'>
        <FaqComps
          title='How much do visits cost?'
          subTitle='The final cost of your visit depends on the details of your coverage. We only work with patients whose insurance we accept'
        />
      </section>

      <section className=' col-11 col-md-8 mx-auto mt-4'>
        <FaqComps
          title='Understanding your coverage'
          subTitle="Navigating insurance isn't anyone's favorite, but we're here to help"
        />
      </section>
    </main>
  );
}
