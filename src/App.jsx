import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  const data = [
    {
      name: "Softly",
      composer: "Karan Aujla",
      image:
        "https://c.saavncdn.com/538/Making-Memories-English-2023-20230818075015-500x500.jpg",
      isfavorite: false,
    },
    {
      name: "Ranjha",
      composer: "B Praak",
      image:
        "https://c.saavncdn.com/238/Shershaah-Original-Motion-Picture-Soundtrack--Hindi-2021-20210815181610-500x500.jpg",
      isfavorite: false,
    },
    {
      name: "Mehrama",
      composer: "Darshan Raval",
      image:
        "https://c.saavncdn.com/862/Love-Aaj-Kal-Hindi-2020-20200214140423-500x500.jpg",
      isfavorite: false,
    },
    {
      name: "Saiyaan",
      composer: "Kailash Kher",
      image:
        "https://c.saavncdn.com/804/Saiyyan-Trending-Version-Hindi-2023-20230511151041-500x500.jpg",
      isfavorite: false,
    },
    {
      name: "Shikayat",
      composer: "Aur",
      image:
        "https://c.saavncdn.com/433/Shikayat-Hindi-2023-20231214181447-500x500.jpg",
      isfavorite: false,
    },
    {
      name: "Husn",
      composer: "Anuv Jain",
      image:
        "https://c.saavncdn.com/436/Husn-Hindi-2023-20231129054140-500x500.jpg",
      isfavorite: false,
    },
    {
      name: "Apna Bana Le",
      composer: "Sachin-Jigar",
      image:
        "https://c.saavncdn.com/815/Bhediya-Hindi-2023-20230927155213-500x500.jpg",
      isfavorite: false,
    },
    {
      name: "O Maahi",
      composer: "Pritam",
      image:
        "https://c.saavncdn.com/139/Dunki-Hindi-2023-20231220211003-500x500.jpg",
      isfavorite: false,
    },
    {
      name: "Dekhte Dekhte",
      composer: "Atif Aslam",
      image:
        "https://c.saavncdn.com/418/Batti-Gul-Meter-Chalu-Hindi-2018-20250109191005-500x500.jpg",
      isfavorite: false,
    },
    {
      name: "Dekh Lena",
      composer: "Tulsi Kumar",
      image:
        "https://c.saavncdn.com/737/Tum-Bin-2-Full-Hindi-2016-500x500.jpg",
      isfavorite: false,
    },
  ];

  const[val,setval]=useState(data);
  const changefav=(changeindex)=>{
    setval((prev)=>{return prev.map((item,index)=>{if(index===changeindex) return{...item,isfavorite:!item.isfavorite}
  return item})})
  }

  return (
    <div className="w-full h-screen bg-zinc-200">
      <Navbar value={val} />
      <div className="flex px-20 gap-20 justify-center mt-10 flex-wrap">
        {val.map((item, index) => (
          <Card value={item} changefav={changefav} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
