import React, { useState, useEffect } from 'react';
import api from '../context/data.js';
import DD from "../assets/background/DD.jpg";
import DT from "../assets/background/DT.jpg";
import DM from "../assets/background/DM.jpg";
import ServerError from './ServerError.jsx';

function Destination() {
  const [destination, setDestination] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(0);
  const [loading, setLoading] = useState(true); // State to track loading status

  //retrieve data
  useEffect(() => {
    const retrieveDestinations = async () => {
      try {
        const response = await api.get(''); // Use an empty string to fetch the BASE_URL
        return response.data.destinations;
      } catch (error) {
        console.error('Error fetching destinations:', error);
        setLoading(false); // Set loading to false to indicate data fetching failed
        return []; // Return empty array if data fetching fails
      }
    };
  
    const getAllDestinations = async () => {
      const allDestinations = await retrieveDestinations();
      if (allDestinations) {
        setDestination(allDestinations);
        setLoading(false); // Set loading to false after data is fetched successfully
      }
    };
  
    getAllDestinations();
  }, []);

  function destinationCount(mapping) {
    setSelectedDestination(mapping);
  }

  return (
    <div className='w-full h-screen relative'>
      {/* Background images */}

      <img src={DD} alt="" className='w-full h-full fixed object-cover object-center hidden lg:block -z-10' />
      <img src={DT} alt="" className='w-full h-full fixed object-cover object-center hidden sm:block lg:hidden -z-10' />
      <img src={DM} alt="" className='w-full h-full fixed object-cover object-center sm:hidden -z-10' />

      <div className='flex flex-col items-center justify-start gap-[30px] min-h-screen h-auto pt-[100px]  pb-[60px] px-[30px] sm:pt-[130px] sm:items-start lg:px-[8%] lg:gap-[50px]'>
        {/* Check loading status before rendering content */}
        {loading ? (
                  <div className='flex items-center justify-center w-full h-full absolute top-0 left-0 text-white text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[45px] 2xl:text-[45px]'>Loading...</div>
        ) : (
          destination.map((item, index) => (
            index === selectedDestination ? (
              <>
                {/* Destination content */}
                <h1 className='text-white barlow-condensed-regular tracking-[2.3px] uppercase font-semibold sm:text-[28px]'><span className='font-bold me-4 text-[#616476] '>01</span>pick your destination</h1>
                <div key={item.id} className='flex flex-col items-center justify-start gap-5 lg:flex-row lg:gap-[100px]'>
                  <img src={item.images.png} alt="" className='w-[200px] sm:w-[350px] lg:w-[500px] sm:mb-4 rotating'/>
                  <div className='flex flex-col items-center justify-start gap-5 lg:items-start'>
                    <ul className='text-[#D0D6F9] text-[16px] sm:text-[20px] barlow-condensed-regular tracking-[2.7px] flex gap-5 uppercase font-[400]'>
                      <li className={`py-1 cursor-pointer ${selectedDestination === 0 ? 'text-white border-b-4 border-b-white' : ''}`} onClick={() => destinationCount(0)}>Moon</li>
                      <li className={`py-1 cursor-pointer ${selectedDestination === 1 ? 'text-white border-b-4 border-b-white' : ''}`} onClick={() => destinationCount(1)}>Mars</li>
                      <li className={`py-1 cursor-pointer ${selectedDestination === 2 ? 'text-white border-b-4 border-b-white' : ''}`} onClick={() => destinationCount(2)}>Europa</li>
                      <li className={`py-1 cursor-pointer ${selectedDestination === 3 ? 'text-white border-b-4 border-b-white' : ''}`} onClick={() => destinationCount(3)}>Titan</li>
                    </ul>
                    <div className=" text-center py-8 border-b-1 border-b text-white sm:w-[80%] lg:w-[85%] lg:text-start">
                      <h1 className='bellefair-regular uppercase text-[56px] sm:text-[75px] text-white'>{item.name}</h1>
                      <p className='sm:text-[18px]'>{item.description}</p>
                    </div>
                    <div className='flex flex-col justify-start items-center gap-[30px] text-center text-white sm:flex-row sm:gap-[70px]'>
                      <div>
                        <p className='text-[#D0D6F9] text-[14px] barlow-condensed-regular tracking-[2.35px] uppercase mb-1'>avg. distance</p>
                        <h2 className='bellefair-regular uppercase text-[28px]'>{item.distance}</h2>
                      </div>
                      <div>
                        <p className='text-[#D0D6F9] text-[14px] barlow-condensed-regular tracking-[2.35px] uppercase mb-1'>est. travel time</p>
                        <h2 className='bellefair-regular uppercase text-[28px]'>{item.travel}</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null
          ))
        )}
        {/* Display ServerError component if destination data is not provided */}
        {!loading && destination.length === 0 && <ServerError />}
      </div>
    </div>
  );
}

export default Destination;
