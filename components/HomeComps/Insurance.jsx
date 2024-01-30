import Image from 'next/image';
import styles from './insurance.module.css';
import Optum from '../../public/optum.svg';
import Un from '../../public/un.svg';
import Aetna from '../../public/aetna.svg';
import Magellan from '../../public/magellan.svg';
import Oxford from '../../public/oxford.svg';
import Oscar from '../../public/oscar.svg';
import Medicare from '../../public/medicare.svg';
import Insurea from '../../public/insurance.png';
import Afford from '../../public/afford.png';
import Link from 'next/link';

const Insurance = () => {
  return (
    <main className={styles.insure}>
      <section className='container g-0 d-flex flex-column justify-content-between'>
        <section
          className={`${styles.art1} d-flex flex-column flex-md-row justify-content-between`}
        >
          <article
            data-aos='fade-left'
            className={`${styles.iW} col-12 col-md-6 order-1 order-md-0`}
          >
            <h1>Insurance</h1>
            <p>
              Discover if your insurance covers your DaniCare care in just
              seconds, because we believe that your routine care should be
              easily accessible and covered.
            </p>
            <div className={styles.iIcons}>
              <Image src={Un} alt='United healthcare icon' />
              <Image src={Optum} alt='Optum icon' />
              <Image src={Aetna} alt='Aetna icon' />
              <Image src={Magellan} alt='Magellan icon' />
              <Image src={Oxford} alt='Oxford icon' />
              <Image src={Medicare} alt='Medicare icon' />
              <Image src={Oscar} alt='Oscar icon' />
            </div>
            <button className={styles.check}>
              <Link href='/insurance'>Check your Insurance</Link>
            </button>
          </article>
          <article
            data-aos='fade-right'
            className={`${styles.iP} col-12 col-md-5 order-0 order-md-1 my-4 my-md-0`}
          >
            <Image src={Insurea} alt='Insurance keyboard' />
          </article>
        </section>
        <section
          className={`${styles.art2} d-flex flex-column flex-md-row justify-content-between mt-5`}
        >
          <article
            data-aos='fade-left'
            className={`${styles.iP} col-12 col-md-5`}
          >
            <Image src={Afford} alt='Affordable Options' />
          </article>
          <article
            data-aos='fade-right'
            className={`${styles.iW} col-12 col-md-6 d-flex  align-items-center my-5 my-md-0`}
          >
            <div>
              <h1>Affordable Optons</h1>
              <p>
                At DaniCare, we believe everyone deserves quality mental health
                care. If you&apos;re not insured, worry not! We offer affordable
                cash payment options tailored to your budget.
              </p>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
};

export default Insurance;
