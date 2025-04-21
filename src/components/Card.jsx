import React from 'react'

function Card({value,changefav,index}) {
  const{name,composer,image,isfavorite}=value;
  return (
    <div className='w-55 bg-white p-2  rounded-md relative'>
        <div className='mb-5 flex justify-between gap-5 px-2 py-1'>
            <div className='w-23 h-23 bg-red-300 rounded-md overflow-hidden '>
              <img className='w-full h-full object-cover' src={image} alt={name} />
            </div>
        <div className='flex flex-col items-center justify-center gap-2'>
            <h1 className='text-lg font-semibold leading-none'>{name}</h1>
            <h2 className='text-sm'>{composer}</h2>
        </div>
        </div>
        <button onClick={()=>changefav(index)} className={`cursor-pointer ${isfavorite?"bg-green-400":"bg-orange-400"} whitespace-nowrap rounded-md p-2 text-white text-sm absolute bottom-0 left-1/2 translate-y-[50%] -translate-x-[50%]`}>{isfavorite?"Added":"Add to Favorite"}</button>
    </div>
  )
}

export default Card