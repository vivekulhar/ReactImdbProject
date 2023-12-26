import React from 'react'
import MovieLogo from '../movielogo.png'

function NavBar() {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
      <img src={MovieLogo} className='w-[50px]'/>
      <h3 className='text-blue-400'>Movies</h3>
      <h3 className='text-blue-400'>WatchList</h3>
    </div>
  )
}

export default NavBar