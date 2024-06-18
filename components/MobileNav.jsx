import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';

import Nav from './Nav';
import Logo from './Logo';
import Image from 'next/image';
import Link from 'next/link';
//import config from '../next.config.mjs'

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col items-center gap-y-10'>
            <Link href='https://www.phyathai.com/th/pyt2'>
              <Image src={'/pyt-logo-mb.svg'} width={50} height={42} alt='Phyathai 2 Hospital' />
            </Link>
            <Nav
              containerStyles='flex flex-col items-center gap-y-5 font-medium font-ibm_plex_sans_thai'
              linkStyles='text-[16px] cursor-pointer text-[#1F1F1F] hover:text-[#006C5B]'
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav