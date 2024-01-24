import Image from 'next/image';
import styles from './if.module.css';
import IfI from '../../public/if.png';

const If = () => {
  return (
    <main className={`${styles.ifs} text-center`}>
      <hgroup className=' py-4'>
        <h2>
          “If you or someone you know is in a crisis, call 911 or call or text
          the Suicide and Crisis Lifeline at 988”
        </h2>
      </hgroup>
      <div>
        <Image src={IfI} alt='Illustration' />
      </div>
    </main>
  );
};

export default If;
