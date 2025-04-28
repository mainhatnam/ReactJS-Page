import { PageCat } from "@/page/cat";
import { HomePage } from "@/page/home";

interface RouteObject {
    path:string,
    component:React.FC
}

const publicRoutes: RouteObject[] = [
    {path:'/', component: HomePage},
    {path:'/cat',component:PageCat},
]

  
export {publicRoutes}