import { RouteObject } from "@/types/route"
import { JSX } from "react"




const cmsRoutes: RouteObject[] = [
    {path:'/cms', component: ():JSX.Element=> {
        return (
            <>
                <h1>hihi</h1>
            </>
        )
    }},
]

  
export {cmsRoutes}