import psychP from "../../public/psychP.png";
import psychBg from "../../public/psychBg.png";
import "./psych.css";
import Image from "next/image";

const Psych = () => {
  return (
    <main className="psy">
      <section className="psyBg">
        <h1>Psychiatry Tailored to Suit You</h1>
        <p>Accessible Mental Health Care for Everyone</p>
        <article>
          <div className="P">
            <Image src={psychP} alt="Illustration" className="ps" />
          </div>
          {/* <Image src={psychBg} alt="Background Illustration" /> */}
        </article>
      </section>
      <section></section>
    </main>
  );
};

export default Psych;
