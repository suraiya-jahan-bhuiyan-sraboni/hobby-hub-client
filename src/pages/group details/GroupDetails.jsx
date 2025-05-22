import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router'
import { AuthContext } from '../../context/AuthContextProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const GroupDetails = () => {
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className="min-h-screen flex justify-center items-center flex-col">
            Loading...
            <progress className="progress w-56"></progress>
        </div>;
    }
    if (!user) {
        return <Navigate to={"/login"} />
    }
    const { id } = useParams()
    //console.log(id)
    const [group, setGroup] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/groups/${id}`)
            .then(res => res.json())
            .then(data => {
                setGroup(data)
                //console.log(data)
            })
    }, [id])
    const isActive = group.startDate
        ? new Date(group.startDate) > new Date()
        : true;

    return (
        <div className='w-11/12 mx-auto my-10'>
            <Helmet>
                <title>{group.name}</title>
            </Helmet>
            <div className='flex flex-col gap-4'>
                <img className='h-[400px] object-cover bg-center' src={group.imageURL} alt={`${group.name} image`} />
                <div className='flex flex-col gap-4 w-11/12 mx-auto'>
                    <div className='flex justify-between items-center  '>
                        <h1 className='text-3xl font-bold '>{group.name}</h1>
                        {isActive ? (
                            <button className='btn bg-blue-800 text-white font-semibold'>Join Group</button>
                        ) : (
                            <span className="text-red-500 font-semibold">This group is no longer active.</span>
                        )}
                    </div>
                    
                    <p className='text-xs'>{group.category}</p>
                    <p className='text-xs'>{group.maxMembers} members</p>
                    <p className='text-xs'><span className='text-blue-400 font-bold'>Creator:</span> {group.userName}</p>
                    <p className='text-xs'><span className='text-blue-400 font-bold'>Contact:</span> {group.userEmail}</p>
                    <p className='text-xs'><span className='text-blue-400 font-bold'>Start Date: </span>{group.startDate}</p>
                </div>
                <div className='flex flex-col justify-between gap-5 items-start w-11/12 mx-auto my-2 p-2 border border-gray-300 shadow-2xl'>
                    <h1 className='text-xl font-bold'>About this group</h1>
                    <p><span className='text-blue-400 font-bold'>Description:</span> {group.description}</p>
                    <p className='text-xs'><span className='text-blue-400 font-bold'>Location: </span>{group.location}</p>
                </div>

            </div>
        </div>
    )
}

export default GroupDetails