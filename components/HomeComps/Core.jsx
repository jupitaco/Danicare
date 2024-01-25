import Image from 'next/image';
import styles from './core.module.css';
import Empathy from '../../public/empathy.png';
import Compassion from '../../public/compassion.png';
import Care from '../../public/care.png';

const Core = () => {
  const coreData = [
    { id: 1, title: 'Empathy', imageUrl: Empathy },
    { id: 2, title: 'Compassion', imageUrl: Compassion },
    { id: 3, title: 'Personalized Care', imageUrl: Care },
  ];

  return (
    <main className={styles.cores}>
      <section className={`container g-0  ${styles.core}`}>
        <h1>Core Values</h1>
        <section className={`${styles.cards} mt-5 `}>
          {coreData.map(({ id, title, imageUrl }) => (
            <article key={id}>
              <figure data-aos='zoom-in'>
                <Image src={imageUrl} alt='Empathy' />
              </figure>
              <h3 data-aos='fade-in' className='my-3'>
                {title}
              </h3>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
};

export default Core;
