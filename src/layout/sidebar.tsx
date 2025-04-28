import {
  HomeIcon,
  LayersIcon,
  TagIcon,
  UsersIcon,
  BookmarkIcon,
} from 'lucide-react'
import { memo } from 'react'
import { Link } from 'react-router'
function Sidebar() {
    console.log("Sidebar");
    
  return (
    <aside className="w-full md:w-64 lg:w-72 shrink-0">
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="flex items-center gap-3 px-3 py-2 text-blue-600 bg-blue-50 font-medium rounded-md"
              >
                <HomeIcon className="h-5 w-5" />
                <span>Trang chủ</span>
              </Link>
            </li>
            <li>
              <Link
                to="/cat"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              >
                <LayersIcon className="h-5 w-5" />
                <span>Chưa trả lời</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              >
                <TagIcon className="h-5 w-5" />
                <span>Tags</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              >
                <UsersIcon className="h-5 w-5" />
                <span>Cộng đồng</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
              >
                <BookmarkIcon className="h-5 w-5" />
                <span>Đã lưu</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="font-medium text-gray-900 mb-3">Chủ đề phổ biến</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            javascript
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            react
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            python
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            java
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            html
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            css
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            nodejs
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            database
          </span>
        </div>
      </div>
    </aside>
  )
}

export default memo(Sidebar)