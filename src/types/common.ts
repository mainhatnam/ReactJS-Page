export interface structFilter {
    count:number,
    nameCount:string,
    filter:string,
    option:{
        key:string | number,
        val:string | number
    }[]
}

export interface structTitleBody {
    title:string
    button?: {
        text:string
    }
}