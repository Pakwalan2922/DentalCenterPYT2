'use client';
import Link from 'next/link';
import { Button } from './ui/button';

// Import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper Styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'

// Import Required Modules
import { Pagination, Autoplay, Grid } from 'swiper/modules'

// Components
import ArticleCard from './ArticleCard';

//import config from '../next.config.mjs'

const articleData = [
  {
    image: '/article/DentalCenter-articles-01.jpg',
    category: 'Dental Center',
    name: 'การผ่าตัดตกแต่งเหงือกเพื่อความสวยงาม',
    description: 'การผ่าตัดตกแต่งเหงือกเพื่อความสวยงาม หรือ Esthetic crown lengthening...',
    link: 'https://www.phyathai.com/th/article/4085-การผ่าตัดตกแต่งเหงือก',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-02.jpg',
    category: 'Dental Center',
    name: 'คืนความสุขให้คุณยิ้มได้ ด้วยรากฟันเทียม',
    description: '"การสูญเสียฟัน" ไม่ว่าจะเกิดจากฟันผุจนต้องถอนฟันซี่นั้นทิ้งไป...',
    link: 'https://www.phyathai.com/th/article/3738-คืนความสุขให้คุณยิ้มไ',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-03.jpg',
    category: 'Dental Center',
    name: 'Anti-Aging กับการจัดฟันที่ทำให้แลดูอ่อนเยาว์',
    description: 'การจัดฟันที่เหมาะสมจะช่วยให้ใบหน้าแลดูอ่อนเยาว์ โดยเฉพาะการเคลื่อนฟันหน้าบน...',
    link: 'https://www.phyathai.com/th/article/3688-anti-aging_กับการจัดฟันที่ทำให้',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-04.jpg',
    category: 'Dental Center',
    name: 'เมื่อไหร่ที่เด็กๆ ต้องไปพบหมอฟันครั้งแรก',
    description: 'คุณพ่อคุณแม่มือใหม่มักมีความสงสัยว่า... เมื่อไหร่นะที่จะต้องพาลูกน้อยไปพบทันตแพทย์...',
    link: 'https://www.phyathai.com/th/article/3681-เมื่อไหร่ที่เด็กๆ_ต้อง',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-05.jpg',
    category: 'Dental Center',
    name: 'ต้องปรับตัวอย่างไรเมื่อเริ่มใส่...เหล็กจัดฟัน',
    description: 'หลังใส่เหล็กดัดฟันหรือเครื่องมือจัดฟัน ลดปวดด้วยยา กับปัญหาการกินอาหาร...',
    link: 'https://www.phyathai.com/th/article/3659-ต้องปรับตัวอย่างไรเมื',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-06.jpg',
    category: 'Dental Center',
    name: 'หลังจัดฟันเสร็จ ทำไมจึงต้องใส่...รีเทนเนอร์',
    description: 'เมื่อผู้เข้ารับบริการได้รับการจัดฟันเสร็จแล้ว ก็ถึงเวลาที่จะต้องถอดเครื่องมือจัดฟันออก...',
    link: 'https://www.phyathai.com/th/article/3658-หลังจัดฟันเสร็จ_ทำไมจึ',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-07.jpg',
    category: 'Dental Center',
    name: 'ถาม-ตอบ 8 ข้อสงสัย ในการถอนฟันคุด',
    description: 'ยาชาจะอยู่ได้นานกี่ชั่วโมง? โดยทั่วไปแล้วยาชาจะอยู่ได้นาน 2-4 ชั่วโมง...',
    link: 'https://www.phyathai.com/th/article/3657-ถาม-ตอบ_8_ข้อสงสัย_ในการถอ',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-08.jpg',
    category: 'Dental Center',
    name: 'ฟันผุ แตก ร้าว ห่าง อุดฟัน เสริมฟันได้ด้วยการทำอินเลย์ ออนเลย์ และครอบฟัน',
    description: 'ทันตกรรมหัตถการ คือ งานทันตกรรมในส่วนของการอุดฟันทั่วไป การอุดฟันที่มีความซับซ้อน...',
    link: 'https://www.phyathai.com/th/article/3654-ฟันผุ_แตก_ร้าว_ห่าง_อุดฟั',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-09.jpg',
    category: 'Dental Center',
    name: 'ฟันสะอาดเรียบ เรียงสวย ด้วยการทำวีเนียร์ (Veneer)',
    description: 'หากคุณมีฟันที่ผิดปกติ จนทำให้ขาดความมั่นใจทุกครั้งที่ต้องยิ้ม ต้องพูด หรือมีการใช้ฟัน...',
    link: 'https://www.phyathai.com/th/article/3650-ฟันสะอาดเรียบ_เรียงสวย_',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-10.jpg',
    category: 'Dental Center',
    name: 'FAQ รักษาคลองรากฟัน รู้ครบ จบทั้งกระบวนการ',
    description: 'อาการปวดฟัน ส่วนมากมักเกิดจากรอยโรคฟันผุ โดยลักษณะอาการปวดขึ้นอยู่กับ...',
    link: 'https://www.phyathai.com/th/article/3648-faq_รักษาคลองรากฟัน_รู้ครบ_',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-11.jpg',
    category: 'Dental Center',
    name: 'รู้จักการทำรากฟันเทียม และการทำสะพานฟันเพื่อทดแทนฟันเดิม',
    description: 'การทดแทนฟันที่สูญเสียฟันไป สามารถใส่ฟันเทียมชนิดติดแน่นแบบใดได้บ้าง?...',
    link: 'https://www.phyathai.com/th/article/3649-รู้จักการทำรากฟันเทีย',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-12.jpg',
    category: 'Dental Center',
    name: 'สะพานฟัน เมื่อไหร่ควรใส่ อย่างไรไม่ควร',
    description: 'การทำสะพานฟัน คือการทำฟันปลอมชนิดติดแน่นรูปแบบหนึ่ง...',
    link: 'https://www.phyathai.com/th/article/3606-สะพานฟัน_เมื่อไหร่ควรใ',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-13.jpg',
    category: 'Dental Center',
    name: 'รู้ขั้นตอนทำรากฟันเทียม เพื่อฟันซี่ใหม่ที่แข็งแรงทนทาน',
    description: 'รากฟันเทียม (Dental Impant) คือการทำฟันเทียมโดยใช้วัสดุทางการแพทย์...',
    link: 'https://www.phyathai.com/th/article/3607-รู้ขั้นตอนทำรากฟันเที',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-14.jpg',
    category: 'Dental Center',
    name: 'ฟันน้ำนมชิดหรือห่าง ที่สร้างปัญหาให้กับเด็ก?',
    description: 'ฟันน้ำนม เป็นชุดฟันที่จะขึ้นครบเมื่อเด็กมีอายุประมาณ 3 ปี...',
    link: 'https://www.phyathai.com/th/article/3537-ฟันน้ำนมชิดหรือห่าง_ที',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-15.jpg',
    category: 'Dental Center',
    name: 'เคลียร์ทุกคำถามเรื่อง "การผ่าตัดกระดูกขากรรไกรร่วมกับการจัดฟัน" ที่คุณควรรู้',
    description: 'การผ่าตัดขากรรไกร หรือเรียกเต็มๆ ว่า "การผ่าตัดขากรรไกรร่วมกับการจัดฟัน"...',
    link: 'https://www.phyathai.com/th/article/3380-เคลียร์ทุกคำถามเรื่อง_',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-16.jpg',
    category: 'Dental Center',
    name: 'ดูแลฟันและสุขภาพในช่องปากอย่างไรในระหว่างการจัดฟัน',
    description: 'ใครๆ ก็อยากมีฟันที่สะอาด สวยงาม และน่ามอง โดยเฉพาะผู้ที่มีปัญหาฟันยื่น ฟันซ้อน...',
    link: 'https://www.phyathai.com/th/article/3484-ดูแลฟันและสุขภาพในช่อ',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-17.jpg',
    category: 'Dental Center',
    name: 'รู้จักกับเทคนิคการรักษาภาวะหยุดหายใจขณะหลับ...ด้วยการผ่าตัดกระดูกขากรรไกรและใบหน้า',
    description: 'ภาวะหยุดหายใจขณะหลับ หนึ่งในปัญหาที่พบได้บ่อย...โดยมักเชื่อมโยงกับผู้ที่มีปัญหา...',
    link: 'https://www.phyathai.com/th/article/3381-รู้จักกับเทคนิคการรัก',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-18.jpg',
    category: 'Dental Center',
    name: 'ยิ้มเห็นเหงือก แก้ไขได้อย่าปล่อยไว้จนขาดความมั่นใจในรอยยิ้ม',
    description: 'รอยยิ้มเป็นสิ่งสำคัญที่เรามักใช้ในการผูกมิตรกับคนรอบตัว แต่ถ้าต้องเจอกับ...',
    link: 'https://www.phyathai.com/th/article/3343-ยิ้มเห็นเหงือก_แก้ไขได',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-19.jpg',
    category: 'Dental Center',
    name: 'การเตรียมตัวก่อนการผ่าตัดฝังรากเทียม',
    description: 'เมื่อมีการสูญเสียฟันเกิดขึ้น การทดแทนฟันด้วยรากเทียมเป็นหนึ่งทางเลือกให้ผู้ป่วย...',
    link: 'https://www.phyathai.com/th/article/3323-การเตรียมตัวก่อนการผ่',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-20.jpg',
    category: 'Dental Center',
    name: 'ผ่าตัดขากรรไกรในยุค NEW NORMAL ปลอดภัยกว่าที่คิด',
    description: 'การผ่าตัดขากรรไกร หรือ oral maxillofacial surgery นั้นโดยมากมักเป็นการผ่าตัด...',
    link: 'https://www.phyathai.com/th/article/3313-_ผ่าตัดขากรรไกรในยุค_new_normal_ป',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-21.jpg',
    category: 'Dental Center',
    name: 'คุณหมอขอตอบ! อยากจัดฟันในช่วง Covid-19 จริงๆ แล้ว...ทำได้หรือไม่?',
    description: 'ในช่วงที่มีไวรัส Covid-19 ระบาดนั้น การให้การรักษาทางทันตกรรม...',
    link: 'https://www.phyathai.com/th/article/3312-คุณหมอขอตอบ__อยากจัดฟัน',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-22.jpg',
    category: 'Dental Center',
    name: 'หาคำตอบ! ทำไมเราจึงควรพบทันตแพทย์ทุกๆ 6 เดือน',
    description: 'ในอดีต..เรามักมีความเชื่ออย่างหนึ่งว่า เมื่ออายุมากขึ้นฟันธรรมชาติในช่องปาก...',
    link: 'https://www.phyathai.com/th/article/3031-หาคำตอบ__ทำไมเราจึงควรพ',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-23.jpg',
    category: 'Dental Center',
    name: 'NEW NORMAL เมื่อต้องผ่าตัดขากรรไกรในช่วงโรคระบาด...ควรทำยังไงดี',
    description: 'การผ่าตัดขากรรไกร หรือ oral maxillofacial surgery นั้นโดยมากมักเป็น...',
    link: 'https://www.phyathai.com/th/article/3295-new_normal_เมื่อต้องผ่าตัดขากรร',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-noImage.jpg',
    category: 'Dental Center',
    name: 'นวัตกรรมการส่องกล้องรักษาคลองรากฟัน วิธีใหม่เพิ่มประสิทธิภาพการรักษา',
    description: 'การรักษาคลองรากฟัน (Root canal treatment) คือ การกำจัดเนื้อเยื่อเส้นประสาทที่ติดเชื้อ...',
    link: 'https://www.phyathai.com/th/article/2082-นวัตกรรมการส่องกล้องร',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-noImage.jpg',
    category: 'Dental Center',
    name: '5 วิธีฟอกสีฟัน ขาวสวยอย่างเป็นธรรมชาติ',
    description: 'เมื่อเราอายุมากขึ้น คราบสีจากอาหารต่างๆ เช่น ชา กาแฟ ไวน์แดง น้ำอัดลม หรือบุหรี่...',
    link: 'https://www.phyathai.com/th/article/1499-5_วิธีฟอกสีฟัน_ขาวสวยอย่',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-noImage.jpg',
    category: 'Dental Center',
    name: 'มั่นใจในรอยยิ้มอีกครั้ง ด้วยเทคนิคเคลือบฟัน "วีเนียร์"',
    description: 'เราเชื่อว่าหลายคนหมดความมั่นใจในการพูดคุย ไม่กล้ายิ้มอย่างเต็มที่ เพราะปัญหา...',
    link: 'https://www.phyathai.com/th/article/2310-มั่นใจในรอยยิ้มอีกครั',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-noImage.jpg',
    category: 'Dental Center',
    name: 'ฟันสวย โครงหน้าเข้ารูป...ด้วยการจัดฟันร่วมกับผ่าขากรรไกร',
    description: 'หากคุณกำลังประสบปัญหาความผิดปกติของฟันอย่างรุนแรง จนถึงขั้นกระทบต่อรูปหน้า...',
    link: 'https://www.phyathai.com/th/article/2413-ฟันสวย_โครงหน้าเข้ารูป___',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-noImage.jpg',
    category: 'Dental Center',
    name: 'ฟันเปลี่ยนสี ฟันแตก แก้ได้ด้วยเทคนิคการทำฟัน “วีเนียร์”',
    description: 'การส่งรอยยิ้มกว้างๆ อาจเป็นเรื่องปกติของหลายคน แต่สำหรับบางคน...',
    link: 'https://www.phyathai.com/th/article/2422-bring_back_your_self-confidence_by_branchpyt2',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-noImage.jpg',
    category: 'Dental Center',
    name: 'จัดฟันแบบดามอน(Damon System)ฟันสวย...ไม่ต้องรอนาน',
    description: 'หากคุณกำลังประสบปัญหาฟันเรียงตัวไม่สวย หรือผิดรูปไปจากปกติ อยากจัดฟัน...',
    link: 'https://www.phyathai.com/th/article/2453-จัดฟันแบบดามอน_damon_system_ฟันสวย_',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-noImage.jpg',
    category: 'Dental Center',
    name: 'บอกลาปัญหาทานอาหารลำบาก ทำความสะอาดฟันยาก ด้วยการจัดฟันแบบใส (Invisalign)',
    description: 'การจัดฟันแบบใส (Invisalign) หรือการจัดฟันแบบไร้เหล็กเทคโนโลยีการจัดฟัน...',
    link: 'https://www.phyathai.com/th/article/2454-บอกลาปัญหาทานอาหารลำบ',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-noImage.jpg',
    category: 'Dental Center',
    name: '‘รากเทียม’ เทคนิคในการแก้ปัญหาการสูญเสียฟันธรรมชาติ',
    description: 'รากเทียมคือเครื่องมือที่คิดค้นขึ้นเพื่อทดแทนการสูญเสียฟันธรรมชาติ...',
    link: 'https://www.phyathai.com/th/article/2546-รากเทียม_เทคนิคในการ',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-32.jpg',
    category: 'Dental Center',
    name: 'Computer-Guided Surgery ฝังรากเทียมได้เร็วและง่ายขึ้นด้วยระบบคอมพิวเตอร์',
    description: 'การทำรากเทียมเป็นวิธีการหนึ่งที่ช่วยรักษาการสูญเสียฟันให้กับผู้ป่วยได้เป็นอย่างดี...',
    link: 'https://www.phyathai.com/th/article/2930-computer-guided_surgery_ฝังรากเทียมได้เร็วแ',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-33.jpg',
    category: 'Dental Center',
    name: 'ผ่าตัดขากรรไกรควบคู่กับการจัดฟัน เพื่อสุขภาพช่องปากและความมั่นใจในบุคลิกภาพ',
    description: 'คนส่วนใหญ่มักจะเข้าใจว่าการผ่าตัดขากรรไกรควบคู่กับการจัดฟัน...',
    link: 'https://www.phyathai.com/th/article/3029-orthognathic__surgery__for_oral_health_and_personality_confidencebranchpyt2',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-34.jpg',
    category: 'Dental Center',
    name: 'จัดฟันร่วมกับผ่าตัดขากรรไกร เพื่อการรักษาและพัฒนาคุณภาพชีวิต',
    description: 'โดยทั่วไป เราทราบกันดีว่า การจัดฟันจะช่วยให้ฟันเรียงตัวได้สวยงาม เคี้ยวอาหารได้...',
    link: 'https://www.phyathai.com/th/article/3222-จัดฟันร่วมกับผ่าตัดขา',
    button: 'อ่านต่อ',
  },
  {
    image: '/article/DentalCenter-articles-noImage.jpg',
    category: 'Dental Center',
    name: 'ทันตกรรมเพื่อความสวยงาม นวัตกรรมเพื่อทางเลือกในการรักษาที่มากขึ้น',
    description: 'ทันตกรรมเพื่อความสวยงาม (Esthetics) คือ นวัตกรรมการรักษาฟันแนวใหม่ที่ทันสมัย...',
    link: 'https://www.phyathai.com/th/article/2081-ทันตกรรมเพื่อความสวยง',
    button: 'อ่านต่อ',
  }
]

const Article = () => {
  return (
    <section id='article' className='relative mt-10'>
      <div className='container mx-auto xl:flex justify-between items-center'>
        {/* Article Head */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center'>
          <h2 className='font-ibm_plex_sans_thai text-[1.4rem] xl:text-[1.8rem] font-bold text-[#1F1F1F] pt-6'>บทความที่เกี่ยวข้อง</h2>
          <p className='text-[1.2rem] text-[#818181] mb-5 xl:mb-[70px]'>Article Related</p>
          <a href='https://www.phyathai.com/th/article/category/medical?center_category=96&hospital=pyt2'>
            <Button className='font-ibm_plex_sans_thai font-normal rounded-full bg-transparent border border-[#1F1F1F] text-[#1F1F1F] hover:text-white hover:bg-[#1F1F1F] hover:border-[#1F1F1F]'>ดูบทความทั้งหมด</Button>
          </a>
        </div>
        {/* Article Slider */}
        <div className='xl:max-w-[900px] xl:relative py-10'>
          <Swiper
            className='h-[500px] xl:h-[950px]'
            slidesPerView={3}
            slidesPerGroupSkip={2}
            grid={{
              rows: 2,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                slidesPerGroup: 3
              },
              480: {
                slidesPerView: 2,
                grid: {
                  rows: 1,
                }
              },
              428: {
                slidesPerView: 1,
                grid: {
                  rows: 1,
                }
              },
              414: {
                slidesPerView: 1,
                grid: {
                  rows: 1,
                }
              },
              390: {
                slidesPerView: 1,
                grid: {
                  rows: 1,
                }
              },
              375: {
                slidesPerView: 1,
                grid: {
                  rows: 1,
                }
              },
              360: {
                slidesPerView: 1,
                grid: {
                  rows: 1,
                }
              }
            }}
            spaceBetween={20}
            modules={[Pagination, Autoplay, Grid]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {articleData.slice(0, 36).map((article, index) => {
              return (
                <SwiperSlide key={index}>
                  <ArticleCard article={article} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Article