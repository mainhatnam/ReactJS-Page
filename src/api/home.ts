import { CatApi } from "@/types/cat"

export const HomeApi  = async (setCats: React.Dispatch<React.SetStateAction<CatApi[]>>):Promise<void> => {
    const apiKey:string = import.meta.env.VITE_API_KEY
    const res:CatApi[] = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&api_key=${apiKey}`)
    .then(res => res.json())
    setCats(res)
}