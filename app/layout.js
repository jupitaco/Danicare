import AOSAnimation from '@/utils/AosInit';
import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar/NavBar';
import { Inter_Tight, Roboto_Serif } from 'next/font/google';

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-interTight',
  display: 'swap',
});

const robotoSerif = Roboto_Serif({
  subsets: ['latin'],
  variable: '--font-robotoSerif',
  display: 'swap',
});

export const metadata = {
  title: 'Danicare',
  description: 'Psychiatry Tailored to Suit You',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${interTight.variable} ${robotoSerif.variable}`}
    >
      <body>
        <NavBar />
        <AOSAnimation>{children}</AOSAnimation>
        <Footer />
      </body>
    </html>
  );
}
