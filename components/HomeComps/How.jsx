import Image from 'next/image';
import styles from './how.module.css';
import Couple from '../../public/couple.png';
import Link from 'next/link';

const How = () => {
  return (
    <main className={`${styles.hows} py-5`}>
      <article className='container g-0 d-flex flex-column flex-md-row justify-content-between'>
        <section
          data-aos='fade-right'
          className={`${styles.bgC} col-12 col-md-4 order-1 order-md-0`}
        >
          <h1>How it works</h1>
          <div className={styles.hW}>
            <h4>01.</h4>
            <h5>Become a Patient</h5>
          </div>
          <h6>Fill the following information</h6>

          <Link href='/patients'>
            <button className={styles.become}>Become a Patient</button>
          </Link>
          <div className={styles.hW}>
            <h4>02.</h4>
            <h5>Book an appointment</h5>
          </div>
          <h6>Schedule an appointment to speak to our Psychiatrist</h6>
          <div className={styles.hW}>
            <h4>03.</h4>
            <h5>Receive the necessary care</h5>
          </div>
          <h6>
            Experience your initial virtual appointment within days and commence
            collaborative care with your provider
          </h6>
        </section>
        <section
          data-aos='fade-left'
          className={`${styles.howPic} col-12 col-md-7 order-0 order-md-1 my-4 my-md-0`}
        >
          <Image src={Couple} alt='Couple' />
        </section>
      </article>
    </main>
  );
};

export default How;
