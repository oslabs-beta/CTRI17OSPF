import React, { useState} from 'react'
import Functions from './Functions'
import FunctionDetails from './FunctionDetails'
import { test } from '../shared'

type Props = {

}

const RightSideBar = (props: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  

  return (
    <div>


    
  {showSidebar ? (
    <button
      className="flex text-4xl text-black items-center cursor-pointer fixed right-8 top-6 z-50"
      onClick={() => setShowSidebar(!showSidebar)}
    >
      x
    </button>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={1.5} stroke="currentColor"   
    onClick={() => setShowSidebar(!showSidebar)}
    className="fixed  z-40 flex items-center cursor-pointer right-8 top-6"
    viewBox="-40 0 20 100"
    width="150"
    height="150"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
  )}


  <div //entire sidebar div
  className={`top-0 right-0 w-[25vw] bg-blue-600  p-10 pr-20 text-white fixed h-full z-40  ease-in-out duration-300 border-8 border-yellow-500 ${
    showSidebar ? "translate-x-0 " : "translate-x-full"
  }`}
>
  <h3 className="mt-20 text-4xl font-semibold text-white">{test}</h3>
  <div> 

  
  </div>

    </div>
  </div>


  )
}

export default RightSideBar