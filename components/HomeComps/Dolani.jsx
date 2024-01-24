import Image from 'next/image';
import Dani from '../../public/dolani.png';
import './dolani.css';

const Dolani = () => {
  return (
    <main className='container-dolani'>
      <section className='dolas d-flex flex-column flex-lg-row'>
        <section className='dL order-1 order-lg-0 py-5 '>
          <h6>Our Psychiatrist</h6>
          <h1 className='my-4'>Dolani Ajanaku, M.D</h1>
          <p>
            Welcome to DaniCare Psychiatric Practice! Dr. Dolani Ajanaku, our
            esteemed board-certified Psychiatrist, brings a wealth of expertise
            to our practice, serving a diverse range of individuals seeking
            comprehensive mental health care. With a strong educational
            background, including a B.A. in Biological Sciences from Rutgers
            University and an M.D. from Rutgers University School of Medicine,
            Dr. Ajanaku is dedicated to providing personalized psychiatric care.
          </p>
          <br />
          <p>
            Having completed General Psychiatry Residency at USF/Stony Brook
            University and advanced training in Child and Adolescent Psychiatry
            at Montefiore Medical Center in Bronx, NY, Dr. Ajanaku specializes
            in a holistic approach to mental well-being. DaniCare offers
            comprehensive treatment options tailored to unique goals,
            encompassing meticulous psychiatric evaluation, suitable medical
            assessments, personalized follow-up sessions, discussions on
            lifestyle adjustments, and adept medication management.
          </p>
          <br />
          <p>
            Beyond the credentials, DaniCare understands the diverse needs of
            our clients, serving a wide scope and coverage. Mental well-being is
            our top priority, and DaniCare is committed to creating a warm and
            supportive environment for psychiatric care.
          </p>
          <br />
          <p>
            Thank you for considering DaniCare as your partner in mental health.
            DaniCare looks forward to supporting individuals on the path to a
            healthier and happier life
          </p>
        </section>
        <section className='dR order-0 order-lg-1 '>
          <Image src={Dani} alt='Dolani Ajanaku' />
        </section>
      </section>
    </main>
  );
};

export default Dolani;
