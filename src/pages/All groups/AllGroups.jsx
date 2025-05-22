import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { MdGroups } from "react-icons/md";

const AllGroups = () => {
   const [groups, setGroups] = useState([])
      useEffect(() => {
          fetch("http://localhost:3000/groups")
              .then(res => res.json())
              .then(data => {
                  setGroups(data)
                  
          })
      }, [])
  return (
    <div className='w-11/12 mx-auto my-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {
          groups.map(group => {
            return (
              <div key={group._id} className='flex flex-col justify-between gap-4 shadow-2xl'>
                <img className='h-1/2' src={group.imageURL} alt={`${group.name} image`} />
                <div className='flex flex-col gap-4 w-11/12 mx-auto'>
                  <h1 className='text-xl font-bold'>{group.name}</h1>
                  <p className='text-xs label'>{group.category}
                    <p className='flex items-center gap-1 ml-2'><MdGroups className='text-xl text-blue-400' />{group.maxMembers} members</p>
                  </p>
                  <p className='text-xs'><span className='text-blue-400 font-bold'>Creator:</span> {group.userName}</p>
                <p className='text-xs'>
                  <span className='text-blue-400 font-bold'>Start Date:</span>
                  {group.startDate}
                  </p>
                </div>
                
                <div className='flex justify-between items-center w-11/12 mx-auto my-2 '>
                  <Link to={`/group-details/${group._id}`} className='w-full btn bg-blue-800 text-white font-semibold'>See More</Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AllGroups