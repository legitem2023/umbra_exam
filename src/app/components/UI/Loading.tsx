import React from 'react'

const Loading = () => {
  return (
        <div className="flex flex-col gap-4 lg:flex-wrap lg:flex-row">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-full p-4 bg-gray-200 rounded-lg animate-pulse flex-1">
            <div className="h-[150px] bg-gray-300 rounded w-full mt-2"></div>
            <div className="h-[150px] bg-gray-300 rounded w-full mt-2"></div>
            <div className="h-[150px] bg-gray-300 rounded w-full mt-2"></div>
            <div className="h-[150px] bg-gray-300 rounded w-full mt-2"></div>
          </div>
        ))}
      </div>
  )
}

export default Loading