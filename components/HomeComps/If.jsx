import Image from 'next/image';
import './if.css';
import IfI from '../../public/if.png';

const If = () => {
  return (
    <main className='ifs '>
      <h1 className='container'>
        “If you or someone you know is in a crisis, call 911 or call or text the
        Suicide and Crisis Lifeline at 988”
      </h1>
      <div>
        <Image src={IfI} alt='Illustration' />
      </div>
    </main>
  );
};

export default If;
