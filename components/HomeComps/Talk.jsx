import React from 'react';
import styles from './talk.module.css';
import Image from 'next/image';
import Tal from '@/public/talk.png';

const Talk = () => {
  return (
    <main className={styles.talks}>
      <section
        className={`container g-0 ${styles.containerTalk} d-flex flex-column flex-md-row justify-content-between col-11 col-md-12`}
      >
        <figure className='col-12 col-md-4'>
          <Image src={Tal} alt='Man Writing' />
        </figure>
        <article
          className={`${styles.talkW} col-12 col-md-7 d-flex align-items-center py-5 px-3`}
        >
          <div>
            <h1>Talk to a DaniCare Psychiatrist</h1>
            <p className='mt-2'>
              Our Psychiatrist are always ready to talk to you
            </p>
            <a
              href='http://provider.kareo.com/dolani-ajanaku#?view=booking'
              target='_blank'
              rel='noreferrer'
            >
              <button className={`${styles.bookBtn} mt-5`}>
                Book Appointment
              </button>
            </a>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Talk;
