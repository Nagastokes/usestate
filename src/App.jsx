import React, { useState } from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

function App() {
  const data = [
    {
      name: "Pahadon Me",
      composer: "Vishal Mishra",
      image: "https://c.saavncdn.com/521/Pahadon-Mein-Hindi-2024-20240105191145-500x500.jpg",
      isfavorite: false,
    },
    {
      name: "Finding Her",
      composer: "Kushagra",
      image: "https://c.saavncdn.com/067/Finding-Her-Hindi-2025-20250104190643-500x500.jpg",
      isfavorite: false,
    },
    {
      name: "Mehrama",
      composer: "Pritam",
      image: "https://a10.gaanacdn.com/gn_img/song/Oxd3xP3gVY/d3xAq99QWg/size_l_1581068929.webp",
      isfavorite: false,
    },
    {
      name: "Sajdaa",
      composer: "Rahat Fateh Ali Khan",
      image: "https://c.saavncdn.com/975/My-Name-Is-Khan-Original-Motion-Picture-Soundtrack-Deluxe-Edition-Hindi-2024-20240722115739-500x500.jpg",
      isfavorite: false,
    },
  ];

  const[val,setval]=useState(data)
  const changesong=(changedindex)=>{
     setval((prev)=> {return prev.map((item,index)=>{if(index ===changedindex) return {...item,isfavorite:!item.isfavorite}
  return item})})
  }

  return (
    <div className='w-full h-screen bg-zinc-300 '>
      <Navbar values={val}/>
      <div className='px-20 flex gap-10 mt-10 flex-wrap'>
      {val.map((items,index)=>(
        <Card values={items} changesong={changesong} index={index}/>
      ))}
      </div>

    </div>
  )
}

export default App