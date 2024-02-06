import React, { useState } from 'react'



const Filters = () => {
    const [selectedItem, setSelctedItem]=useState(1)
  return (
    <div className=' w-[60%] mx-auto flex justify-around flex-col md:flex-row    mt-20'>
        <button onClick={()=>setSelctedItem(1)} className={`btnStyle ${selectedItem==1?' bg-green-500 text-white ':'  text-slate-500'}`}>Latest</button>
        <button onClick={()=>setSelctedItem(2)} className={`btnStyle  ${selectedItem==2?' bg-green-500 text-white ':' text-slate-500'} `}>Best Seller</button>
        <button onClick={()=>setSelctedItem(3)} className={`btnStyle  ${selectedItem==3?' bg-green-500 text-white ':' text-slate-500'} `}>Special</button>
    </div>
  )
}

export default Filters