import { structTitleBody } from "@/types/common"

export const TitleBody = (data: structTitleBody) => {
    return (
        <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{data.title}</h1>

        {data.button && (
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">
            {data.button.text}
        </button>
        )}

      </div>
    )
}

//Tất cả câu hỏi