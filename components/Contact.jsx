import { RiTimeLine, RiMapPinLine, RiPhoneLine, RiArrowRightSLine } from "react-icons/ri";
//import Link from "next/link";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <div className='container mx-auto flex flex-col xl:flex-row items-start justify-between gap-x-20 mb-0 xl:mb-28'>
      {/* Map */}
      <div className='w-full xl:w-[60%] relative my-8 xl:my-0 h-[300px] xl:h-[400px]'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.140584960131!2d100.53838247576032!3d13.770394386623408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29eaff36c43ff%3A0xfa7be2811d3a6387!2sPhyathai%202%20Hospital!5e0!3m2!1sen!2sth!4v1712640627847!5m2!1sen!2sth"
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: '100%' }}
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      {/* Contact */}
      <div className='w-full xl:w-[40%] relative my-8 xl:my-0 text-left'>
        <h1 className='font-ibm_plex_sans_thai text-[1.4rem] xl:text-[1.8rem] font-bold text-[#1F1F1F] pt-11 xl:pt-0 text-center xl:text-left'>ติดต่อเรา</h1>
        <p className='text-[1.2rem] text-[#818181] mb-[30px] text-center xl:text-left'>Contact us</p>
        {/* Location */}
        <div className='flex justify-start items-center gap-x-5 mb-8'>
          <div className='bg-[#71CC9833] w-[45px] h-[45px] rounded-full flex justify-center items-center hover:scale-110 transition-all duration-200'>
            <RiMapPinLine size={20} className='text-[#71CC98]' />
          </div>
          <div className='font-ibm_plex_sans_thai relative mx-0'>
            <h2 className='text-[16px] font-semibold'>ศูนย์ทันตกรรม</h2>
            <p className='text-[14px]'>โรงพยาบาลพญาไท 2 ชั้น 2 อาคาร A</p>
          </div>
        </div>
        { /* Time Open */ }
        <div className='flex justify-start items-center gap-x-5 mb-8'>
          <div className='bg-[#71CC9833] w-[45px] h-[45px] rounded-full flex justify-center items-center hover:scale-110 transition-all duration-200'>
            <RiTimeLine size={20} className='text-[#71CC98]' />
          </div>
          <div className='font-ibm_plex_sans_thai relative mx-0'>
            <h2 className='text-[16px] font-semibold'>เวลาทำการ</h2>
            <p className='text-[14px]'>วันจันทร์ – วันศุกร์ เวลา 08.30 – 20.00 น.<br />วันเสาร์ – วันอาทิตย์ เวลา 08.30 – 17.00 น.</p>
          </div>
        </div>
        { /* Phone call */ }
        <div className='flex justify-start items-center mb-0'>
          <a href='tel:+6626172444' className='flex gap-x-5'>
            <div className='bg-[#71CC9833] w-[45px] h-[45px] rounded-full flex justify-center items-center hover:scale-110 transition-all duration-200'>
              <RiPhoneLine size={20} className='text-[#71CC98]' />
            </div>
            <div className='font-ibm_plex_sans_thai relative mx-0'>
              <h2 className='text-[16px] font-semibold'>เบอร์โทรศัพท์</h2>
              <p className='text-[14px]'>02-617-2444 ต่อ 4221 - 4223</p>
            </div>
          </a>
        </div>
        {/* Contact Button */}
        <div className='w-full relative mt-4 mb-0 text-center xl:text-left'>
          <a href='https://www.phyathai.com/th/about/pyt2/contact'>
            <Button className='font-ibm_plex_sans_thai font-medium rounded-full bg-transparent border border-[#1F1F1F] text-[#1F1F1F] hover:text-white hover:bg-[#1F1F1F] hover:border-[#1F1F1F] w-[120px] xl:w-[140px] mt-6 py-1 xl:py-2 text-[0.9rem] xl:text-[0.95rem]'>
              <div className='translate-x-0 hover:translate-x-1 transition-all duration-100 flex flex-row items-center justify-center'>
                <span className='pt-[3px]'>ติดต่อเรา</span><RiArrowRightSLine className='ml-[7px]' />
              </div>
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact