import React from "react";

interface IPagination {
  displayNumber: number
  currentPage: number;
  lastPage: number;
  onPageChange: (page: number) => void; 
}

const Pagination : React.FC<IPagination> = ({ currentPage, displayNumber, lastPage, onPageChange }) => {
    const firstPage : number = 1
    let arrNumberDisplay: (number | string)[] = []
    const limitPage : number = currentPage + displayNumber - 1
    
    if (currentPage > lastPage) {
        currentPage = lastPage
    }
    if (currentPage < firstPage) {
        currentPage = firstPage
    }
    if (firstPage === lastPage || firstPage >= lastPage) {
        arrNumberDisplay = ['previous',firstPage,'next']
        currentPage = firstPage
    } else {
        //lastPage > firstPage
        arrNumberDisplay.push('previous')
        if(currentPage > displayNumber) {
            arrNumberDisplay.push(firstPage)
            arrNumberDisplay.push('...')
        }
        for (let index = 1; index <= displayNumber; index++) {
            if (displayNumber === lastPage) {
                arrNumberDisplay.push(index)
            } else if (limitPage <= lastPage) {
                arrNumberDisplay.push(currentPage + index - 1)
            } else {
                arrNumberDisplay.push(lastPage - displayNumber + index)
            }
        }
        if (limitPage < lastPage) {
            arrNumberDisplay.push('...')
            arrNumberDisplay.push(lastPage)
        }
        arrNumberDisplay.push('next')
    }
   
    return (
        <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-2">
                {arrNumberDisplay.map((v,i) => {
                    if (v === '...') {
                        return (
                            <span className="px-2">...</span>
                        )
                    } else {
                        return (
                            <ButtonPagination currentPage={currentPage} onPageChange={onPageChange} key={i} text={v} style={v === currentPage ? 'px-3 py-1 bg-blue-600 text-white rounded-md' : 'px-3 py-1 border rounded-md hover:bg-gray-100'} />
                        )
                    }
                })}
            </div>
        </div>
    )
}
const ButtonPagination = ({text, style, currentPage, onPageChange} : {text:string | number, currentPage:number,style:string, onPageChange:(page: number) => void}) => {
    let value: number = 0
    if (typeof text === "string") {
        if (text === 'next') {
            value = currentPage + 1
        }else {
            value = currentPage - 1
        }
    }
    if (typeof text === "number") {
        value = text
    }
    return (
          <button className= {style} onClick={() => onPageChange(value)} >
            {text}
          </button>
    )
}

export default Pagination