import { RouteObject } from "@/types/route_app";
import { clientRoutes } from "./client";
import { cmsRoutes } from "./admin";



const client: RouteObject[] = [
    ...clientRoutes,
]

const cms: RouteObject[] = [
    ...cmsRoutes,
]
export {client, cms}