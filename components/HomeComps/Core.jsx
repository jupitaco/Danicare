import Image from 'next/image';
import styles from './core.module.css';
import Empathy from '../../public/empathy.png';
import Compassion from '../../public/compassion.png';
import Care from '../../public/care.png';

const Core = () => {
  return (
    <main className={styles.cores}>
      <section className={`container container ${styles.core}`}>
        <h1>Core Values</h1>
        <section className={`${styles.cards} `}>
          <article>
            <figure>
              <Image src={Empathy} alt='Empathy' />
            </figure>
            <h3>Empathy</h3>
          </article>
          <article>
            <figure>
              <Image src={Compassion} alt='Compassion' />
            </figure>

            <h3>Compassion</h3>
          </article>
          <article>
            <figure>
              <Image src={Care} alt='Care' />
            </figure>

            <h3>Personalized Care</h3>
          </article>
        </section>
      </section>
    </main>
  );
};

export default Core;
