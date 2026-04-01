import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-50 md:pt-45 w-[80%] md:w-[75%] pl-8 md:pl-20 text-white absolute z-10 h-screen aspect-video  bg-gradient-to-r from-black '>
        <h1 className="text-2xl md:text-5xl font-semibold mb-6">{title}</h1>
      <p className="hidden md:inline-block md:w-full text-lg">{overview}</p>
      <div className="flex gap-2 md:gap-4 mt-8">

      <button className="bg-gray-700 px-3 py-1 md:px-6 md:py-1.5 hover:bg-gray-900 text-lg text-white rounded-md font-semibold">▶︎ Play</button>
      <button className="bg-gray-700 hidden md:inline-block md:px-6 md:py-1.5  hover:bg-gray-900  text-lg text-white rounded-md font-semibold">ⓘ More info</button>
      </div>
    </div>
  )
}

export default VideoTitle