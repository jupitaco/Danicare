import React from 'react';

const Our = ({ styles, sty }) => {
  return (
    <main className={`${sty?.off} ${styles.our} `}>
      <section className='container g-0'>
        <h1>Our areas of expertise</h1>
        <article className='d-flex flex-wrap gap-2'>
          <div data-aos='fade-in' className={styles.ours}>
            <h3>ADHD</h3>
          </div>
          <div className={styles.ours} data-aos='fade-in'>
            <h3>Anxiety</h3>
          </div>
          <div className={styles.ours} data-aos='fade-in'>
            <h3>Insomnia</h3>
          </div>
          <div className={styles.ours} data-aos='fade-in'>
            <h3>OCD</h3>
          </div>
          <div className={styles.ours} data-aos='fade-in'>
            <h3>Depression</h3>
          </div>
          <div className={styles.ours} data-aos='fade-in'>
            <h3>PTSD</h3>
          </div>
          <div className={styles.ours} data-aos='fade-in'>
            <h3>Bipolar Disorder</h3>
          </div>
          <div className={styles.ours} data-aos='fade-in'>
            <h3>Child & Adolescence</h3>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Our;
