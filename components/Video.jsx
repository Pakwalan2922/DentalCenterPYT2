'use client';
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import VideoCard from './VideoCard';
//import config from '../next.config.mjs'

const videoData = [
  {
    image: '/about/cover_03.jpg',
    category: 'Video แนะนำศูนย์',
    name: 'เพราะเวลาคือหัวใจสำคัญของการรักษา Mobile CT & Stroke Treatment Unit',
    link: 'https://bit.ly/3Oel3xR',
  },
  {
    image: '/about/cover_02.jpg',
    category: 'Video แนะนำศูนย์',
    name: 'เรียกหน่วยรักษาอัมพาตเฉียบพลันเคลื่อนที่ โทร 1772 กด 7',
    link: 'https://bit.ly/3S8qNdA',
  },
  {
    image: '/about/cover_04.jpg',
    category: 'Video จากใจผู้รับบริการ',
    name: 'จากผู้ป่วยติดเตียง สู่ นักวิ่งมาราธอน คุณสุรจิต รักติประกร',
    link: 'https://bit.ly/4bcmgPT',
  },
  {
    image: '/about/cover_01.jpg',
    category: 'Video แนะนำศูนย์',
    name: 'ก้าว..ที่อบอุ่น ENDOSCOPIC SURGERY โรงพยาบาลพญาไท 1',
    link: 'https://bit.ly/4bcEeSr',
  },
]

const uniqueCategories = ['Video ทั้งหมด', ...new Set(videoData.map((item) => item.category))];


const Video = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('Video ทั้งหมด');

  const filterVideos = videoData.filter(video => {
    // If category is 'all videos' return all videos, else filter by category
    return category === 'Video ทั้งหมด'
      ? video
      : video.category === category;
  })

  return (
    <section id='video' className='pt-10'>
      <div className='container mx-auto'>
        {/* Video Head */}
        <div className='mb-8 xl:mb-16 text-center mx-auto'>
          <h2 className='font-ibm_plex_sans_thai text-[1.4rem] xl:text-[1.8rem] font-bold text-[#1F1F1F] pt-6'>วิดีโอที่เกี่ยวข้อง</h2>
          <p className='text-[1.2rem] text-[#818181] mb-5 xl:mb-[70px]'>Video Related</p>
          {/* Tabs */}
          <Tabs defaultValue={category}>
            <TabsList className='font-ibm_plex_sans_thai w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border gap-4'>
              {categories.map((category, index) => {
                return (
                  <TabsTrigger
                    onClick={() => setCategory(category)}
                    value={category}
                    key={index}
                    className='w-[170px] md:w-auto'
                  >
                    {category}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {/* Tabs Content */}
            <div className='w-full flex flex-col xl:flex-row justify-center items-center gap-7'>
              {filterVideos.map((video, index) => {
                return (
                  <TabsContent value={category} key={index}>
                    <VideoCard video={video} />
                  </TabsContent>
                );
              })}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default Video