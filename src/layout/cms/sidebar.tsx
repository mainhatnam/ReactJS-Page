import React, { useState } from 'react'
import {
  LayoutDashboardIcon,
  FileTextIcon,
  ImageIcon,
  UsersIcon,
  SettingsIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  LogOutIcon,
} from 'lucide-react'

interface SidebarProps {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}
const Sidebar: React.FC<SidebarProps> = ({
  collapsed,
  setCollapsed,
}) => {
  const [activeItem, setActiveItem] = useState('dashboard')
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboardIcon size={20} />,
    },
    {
      id: 'posts',
      label: 'Posts',
      icon: <FileTextIcon size={20} />,
    },
    {
      id: 'media',
      label: 'Media',
      icon: <ImageIcon size={20} />,
    },
    {
      id: 'users',
      label: 'Users',
      icon: <UsersIcon size={20} />,
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon size={20} />,
    },
  ]
  return (
    <div
      className={`h-screen fixed left-0 top-0 z-20 flex flex-col bg-white border-r border-gray-200 transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'}`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
        {!collapsed && (
          <h1 className="text-xl font-bold text-gray-800">CMS Admin</h1>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`p-1.5 rounded-lg hover:bg-gray-100 ${collapsed ? 'mx-auto' : ''}`}
        >
          {collapsed ? (
            <ChevronRightIcon size={18} />
          ) : (
            <ChevronLeftIcon size={18} />
          )}
        </button>
      </div>
      <div className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center px-3 py-2.5 rounded-lg transition-colors ${activeItem === item.id ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {!collapsed && (
                  <span className="ml-3 font-medium">{item.label}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border-t border-gray-200">
        <button
          className={`flex items-center px-3 py-2 w-full rounded-lg text-gray-600 hover:bg-gray-100 ${collapsed ? 'justify-center' : ''}`}
        >
          <LogOutIcon size={20} />
          {!collapsed && <span className="ml-3 font-medium">Logout</span>}
        </button>
      </div>
    </div>
  )
}

export default Sidebar