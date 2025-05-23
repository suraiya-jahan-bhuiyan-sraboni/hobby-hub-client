import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

const FeaturedGroups = () => {
    const [groups, setGroups] = useState([])
    useEffect(() => {
        fetch("https://hobbyhub-server-ebon.vercel.app/groups")
            .then(res => res.json())
            .then(data => {
                setGroups(data.slice(0, 6))

            })
    }, [])
    // console.log(groups)
    return (
        <div className='w-11/12 mx-auto my-10'>
            <h1 className='text-3xl font-bold pb-10'>Featured Groups</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    groups.map(group => {
                        return (
                            <div key={group._id} className='flex flex-col justify-between gap-4 shadow-2xl'>
                                <img className='h-1/2' src={group.imageURL} alt={`${group.name} image`} />
                                <div className='flex flex-col gap-4 w-11/12 mx-auto'>
                                    <h1 className='text-xl font-bold'>{group.name}</h1>
                                    <p className='text-xs'>{group.category}</p>
                                </div>

                                <div className='flex justify-between items-center w-11/12 mx-auto my-2 '>
                                    <p>{group.maxMembers} members</p>
                                    <Link to={`group-details/${group._id}`} className='btn bg-blue-800 text-white font-semibold'>View Group</Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default FeaturedGroups