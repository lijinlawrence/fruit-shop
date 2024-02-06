import React from 'react'

const Fruit = ({fruits}) => {
  return (
    <div className=' w-80  shadow-2xl rounded-2xl overflow-hidden transform hover:scale-110  duration-150 relative group'>
       <img className=' object-cover w-full h-60 ' src={require(`../assests/${fruits.image}.jpeg`)} alt={`${fruits.image}`} />
       <div className=' flex flex-col items-center  h-20 justify-center'>
       <h2 className=' font-display font-bold text-slate-500'>{fruits.name}</h2>
       <h2 className=' text-slate-400'> <span className=' font-bold'>₹</span> {fruits.price}</h2>
       <span className=' text-lime-400 text-sm invisible group-hover:visible'>ADD TO CART</span>
       </div>
       <span className=' absolute top-3 right-3 bg-blue-300 text-sm rounded-lg text-white  px-1 py-1'>1% off</span>
       
    </div>
  )
}

export default Fruit