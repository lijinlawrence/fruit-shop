import React, { useState } from 'react'
import Fruit from './Fruit'
import Divider from './Divider.jsx'

const Specials = () => {
    const [fruit,setFruit]=useState([
        {
          id: 7,
          image: "7",
          name: "Orange",
          price: 100,
        },
        {
          id: 1,
          image: "1",
          name: "Green Grapes",
          price: 100,
        },
        {
          id: 6,
          image: "6",
          name: "lemon",
          price: 150,
        },
      ])
  return (
    <>
    <div className=' w-5/6 mx-auto relative bg-white-400   my-16  '>
       <Divider title={'Season Specials'}  />
    </div>

    <div className=' grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 gap-5 my-16 md:w-5/6 mx-auto'>
        {fruit.map((fruits)=>{
            return(
                <div className=' my-5  '>
                    <Fruit  key={fruits.id} fruits={fruits}/> 
                </div>
            )
        })}
    </div>





    </>
  )
}

export default Specials