import React from 'react'
import design from '../image/design.png'

const ListingCard = () => {
  return (
    <div className='m-3 mx-6 w-[380px] shadow-lg rounded-md p-1 sm:p-3'>
       <div className='flex'>
          <img className='w-14 border rounded-lg mx-1' src={design}/>
          <div className=''>
            <p className='font-bold'>Aaj ka maha Pack</p>
            <p className='text-slate-400 text-xs'>Subscibe to live class</p>
            <p>Price: 1800</p>
            <button className='bg-gradient-to-b from-blue-400 to-blue-700 text-white rounded-xl text-[18px] px-2'>Book now</button>
          </div>
       </div> 
    </div>
  )
}

export default ListingCard