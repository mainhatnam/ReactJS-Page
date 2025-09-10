import { CatGetApi } from '@/api/cat';
import { CatCard } from '@/components/cat/cardcat'
import { Filter } from '@/components/common/body/filter'
import { TitleBody } from '@/components/common/body/title'
import Loading from '@/components/common/loading';
import { FilterCat } from '@/constants/filter';
import { useQuery } from '@tanstack/react-query';
import { JSX } from 'react';
import { useSearchParams } from 'react-router-dom'

export const PageCat = () : JSX.Element => {
    const [searchParams] = useSearchParams()
    let limit : number = 10
    limit = Number(searchParams.get('limit') ?? limit) 
    const {data, isLoading} = useQuery({ queryKey: ['cat',limit], queryFn: () => CatGetApi(limit) })
    console.log(isLoading);
    
  return (
    
    <main className="flex-1">
    {isLoading && <Loading />}
    <TitleBody title='Tất cả câu hỏi' button={{ text:"Thêm câu hỏi" }}  />
    <Filter count={3001}  nameCount='câu hỏi' filter='bộ lọc' option={FilterCat} />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1440px] mx-auto px-6">
      {data?.map((v, i) => (
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
