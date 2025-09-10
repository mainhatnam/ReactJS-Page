
import { HomeGetApi } from '@/api/home'
import { Filter } from '@/components/common/body/filter'
import { TitleBody } from '@/components/common/body/title'
import Loading from '@/components/common/loading'
import { QuestionCard } from '@/components/home/questioncard'
import { useQuery } from '@tanstack/react-query'
import { JSX } from 'react'
import { useSearchParams } from 'react-router'
export function HomePage() :JSX.Element {
  // Sample data for questions
    const [searchParams] = useSearchParams()
    let page : number = 1
    page = Number(searchParams.get('page') ?? page) 
    const {data, isLoading} = useQuery({ queryKey: ['home',page], queryFn: () => HomeGetApi(page) })

    
  return (
    <main className="flex-1">
       {isLoading && <Loading />}
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
      <div className="mt-6 flex justify-center">
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
            Trước
          </button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded-md">
            1
          </button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
            3
          </button>
          <span className="px-2">...</span>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
            12
          </button>
          <button className="px-3 py-1 border rounded-md hover:bg-gray-50">
            Tiếp
          </button>
        </div>
      </div>
    </main>
  )
}
