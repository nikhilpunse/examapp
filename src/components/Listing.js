import React from 'react'
import Menu from './Menu'
import ListingCard from './ListingCard'
const Listing = () => {
  return (
    <div>
        <Menu/>
        <div className='flex flex-wrap justify-evenly items-center'>
            <ListingCard/>
            <ListingCard/>
            <ListingCard/>
            <ListingCard/>
            <ListingCard/>
            <ListingCard/>
        </div>
    </div>
  )
}

export default Listing