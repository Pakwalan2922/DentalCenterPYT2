import Socials from './Socials';

const Footer = () => {
  return (
    <footer className='bg-[#EFEFEF33] py-10 mt-14'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          {/* Socials */}
          <Socials
            containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4'
            iconsStyles='text-[20px] hover:scale-110 transition-all duration-300' />
          {/* Copyright */}
          <div className='text-[#9CA3AF] text-[15px]'>
            © 2024 Phyathai Hospital. All Right Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer