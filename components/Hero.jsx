'use client';

import Image from 'next/image';
import Link from 'next/link';
//import config from '../next.config.mjs'

const Hero = () => {
  return (
    <main>
      <div className='w-full'>
        <a href='https://www.phyathai.com/app/DentalCenterPYT2'>
          <Image
            className='hidden xl:flex'
            src={'/hero/Hero-Banner-DentalCenter_DT.jpg'}
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }}
            alt='Hero Banner'
            priority
          />
          <Image
            className='xl:hidden'
            src={'/hero/Hero-Banner-DentalCenter_MB.jpg'}
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }}
            alt='Dental Center Phyathai 2'
            priority
          />
        </a>
      </div>
    </main>
  )
}

export default Hero