// import NavBar from '@/components/NavBar';
import AOSAnimation from '@/utils/AosInit';
import './globals.css';
import Footer from '@/components/Footer';
import NavBar from '@/components/Navbar/NavBar';

export const metadata = {
  title: 'Danicare',
  description: 'Psychiatry Tailored to Suit You',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        <AOSAnimation>{children}</AOSAnimation>
        <Footer />
      </body>
    </html>
  );
}
