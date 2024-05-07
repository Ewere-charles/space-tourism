//importing react from react
import api from '../context/data.js';
import React, { useState, useEffect } from 'react';
import ServerError from './ServerError.jsx';

import TD from "../assets/background/TD.jpg"
import TT from "../assets/background/TT.jpg"
import TM from "../assets/background/TM.jpg"


function Technology(){
    const [technology, setTechnology] = useState([]);
    const [tech, selectedTech] = useState(0);
    const [loading, setLoading] = useState(true); // State to track loading status

    //retrieve data
    useEffect(() => {
      const retrieveTechnology = async () => {
        try {
          const response = await api.get(''); // Use an empty string to fetch the BASE_URL
          return response.data.technology;
        } catch (error) {
          console.error('Error fetching technology:', error);
          setLoading(false); // Set loading to false to indicate data fetching failed
          return []; // Return empty array if data fetching fails
        }
      };
    
      const getAllTechnology = async () => {
        const allTechnology = await retrieveTechnology();
        if (allTechnology) {
          setTechnology(allTechnology);
          setLoading(false); // Set loading to false after data is fetched successfully
        }
      };
    
      getAllTechnology();
    }, []);


      function active(mapping){
            selectedTech(mapping);
      }

    return(
            <div className="relative h-screen w-full">
                <img src={TD} alt="" className='w-full h-full fixed object-cover object-center hidden lg:block -z-10'/>
                <img src={TT} alt="" className='w-full h-full fixed object-cover object-center hidden sm:block lg:hidden -z-10'/>
                <img src={TM} alt="" className='w-full h-full fixed object-cover object-center sm:hidden -z-10'/>

                <div className='flex flex-col items-center justify-start sm:items-start sm:pt-[120px] pt-[90px] pb-10 gap-[30px] sm:gap-[50px] lg:ps-[10%] lg:pt-[180px] lg:gap-[0]'>

        {/* Check loading status before rendering content */}
        {loading ? (
                  <div className='flex items-center justify-center w-full h-full absolute top-0 left-0 text-white text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[45px]'>Loading...</div>
        ) : (
            technology.map((item, index) => (
                index === tech ? 
                <>
                <h1 className='text-white text-[16px] barlow-condensed-regular tracking-[3px] uppercase sm:text-[20px] lg:text-[28px] font-light px-[30px] lg:px-0'><span className='font-bold me-4 text-[#616476]'>03</span>Space launch 101</h1>
                <div key={item.id} className='flex flex-col items-center justify-start gap-[30px] sm:gap-[50px] lg:flex-row-reverse lg:justify-between lg:gap-0'>

                   <div className='h-[200px] w-full sm:h-[357px] lg:w-[512px] lg:h-[527px]'>
                   <img src={item.images.landscape} alt={item.name} className='object-cover w-full h-full lg:hidden' />
                   <img src={item.images.portrait} alt={item.name} className='object-cover hidden lg:block' />
                   </div>

                    <div className='flex flex-col gap-[30px] sm:gap-[50px] items-center px-[20px] sm:w-[60%] lg:flex-row lg:px-0'>
                        
                        <ul className='flex items-center justify-center gap-5 text-white lg:flex-col'>
                            <li className={`w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] border-[1px] hover:border-white border-[#616476] rounded-full flex items-center justify-center text-[20px] cursor-pointer ${tech === 0 ? 'bg-white text-black': ''}`} onClick={() => active(0)}>1</li>
                            <li className={`w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] border-[1px] hover:border-white border-[#616476] rounded-full flex items-center justify-center text-[20px] cursor-pointer ${tech === 1 ? 'bg-white text-black': ''}`} onClick={() => active(1)}>2</li>
                            <li className={`w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] border-[1px] hover:border-white border-[#616476] rounded-full flex items-center justify-center text-[20px] cursor-pointer ${tech === 2 ? 'bg-white text-black': ''}`} onClick={() => active(2)}>3</li>
                        </ul>

                        <div className='text-center lg:text-start'>
                            <h2 className='text-[#D0D6F9] uppercase text-[14px] tracking-[2.7px] barlow-condensed-regular'>The terminology...</h2>
                            <h1 className='uppercase text-white text-[24px] sm:text-[40px] lg:text-[56px] bellefair-regular mb-[10px]'>{item.name}</h1>
                            <p className='text-[#D0D6F9] text-[15px] lg:pe-[15px] lg:w-[70%]'>{item.description}</p>
                        </div>
                    </div>
                </div>
                </>
                :
                null
            ))

        )}
        {/* Display ServerError component if technology data is not provided */}
        {!loading && technology.length === 0 && <ServerError />}
                </div>

            </div>
    )
}

export default Technology;