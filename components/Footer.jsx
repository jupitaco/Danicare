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
          className={`container ${styles.containerFooter} d-flex flex-column flex-md-row`}
        >
          <section className='d-flex justify-content-center align-items-start'>
            <div className={`${styles.let} d-flex flex-column`}>
              <Link href='/'>
                <Image src={logo} alt='Danicare Logo' />
              </Link>
              <address>2702 ANEJO DR LAREDO TX 78054</address>
            </div>
          </section>
          <section
            className={`${styles.footerW} d-flex flex-wrap gap-5 mt-5 mt-md-0`}
          >
            <article className=''>
              <h3>Our Solutions</h3>
              <h5>Insurance</h5>
              <h5>Treatment</h5>
              <h5>Our Psychiatrist</h5>
              <h5>Patients</h5>
              <h5>Refer a Patient</h5>
            </article>
            <article className=''>
              <h3>Resources</h3>
              <h5>FAQs</h5>
              <h5>Blog</h5>
              <h5>Anxiety Test</h5>
              <h5>Depression Test</h5>
              <h5>ADHD Test</h5>
            </article>
            <article className=''>
              <h3>Company</h3>
              <h5>About Us</h5>
              <h5>Contact Us</h5>
            </article>
          </section>
          <section className='mt-5 mt-md-0'>
            <h6>Shoot us an email</h6>
            <h2 className='my-2'>
              {' '}
              <a href='mailto: contact@mydanicare.com' className='my-2'>
                contact@mydanicare.com
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
        <section className={styles.pri}>
          <h5>Privacy Policy</h5>
          <h5>Terms of Use</h5>
        </section>
        <section className={styles.copy}>
          <p>All rights reserved &copy; 2024 DaniCare</p>
        </section>
      </footer>
    </section>
  );
};

export default Footer;
