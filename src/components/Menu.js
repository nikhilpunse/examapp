import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    const [toggle,setToggle] = useState(false)
   
  return (
    <div className=''>
        {/* Hamberger menu */}
        <div className='bg-slate-200 text-start'>
            {toggle?
                <div >
                    <i onClick={()=>setToggle(!toggle)} className="text-[26px] sm:text-[36px] bi bi-x"></i>
                    <ul className='w-full pl-8 text-[16px] sm:text-[20px] cursor-pointer'>
                        <Link to='/'><li onClick={()=>setToggle(!toggle)} className='p-1'>Home</li></Link>
                        <Link to='/profile'><li onClick={()=>setToggle(!toggle)} className='p-1'>Profile</li></Link>
                        <Link to='/listing'><li onClick={()=>setToggle(!toggle)} className='p-1'>Test Listing</li></Link>
                        <Link to='/instruction1'><li onClick={()=>setToggle(!toggle)} className='p-1'>Start Test</li></Link>
                    </ul>
            </div> 
            : <i onClick={()=>setToggle(!toggle)} className="text-[26px] sm:text-[36px] p-2 bi bi-list"></i>}
            
        </div>
    </div>
  )
}

export default Menu