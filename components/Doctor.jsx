'use client';
import Image from "next/image";
//import Link from "next/link";
import { IoIosPaper } from "react-icons/io";
//import config from '../next.config.mjs'
//import { Button } from 'react-scroll';

const doctor = [
  {
    image: '/doctor/DentalCenter-doctor-01.jpg',
    title: 'ทพ. บริบูรณ์ นาวาเจริญ',
    special: 'ศัลยศาสตร์ช่องปากและแม็กซิโลเฟเชียล',
    link: 'https://www.phyathai.com/th/doctor/dr-borriboon-navacharoen'
  },
  {
    image: '/doctor/DentalCenter-doctor-02.jpg',
    title: 'ทพ. ณัฐพันธุ์ ธนกิจจำรูญ',
    special: 'ปริทันตวิทยา',
    link: 'https://www.phyathai.com/th/doctor/dr-nuttapun-tanakijjumroon-2'
  },
  {
    image: '/doctor/DentalCenter-doctor-03.jpg',
    title: 'ทพ. สมชาย กมลรุ่งวรากุล',
    special: 'ทันตกรรมทั่วไป',
    link: 'https://www.phyathai.com/th/doctor/dr-somchai-kamolroongwarakul'
  },
  {
    image: '/doctor/DentalCenter-doctor-04.jpg',
    title: 'ทพ. โชค เจริญเหรียญ',
    special: 'วิทยาเอ็นโดดอนต์',
    link: 'https://www.phyathai.com/th/doctor/dr-choak-chareoenrien'
  },
  {
    image: '/doctor/DentalCenter-doctor-05.jpg',
    title: 'ทพญ. นภาพร ธรรมวิวัฒน์',
    special: 'ทันตกรรมประดิษฐ์',
    link: 'https://www.phyathai.com/th/doctor/dr-napaporn-thamwiwat'
  },
  {
    image: '/doctor/DentalCenter-doctor-06.jpg',
    title: 'ทพญ. นวภัทร์ ศากรวิมล',
    special: 'ทันตกรรมหัตถการ',
    link: 'https://www.phyathai.com/th/doctor/dr-nawapat-sakornwimon'
  },
  {
    image: '/doctor/DentalCenter-doctor-07.jpg',
    title: 'ทพญ. อลิสา ตาปนานนท์',
    special: 'ทันตกรรมทั่วไป',
    link: 'https://www.phyathai.com/th/doctor/dr-alisa-tapananon'
  },
  {
    image: '/doctor/DentalCenter-doctor-08.jpg',
    title: 'ทพ. เวทัส ศักดิ์เดชยนต์',
    special: 'ศัลยศาสตร์ช่องปากและแม็กซิโลเฟเชียล',
    link: 'https://www.phyathai.com/th/doctor/dr-watus-sakdejayont'
  },
  {
    image: '/doctor/DentalCenter-doctor-09.jpg',
    title: 'ทพ. พงศ์รพี กมลรุ่งวรากุล',
    special: 'ทันตกรรมประดิษฐ์',
    link: 'https://www.phyathai.com/th/doctor/dr-pongrapee-kamolroongwarakul'
  },
]

const Doctor = () => {
  return (
    <section id='doctor' className='relative my-24 xl:my-36'>
      <div className='container mx-auto xl:flex justify-between items-start'>
        {/* Package Head */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center'>
          <h2 className='font-ibm_plex_sans_thai text-[1.4rem] xl:text-[1.8rem] font-bold text-[#1F1F1F] pt-6'>แพทย์ผู้เกี่ยวข้อง</h2>
          <p className='text-[1.2rem] text-[#818181] mb-5 xl:mb-[70px]'>Doctor Related</p>
        </div>
        {/* Package Thumbnail */}
        <div className='xl:max-w-[900px] xl:relative grid grid-cols-2 gap-[20px] xl:gap-[30px] md:grid-cols-3 xl:grid-cols-3'>
          {doctor.map((doctor, index) => {
            return (
              <div
                key={index}
                className='max-w-[300px] bg-white shadow-md mx-auto xl:mx-0 group'
              >
                {/* Images */}
                <div className='overflow-hidden rounded-none xl:rounded-t-[12px]'>
                  <a href={doctor.link}>
                    <Image
                      className='group-hover:scale-110 transition-all duration-300'
                      src={doctor.image}
                      width={0}
                      height={0}
                      sizes='100vw'
                      style={{ width: '100%', height: 'auto' }}
                      alt=''
                      priority
                    />
                  </a>
                </div>
                {/* Package Detail */}
                <div className='pt-[20px] pb-[30px] px-[15px]'>
                  <div className='h-[95px]'>
                    <a href={doctor.link}>
                      <h3 className='font-ibm_plex_sans_thai text-[1rem] xl:text-[1.2rem] font-semibold line-clamp-3 leading-6 xl:leading-7 h-74 overflow-hidden'>{doctor.title}</h3>
                      <p className='text-[1rem] font-light text-[#888888] hover:text-[#71CC98] pt-3'>{doctor.special}</p>
                    </a>
                  </div>
                  <div>
                    <a href={doctor.link}>
                      <div className='font-ibm_plex_sans_thai font-medium rounded-full bg-transparent border border-[#1F1F1F] text-[#1F1F1F] hover:text-white hover:bg-[#1F1F1F] hover:border-[#1F1F1F] w-[120px] xl:w-[140px] mt-6 py-1 xl:py-2 text-[0.9rem] xl:text-[0.95rem]'>
                        <div className='translate-x-0 hover:translate-x-1 transition-all duration-300 flex flex-row items-center justify-center'>
                          <span className='pt-[3px]'>ข้อมูลเพิ่มเติม</span><IoIosPaper className='ml-[7px]' />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Doctor