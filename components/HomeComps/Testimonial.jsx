'use client';
import styles from './testimonial.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

const Testimonial = () => {
  return (
    <main className={styles.testi}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={{
          nextEl: '.testBtnNext',
          prevEl: '.testBtnPrev',
          disabledClass: 'swiper-button-disabled',
        }}
        scrollbar={{ el: '.swiper-scrollbar' }}
        modules={[Navigation, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <article className={styles.testi}>
            <h1>Testimonials</h1>
            <p>
              “I recommend DaniCare to anyone that will listen. The benefits
              this network has provided me in such a short time are priceless
              and immeasurable.”
            </p>
            <h6>Dozie Solomon</h6>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={styles.testi}>
            <h1>Testimonials</h1>
            <p>
              “I recommend DaniCare to anyone that will listen. The benefits
              this network has provided me in such a short time are priceless
              and immeasurable.”
            </p>
            <h6>Dozie Solomon</h6>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className={styles.testi}>
            <h1>Testimonials</h1>
            <p>
              “I recommend DaniCare to anyone that will listen. The benefits
              this network has provided me in such a short time are priceless
              and immeasurable.”
            </p>
            <h6>Dozie Solomon</h6>
          </article>
        </SwiperSlide>

        <sevtion className='d-flex gap-5 justify-content-center'>
          <button className='testBtnNext'>
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
                stroke='#E66926'
              />
              <path
                d='M44.5459 34.6275H25.6897'
                stroke='#E66926'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M35.1178 44.0555L25.6897 34.6275L35.1178 25.1994'
                stroke='#E66926'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <button className='testBtnPrev'>
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
                stroke='#E66926'
              />
              <g clipPath='url(#clip0_465_19450)'>
                <path
                  d='M25.9445 34.6275H44.8006'
                  stroke='#E66926'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M35.3726 44.0555L44.8006 34.6275L35.3726 25.1994'
                  stroke='#E66926'
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

export default Testimonial;
