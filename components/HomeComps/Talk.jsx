import React from 'react';
import './talk.css';
import Image from 'next/image';
import Tal from '@/public/talk.png';

const Talk = () => {
  return (
    <main className='talks'>
      <section className='container container-talk d-flex flex-column flex-md-row justify-content-between col-11 col-md-12'>
        <figure className='col-12 col-md-4'>
          <Image src={Tal} alt='Man Writing' />
        </figure>
        <article className='talkW col-12 col-md-7 d-flex align-items-center py-5 px-3'>
          <div>
            <h1>Talk to a DaniCare Psychiatrist</h1>
            <p>Our Psychiatrist are always ready to talk to you</p>
            <button className='bookBtn mt-1'>Book Appointment</button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Talk;
