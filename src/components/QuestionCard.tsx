import {
  ArrowUpIcon,
  ArrowDownIcon,
  MessageSquareIcon,
  EyeIcon,
} from 'lucide-react'

interface QuestionCardProps {
  title: string
  content: string
  votes: number
  answers: number
  views: number
  tags: string[]
  author: {
    name: string
    avatar: string
  }
  time: string
}
export function QuestionCard({
  title,
  content,
  votes,
  answers,
  views,
  tags,
  author,
  time,
}: QuestionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-5 mb-4">
      <div className="flex gap-4">
        <div className="hidden sm:flex flex-col items-center gap-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ArrowUpIcon className="h-5 w-5 text-gray-500" />
          </button>
          <span className="font-medium text-gray-900">{votes}</span>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ArrowDownIcon className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-medium text-blue-600 hover:text-blue-800 mb-2">
            <a href="#">{title}</a>
          </h2>
          <p className="text-gray-600 mb-3 line-clamp-2">{content}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={author.avatar}
                alt={author.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-sm text-gray-600">
                <span className="text-blue-600 hover:text-blue-800">
                  {author.name}
                </span>{' '}
                đã đăng {time}
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="sm:hidden flex items-center gap-1">
                <ArrowUpIcon className="h-4 w-4" />
                <span>{votes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquareIcon className="h-4 w-4" />
                <span>{answers}</span>
              </div>
              <div className="flex items-center gap-1">
                <EyeIcon className="h-4 w-4" />
                <span>{views}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
