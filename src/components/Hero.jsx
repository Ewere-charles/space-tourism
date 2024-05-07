import React, {useState} from 'react';
// background image
import dekstopBg from '../assets/background/dekstopHome.jpg'
import tabBg from '../assets/background/tabHome.jpg'
import mobileBg from '../assets/background/mobileHome.jpg'

function Hero(){

    return(
        <div className="relative w-full h-screen flex items-center justify-center">
            <img src={dekstopBg} alt="" className='w-full h-full fixed object-cover object-center hidden lg:block -z-10'/>
            <img src={tabBg} alt="" className='w-full h-full fixed object-cover object-center hidden md:block lg:hidden -z-10'/>
            <img src={mobileBg} alt="" className='w-full h-full fixed object-cover object-center md:hidden -z-10'/>

        <div className="flex items-center justify-start flex-col gap-[50px]  md:gap-[100px] lg:flex-row lg:justify-between lg:items-end lg:py-[100px] max w-full h-full">
        <div className="pt-[100px] pb-5 px-5  w-full text-center text-white md:pt-[150px] md:px-0 md:w-[75%] lg:w-[40%] lg:text-start lg:p-0 ">
                <h2 className='mt-5 uppercase text-[16px] md:text-[28px] md:mb-8 text-[#D0D6F9] tracking-[4.75px]'> so, you want to travel to</h2>
                <h1 className=' uppercase text-[100px] md:text-[220px] md:leading-[220px] lg:text-[180px] lg:leading-[180px]'>Space</h1>
                <p className='text-[#D0D6F9] md:text-[22px] lg:w-[90%] lg:text-[18px]'>  Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!</p>
            </div>

            <div className='flex items-center justify-center relative h-[150px] w-[150px] md:w-[220px] md:h-[220px] lg:h-[260px] lg:w-[260px] rounded-full  mb-5' id='btn_parent'>
                <div className="absolute h-full w-full rounded-full -z-10" id='active_call'></div>
            <button className='bg-white shrink-0 h-[150px] w-[150px] md:w-[220px] md:h-[220px] lg:h-[260px] lg:w-[260px] rounded-full text-[22px] md:text-[30px] text-slate-700 barlow-condensed-regular uppercase'>Explore</button>
            </div>
        </div>
        </div>
    )
}

export default Hero;