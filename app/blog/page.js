import React from 'react';
import styles from './Blog.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { blogData } from '@/components/AllData';

function Blog() {
  return (
    <main className={` ${styles.blog}  d-flex flex-column `}>
      <section className={styles.hero}>
        <article className='container'>
          <h1>Blog</h1>

          <p className='my-2'>
            Discover stories and insights to help improve your mental health
          </p>
          <div className='col-12 col-md-7 my-3'>
            <input
              type='search'
              placeholder='Search'
              className='form-control'
            />
          </div>
        </article>
      </section>

      <section
        className={`${styles.blogCardContainer} col-11 col-md-11 mx-auto my-5 py-5`}
      >
        {blogData.map(({ id, title, date, imageUrl }) => (
          <Link
            href='#'
            // href={`blog/${id}`}
            key={id}
            className={`${styles.blogCard} `}
          >
            <figure>
              <Image src={imageUrl} alt='' />
            </figure>
            <div className='d-flex flex-column mt-2'>
              <h5>{title}</h5>
              <small>{date}</small>
              <p>Read more</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Blog;
