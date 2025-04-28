import CategoryLink  from "@/components/sidebar/category";
import {
  HomeIcon,
  LayersIcon,
  TagIcon,
  UsersIcon,
  BookmarkIcon,
} from "lucide-react";
import { memo } from "react";

function Sidebar() {
  console.log("Sidebar");
  return (
    <aside className="w-full md:w-64 lg:w-72 shrink-0">
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <nav>
          <ul className="space-y-2">
            <li>
            <CategoryLink Icon={HomeIcon} text="Trang chủ" routerPath="/" />
            </li>
            <li>
            <CategoryLink Icon={LayersIcon} text="Chưa trả lời" routerPath="/cat" />
            </li>
            <li>
            <CategoryLink Icon={TagIcon} text="Tags" routerPath="/#" />
            </li>
            <li>
            <CategoryLink Icon={UsersIcon} text="Cộng đồng" routerPath="/#" />
            </li>
            <li>
            <CategoryLink Icon={BookmarkIcon} text="Đã lưu" routerPath="/#" />
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
  );
}

export default memo(Sidebar);
