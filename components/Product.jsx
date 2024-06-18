'use client';
import Image from "next/image";
//import Link from "next/link";
import { IoIosCart } from "react-icons/io";
//import config from '../next.config.mjs'
//import { Button } from 'react-scroll';

const product = [
  {
    image: '/package/Package-Neurology-Center-01.jpg',
    title: 'โปรแกรมคัดกรองความเสี่ยงโรคหลอดเลือดสมอง (Stroke Check)',
    price: '2,500.00 THB',
    link: 'https://www.phyathai.com/th/package/stroke-check-pyt1?utm_source=LP&utm_medium=NeurologyCenterPYT1'
  },
  {
    image: '/package/Package-Neurology-Center-02.jpg',
    title: 'โปรแกรมตรวจสมองก่อนเป็นอัมพาต (Stroke Screening Program)',
    price: '15,900.00 THB',
    link: 'https://www.phyathai.com/th/package/stroke-screening-program-pyt1?utm_source=LP&utm_medium=NeurologyCenterPYT1'
  },
  {
    image: '/package/Package-Neurology-Center-03.jpg',
    title: 'MRI Headache โปรแกรมตรวจวินิจฉัยอาการปวดหัวด้วย MRI',
    price: '13,000.00 THB',
    link: 'https://www.phyathai.com/th/package/mri-headache-pyt1?utm_source=LP&utm_medium=NeurologyCenterPYT1'
  },
  {
    image: '/package/Package-Neurology-Center-04.jpg',
    title: 'โปรแกรมตรวจภาวะสมองเสื่อม หรือภาวะหลงลืม',
    price: '13,000.00 THB',
    link: 'https://www.phyathai.com/th/package/memory-loss-screening-program-pyt1?utm_source=LP&utm_medium=NeurologyCenterPYT1'
  },
  {
    image: '/package/Package-Neurology-Center-05.jpg',
    title: 'โปรแกรมตรวจสมองก่อนเป็นพาร์กินสัน',
    price: '16,500.00 THB',
    link: 'https://www.phyathai.com/th/package/pre-parkinson-pyt1?utm_source=LP&utm_medium=NeurologyCenterPYT1'
  },
  {
    image: '/package/Package-Neurology-Center-06.jpg',
    title: 'โปรแกรมตรวจวินิจฉัยอาการชักที่สาเหตุ',
    price: '20,000.00 THB',
    link: 'https://www.phyathai.com/th/package/seizure-diagnosis-program-pyt1?utm_source=LP&utm_medium=NeurologyCenterPYT1'
  },
  {
    image: '/package/Package-Neurology-Center-07.jpg',
    title: 'โปรแกรมตรวจวินิจฉัยอาการปวดหลังที่สาเหตุ (MRI)',
    price: '7,900.00 THB',
    link: 'https://www.phyathai.com/th/package/diagnostic-program-back-pain-pyt1?utm_source=LP&utm_medium=NeurologyCenterPYT1'
  },
  {
    image: '/package/Package-Neurology-Center-08.jpg',
    title: 'โปรแกรมตรวจวินิจฉัยอาการปวดคอที่สาเหตุ (MRI)',
    price: '7,900.00 THB',
    link: 'https://www.phyathai.com/th/package/diagnostic-program-neck-pain-pyt1?utm_source=LP&utm_medium=NeurologyCenterPYT1'
  },
]

const Product = () => {
  return (
    <section id='package' className='relative my-24 xl:my-36'>
      <div className='container mx-auto xl:flex justify-between items-start'>
        {/* Package Head */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center'>
          <h2 className='font-ibm_plex_sans_thai text-[1.4rem] xl:text-[1.8rem] font-bold text-[#1F1F1F] pt-6'>แพ็กเกจและโปรโมชั่น</h2>
          <p className='text-[1.2rem] text-[#818181] mb-5 xl:mb-[70px]'>Package & Promotion</p>
        </div>
        {/* Package Thumbnail */}
        <div className='xl:max-w-[900px] xl:relative grid grid-cols-2 gap-[20px] xl:gap-[30px] md:grid-cols-3 xl:grid-cols-3'>
          {product.map((product, index) => {
            return (
              <div
                key={index}
                className='max-w-[300px] bg-white shadow-md mx-auto xl:mx-0 group'
              >
                {/* Images */}
                <div className='overflow-hidden rounded-none xl:rounded-t-[12px]'>
                  <a href={product.link}>
                    <Image
                      className='group-hover:scale-110 transition-all duration-300'
                      src={product.image}
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
                  <div className='h-[95px] xl:h-[105px]'>
                    <a href={product.link}>
                      <h3 className='font-ibm_plex_sans_thai text-[0.9rem] xl:text-[1.1rem] font-semibold line-clamp-3 leading-5 xl:leading-6 h-74 overflow-hidden'>{product.title}</h3>
                      <p className='text-[0.9rem] font-medium text-[#71CC98] hover:text-[#1F1F1F] pt-3'>{product.price}</p>
                    </a>
                  </div>
                  <div>
                    <a href={product.link}>
                      <div className='font-ibm_plex_sans_thai font-medium rounded-full bg-transparent border border-[#1F1F1F] text-[#1F1F1F] hover:text-white hover:bg-[#1F1F1F] hover:border-[#1F1F1F] w-[120px] xl:w-[140px] mt-6 py-1 xl:py-2 text-[0.9rem] xl:text-[0.95rem]'>
                        <div className='translate-x-0 hover:translate-x-1 transition-all duration-300 flex flex-row items-center justify-center'>
                          <span className='pt-[3px]'>ซื้อแพ็กเกจ</span><IoIosCart className='ml-[7px]' />
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

export default Product