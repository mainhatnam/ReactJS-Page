import {
  SearchIcon,
  BellIcon,
  MessageSquareIcon,
  UserIcon,
  MenuIcon,
} from 'lucide-react'
import { memo } from 'react'

function Header() { 
    console.log("Header");
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="font-bold text-xl text-blue-600">QuestFlow</div>
          <div className="hidden md:flex relative">
            <input
              type="text"
              placeholder="Tìm kiếm câu hỏi..."
              className="pl-10 pr-4 py-2 border rounded-md w-64 lg:w-150 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-blue-400 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
            Tim kiem
          </button>
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <SearchIcon className="md:hidden h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <BellIcon className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <MessageSquareIcon className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <UserIcon className="h-5 w-5" />
            </button>
            <button className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
export default memo(Header)