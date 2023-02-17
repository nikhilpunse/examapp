import React, { useState } from 'react'
import instruction from '../image/instruction3.png'
import table from '../image/table.png'
import {Link} from 'react-router-dom'

const Instruction1 = () => {
    const [lang,setLang] = useState('')

  return (
    <div className='relative w-full h-[100vh] overflow-y-scroll text-[15px]'>
        <div className='p-4 bg-blue-200'></div>
        <div className='flex justify-end p-3'>
                <p>View in</p>
                <select className='border border-black' onChange={(e)=>{setLang(e.target.value)}}>
                    <option value='English'>English</option>
                    <option value='Hindi'>Hindi</option>
                </select>
        </div>
        <div className='w-full p-3 flex justify-center items-center'>
            <img className='w-[65vw]' src={instruction}/>
        </div>
        <div className='p-3 w-full'>
            <p></p>
            <p>1.The Question paper is divided into 5 section and all the objective type (MCQ) question.</p>
            <p>2.The section and other details are given below.</p>
        </div>

        <div className='flex justify-center items-center'>
            <img className='my-6' src={table}/>
        </div>
        <div className='p-3 w-full'>
            <p>3.You will be given 90 minutes to attempt 100 questions.</p>
            <p>4.Section I to III is mandatory.</p>
            <p>5.Section IV and Section V are optional. You have to choose one of the sections- Section IV is English Language and Section V is Hindi Language.</p>
            <p>6.While attempting to Section IV or Section V, if you switch from one section to another section, all the responses in the previously attempted optional section will be lost.</p>
            <p>7.Questions will be available in English and Hindi for Section I to III. To see a given question in another language, a candidate can click on the View in drop-down and select the desired language.</p>
        </div>

        <div className='sticky p-1 bottom-0 left-0 w-full bg-slate-100'>
            <div className='flex'>Choose your Default language
                <div className='flex'>
                    <select className='border border-black' onChange={(e)=>{setLang(e.target.value)}}>
                        <option value='English'>English</option>
                        <option value='Hindi'>Hindi</option>
                    </select>
                </div>
            </div>
            <p className='text-red-600'>Please note all question will appear in default language. This language can be changed for a perticular question later on.</p>
            <div className=' m-3 flex items-start'>
                <input type='checkbox'/>
                <p className=''>I have read and understood instruction . All computer hardware allocated to me in proper condition.
                I declare that i am not in possession of / not wearing / not carrying any prohibited gadgets
                like mobile phone, bluetooth devices etc any prohibited material with me in examination hall.
                I agree that in case of not adhering to the instructions. I shall be lieble to be
                debarder from this test and/or to decipline action, which may include ban for future examinations.</p>
            </div>
            <div>
                <button className='border px-4 py-2 text-[18px] border-black rounded ml-20'> Previous </button>
                <Link to='/instruction2'><button className='border px-4 py-2 text-[14px] text-white rounded ml-56 bg-blue-600'> I am  ready to begin </button></Link>
            </div>
        </div>
    </div>
  )
}

export default Instruction1