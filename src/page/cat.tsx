import { HomeApi } from '@/api/home';
import { CatCard } from '@/components/cat/cardcat'
import { Filter } from '@/components/common/body/filter'
import { TitleBody } from '@/components/common/body/title'
import { CatApi } from '@/types/cat';
import { useEffect, useState } from 'react';


export const PageCat = () => {
    const [cat, setCats] = useState<CatApi[]>([]);
    useEffect(() => {
        HomeApi(setCats)
        console.log("run useEffect");
        
      }, []);
  return (
    <main className="flex-1">
    <TitleBody title='Tất cả câu hỏi' button={{ text:"Thêm câu hỏi" }}  />
    <Filter count={3001}  nameCount='câu hỏi' filter='bộ lọc' option={[
      {
        key:1,
        val:"Mới nhất"
      },
      {
        key:2,
        val:"Phổ biến nhất"
      },
      {
        key:3,
        val:"Chưa trả lời"
      },
      {
        key:4,
        val:"Nhiều câu trả lời nhất"
      }
    ]} />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1440px] mx-auto px-6">
      {cat.map((v, i) => (
        <CatCard
          key={i}
          name={`meo meo ${v.id}`}
          image={v.url}
          description={`meo meo ${v.id}`}
        />
      ))}
    </div>
    </main>
  )
}
