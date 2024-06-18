'use client';
import Image from "next/image";
import Link from "next/link";
//import config from '../next.config.mjs'

const icons = [
  {
    path: 'https://m.facebook.com/Phyathai2HospitaI?mibextid=LQQJ4d',
    image: '/cta/facebook-icon.svg',
  },
  {
    path: 'https://lin.ee/L1DDaDa',
    image: '/cta/line-icon.svg',
  },
  {
    path: 'https://www.instagram.com/phyathai2_hospital',
    image: '/cta/instagram-icon.svg',
  },
  {
    path: 'https://www.tiktok.com/@phyathai2hospital',
    image: '/cta/tiktok-icon.svg',
  },
]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>
              <Image
                src={icon.image}
                width={30}
                height={30}
                alt=''
                priority
              />
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials