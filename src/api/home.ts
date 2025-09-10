import axiosInstance from "@/config/axios";
import { ResponseHomeApi } from "@/types/home";


export const HomeGetApi  = async (page:number): Promise<ResponseHomeApi> => { 
        const { data } = await axiosInstance.get<ResponseHomeApi>(`/v1/post/?page=${page}`);
        console.log("Data:", data);
        return data
}