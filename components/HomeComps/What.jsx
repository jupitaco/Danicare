'use client';
import Image from 'next/image';
import styles from './what.module.css';
import Love from '../../public/love.svg';
import Medkit from '../../public/medkit.svg';
import Calendar from '../../public/calendar.svg';
import Wallet from '../../public/wallet.svg';
import Contact from '../../public/contact.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const What = () => {
  const sliderData = [
    {
      id: 1,
      title: 'Personalized Care Plans',
      desc: 'We understand that mental health is unique to each individual. Our experts create customized care plans to address your specific needs.',
      imageUrl: Love,
    },
    {
      id: 2,
      title: 'Affordable Options',
      desc: 'Danicare welcomes both insured and uninsured clients. We offer competitive rates and accept cash payments to ensure access to quality mental health care for all.',
      imageUrl: Wallet,
    },
    {
      id: 3,
      title: 'Experienced Professional',
      desc: 'Licensed psychiatrist with years of experience and expertise to guide you on your journey to mental wellness.',
      imageUrl: Contact,
    },
    {
      id: 4,
      title: 'Flexible Appointments',
      desc: 'We offer convenient appointment scheduling to accommodate your busy lifestyle. Your mental health should never be compromised by a hectic schedule.',
      imageUrl: Calendar,
    },
    {
      id: 5,
      title: 'Confidential and Supportive Environment',
      desc: 'Your privacy is our priority. Danicare provides a safe and confidential space where you can openly discuss your concerns',
      imageUrl: Love,
    },
  ];

  return (
    <main className={`container ${styles.containerWhat}`}>
      <h1 className='container'>What We Do</h1>
      <Swiper
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        // scrollbar={{ draggable: true }}
        scrollbar={{ el: '.swiper-scrollbar' }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 3.5,
          },
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        <section>
          {sliderData.map(({ id, title, imageUrl, desc }) => (
            <SwiperSlide key={id}>
              <article className='p-3 mb-5'>
                <figure className='col-2'>
                  <Image src={imageUrl} alt='Love icon' />
                </figure>
                <h4>{title}</h4>
                <p>{desc}</p>
              </article>
            </SwiperSlide>
          ))}
        </section>
      </Swiper>
    </main>
  );
};

export default What;
