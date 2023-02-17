import React, { useEffect, useState } from "react";
import logo from "../image/personlogo.png";
import boximg from '../image/instruction2.png' 
import Box from "./Box";

const Testpage = () => {
  const [min,setMin] = useState(90)
  const [sec,setSec] = useState(60)
  const [toggle,setToggle] =useState(false)

  useEffect(()=>{
    
    if(sec>=0 && min >=0){ 
      setTimeout(()=>{
        if(sec == 0 && min == 0){
          return
        }
        setSec(sec - 1)
        if(sec == 0){
          setSec(60)
          setMin(min - 1)
        }
    },1000)
  }
  },[sec])

  return (
    <div className="text-[14px]">
        <div className="flex justify-between items-center bg-slate-700 text-white text-[14px] px-3">
          <div className="text-yellow-300 py-1">
            constable GD in CAPFs NIA SSF and refleman GD in Assam Reflec
            examination 2021
          </div>
          <p>
            <span className="rounded-[15px] bg-blue-400 text-white p-[0px] px-[8px] mx-1">
              i
            </span>{" "}
            View Instruction
          </p>
        </div>

        <div className="flex">
          <div className="w-full">
            <div className="flex justify-between px-2 py-2 bg-slate-200">
              <i className="bi bi-caret-left"></i>
              <i className="bi bi-caret-right"></i>
            </div>
            <div className="flex justify-between py-1 px-2">
              Section [Attemp 1 of the 2 option section. Please click on the
              check box to attemt the section]
              <p className="font-bold">Time Left: {min}:{sec} </p>
            </div>
            <div className="flex justify-between font-medium text-[13px] w-full">
              
              <div className="flex w-full ">
                <div className="border px-3 py-1">
                  <i className="bi bi-caret-left"></i>{" "}
                </div>
                <div className="border px-3 py-1 text-white bg-blue-400">
                  {" "}
                  Part A General Intel...{" "}
                  <span className="rounded-[15px] bg-blue-500 text-white p-[0px] px-[8px] mx-1">
                    i
                  </span>
                </div>
                <div className="border px-3 py-1 text-blue-700">
                  {" "}
                  Part B General Knowl...
                  <span className="rounded-[15px] bg-blue-400 text-white p-[0px] px-[8px] mx-1">
                    i
                  </span>
                </div>
                <div className="border px-3 py-1 text-blue-700">
                  Part C Elementary Ma...
                  <span className="rounded-[15px] bg-blue-400 text-white p-[0px] px-[8px] mx-1">
                    i
                  </span>
                </div>
                <div className="border px-3 py-1 text-blue-700">
                  {" "}
                  <input type={"checkbox"} /> Part D English{" "}
                  <span className="rounded-[15px] bg-blue-400 text-white p-[0px] px-[8px] mx-1">
                    i
                  </span>
                </div>
                <div className="border px-3 py-1 text-blue-700">
                  <input type={"checkbox"} /> Part E Hindi{" "}
                  <span className="rounded-[15px] bg-blue-400 text-white p-[0px] px-[8px] mx-1">
                    i
                  </span>
                </div>
                {/* right arrow */}
                <div className="flex justify-end border px-3 py-1 w-[11vw]">
                  <i className=" bi bi-caret-right"></i>
                </div>
              </div>
            </div>
            <div className="flex justify-end py-1">
              <p>Marks for correct answer 1 | Negative Marks 0.25</p>
            </div>
          </div>
          <div className="flex p-1 w-[330px]">
            <img src={logo} />
            <p className="mx-3">John Smith</p>
          </div>
        </div>

        <div>
          
        </div>
        
        

        <div className="flex justify-between w-[100vw]">
            {/* question components */}
          <div className="w-full">
            <div className="flex justify-end bg-blue-500 text-white p-1">
              <div>
                View in{" "}
                <span className="bg-white text-black text-base px-2">
                  English
                </span>
              </div>
            </div>
            <div className="border p-1 text-sm">Question No.1</div>
            <div className="p-5 text-sm h-[50vh]">
              Five Students took part in cycling competition. Robert Finish before{" "}
              <br />
              Monish but behind gunjan.Anil finish before sunil but behind
              monish.Who won the competition.
              <div>
                <div className="my-2">
                  <input
                    className="cursor-pointer"
                    name="ans1"
                    type={"radio"}
                  ></input>
                  <span>Moniah</span>
                </div>
                <div className="my-2">
                  <input
                    className="cursor-pointer"
                    name="ans1"
                    type={"radio"}
                  ></input>
                  <span>Anil</span>
                </div>
                <div className="my-2">
                  <input
                    className="cursor-pointer"
                    name="ans1"
                    type={"radio"}
                  ></input>
                  <span>Robert</span>
                </div>
                <div className="my-2">
                  <input
                    className="cursor-pointer"
                    name="ans1"
                    type={"radio"}
                  ></input>
                  <span>Gunjan</span>
                </div>
              </div>
            </div>
          </div>
          
          
          {/* Question dialog box right side*/}
          <div  className={toggle? "relative w-[0px] border" : "relative w-[320px] border"} >
            <img src={boximg}/>
            <p className="bg-blue-600 text-white text-[18px]">Part A General  Intelligence</p>
            <div className="w-full  p-1 bg-blue-100 flex justify-evenly items-center flex-wrap overflow-scroll h-[260px]">
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
                <Box/>
            </div>
            <div onClick={()=>{setToggle(!toggle)}} className="absolute top-36 -left-5 z-10">
              {toggle? <i className=" py-5 px-1 bg-slate-700 text-white flex justify-center w-fit bi bi-caret-left"></i>
              : <i className=" py-5 px-1 bg-slate-700 text-white flex justify-center w-fit bi bi-caret-right"></i>
                }
               
            </div>
          </div>
        </div>

        {/* Save and Next */}
        <div className="flex justify-between items-center">
          <div className="flex justify-between border w-full">
            <div className="p-1 flex justify-between items-center">
              <div className="border p-1 mx-1 cursor-pointer">
                Mark for Review and Next
              </div>
              <div className="border p-1 cursor-pointer">Clear Response</div>
            </div>
            <div className="bg-blue-500 px-2 my-1 rounded text-white flex items-center text-[16px] cursor-pointer">
              Save & Next
            </div>
          </div>

          <div className="w-[28vw] flex justify-center items-center">
            <p className="bg-blue-300 px-3 py-1 rounded font-semibold text-white">
              Submit
            </p>
          </div>
        </div>
    </div>
   );
};

export default Testpage;
