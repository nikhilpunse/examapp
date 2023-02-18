import React from 'react'
import design from '../image/design.png'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='w-full h-[100vh]  flex justify-center'>
        <div className='border w-[450px] text-center pb-14 h-[100%]'>
            <img className='w-[240px]' src={design}/>
            <p className='text-xl'>Create account</p>

            <input className='border-b-2 w-[320px] mt-4 mb-4' placeholder='Enter Full Name'></input> <br/>
            <input className='border-b-2 w-[320px]  mb-4' placeholder='Enter your Email'></input> <br/>
            <input className='border-b-2 w-[320px]  mb-4' placeholder='Date of birth'></input> <br/>
            <input className='border-b-2 w-[320px]  mb-4' placeholder='State'></input> <br/>
            <input className='border-b-2 w-[320px]  mb-4' placeholder='Number of previous attempt'></input> <br/>
            <input className='border-b-2 w-[320px]  mb-4' placeholder='Language'></input> <br/>
            <button className='text-white bg-gradient-to-b rounded-full px-24 py-2  from-cyan-500 to-blue-700 hover:to-blue-800'>Submit</button>
            <Link to={'/'}><p className='text-[18px] font-semibold my-3'>Already have account? <span className='text-blue-700 underline'>Login here</span></p></Link>
        </div>
    </div>
  )
}

export default Signup