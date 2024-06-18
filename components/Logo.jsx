'use client';

import Image from 'next/image';
import Link from 'next/link';
//import config from '../next.config.mjs'


const Logo = () => {
  return (
    <div className='container mx-auto'>
      <Link href='https://www.phyathai.com/th/pyt2'>
        <Image src={'/pyt2-logo.svg'} width={140} height={36} alt='Phyathai 2 Hospital' />
      </Link>
    </div>
  )
}

export default Logo