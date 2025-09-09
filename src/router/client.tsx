import { PageCat } from "@/page/cat"
import { HomePage } from "@/page/home"
import { RouteObject } from "@/types/route"


const clientRoutes: RouteObject[] = [
    {path:'/', component: HomePage},
    {path:'/cat',component: PageCat},
]

  
export {clientRoutes}