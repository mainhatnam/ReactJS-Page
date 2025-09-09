import React from 'react'
import { BellIcon, SearchIcon, MenuIcon } from 'lucide-react'
interface HeaderProps {
  onMenuClick: () => void
}
const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 lg:px-6">
      <div className="flex items-center">
        <button
          onClick={onMenuClick}
          className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 lg:hidden"
        >
          <MenuIcon size={22} />
        </button>
        <div className="ml-4 relative hidden sm:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="flex items-center">
        <button className="relative p-2 rounded-full text-gray-500 hover:bg-gray-100 mr-2">
          <BellIcon size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
            JD
          </div>
          <span className="ml-2 font-medium text-gray-700 hidden sm:inline-block">
            John Doe
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header