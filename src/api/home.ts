import axiosInstance from "@/config/axios";
import { CatApi } from "@/types/cat"

export const HomeApi  = async (setCats: React.Dispatch<React.SetStateAction<CatApi[]>>):Promise<void> => { 
    const {data} = await axiosInstance.get<CatApi[]>(`/v1/images/search?limit=10`)
    console.log(data);
    
    setCats(data)
}