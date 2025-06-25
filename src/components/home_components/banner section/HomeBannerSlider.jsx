import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const HomeBannerSlider = () => {
  return (
      <div className=''>
          <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
              }}
              pagination={{
                  clickable: true,
              }}
              navigation={true}//Autoplay
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
          >
              <SwiperSlide className='w-full md:h-[400px]'>
                  <div className='relative'>
                      <img className='blur-xl w-full md:h-[400px] '
                          src="https://previews.123rf.com/images/adiruch/adiruch1604/adiruch160402889/55673555-hobbies-on-white-background.jpg"
                          alt="event" />
                      <div className='absolute right-1/2 bottom-1/4 
                        transform translate-x-1/2 text-black text-center flex flex-col items-center gap-2 sm:gap-5'>
                          <h1 className='text-md sm:text-3xl lg:text-5xl font-bold '>Connect with Like-minded People</h1>
                          <p className='text-xs'>Build meaningful relationships at our curated Groups</p>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide className='w-full md:h-[400px]'>
                  <div className='relative'>
                      <img className='blur-sm w-full md:h-[400px] '
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKlvBKTWiptqfuzTZ2j18eDLsZGzsApajscw&s"
                          alt="event" />
                      <div className=' text-center absolute right-1/2 bottom-1/4 
                        transform translate-x-1/2 text-black flex flex-col items-center gap-2 sm:gap-5'>
                          <h1 className='text-xl sm:text-3xl  lg:text-5xl font-bold'>Discover Amazing Groups</h1>
                          <p className='text-xs'>Find and attend the most exciting Group events in your area</p>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide className='w-full md:h-[400px]'>
                  <div className='relative'>
                      <img className='blur-sm w-full md:h-[400px]'
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFHmPGwZ8eiyZKoIBlcSyZyDSLGYvbXab2hAwvyXjc3w0qG11DOsej4Ep2A-6b43T3A7Q&usqp=CAU"
                          alt="event" />
                      <div className='text-center absolute right-1/2 bottom-1/4 
                         transform translate-x-1/2 text-black flex flex-col items-center gap-2 sm:gap-5'>
                          <h1 className='text-xl sm:text-3xl  lg:text-5xl font-bold'>Create Lasting Memories</h1>
                          <p className='text-xs'>Experience unforgettable moments at our Groups</p>
                      </div>
                  </div>
              </SwiperSlide>
          </Swiper>
    </div>
  )
}

export default HomeBannerSlider