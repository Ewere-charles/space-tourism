import api from '../context/data.js';
import React, { useState, useEffect } from 'react';
import ServerError from './ServerError.jsx';
import CD from "../assets/background/CD.jpg"
import CT from "../assets/background/CT.jpg"
import CM from "../assets/background/CM.jpg"


function Crew(){
    const [crew, setCrew] = useState([]);
    const [selectedCrew, setSelectedCrew] = useState(0);
    const [loading, setLoading] = useState(true); // State to track loading status

  //retrieve data
  useEffect(() => {
    const retrieveCrew = async () => {
      try {
        const response = await api.get(''); // Use an empty string to fetch the BASE_URL
        return response.data.crew;
      } catch (error) {
        console.error('Error fetching crew mwmbers:', error);
        setLoading(false); // Set loading to false to indicate data fetching failed
        return []; // Return empty array if data fetching fails
      }
    };
  
    const getAllCrew = async () => {
      const allCrew = await retrieveCrew();
      if (allCrew) {
        setCrew(allCrew);
        setLoading(false); // Set loading to false after data is fetched successfully
      }
    };
  
    getAllCrew();
  }, []);

  function activeCrew(mapping){
      setSelectedCrew(mapping);
  }



    return(
            <div className="relative h-screen w-full">
                <img src={CD} alt="" className='w-full h-full fixed object-cover object-center hidden lg:block -z-10'/>
                <img src={CT} alt="" className='w-full h-full fixed object-cover object-center hidden sm:block lg:hidden -z-10'/>
                <img src={CM} alt="" className='w-full h-full fixed object-cover object-center sm:hidden -z-10'/>

                <div className="flex flex-col items-center justify-start gap-[30px] h-auto min-h-screen pt-[100px]  pb-[60px] sm:pb-0 px-[20px] sm:px-[30px] sm:pt-[130px] sm:items-start lg:px-[8%] lg:pt-[170px] lg:gap-0 max">
                

                        {/* Check loading status before rendering content */}
        {loading ? (
                  <div className='flex items-center justify-center w-full h-full absolute top-0 left-0 text-white text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[45px]'>Loading...</div>
        ) : (
          crew.map((item, index) => (
                        
            index === selectedCrew 
            ? 
            <>
            <h1 className='text-white barlow-condensed-regular tracking-[3px] uppercase sm:text-[24px] font-light lg:-mb-10'><span className='font-bold me-4 text-[#616476]'>02</span>Meet your crew</h1>
               <div key={item.id} className='w-full flex flex-col items-center lg:items-end justify-start sm:flex-col-reverse lg:flex-row-reverse sm:justify-between sm:flex-1 lg:justify-start'>
                <img src={item.images.png} alt={item.name} className={`w-[170px] sm:flex-1  sm:w-[370px] h-auto ${selectedCrew === 2 || 3 ?  'md:w-[450px]' : ''}`} />

                <div className='border-t-[1px] border-[#616476]  w-full sm:w-[75%] sm:border-0 py-[30px] flex flex-col justify-start items-center sm:flex-col-reverse sm:gap-[40px] lg:items-start lg:gap-[100px] lg:pb-[80px]'>

                    <div className='flex items-center justify-center gap-[18px] mb-5 sm:mb-0'>
                        <span className={`w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] cursor-pointer rounded-full hover:bg-[#b9bbc7] bg-[#616476] ${selectedCrew === 0 ? 'active-input pulsing' : ''}`} onClick={() => activeCrew(0)}></span>
                        <span className={`w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] cursor-pointer rounded-full hover:bg-[#b9bbc7] bg-[#616476] ${selectedCrew === 1 ? 'active-input pulsing' : ''}`}  onClick={() => activeCrew(1)}></span>
                        <span className={`w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] cursor-pointer rounded-full hover:bg-[#b9bbc7] bg-[#616476] ${selectedCrew === 2 ? 'active-input pulsing' : ''}`}  onClick={() => activeCrew(2)}></span>
                        <span className={`w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] cursor-pointer rounded-full hover:bg-[#b9bbc7] bg-[#616476] ${selectedCrew === 3 ? 'active-input pulsing' : ''}`}  onClick={() => activeCrew(3)}></span>
                    </div>

                    <div className='text-center lg:text-start'>
                      <h2 className='text-zinc-400 text-[16px] sm:text-[28px] bellefair-regular uppercase'>{item.role}</h2>
                      <h1 className='text-white text-[26px] sm:text-[44px] lg:text-[60px] bellefair-regular uppercase mb-1'>{item.name}</h1>
                      <p className='sm:text-[18px] text-[16px] text-[#D0D6F9] leading-[32px] sm:leading-[32px] lg:w-[70%] 2xl:w-[50%]'>{item.bio}</p>
                    </div>
                </div>
            </div>
            </>
            : null
        ))
        )}
        {/* Display ServerError component if crew data is not provided */}
        {!loading && crew.length === 0 && <ServerError />}

                
                </div>


            </div>
    )
}

export default Crew;