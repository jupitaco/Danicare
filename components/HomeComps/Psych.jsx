import psychP from '../../public/psychP.png';
import styles from './psych.module.css';
import Image from 'next/image';

const Psych = () => {
  return (
    <main className={styles.Psych}>
      <section
        className={`${styles.psyBg} container d-flex flex-column text-center`}
      >
        <h1 className='col-12 col-md-8 mx-auto'>
          Psychiatry Tailored to Suit You
        </h1>
        <p>Accessible Mental Health Care for Everyone</p>
        <article>
          <figure className='P col-12 col-md-6 mx-auto'>
            <Image src={psychP} alt='Illustration' className='ps' />
          </figure>
        </article>
      </section>
    </main>
  );
};

export default Psych;
