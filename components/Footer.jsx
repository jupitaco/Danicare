import styles from './footer.module.css';
import logo from '../public/footerLogo.png';
import Image from 'next/image';
import Facebook from '../public/facebook.svg';
import Twitter from '../public/twitter.svg';
import Linkedin from '../public/linkedin.svg';
import Youtube from '../public/youtube.svg';
import Instagram from '../public/instagram.svg';
import Link from 'next/link';
import If from './HomeComps/If';

const Footer = () => {
  return (
    <section>
      <If />
      <footer className={styles.footer}>
        <main
          className={`container g-0 ${styles.containerFooter} d-flex flex-column flex-md-row`}
        >
          <section className='d-flex justify-content-center align-items-start'>
            <div className={`${styles.let} d-flex flex-column`}>
              <Link href='/'>
                <Image src={logo} alt='Danicare Logo' />
              </Link>
              <address>
                3210 Jamie zapata memorial highway. <br />
                Suite A6 Laredo TX 78043
              </address>
            </div>
          </section>
          <section
            className={`${styles.footerW} d-flex flex-wrap gap-5 mt-5 mt-md-0`}
          >
            <article className=''>
              <h3>Our Solutions</h3>
              <ul>
                <li>
                  {' '}
                  <Link href='/insurance'>Insurance</Link>
                </li>
                <li>
                  {' '}
                  <Link href='/treatment'>Treatment</Link>
                </li>
                <li>
                  {' '}
                  <Link href='/our-psych'>Our Psychiatrist</Link>
                </li>
                <li>
                  {' '}
                  <Link href='/patients'>Patients</Link>
                </li>
                <li>
                  {' '}
                  <Link href='/refer'>Refer a Patient</Link>
                </li>
              </ul>
            </article>
            <article className=''>
              <h3>Resources</h3>
              <ul>
                <li>
                  {' '}
                  <Link href='/faqs'>FAQs</Link>
                </li>
                <li>
                  {' '}
                  <Link href='blog'>Blog</Link>
                </li>
                <li>
                  {' '}
                  <Link href='#'>Anxiety Test</Link>
                </li>
                <li>
                  {' '}
                  <Link href='#'>Depression Test</Link>
                </li>
                <li>
                  {' '}
                  <Link href='#'>ADHD Test</Link>
                </li>
              </ul>
            </article>
            <article className=''>
              <h3>Company</h3>
              <ul>
                <li>
                  {' '}
                  <Link href='about-us'>About Us</Link>
                </li>
                <li>
                  {' '}
                  <Link href='/contact-us'>Contact Us</Link>
                </li>
              </ul>
            </article>
          </section>
          <section className='mt-5 mt-md-0'>
            <h6>Shoot us an email</h6>
            <h2 className='my-2'>
              {' '}
              <a href='mailto: hello@mydanicare.com' className='my-2'>
                hello@mydanicare.com
              </a>
            </h2>
            <h4>Socials</h4>
            <div className={`${styles.icons} mt-2`}>
              <Image src={Instagram} alt='Instagram logo' />
              <Image src={Facebook} alt='Facebook logo' />
              <Image src={Twitter} alt='Twitter logo' />
              <Image src={Linkedin} alt='Linkedin logo' />
              <Image src={Youtube} alt='Youtube logo' />
            </div>
          </section>
        </main>
        {/* <section className={`${styles.pri} mb-3`}>
          <Link href='/privacy'>Privacy Policy</Link>
          <Link href='/tos'>Terms of Use</Link>
        </section> */}
        <hr className='container mb-4 mt-5' />
        <section className={`${styles.copy}`}>
          <p>All rights reserved &copy; 2024 DaniCare</p>
        </section>
      </footer>
    </section>
  );
};

export default Footer;
