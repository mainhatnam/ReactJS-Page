
import { Filter } from '@/components/common/body/filter'
import { TitleBody } from '@/components/common/body/title'
import { QuestionCard } from '@/components/home/questioncard'
export function HomePage() {
  // Sample data for questions
  const questions = [
    {
      id: 1,
      title: 'Làm thế nào để tối ưu hóa hiệu suất của ứng dụng React?',
      content:
        'Tôi đang phát triển một ứng dụng React khá lớn và nhận thấy hiệu suất đang bị giảm sút. Tôi đã thử sử dụng memo và useMemo nhưng vẫn chưa thấy cải thiện đáng kể. Có ai có kinh nghiệm với việc tối ưu hiệu suất React không?',
      votes: 15,
      answers: 3,
      views: 124,
      tags: ['react', 'performance', 'javascript', 'optimization'],
      author: {
        name: 'NguyenVanA',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      },
      time: '2 giờ trước',
    },
    {
      id: 2,
      title: 'Cách xử lý lỗi CORS khi gọi API từ frontend?',
      content:
        "Tôi đang gặp vấn đề với CORS khi gọi API từ ứng dụng React của mình. Backend sử dụng Node.js/Express và tôi đã thêm các header CORS nhưng vẫn không hoạt động. Lỗi hiển thị là 'Access-Control-Allow-Origin missing'. Làm thế nào để khắc phục vấn đề này?",
      votes: 8,
      answers: 5,
      views: 97,
      tags: ['cors', 'api', 'react', 'nodejs', 'express'],
      author: {
        name: 'TranThiB',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      },
      time: '5 giờ trước',
    },
    {
      id: 3,
      title: 'Sự khác biệt giữa useEffect và useLayoutEffect?',
      content:
        'Tôi đang học React Hooks và gặp khó khăn khi hiểu sự khác biệt giữa useEffect và useLayoutEffect. Khi nào thì nên sử dụng cái nào? Tôi đã đọc tài liệu nhưng vẫn chưa nắm rõ các trường hợp sử dụng thực tế.',
      votes: 23,
      answers: 7,
      views: 215,
      tags: ['react', 'hooks', 'useeffect', 'uselayouteffect'],
      author: {
        name: 'LeVanC',
        avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
      },
      time: '1 ngày trước',
    },
    {
      id: 4,
      title:
        'Cách triển khai authentication với JWT trong ứng dụng MERN stack?',
      content:
        'Tôi đang xây dựng một ứng dụng web sử dụng MERN stack (MongoDB, Express, React, Node.js) và cần triển khai hệ thống xác thực người dùng. Tôi muốn sử dụng JWT nhưng không chắc về cách lưu trữ và làm mới token. Có ai có hướng dẫn hoặc mẫu code không?',
      votes: 12,
      answers: 2,
      views: 156,
      tags: ['authentication', 'jwt', 'mern', 'react', 'nodejs'],
      author: {
        name: 'PhamThiD',
        avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
      },
      time: '2 ngày trước',
    },
  ]
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
      <div>
        {questions.map((question) => (
          <QuestionCard
            key={question.id}
            title={question.title}
            content={question.content}
            votes={question.votes}
            answers={question.answers}
            views={question.views}
            tags={question.tags}
            author={question.author}
            time={question.time}
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
