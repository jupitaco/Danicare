import Image from 'next/image';
import './core.css';
import Empathy from '../../public/empathy.png';
import Compassion from '../../public/compassion.png';
import Care from '../../public/care.png';

const Core = () => {
  return (
    <main className='cores '>
      <section className='container container core'>
        <h1>Core Values</h1>
        <section className='cards d-flex flex-wrap'>
          <article className='flex-fill'>
            <Image src={Empathy} alt='Empathy' />
            <h3>Empathy</h3>
          </article>
          <article className='flex-fill'>
            <Image src={Compassion} alt='Compassion' />
            <h3>Compassion</h3>
          </article>
          <article className='flex-fill'>
            <Image src={Care} alt='Care' />
            <h3>Personalized Care</h3>
          </article>
        </section>
      </section>
    </main>
  );
};

export default Core;
