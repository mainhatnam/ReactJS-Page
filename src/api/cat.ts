import axiosInstance from "@/config/axios";
import { CatApi } from "@/types/cat"

export const CatGetApi  = async (limit:number):Promise<CatApi[]> => { 
    const {data} = await axiosInstance.get<CatApi[]>(`/v1/images/search?limit=${limit}`)
    return data
}