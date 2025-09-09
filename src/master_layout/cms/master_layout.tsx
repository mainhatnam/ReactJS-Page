import Header  from "@/layout/cms/header"
import Sidebar  from "@/layout/cms/sidebar"
import { useState } from "react"

export const CmsMasterLayout: React.FC<{ children: React.ReactNode }> = ({children}:{children: React.ReactNode} ) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  // Mock data
  console.log("CmsMasterLayout")
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-10 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        ></div>
      )}
      {/* Sidebar */}
      <div className={`lg:block ${mobileSidebarOpen ? 'block' : 'hidden'}`}>
        <Sidebar
          collapsed={sidebarCollapsed}
          setCollapsed={setSidebarCollapsed}
        />
      </div>
      {/* Main content */}
      <div
        className={`flex-1 flex flex-col ${sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'}`}
      >
        <Header onMenuClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} />
        {children}
      </div>
    </div>
  )
}


export default CmsMasterLayout
