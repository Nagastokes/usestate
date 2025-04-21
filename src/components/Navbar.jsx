import React from 'react'

function Navbar({values}) {
  return (
    <div className='px-4 py-2 flex justify-between items-center'>
        <h1>Orange</h1>
        <div className='px-3 py-1 flex justify-center items-center gap-2 bg-orange-500 rounded-full text-white'>
        <h1>Favourites</h1>
        <h1 className='bg-black px-2 rounded-lg'>{values.filter(item=>item.isfavorite).length}</h1>
        </div>
    </div>
  )
}

export default Navbar