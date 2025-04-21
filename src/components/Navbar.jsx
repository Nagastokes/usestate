import React from 'react'

function Navbar({value}) {
  return (
    <div className='flex justify-between items-center p-2 px-5 bg-sky-200'>
        <h1 className='font-semibold text-xl'>Music On</h1>
        <div className='flex items-center gap-2 bg-orange-300 rounded-md px-2 py-1 font-semibold'>
        <h1 className='text-lg'>Favorites</h1>
        <h1 className='bg-white rounded-full px-2'>{value.filter(item=>item.isfavorite).length}</h1>
        </div>
    </div>
  )
}

export default Navbar