import Header  from "@/layout/header"
import Sidebar  from "@/layout/sidebar"
import Footer  from "@/layout/footer"
// import { HomePage } from "@/page/home"

function MasterLayout({children}:{children: React.ReactNode} ):React.JSX.Element {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6 flex-1">
          <Sidebar />
          {children}
        </div>
        <Footer /> 
      </div>
    </>
  )
}

export default MasterLayout
