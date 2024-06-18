import { IBM_Plex_Sans_Thai, IBM_Plex_Sans_Thai_Looped } from 'next/font/google';
import './globals.css';

// Components
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Theme Provider
import { ThemeProvider } from '@/components/ThemeProvider';

const ibm_plex_sans_thai_looped = IBM_Plex_Sans_Thai_Looped({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm_plex_sans_thai_looped',
});

export const metadata = {
  title: "Phyathai 1 Hospital | Comprehensive Neurology Center",
  description: "ศูนย์สมอง และระบบประสาทครบวงจร โรงพยาบาลพญาไท 1 (Comprehensive Neurology Center)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={ibm_plex_sans_thai_looped.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
