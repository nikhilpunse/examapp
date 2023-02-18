import React from 'react'
import design from '../image/design.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-full h-[100vh]  flex justify-center'>
        <div className='border w-[450px] text-center pb-14 h-[100%]'>
            <img className='w-[350px]' src={design}/>
            <p className='text-xl'>Login here</p>

            <input className='border-b-2 w-[320px] mt-16 mb-6' placeholder='Enter your Email '></input> <br/>
            <Link to={'/instruction1'}><button className='text-white bg-gradient-to-b rounded-full px-24 py-2  from-cyan-500 to-blue-700 hover:to-blue-800'>Login Now</button></Link>
            <Link to={'/signup'}><p className='text-[18px] font-semibold my-3'>New user? <span className='text-blue-700 underline'>Register Now</span></p></Link>
        </div>
    </div>
  )
}

export default Login