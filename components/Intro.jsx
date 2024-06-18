import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
//import config from '../next.config.mjs'
import { ChevronRightCircle } from 'lucide-react';

const dentalData1 = [
  {
    icon: <ChevronRightCircle size={20} />,
    title: 'อุดฟัน (Tooth Filling)',
    description: 'ประเภทของการอุดฟัน แบ่งออกเป็น 2 ประเภทหลัก ๆ คือ',
    list1: '1. อุดฟันแบบอมัลกัม เป็นวัสดุอุดฟันแบบดั้งเดิมที่ทำจากส่วนผสมของปรอท เงิน ทองแดง และตะกั่ว มีข้อดีคือราคาไม่แพง แต่มีข้อเสียคืออาจทำให้ฟันสีดำคล้ำลง และอาจมีสารปรอทปนเปื้อนสู่ร่างกายได้',
    list2: '2. อุดฟันสีเหมือนฟัน เป็นวัสดุอุดฟันที่ทำจากเรซินคอมโพสิตหรือเซรามิก มีข้อดีคือสีเหมือนฟันธรรมชาติ ทำให้ฟันดูสวยงาม ไม่คล้ำลงเมื่อเวลาผ่านไป และปลอดภัยต่อสุขภาพ แต่มีข้อเสียคือราคาสูงกว่าอุดฟันแบบอมัลกัม'
  },
  {
    icon: <ChevronRightCircle size={20} />,
    title: 'ขูดหินปูน (Dental Scaling)',
    description: 'การขูดหินปูน เป็นการกำจัดคราบจุลินทรีย์ คราบหินปูนหรือหินน้ำลายบริเวณซี่ฟัน ที่เกิดจากเชื้อแบคทีเรียที่มีการสะสมมาจากเศษอาหาร หรือคราบโปรตีนที่ยังหลงเหลืออยู่ในปากจนเกิดเป็นแผ่นจุลินทรีย์และเมื่อเกิดการสะสมขึ้นเรื่อย ๆ จะกลายเป็นคราบหินปูน',
    list1: '',
    list2: ''
  },
  {
    icon: <ChevronRightCircle size={20} />,
    title: 'เอกซเรย์ทันตกรรม (Dental X-Rays) (สามารถทำได้ทุกหัตถการ)​',
    description: 'การเอกซเรย์ฟันเป็นการใช้รังสีเอกซเรย์ฟัน เพื่อถ่ายภาพช่องปาก โดยเป็นรังสีชนิดเดียวกับที่ใช้เอกซเรย์ทางการแพทย์ เช่น เอกซเรย์ปอด ทรวงอก หรือช่องท้อง แต่จะใช้ปริมาณรังสีที่น้อยกว่า จึงมีความปลอดภัยสูง และมีความเสี่ยงในการเกิดผลข้างเคียงน้อยมาก',
    list1: '',
    list2: ''
  }
]
const dentalData2 = [
  {
    icon: <ChevronRightCircle size={20} />,
    title: 'จัดฟัน (Orthodontics)',
    description: 'การจัดฟันเป็นการรักษาทางทันตกรรมเพื่อจัดเรียงฟันให้อยู่ในตำแหน่งที่เหมาะสม โดยการใช้เครื่องมือจัดฟัน ซึ่งมีหลายประเภท ขึ้นอยู่กับความเหมาะสมของแต่ละบุคคล การจัดฟันสามารถช่วยแก้ไขปัญหาต่างๆ เกี่ยวกับฟันที่ไม่เป็นระเบียบให้เรียงตัวสวยงาม ซึ่งเกิดจากฟันเก (Over Crowding) ภาวะสบลึก (Deep overbite) ภาวะสบเปิดหรือการสบฟันหน้าไม่สนิท (Open bite) ขากรรไกรบนยื่น (Overjet) ขากรรไกรล่างยื่น (Under bite) การสบฟันแบบไขว้ (Cross bite Occlusion) ช่องว่างระหว่างฟัน หรือฟันหน้าห่าง (Diastema)'
  }
]
const dentalData3 = [
  {
    icon: <ChevronRightCircle size={20} />,
    title: 'รักษาคลองรากฟัน (Root canal treatment)',
    description: 'การรักษารากฟันเป็นการกำจัดแบคทีเรียและเนื้อเยื่อในบริเวณคลองรากฟันที่มีรากฟันอักเสบหรือติดเชื้อ รวมทั้งทำความสะอาด และใส่ยาฆ่าเชื้อ เมื่อปราศจากการติดเชื้อ ทันตแพทย์จะอุดคลองรากฟัน และบูรณะฟันขึ้นมาใหม่ด้วยการการรักษาคลองรากฟัน (Root canal treatment) คือ การกำจัดเนื้อเยื่อเส้นประสาทที่ติดเชื้อหรือมีการอักเสบออกจากฟันซี่ที่มีอาการ โดยทำการกรอเปิดช่องทางจากส่วนตัวฟันเข้าไปสู่โพรงประสาทฟันและคลองรากฟันแล้วทำความสะอาดภายในคลองรากฟันร่วมกับการใส่ยาฆ่าเชื้อ หลังจากนั้นจึงทำการอุดคลองรากฟันทั้งหมดด้วยวัสดุอุดคลองรากฟัน'
  }
]
const dentalData4 = [
  {
    icon: <ChevronRightCircle size={20} />,
    title: 'การรักษารากฟันเทียม (Dental Implant)',
    description: '"การสูญเสียฟัน" ไม่ว่าจะเกิดจากฟันผุจนต้องถอนฟันซี่นั้นทิ้งไป หรือฟันหัก ปิ่น จากอุบัติเหตุ หรือจากการเสื่อมสภาพของฝันไปตามวัยก็ตาม ย่อมส่งผลกระทบต่อการเคี้ยวอาหาร โดยเฉพาะในกรณีที่เป็นฟันกรามยิ่งทำให้เกิดปัญหาด้านโภชนาการตามมาได้ง่าย เพราะคุณภาพการเคี้ยวที่ไม่ละเอียดพอ หรือหากเป็นฟันหน้าก็จะส่งผลต่อการกัดอาหาร และยังทำให้หลายคนขาดความมั่นใจในการพูด การยิ้ม และการพบปะเพื่อนฝูง'
  }
]
const dentalData5 = [
  {
    icon: <ChevronRightCircle size={20} />,
    title: 'รักษาโรคเหงือก (Periodontal Disease)',
    description: '"การสูญเสียฟัน" ไม่ว่าจะเกิดจากฟันผุจนต้องถอนฟันซี่นั้นทิ้งไป หรือฟันหัก ปิ่น จากอุบัติเหตุ หรือจากการเสื่อมสภาพของฝันไปตามวัยก็ตาม ย่อมส่งผลกระทบต่อการเคี้ยวอาหาร โดยเฉพาะในกรณีที่เป็นฟันกรามยิ่งทำให้เกิดปัญหาด้านโภชนาการตามมาได้ง่าย เพราะคุณภาพการเคี้ยวที่ไม่ละเอียดพอ หรือหากเป็นฟันหน้าก็จะส่งผลต่อการกัดอาหาร และยังทำให้หลายคนขาดความมั่นใจในการพูด การยิ้ม และการพบปะเพื่อนฝูง'
  },
  {
    icon: <ChevronRightCircle size={20} />,
    title: 'ขูดหินปูน (Dental Scaling)',
    description: 'การขูดหินปูน เป็นการกำจัดคราบจุลินทรีย์ คราบหินปูนหรือหินน้ำลายบริเวณซี่ฟัน ที่เกิดจากเชื้อแบคทีเรียที่มีการสะสมมาจากเศษอาหาร หรือคราบโปรตีนที่ยังหลงเหลืออยู่ในปากจนเกิดเป็นแผ่นจุลินทรีย์และเมื่อเกิดการสะสมขึ้นเรื่อย ๆ จะกลายเป็นคราบหินปูน'
  },
  {
    icon: <ChevronRightCircle size={20} />,
    title: 'เกลารากฟัน (Root Planing)',
    description: 'คือ การกำจัดคราบจุลินทรีย์ คราบหินปูน และสิ่งสกปรกต่างๆ ที่เกาะอยู่ตรงตำแหน่งรากฟันใต้เหงือกให้สะอาด วิธีการจะคล้ายกับการขูดหินปูนทั่วไป แตกต่างกันตรงที่การขูดหินปูนทั่วไปจะกำจัดคราบบริเวณซี่ฟันที่โผล่พ้นเหงือกขึ้นมา แต่การเกลารากฟันจะกำจัดคราบบริเวณใต้เหงือกลงไปประมาณ 3 มิลลิเมตร'
  }
]
const dentalData6 = [
  {
    icon: <ChevronRightCircle size={20} />,
    title: 'วีเนียร์ (Veneer)',
    description: 'การทำวีเนียร์ช่วยแก้ปัญหาฟันรูปร่างผิดปกติ ฟันบิ่น ฟันแตก ฟันเรียงตัวผิดปกติเล็กน้อย ฟันสีผิดปกติ ไม่ว่าจะเป็นฟันตกกระสีขาว ๆ หรือเปลี่ยนสีเป็นสีแถบเทา ๆ'
  }
]
const dentalData7 = [
  {
    icon: <ChevronRightCircle size={20} />,
    title: 'ผ่าตัดขากรรไกร (Orthognathic Surgery)',
    description: 'การผ่าตัดขากรรไกรเป็นการรักษาเพื่อแก้ไขปัญหาความผิดปกติของการสบฟัน รูปร่าง และสัดส่วนของกระดูกขากรรไกร ที่ส่งผลให้รูปหน้าดูผิดปกติ เช่น คางยื่นหรือยาวผิดรูป คางสั้นจนดูไม่มีคาง ใบหน้าดูกลมสั้น ใบหน้าเบี้ยวซ้ายขวาไม่เท่ากัน ฟันหน้าบนยื่นยาวจนหุบปากไม่สนิท ขณะยิ้มเห็นเหงือกมากเกินไป ในผู้ป่วยที่เป็นไม่มากหรือไม่รุนแรงนักยังพอที่จะใช้การจัดฟันช่วยได้ แต่หากมีความรุนแรงมาก จะไม่สามารถแก้ไขได้ด้วยการจัดฟันเพียงอย่างเดียว จะต้องได้รับการผ่าตัดขากรรไกรร่วมด้วย',
    list1: '',
    list2: '',
    list3: '',
    list4: ''
  },
  {
    icon: <ChevronRightCircle size={20} />,
    title: 'ผ่าฟันคุด (Surgical Removal of Impacted Tooth)',
    description: 'ฟันคุดอาจต้องผ่าตัดออก หากมีสาเหตุดังต่อไปนี้',
    list1: '1. ฟันคุดขึ้นผิดตำแหน่ง หรืออยู่ในแนวที่ไม่สามารถขึ้นได้เอง ส่งผลให้ฟันซี่อื่น ๆ เกิดการเอียง หรือเคลื่อนตัวผิดปกติ',
    list2: '2. ฟันคุดทำให้เหงือกอักเสบเรื้อรัง หรือเกิดถุงน้ำหนอง',
    list3: '3. ฟันคุดทำให้เกิดอาการปวดฟัน',
    list4: '4. ฟันคุดมีความเสี่ยงที่จะเกิดการติดเชื้อในโพรงประสาทฟัน'
  },
  {
    icon: <ChevronRightCircle size={20} />,
    title: 'ผ่าฟันฝัง (Embedded Tooth Surgery)',
    description: 'คือ การผ่าตัดเพื่อนำฟันฝังออกจากใต้เหงือกหรือกระดูกขากรรไกร เพื่อลดโอกาสเกิดความเสียหายภายในช่องปากที่มีสาเหตุมาจากฝังตัวอยู่ใต้เหงือกของฟันฝัง การผ่าฟันฝังสามารถแบ่งวัตถุประสงค์หลัก ๆ ออกได้ 2 ข้อ ได้แก่',
    list1: '1. การผ่าฟันฝังเพื่อนำฟันฝังออกจากช่องปาก เหมือนกับการผ่านำฟันคุดหรือฟันที่ซี่ที่เสียหายออกไป',
    list2: '2. การผ่าฟันฝังเพื่อดึงฟันฝังให้กลับมาตั้งอยู่ในตำแหน่งที่เหมาะสม นิยมใช้ในกรณีที่ฟันฝังอยู่ในตำแหน่งสำคัญมาก ๆ และไม่ควรถอนออก',
    list3: '',
    list4: ''
  },
  {
    icon: <ChevronRightCircle size={20} />,
    title: 'ถอนฟัน (Teeth Extraction)',
    description: 'คือ วิธีการรักษาสุขภาพภายในช่องปากรูปแบบหนึ่งโดยการถอนฟันที่ไม่สามารถทำการรักษาได้ หรือฟันที่อาจก่อให้เกิดปัญหาในอนาคตออกจากกระดูกเบ้าฟันจากสาเหตุหลายประการ โดยจะต้องทำภายใต้การดูแลของทันตแพทย์หรือศัลยแพทย์เท่านั้น',
    list1: '',
    list2: '',
    list3: '',
    list4: ''
  }
]
const dentalData8 = [
  {
    icon: <ChevronRightCircle size={20} />,
    title: 'การครอบฟัน (Dental Crown)',
    description: 'การครอบฟัน คือ การบรูณะฟันที่สูญเสียเนื้อออกไปมากเกินกว่าจะสามารถรักษาด้วยวิธีอื่นๆ ได้ หรือฟันที่ผ่านการรักษารากฟันมาแล้ว ครอบฟันทำขึ้นเพื่อคงสภาพเนื้อฟันที่เหลืออยู่ไว้และทดแทนส่วนที่สูญเสียไปเพื่อความคงทนแข็งแรง ในการทำครอบฟันจำเป็นต้องกรอเนื้อฟันออกเพื่อการยึดติดของครอบฟัน การครอบฟันจัดเป็นฟันปลอมแบบติดแน่นที่มีทั้งครอบฟันทั้งซี่ (full crown) และคลุมเพียงบางส่วน (partial crown) โดยทำจากวัสดุหลายประเภทตั้งแต่โลหะ เซรามิก เรซิน เซอร์โคเบีย'
  },
  {
    icon: <ChevronRightCircle size={20} />,
    title: 'ฟันปลอม​ (Tooth denture)',
    description: 'คือฟันและเหงือกที่ถูกประดิษฐ์ขึ้นโดยทันตแพทย์เพื่อทดแทนฟันธรรมชาติที่หายไปของคุณ ฟันปลอมมีทั้งซี่เดียว หลายซี่ หรือทั้งปาก อาจจะเป็นแค่ส่วนของฟัน หรือมีส่วนของเหงือกด้วย'
  }
]
const dentalData9 = [
  {
    icon: <ChevronRightCircle size={20} />,
    title: 'ทันตกรรมสำหรับเด็ก (Pedodontics)',
    description: '',
    list1: '1. การทำความสะอาดฟัน กระพุ้งแก้ม ลิ้น สันเหงือก',
    list2: '2. เทคนิคการแปรงฟันที่ถูกวิธีในเด็กแต่ละช่วงอายุ โดยเมื่อมีฟันน้ำนมขึ้น แนะนำให้ใช้แปรงสีฟันขนนิ่มสำหรับเด็กอายุ 6 เดือน -3 ปี ที่มีหน้าตัดตรง โดยคุณพ่อคุณแม่จะเป็นผู้แปรงฟันให้เด็กในท่าที่เด็กนอนตัก',
    list3: '3. รู้จักลำดับการขึ้นของฟันน้ำนม ปัญหาต่าง ๆ และการป้องกัน',
    list4: '4. การเลือกใช้ยาสีฟันผสมฟลูออไรด์ และวิธีที่ถูกต้องในการใช้',
    list5: '5. แนะนำการเคลือบฟลูออไรด์สำหรับเด็กเพื่อป้องกันฟันผุ',
    list6: '6. ในกรณีที่ฟันซี่ใดมีความเสี่ยงต่อการผุสูง คุณหมออาจแนะนำการเคลือบหลุมร่องฟันให้ด้วย',
    list7: '7. การให้บริการรักษาฟัน การให้คำแนะนำในเรื่องการดูแลและการทำความสะอาดช่องปากและฟันของเด็กในแต่ละช่วงอายุ',
    list8: '8. การป้องกันฟันผุทั้งในฟันน้ำนมและฟันแท้ โดยการเคลือบฟลูออไรด์ และการเคลือบหลุมร่องฟัน',
    list9: '9. การรักษาฟันที่มีรอยผุ ทั้งในฟันน้ำนมและฟันแท้ เช่น การอุดฟัน การรักษารากฟัน การครอบฟัน การถอนฟัน การใส่เครื่องมือกันฟันล้ม',
    list10: '10. การเติบโตและพัฒนาการของฟัน เช่น การกัดฟัน การสบฟัน ฟันซ้อน ฟันเก'
  }
]


const Intro = () => {
  return (
    <section className='py-10 xl:pt-20 xl:pb-10'>
      <div id='home' className='container mx-auto'>
        <h2 className='font-ibm_plex_sans_thai text-[1.4rem] xl:text-[1.8rem] mb-4 xl:mb-12 text-center mx-auto font-bold text-[#1F1F1F] pt-6 pb-1'>ศูนย์ทันตกรรม<br/>(Dental Center)</h2>
        {/* <p className='text-[1rem] text-center mx-auto font-medium text-[#1F1F1F] w-50 xl:w-[650px] mb-8 xl:mb-16'>ตระหนักถึงความสำคัญด้านการให้บริการรักษา ความปลอดภัย และเน้นการให้บริการอย่างมีคุณภาพตามมาตรฐานคุณภาพโรงพยาบาล (HA)</p> */}
        {/* <h3 className='text-[1.1rem] xl:text-[1.4rem] mb-8 xl:mb-16 text-center mx-auto font-semibold text-[#006C5B] py-5'>“Time is Brain” เวลาคือสิ่งเดียวที่จะหนีจาก อัมพาตเฉียบพลัน</h3> */}
        <div className='flex flex-col-reverse xl:flex-row'>
          {/* Image */}
          <div className='xl:flex flex-1 relative justify-center'>
            <Image
              className='object-cover h-[300px] w-full xl:h-[400px] xl:w-[600px] xl:px-5 mx-auto rounded-[20px] xl:rounded-[100px]'
              src={'/Dental-Center-Intro-Image.jpg'}
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: 'auto' }}
              alt='Dental Center' />
          </div>
          {/* Intro */}
          <div className='flex-1 my-4 xl:mt-2'>
            <p className='text-[1rem] text-left mx-auto text-[#1F1F1F] px-5 py-5 w-50 leading-7'>ศูนย์ทันตกรรม รพ.พญาไท 2 ตระหนักถึงความสำคัญด้านการให้บริการทางด้านทันตกรรมครบวงจร และเน้นการให้บริการอย่างมีคุณภาพตามมาตรฐานคุณภาพโรงพยาบาล ( HA ) และมาตรฐาน  ( JCI ) ภายใต้การดูแลจากทีมทันตแพทย์ผู้เชี่ยวชาญเฉพาะทาง</p>
            <p className='text-[1rem] text-left mx-auto text-[#1F1F1F] px-5 w-50 leading-7'>พร้อมด้วยเครื่องมือ และทีมบุคลากรทางการแพทย์ที่ให้การดูแลรักษาแบบครบครัน ศูนย์ทันตกรรม เปิดให้บริการวันจันทร์ - ศุกร์ เวลา 08.00 - 20.00 น. วันเสาร์ - อาทิตย์ และวันหยุดนักขัตฤกษ์ เวลา 08.00 - 17.00 น. ตั้งอยู่บริเวณ ชั้น 2 อาคาร A โรงพยาบาลพญาไท 2 ให้บริการทุกระดับบริการประทับใจ</p>
            {/* <h4 className='text-[1.2rem] mb-8 xl:mb-16 text-center mx-auto font-semibold text-[#006C5B] px-5 py-5 leading-7'>โดยมีสาขาการบริการครบวงจรดังนี้</h4> */}
          </div>
        </div>
      </div>

      <div id='service' className='container mx-auto'>
        <div className='my-8 xl:my-16 text-center mx-auto'>
          <h2 className='font-ibm_plex_sans_thai text-[1.4rem] xl:text-[1.8rem] font-bold text-[#1F1F1F] pt-6'>การบริการครบวงจร</h2>
          <p className='text-[1.2rem] text-[#818181] mb-5 xl:mb-[70px]'>Dental Center Services</p>
        </div>

        {/* Tabs */}
        <div className='flex flex-1 relative justify-center my-[40px]'>
          <Tabs defaultValue='dental1'>
            <TabsList className='font-ibm_plex_sans_thai w-full xl:w-[80%] flex-wrap flex xl:flex-row justify-between mx-auto'>
              <TabsTrigger value='dental1' className='text-[0.9rem] my-2 w-[180px] xl:w-[200px] border rounded-[100px]'>ทันตกรรมทั่วไป</TabsTrigger>
              <TabsTrigger value='dental2' className='text-[0.9rem] my-2 w-[180px] xl:w-[200px] border rounded-[100px]'>ทันตกรรมจัดฟัน</TabsTrigger>
              <TabsTrigger value='dental3' className='text-[0.9rem] my-2 w-[180px] xl:w-[200px] border rounded-[100px]'>ทันตกรรมรักษารากฟัน​</TabsTrigger>
              <TabsTrigger value='dental4' className='text-[0.9rem] my-2 w-[180px] xl:w-[200px] border rounded-[100px]'>ทันตกรรมรากฟันเทียม</TabsTrigger>
              <TabsTrigger value='dental5' className='text-[0.9rem] my-2 w-[180px] xl:w-[200px] border rounded-[100px]'>ทันตกรรมโรคเหงือก</TabsTrigger>
              <TabsTrigger value='dental6' className='text-[0.9rem] my-2 w-[180px] xl:w-[200px] border rounded-[100px]'>เคลือบฟันเทียม</TabsTrigger>
              <TabsTrigger value='dental7' className='text-[0.9rem] my-2 w-[180px] xl:w-[200px] border rounded-[100px]'>ศัลยกรรมช่องปากและฟัน</TabsTrigger>
              <TabsTrigger value='dental8' className='text-[0.9rem] my-2 w-[180px] xl:w-[200px] border rounded-[100px]'>ทันตกรรมประดิษฐ์</TabsTrigger>
              <TabsTrigger value='dental9' className='text-[0.9rem] my-2 w-[180px] xl:w-[200px] border rounded-[100px]'>ทันตกรรมสำหรับเด็ก</TabsTrigger>
            </TabsList>
            {/* Tab Content */}
            <div className='mt-4 flex flex-col justify-center w-full xl:w-[65%] mx-auto border rounded-[20px]'>
              <TabsContent value='dental1'>
                <h4 className='text-[1.3rem] mb-2 text-left mx-auto font-semibold text-[#006C5B] px-5 pt-5 pb-1'>ทันตกรรมทั่วไป​ (General Dentist)</h4>
                <div className='gap-4 mb-6 mx-5'>
                  {dentalData1.map((item, index) => {
                    return (
                      <div className='my-4' key={index}>
                        <div className='flex items-center gap-x-3 mx-auto xl:mx-0 leading-9'>
                          <div className='text-[#006C5B] font-bold'>{item.icon}</div>
                          <div className='text-[1.1rem] text-[#006C5B] font-semibold'>{item.title}</div>
                        </div>
                        <div className='flex flex-col pl-8 leading-8'>{item.description} <br />{item.list1}<br />{item.list2}</div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
              <TabsContent value='dental2'>
                <h4 className='text-[1.3rem] mb-2 text-left mx-auto font-semibold text-[#006C5B] px-5 pt-5 pb-1'>ทันตกรรมจัดฟัน​ (Orthodontics)</h4>
                <div className='gap-4 mb-6 mx-5'>
                  {dentalData2.map((item, index) => {
                    return (
                      <div className='my-4' key={index}>
                        <div className='flex items-center gap-x-3 mx-auto xl:mx-0 leading-9'>
                          <div className='text-[#006C5B] font-bold'>{item.icon}</div>
                          <div className='text-[1.1rem] text-[#006C5B] font-semibold'>{item.title}</div>
                        </div>
                        <div className='flex flex-col pl-8 leading-8'>{item.description}</div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
              <TabsContent value='dental3'>
                <h4 className='text-[1.2rem] mb-2 text-left mx-auto font-semibold text-[#006C5B] px-5 pt-5 pb-1'>ทันตกรรมรักษารากฟัน​ (Endodontic)​ or RCT</h4>
                <div className='gap-4 mb-6 mx-5'>
                  {dentalData3.map((item, index) => {
                    return (
                      <div className='my-4' key={index}>
                        <div className='flex items-center gap-x-3 mx-auto xl:mx-0 leading-9'>
                          <div className='text-[#006C5B] font-bold'>{item.icon}</div>
                          <div className='text-[1.1rem] text-[#006C5B] font-semibold'>{item.title}</div>
                        </div>
                        <div className='flex flex-col pl-8 leading-8'>{item.description}</div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
              <TabsContent value='dental4'>
                <h4 className='text-[1.2rem] mb-2 text-left mx-auto font-semibold text-[#006C5B] px-5 pt-5 pb-1'>ทันตกรรมรากฟันเทียม (Dental Implant)</h4>
                <div className='gap-4 mb-6 mx-5'>
                  {dentalData4.map((item, index) => {
                    return (
                      <div className='my-4' key={index}>
                        <div className='flex items-center gap-x-3 mx-auto xl:mx-0 leading-9'>
                          <div className='text-[#006C5B] font-bold'>{item.icon}</div>
                          <div className='text-[1.1rem] text-[#006C5B] font-semibold'>{item.title}</div>
                        </div>
                        <div className='flex flex-col pl-8 leading-8'>{item.description}</div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
              <TabsContent value='dental5'>
                <h4 className='text-[1.2rem] mb-2 text-left mx-auto font-semibold text-[#006C5B] px-5 pt-5 pb-1'>ทันตกรรมโรคเหงือก</h4>
                <div className='gap-4 mb-6 mx-5'>
                  {dentalData5.map((item, index) => {
                    return (
                      <div className='my-4' key={index}>
                        <div className='flex items-center gap-x-3 mx-auto xl:mx-0 leading-9'>
                          <div className='text-[#006C5B] font-bold'>{item.icon}</div>
                          <div className='text-[1.1rem] text-[#006C5B] font-semibold'>{item.title}</div>
                        </div>
                        <div className='flex flex-col pl-8 leading-8'>{item.description}</div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
              <TabsContent value='dental6'>
                <h4 className='text-[1.2rem] mb-2 text-left mx-auto font-semibold text-[#006C5B] px-5 pt-5 pb-1'>เคลือบฟันเทียม</h4>
                <div className='gap-4 mb-6 mx-5'>
                  {dentalData6.map((item, index) => {
                    return (
                      <div className='my-4' key={index}>
                        <div className='flex items-center gap-x-3 mx-auto xl:mx-0 leading-9'>
                          <div className='text-[#006C5B] font-bold'>{item.icon}</div>
                          <div className='text-[1.1rem] text-[#006C5B] font-semibold'>{item.title}</div>
                        </div>
                        <div className='flex flex-col pl-8 leading-8'>{item.description}</div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
              <TabsContent value='dental7'>
                <h4 className='text-[1.2rem] mb-2 text-left mx-auto font-semibold text-[#006C5B] px-5 pt-5 pb-1'>ศัลยกรรมช่องปากและฟัน</h4>
                <div className='gap-4 mb-6 mx-5'>
                  {dentalData7.map((item, index) => {
                    return (
                      <div className='my-4' key={index}>
                        <div className='flex items-center gap-x-3 mx-auto xl:mx-0 leading-9'>
                          <div className='text-[#006C5B] font-bold'>{item.icon}</div>
                          <div className='text-[1.1rem] text-[#006C5B] font-semibold'>{item.title}</div>
                        </div>
                        <div className='flex flex-col pl-8 leading-8'>{item.description} <br />{item.list1}<br />{item.list2}<br />{item.list3}<br />{item.list4}</div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
              <TabsContent value='dental8'>
                <h4 className='text-[1.2rem] mb-2 text-left mx-auto font-semibold text-[#006C5B] px-5 pt-5 pb-1'>ทันตกรรมประดิษฐ์</h4>
                <div className='gap-4 mb-6 mx-5'>
                  {dentalData8.map((item, index) => {
                    return (
                      <div className='my-4' key={index}>
                        <div className='flex items-center gap-x-3 mx-auto xl:mx-0 leading-9'>
                          <div className='text-[#006C5B] font-bold'>{item.icon}</div>
                          <div className='text-[1.1rem] text-[#006C5B] font-semibold'>{item.title}</div>
                        </div>
                        <div className='flex flex-col pl-8 leading-8'>{item.description}</div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
              <TabsContent value='dental9'>
                <h4 className='text-[1.2rem] mb-2 text-left mx-auto font-semibold text-[#006C5B] px-5 pt-5 pb-1'>ทันตกรรมสำหรับเด็ก</h4>
                <div className='gap-4 mb-6 mx-5'>
                  {dentalData9.map((item, index) => {
                    return (
                      <div className='my-4' key={index}>
                        <div className='flex items-center gap-x-3 mx-auto xl:mx-0 leading-9'>
                          <div className='text-[#006C5B] font-bold'>{item.icon}</div>
                          <div className='text-[1.1rem] text-[#006C5B] font-semibold'>{item.title}</div>
                        </div>
                        <div className='flex flex-col pl-8 leading-8'>{item.description} <br />{item.list1}<br />{item.list2}<br />{item.list3}<br />{item.list4}<br />{item.list5}<br />{item.list6}<br />{item.list7}<br />{item.list8}<br />{item.list9}<br />{item.list10}</div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
    
  )
}

export default Intro
