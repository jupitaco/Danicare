import React from 'react';
import styles from './Help.module.scss';
import FaqComps from '@/components/FaqComp/FaqComps';

export default function Help() {
  return (
    <main className={styles.help}>
      <section className={styles.hero}>
        <article className='container'>
          <h1>How can we help?</h1>
          <div className='col-12 col-md-7 my-3'>
            <input
              type='search'
              placeholder='Search'
              className='form-control'
            />
          </div>
        </article>
      </section>

      <section className=' col-11 col-md-8 mx-auto'>
        <FaqComps />
      </section>
    </main>
  );
}
