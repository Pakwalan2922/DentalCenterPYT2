//import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
//import { Button } from 'react-scroll';


const ArticleCard = ({ article }) => {
  return (
    <Card className='rounded-[12px] group overflow-hidden relative'>
      <CardHeader className='p-0'>
        {/* Article Image */}
        <div className='relative w-full flex items-center justify-center bg-tertiary'>
          <Image
            className='relative bottom-0 rounded-none xl:rounded-t-[12px]'
            src={article.image}
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: 'auto' }}
            alt=''
            priority
          />
        </div>
      </CardHeader>
      <div className='h-full px-6 py-6'>
        <Badge className='text-sm font-medium mb-2 left-5 bg-[#71CC9833] hover:bg-[#71CC9833] text-[#1F1F1F] rounded-[5px]'>{article.category}</Badge>
        <a href={article.link} className='text-[#1F1F1F] hover:text-[#006C5B]'>
          <h4 className='font-ibm_plex_sans_thai pt-3 pb-0 mb-0 text-[1.1rem] font-semibold leading-7 line-clamp-2'>{article.name}</h4>
        </a>
        <a href={article.link} className='text-muted-foreground hover:text-[#1F1F1F]'>
          <p className='text-[0.9rem] line-clamp-2 pt-3 pb-0 leading-6'>{article.description}</p>
        </a>
        <a href={article.link}>
          <div className='font-ibm_plex_sans_thai font-normal rounded-full bg-transparent border border-[#1F1F1F] text-[#1F1F1F] hover:text-white hover:bg-[#1F1F1F] hover:border-[#1F1F1F] w-[80px] mt-6 py-1 text-sm text-center' >{article.button}</div>
        </a>
      </div>
    </Card>
  )
}

export default ArticleCard