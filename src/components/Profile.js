import React from 'react'
import Menu from './Menu'
import logo from '../image/elon musk.jpg'
const Profile = () => {
  return (
    <div>
        <Menu/>
        <div className='flex justify-between  p-3 sm:p-8'>
          <img className='w-[120px] sm:w-[200px] rounded-full' src={logo}/>
          <div className='sm:mt-8'>
            <p className='font-bold'>Richard Arnold</p>
            <p className='text-xs text-slate-600'>Joined april 22, 2022</p>
            <p className=' text-slate-600'>Student</p>
          </div>
        </div>
        <hr/>
        <div className='p-3 sm:p-8'>
          <p className='font-bold my-3'>About</p>
          <div className='sm:px-6'>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
          </div>
        </div>

        <div className='bg-slate-200 p-3 m-2'>
          <p className='font-semibold'>Email</p>
          <p>xyz@gmail.com</p>
        </div>

        <div className='bg-slate-200 p-3 m-2'>
          <p className='font-semibold'>Date of Birth</p>
          <p>29-3-1993</p>
        </div>

        <div className='bg-slate-200 p-3 m-2'>
          <p className='font-semibold'>State</p>
          <p>Maharashtra</p>
        </div>

        <div className='bg-slate-200 p-3 m-2'>
          <p className='font-semibold'>Numbers of previous Attempts</p>
          <p>20</p>
        </div>
    </div>
  )
}

export default Profile