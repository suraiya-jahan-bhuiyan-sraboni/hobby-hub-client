import React from 'react'
import { HiUserGroup } from "react-icons/hi2";
import { IoIosBook } from "react-icons/io";
import { HiLightningBolt } from "react-icons/hi";
import { Fade, Zoom } from 'react-awesome-reveal';

const Working = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-3 auto-rows-fr gap-10'>

                <Zoom triggerOnce>
                    <div className='flex flex-col justify-center items-center p-5 shadow-lg'>
                        <HiUserGroup className='text-4xl text-primary' />
                        <h2 className='font-bold text-lg mt-2'>Connect</h2>
                        <p className='text-xs font-medium text-center'>
                            Find and connect with people who share your interests
                        </p>
                    </div>
                </Zoom>

                <Fade direction="up" triggerOnce>
                    <div className='flex flex-col justify-center items-center p-5 shadow-lg'>
                        <IoIosBook className='text-4xl text-primary' />
                        <h2 className='font-bold text-lg mt-2'>Learn</h2>
                        <p className='text-xs font-medium text-center'>
                            Share knowledge and learn from others in your group
                        </p>
                    </div>
                </Fade>

                <Zoom delay={300} triggerOnce>
                    <div className='flex flex-col justify-center items-center p-5 shadow-lg'>
                        <HiLightningBolt className='text-4xl text-primary' />
                        <h2 className='font-bold text-lg mt-2'>Grow</h2>
                        <p className='text-xs font-medium text-center'>
                            Develop your skills and expand your network for future opportunities
                        </p>
                    </div>
                </Zoom>

            </div>
        </div>
    )
}

export default Working
