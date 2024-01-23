import Image from 'next/image';
import './insurance.css';
import Humana from '../../public/humana.svg';
import Un from '../../public/un.svg';
import Aetna from '../../public/aetna.svg';
import Cigna from '../../public/cigna.svg';
import Insurea from '../../public/insurance.png';
import Afford from '../../public/afford.png';

const Insurance = () => {
  return (
    <main className='insure'>
      <section className='container d-flex flex-column justify-content-between'>
        <section className='art1 d-flex flex-column flex-md-row justify-content-between'>
          <article className='iW col-12 col-md-6 order-1 order-md-0'>
            <h1>Insurance</h1>
            <p>
              Discover if your insurance covers your DaniCare care in just
              seconds, because we believe that your routine care should be
              easily accessible and covered.
            </p>
            <div className='iIcons'>
              <Image src={Humana} alt='Humana icon' />
              <Image src={Un} alt='United healthcare icon' />
              <Image src={Cigna} alt='Cigna icon' />
              <Image src={Aetna} alt='Aetna icon' />
            </div>
            <button className='check'>Check your Insurance</button>
          </article>
          <article className='iP col-12 col-md-5 order-0 order-md-1 my-4 my-md-0'>
            <Image src={Insurea} alt='Insurance keyboard' />
          </article>
        </section>
        <section className='art2 d-flex flex-column flex-md-row justify-content-between mt-5 '>
          <article className='iP col-12 col-md-5'>
            <Image src={Afford} alt='Affordable Options' />
          </article>
          <article className='iW col-12 col-md-6 d-flex  align-items-center my-5 my-md-0'>
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
