'use client';
import Image from 'next/image';
import styles from './what.module.css';
import Love from '../../public/love.svg';
import Medkit from '../../public/medkit.svg';
import Calendar from '../../public/calendar.svg';
import Wallet from '../../public/wallet.svg';
import Contact from '../../public/contact.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

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
        navigation={{
          nextEl: '.swiperBtnNext',
          prevEl: '.swiperBtnPrev',
          disabledClass: 'swiper-button-disabled',
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
        modules={[Autoplay, Navigation, Pagination]}
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

        <sevtion className='d-flex gap-5 justify-content-end col-11 mx-auto'>
          <button className='swiperBtnNext'>
            <svg
              width='70'
              height='70'
              viewBox='0 0 70 70'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                x='0.5'
                y='-0.5'
                width='68.2548'
                height='68.2548'
                rx='34.1274'
                transform='matrix(1 0 0 -1 0.490356 68.2549)'
                stroke='#333132'
              />
              <path
                d='M44.5459 34.6275H25.6897'
                stroke='#333132'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M35.1178 44.0555L25.6897 34.6275L35.1178 25.1994'
                stroke='#333132'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <button className='swiperBtnPrev'>
            <svg
              width='70'
              height='70'
              viewBox='0 0 70 70'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                x='69.5'
                y='68.7549'
                width='68.2548'
                height='68.2548'
                rx='34.1274'
                transform='rotate(-180 69.5 68.7549)'
                stroke='#333132'
              />
              <g clipPath='url(#clip0_465_19450)'>
                <path
                  d='M25.9445 34.6275H44.8006'
                  stroke='#333132'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M35.3726 44.0555L44.8006 34.6275L35.3726 25.1994'
                  stroke='#333132'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_465_19450'>
                  <rect
                    width='32'
                    height='32'
                    fill='white'
                    transform='matrix(0.707107 -0.707107 -0.707107 -0.707107 35.3726 57.2549)'
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </sevtion>
      </Swiper>
    </main>
  );
};

export default What;
