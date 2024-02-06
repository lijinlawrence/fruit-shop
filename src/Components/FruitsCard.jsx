import React, { useState } from 'react'
import Fruit from './Fruit'

const FruitsCard = () => {

  const [fruit,setFruit]=useState([
    {
      id: 1,
      image: '1',
      name: 'Green Grapes',
      price: 100
    },
    {
      id: 2,
      image: '2',
      name: 'Pomegranate',
      price: 200
    },
    {
      id: 3,
      image: '3',
      name: 'Black Grapes',
      price: 250
    },
    {
      id: 4,
      image: '4',
      name: 'Grape Fruit',
      price: 300
    },
    {
      id: 5,
      image: '5',
      name: 'Berry',
      price: 250
    },
    {
      id: 6,
      image: '6',
      name: 'lemon',
      price: 150
    }
  ])
  return (
    <div className=' grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 gap-5 my-16 md:w-5/6 mx-auto'>
        {fruit.map((fruits)=>{
            return(
                <div className=' my-5  '>
                    <Fruit  key={fruits.id} fruits={fruits}/> 
                </div>
            )
        })}
    </div>
  )
}

export default FruitsCard