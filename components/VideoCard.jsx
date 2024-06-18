import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader } from './ui/card';
import { PlayCircle } from 'lucide-react';

const VideoCard = ({video}) => {
  return (
    <Card className='rounded-[12px] group overflow-hidden relative border my-0 xl:my-10'>
      <CardHeader className='p-0'>
        {/* Video Cover */}
        <div className='relative w-full h-[228px] xl:h-[155px] flex items-center justify-center bg-tertiary'>
          <Image
            className='absolute bottom-2 xl:bottom-0 rounded-none xl:rounded-t-[12px]'
            src={video.image}
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }}
            alt=''
            priority
          />
          {/* Btn Link */}
          <div className='flex'>
            <Link
              href={video.link}
              className='bg-[#1F1F1F] w-[45px] h-[45px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
            >
              <PlayCircle className='text-white w-[30px] h-[30px]' />
            </Link>
          </div>
        </div>
      </CardHeader>
      <div className='xl:w-[280px] h-full px-6 py-4'>
        <Link href={video.link} className='text-[#1F1F1F] hover:text-[#006C5B]'>
          <h4 className='font-ibm_plex_sans_thai py-3 text-[1rem] xl:text-[0.9rem] font-medium leading-6'>{video.name}</h4>
        </Link>
      </div>
    </Card>
  )
}

export default VideoCard