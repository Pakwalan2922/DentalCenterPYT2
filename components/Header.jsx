'use client';
import React, { useState, useEffect } from 'react';

// Components
import Logo from './Logo';
// import ThemeToggler from './ThemeToggler';
import Nav from './Nav';
import MobileNav from './MobileNav';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
//import config from '../next.config.mjs'

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Detect Scroll
      setActive(window.scrollY > 100);
    };

    // Add Event Listener
    window.addEventListener('scroll', handleScroll);

    // Clear Event Listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <header className={`${
      active ? 'bg-white py-0 box-border shadow-md fixed top-0 left-0 right-0' : 'bg-none py-0'} w-full z-50 transition-all duration-200`}>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <Logo />
          <div className='flex items-center gap-x-6 w-full justify-end'>
            {/* Nav */}
            <Nav containerStyles='hidden xl:flex gap-x-8 font-medium font-ibm_plex_sans_thai' linkStyles='capitalize cursor-pointer text-[#1F1F1F] hover:text-[#006C5B]' />
            <Link href='tel:+6622014600' className='hover:scale-110 transition-all duration-300'>
              <Image src={'/icons/callcenter-logo.svg'} width={80} height={35} alt='Phyathai Call Center' />
            </Link>
            {/* <a href='https://www.phyathai.com/app/DentalCenterPYT2-EN'>
              <Image src={`/en-icon.svg`} width={20} height={20} alt='Phyathai 2 Dental Center' />
            </a> */}
            {/* <ThemeToggler /> */}
            {/* Mobile Nav */}
            <div className='xl:hidden'>
              <MobileNav containerStyles='xl:hidden' />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header