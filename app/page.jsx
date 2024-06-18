// Components
import Article from '@/components/Article';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Doctor from '@/components/Doctor';
//import Product from '@/components/Product';
//import Video from '@/components/Video';
import config from '../next.config.mjs'

export const metadata = {
  title: 'Phyathai 2 Hospital | Dental Center',
  description: 'ศูนย์ทันตกรรม โรงพยาบาลพญาไท 2 (Dental Center)',
  openGraph: {
    title: 'Phyathai 2 Hospital | Dental Center',
    description: 'ศูนย์ทันตกรรม โรงพยาบาลพญาไท 2 (Dental Center)',
    url: 'https://www.phyathai.com/app/DentalCenterPYT2-TH',
    images: [
      {
        url: `${config.basePath}/Featured-Image-DentalCenter.jpg`,
        width: 1200,
        height: 630,
      }
    ]
  }
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Article />
      {/* <Video /> */}
      <Doctor />
      <Contact />
    </main>
  );
}
