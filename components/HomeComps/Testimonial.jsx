"use client";
import "./testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <main className="testi">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // scrollbar={{ draggable: true }}
        scrollbar={{ el: ".swiper-scrollbar" }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <article className="testi">
            <h1>Testimonials</h1>
            <p>
              “I recommend Talkiatry to anyone that will listen. The benefits
              this network has provided me in such a short time are priceless
              and immeasurable.”
            </p>
            <h6>Dozie Solomon</h6>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="testi">
            <h1>Testimonials</h1>
            <p>
              “I recommend Talkiatry to anyone that will listen. The benefits
              this network has provided me in such a short time are priceless
              and immeasurable.”
            </p>
            <h6>Dozie Solomon</h6>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="testi">
            <h1>Testimonials</h1>
            <p>
              “I recommend Talkiatry to anyone that will listen. The benefits
              this network has provided me in such a short time are priceless
              and immeasurable.”
            </p>
            <h6>Dozie Solomon</h6>
          </article>
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Testimonial;
