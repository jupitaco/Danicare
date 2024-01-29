'use client';
import React, { useState } from 'react';
import styles from './Faq.module.scss';
import Accordion from './Accordion/Accordion';

const FaqComps = ({ title, subTitle, faqData }) => {
  const [toggle, setToggle] = useState({ [1]: true });

  const toggleAccordion = (id) => {
    console.log(id);
    setToggle((prev) => ({ [id]: !prev[id] }));
  };

  return (
    <main className={styles.faq}>
      <hgroup className=' mt-5 text-center '>
        <h1>{title}</h1>
        <p className='my-2'>{subTitle}</p>
      </hgroup>

      <section
        className={`${styles.accordionWrapper}  d-flex flex-column flex-md-row my-5 justify-content-between`}
      >
        <ul className={` ${styles.accordionWrapper} col-12`}>
          {faqData.map(({ id, question, title, subTitle, desc, subDesc }) => (
            <li key={id} className='my-3'>
              <Accordion
                id={id}
                action={() => toggleAccordion(id)}
                question={question}
                title={title}
                subTitle={subTitle}
                desc={desc}
                toggle={toggle}
                subDesc={subDesc}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default FaqComps;
