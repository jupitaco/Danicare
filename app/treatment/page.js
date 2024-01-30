import React from 'react';
import Image from 'next/image';
import treatment from '@/public/treatment.png';
import styles from './treatment.module.scss';
import homeStyles from '@/app/Home.module.css';
import Our from '@/components/HomeComps/Our';
import personalCare from '@/public/personalCare.png';
import relationship from '@/public/relationship.png';
import FaqComps from '@/components/FaqComp/FaqComps';
import { treatmentFaqData } from '@/components/AllData';

export default function Treatment() {
  return (
    <main className={`${styles.treatment} d-flex flex-column`}>
      <section
        className={` px-2 px-lg-0  d-flex flex-column flex-lg-row align-items-center justify-content-between mt-5`}
      >
        <article
          data-aos='fade-right'
          className={`${styles.treatmentText} order-1 order-lg-0 col-12 col-lg-7 d-flex flex-column my-5 my-lg-0`}
        >
          <div>
            <h1>Psychiatric care that assists you in achieving equilibrium.</h1>
            <p className='my-3 col-12 col-md-9'>
              Our clinical team addresses prevalent mental health conditions
              through a combination of medication management and therapy during
              virtual visits.
            </p>
          </div>

          <div className='my-3'>
            <a
              href='https://app2.luminello.com/dolaniajanakumd/form'
              target='_blank'
              rel='noreferrer'
            >
              <button className='sec-btn' type='button'>
                {' '}
                Get Started{' '}
              </button>
            </a>
          </div>
        </article>
        <article
          data-aos='fade-left'
          className={`order-0 order-lg-1 col-12 col-lg-5`}
        >
          <Image src={treatment} alt='Danicare Treatment' />
        </article>
      </section>

      <Our styles={homeStyles} sty={styles} />

      <section
        className={`${styles.care} pt-5 d-flex flex-column justify-content-center`}
      >
        <section className={` container g-0  d-flex flex-column pt-5`}>
          <article
            className={`  d-flex flex-column flex-md-row align-items-center justify-content-between my-5`}
          >
            <article data-aos='fade-left' className={` col-12 col-md-5`}>
              <Image src={personalCare} alt='Danicare Treatment' />
            </article>
            <article
              data-aos='fade-right'
              className={` col-12 col-md-6 d-flex flex-column my-5 my-md-0`}
            >
              <div>
                <h1>Personalised care</h1>
                <p className='my-3 col-12 col-md-8'>
                  Our psychiatrists customize your care based on what you need
                  and want from treatment. If additional therapy will help you,
                  you can work with a psychiatrist-therapist team who&apos;ll
                  collaborate on your care.
                </p>
              </div>

              <div className='my-3'>
                <a
                  href='https://app2.luminello.com/dolaniajanakumd/form'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='sec-btn' type='button'>
                    {' '}
                    Get Started{' '}
                  </button>
                </a>
              </div>
            </article>
          </article>
          <article
            className={`  d-flex flex-column flex-md-row align-items-center justify-content-between mt-5`}
          >
            <article
              data-aos='fade-right'
              className={`order-1 order-lg-0 col-12 col-md-6 d-flex flex-column my-5 my-md-0`}
            >
              <div>
                <h1>Real relationships</h1>
                <p className='my-3 col-12 col-md-8'>
                  At Danicare, we believe in the transformative power of genuine
                  connections. Our practice goes beyond traditional psychiatry
                  by embracing the importance of real relationships in your
                  mental health journey. Led by a team of compassionate
                  professionals. Our approach is centered on building a real
                  connection, ensuring your unique needs are heard and
                  understood.
                </p>
              </div>

              <div className='my-3'>
                <a
                  href='https://app2.luminello.com/dolaniajanakumd/form'
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='sec-btn' type='button'>
                    {' '}
                    Get Started{' '}
                  </button>
                </a>
              </div>
            </article>
            <article
              data-aos='fade-left'
              className={`order-0 order-lg-1 col-12 col-md-5 `}
            >
              <Image src={relationship} alt='Danicare Treatment' />
            </article>
          </article>
        </section>
        <small className='text-center my-3'>
          At DaniCare – Your journey is not just ours to guide but to walk
          together, hand in hand
        </small>
      </section>

      <section className=' col-11 col-md-8 mx-auto'>
        <FaqComps
          faqData={treatmentFaqData}
          title='Frequently Asked Questions'
        />
      </section>
    </main>
  );
}
