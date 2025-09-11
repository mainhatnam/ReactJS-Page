
import { HomeGetApi } from '@/api/home'
import { Filter } from '@/components/common/body/filter'
import { TitleBody } from '@/components/common/body/title'
import Loading from '@/components/common/loading'
import Pagination from '@/components/common/pagination'
import { QuestionCard } from '@/components/home/questioncard'
import { FilterCat } from '@/constants/filter'
import { useQuery } from '@tanstack/react-query'
import { JSX, useState } from 'react'
import { useSearchParams } from 'react-router'
export function HomePage() :JSX.Element {
  // Sample data for questions
    const [searchParams, setSearchParams] = useSearchParams()
    const defaultPage = Number(searchParams.get('page') ?? 1) 
    const [page,setPage] = useState<number>(defaultPage)
    const {data, isLoading} = useQuery({ queryKey: ['home',page], queryFn: () => HomeGetApi(page) })
    
    const pageCurent : number = data?.meta.page || 1
    const lastPage : number = data?.meta.last_page || 1
    

    const handlerPage = (page: number) => {
      setPage(page)
      setSearchParams({ page: page.toString() })
    }
    
  return (
    <main className="flex-1">
       {isLoading && <Loading />}
      <TitleBody title='Tất cả câu hỏi' button={{ text:"Thêm câu hỏi" }}  />
      <Filter count={3001}  nameCount='câu hỏi' filter='bộ lọc' option={FilterCat} />
      <div>
        {data && data.meta.items?.map((question) => (
          <QuestionCard
            key={question.uuid}
            title={question.title}
            content={question.content}
            votes={question.like_count}
            answers={5}
            views={question.view_count}
            tags={[question.slug]}
            author={{ img_user:question.ref_auth.img_user ?? '', name:question.ref_auth.name }}
            time={question.published_at}
          />
        ))}
      </div>
      <Pagination currentPage={pageCurent} displayNumber={3} lastPage={lastPage} onPageChange={handlerPage} ></Pagination>
    </main>
  )
}
