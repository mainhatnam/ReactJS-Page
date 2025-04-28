import { structFilter } from '@/types/common'
import { FilterIcon } from 'lucide-react'

export const Filter = (data: structFilter) => {
    return (
              <div className="bg-white p-4 rounded-lg shadow mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">{data.count} {data.nameCount}</span>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md">
                    <FilterIcon className="h-4 w-4" />
                    <span className="text-sm">{data.filter}</span>
                  </button>
                  <select className="border rounded-md px-3 py-1.5 bg-white text-sm flex-1 sm:flex-none">
                    {data.option.map((v,i) => {
                        return (
                            <option key={i} value={v.key}>{v.val}</option>
                        )
                    })}
                  </select>
                </div>
              </div>
    )
}