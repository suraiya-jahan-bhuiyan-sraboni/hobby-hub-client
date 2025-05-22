import React from 'react'
import { HiUserGroup } from "react-icons/hi2";
import { IoIosBook } from "react-icons/io";
import { HiLightningBolt } from "react-icons/hi";

const Working = () => {
  return (
      <div>
          <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10'>
              <div className='flex flex-col justify-center items-center p-5 shadow-lg'>
                  <HiUserGroup />
                  <h2 className='font-bold'>Connect</h2>
                  <p className='text-xs font-medium text-center '>Find and connect with people who share your interests</p>
              </div>
              <div className='flex flex-col justify-center items-center p-5 shadow-lg'>
                  <IoIosBook />
                  <h2 className='font-bold'>Learn</h2>
                  <p className='text-xs font-medium text-center '>
                      Share knowledge and learn from others in your group</p>
              </div>
              <div className='flex flex-col justify-center items-center p-5 shadow-lg'>
                  <HiLightningBolt />
                  <h2 className='font-bold'>Grow</h2>
                  <p className='text-xs font-medium text-center '>
                      Develop your skills and expand your network</p>
              </div>
              
          </div>
    </div>
  )
}

export default Working