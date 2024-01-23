"use client";
import Image from "next/image";
import "./what.css";
import Love from "../../public/love.svg";
import Medkit from "../../public/medkit.svg";
import Calendar from "../../public/calendar.svg";
import Wallet from "../../public/wallet.svg";
import Contact from "../../public/contact.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const What = () => {
  return (
    <main className="container container-what">
      <h1>What We Do</h1>
      <Swiper
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
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 3.5,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <section>
          <SwiperSlide>
            <article>
              <div>
                <Image src={Love} alt="Love icon" />
              </div>
              <h4>Personalized Care Plans</h4>
              <p>
                We understand that mental health is unique to each individual.
                Our experts create customized care plans to address your
                specific needs.
              </p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
              <div>
                <Image src={Wallet} alt="Wallet icon" />
              </div>
              <h4>Affordable Options</h4>
              <p>
                Danicare welcomes both insured and uninsured clients. We offer
                competitive rates and accept cash payments to ensure access to
                quality mental health care for all.
              </p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
              <div>
                <Image src={Contact} alt="Contact icon" />
              </div>
              <h4>Experienced Professional</h4>
              <p>
                Licensed psychiatrist with years of experience and expertise to
                guide you on your journey to mental wellness.
              </p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
              <div>
                <Image src={Medkit} alt="Medkit icon" />
              </div>
              <h4>Confidential and Supportive Environment</h4>
              <p>
                Your privacy is our priority. Danicare provides a safe and
                confidential space where you can openly discuss your concerns
              </p>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article>
              <div>
                <Image src={Calendar} alt="Calendar icon" />
              </div>
              <h4>Flexible Appointments</h4>
              <p>
                We offer convenient appointment scheduling to accommodate your
                busy lifestyle. Your mental health should never be compromised
                by a hectic schedule.
              </p>
            </article>
          </SwiperSlide>
        </section>
      </Swiper>
    </main>
  );
};

export default What;
