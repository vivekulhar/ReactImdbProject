import React from 'react'

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[60vh] bg-center bg-no-repeat flex items-end"
      style={{
        backgroundImage: `url("https://i0.wp.com/crphiladelphia.com/wp-content/uploads/2021/12/philly-movies-hero-banner.jpg?resize=1536%2C407&ssl=1")`,
      }}
    >
      <div className="text-xl md:text-3xl bg-gray-900 bg-opacity-60 p-4 text-white text-center w-full">
        Random Movies
      </div>
    </div>
  );
}

export default Banner