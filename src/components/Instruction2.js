import React, { useState } from 'react'
import instruction from '../image/instruction.png'
import {Link} from 'react-router-dom'

const Instruction2 = () => {
  const [lang,setLang] = useState('')
  return (
    <div className='w-full text-[16px]'>
         <div className='p-4 bg-blue-200'></div>
         <div className='flex justify-end p-3'>
                <p>View in</p>
                <select className='border border-black' onChange={(e)=>{setLang(e.target.value)}}>
                    <option value='English'>English</option>
                    <option value='Hindi'>Hindi</option>
                </select>
        </div>
        <p className='text-center text-xl'>Please read all instruction carefully</p>
        <div className='p-14'>
          <p className='font-semibold my-3'>General Instruction:-</p>
          <p>1. The clock will be set at the server. The countdown timer in the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.</p>
          <p>2. The Question Palette displayed on the right side of screen will show the status of each question using one of the following symbols:</p>
          <img className='m-3' src={instruction}/>
          <p>3. The Marked for Review status for a question simply indicates that you would like to look at that question again.</p>
          <p>4. You can click on your "Profile" image on top right corner of your screen to change the language during the exam for entire question paper. On clicking of Profile image you will get a drop-down to change the question content to the desired language.</p>
          <p>5. You can click on https://g27.digialm.com/ASM/images/Down.png to navigate to the bottom and https://g27.digialm.com/ASM/images/Up.pngto navigate to the top of the question area, without scrolling.</p>
          <p className='font-semibold my-3'>Navigating to a Question:</p>
          <p>7. To answer a question, do the following:</p>
          <div className='p-5'>
            <p>a. Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly. By selecting answer to this question and thereafter going to the next question directly from question palette does NOT save your answer to the current question.</p>
            <p>b. Click on Save & Next to save your answer for the current question and then go to the next question.</p>
            <p>c. Click on Mark for Review & Next to save your answer for the current question, mark it for review, and then go to the next question.</p>
          </div>
          <p className='font-semibold my-3'>Answering a Question :</p>
          <div className='p-5'>
            <p>8. Procedure for answering a multiple choice type question:</p>
            <div className='p-5'>
              <p>a. To select your answer, click on the button of one of the options</p>
              <p>b. To deselect your chosen answer, click on the button of the chosen option again or click on the Clear Response button</p>
              <p>c. To change your chosen answer, click on the button of another option</p>
              <p>d. To save your answer, you MUST click on the Save & Next button</p>
              <p>e. To mark the question for review, click on the Mark for Review & Next button.</p>
            </div>
            <p>9. To change your answer to a question that has already been answered, first select that question for answering and then follow the procedure for answering the question.</p>
          </div>
          <p className='font-semibold my-3'>Navigating through sections:</p>
          <div className='p-5'>
            <p>10. Sections in this question paper are displayed on the top bar of the screen. Questions in a section can be viewed by clicking on the section name. The section you are currently viewing is highlighted.</p>
            <p>11. After clicking the Save & Next button on the last question for a section, you will automatically be taken to the first question of the next section.</p>
            <p>12. You can shuffle between sections and questions anytime during the examination as per your convenience only during the time stipulated.</p>
            <p>13. Candidate can view the corresponding section summary as part of the legend that appears in every section above the question palette.</p>
          </div>
          <p className='font-semibold'>Instruction for images:</p>
          <p className='p-9'>To zoom the image provided in the question roll the cursor over it.</p>
        </div>

        <div className='sticky bottom-0 p-3 flex justify-end mx-3 bg-white'>
          <Link to='/exam'><p className='px-4 py-2 border w-fit text-lg font-semibold'>Next</p></Link>
        </div>
    
    </div>
  )
}

export default Instruction2