import React from 'react'
import groupImg from '/src/assets/group.avif';
const StartGroupSection = () => {
    return (
        <div className=' my-10 text-white p-5 md:p-10  bg-blue-900'>
            <div className='w-11/12 mx-auto flex flex-col sm:flex-row justify-center items-center gap-4'>
                <div className='sm:w-1/2 flex flex-col justify-center items-center text-center sm:text-start sm:items-start gap-4'>
                    <h1 className='text-3xl  font-bold '>Start Your Own Group</h1>
                    <p className=' '>Create a group and connect with like-minded individuals.</p>
                    <div className='flex justify-center mt-5'>
                        <a href="/create-group" className='btn btn-default'>Create Now</a>
                    </div>
                </div>
                <div className='sm:w-1/2'>
                    <img src={groupImg} alt="Group illustration" />
                </div>
            </div>



        </div>
    )
}

export default StartGroupSection