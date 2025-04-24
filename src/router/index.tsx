import { HomePage } from "@/page/home";

interface RouteObject {
    path:string,
    component:React.FC
}

const publicRoutes: RouteObject[] = [
    {path:'/', component: HomePage},
    {path:'/hi',component:()=>{
        return (
            <>
                <h1>Hi</h1>
            </>
        )
    }}
]

  
export {publicRoutes}