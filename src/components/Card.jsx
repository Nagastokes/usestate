import React from "react";

function Card({values,index,changesong}) {
const{name,composer,image,isfavorite}=values
  return (
    <div className="w-55 bg-white rounded-md  relative pb-6 mt-10">
      <div className="h-24  flex justify-between p-2 gap-5">
        <div className="h-20 w-23 bg-red-500 rounded-md overflow-hidden">
            <img className="w-full h-full object-cover" src={image} alt={name} />
        </div>
        <div>
          <h1 className="font-semibold text-xl leading-none">{name}</h1>
          <h2 className="text-xs mt-1">{composer}</h2>
        </div>
      </div>
      <button onClick={()=>changesong(index)} className={`cursor-pointer px-2 py-1 ${isfavorite?"bg-green-500":"bg-orange-400"} text-white text-sm whitespace-nowrap rounded-full absolute bottom-0 left-1/2 translate-y-[50%] -translate-x-[50%] `}>
        {isfavorite?"Added":"Add To Favourite"}
      </button>
    </div>
  );
}

export default Card;
