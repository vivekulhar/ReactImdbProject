import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[60vh] bg-center flex items-end'style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original//6KErczPBROQty7QoIsaa6wJYXZi.jpg")`,
    }}>
        <div className='text-xl md:text-3xl bg-gray-900 bg-opacity-60 p-4 text-white text-center w-full'>
            Tom and Jerry
        </div>
    </div>
  )
}

export default Banner