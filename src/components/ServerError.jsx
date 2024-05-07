import error from '../assets/background/error.gif'

function ServerError(){

    return(
        <div className='absolute h-auto min-h-full w-full bg-black top-0 left-0 flex flex-col  items-center justify-start pt-[80px] pb-5 lg:flex-row lg:px-[8%] lg:gap-5'>
            <img src={error} alt=""  className=' sm:w-[90%] lg:w-[70%]'/>
            <div className='text-white flex-col flex items-center justify-start text-center lg:text-start lg:items-start'>
                <h1 className='text-[80px] font-[700] sm:tracking-[4.7px] sm:text-[100px]'>500</h1>
                <h2 className='sm:text-[25px]  uppercase font-semibold mb-2 bellefair-regular tracking-[2.3px] lg:text-[40px]'>server error</h2>
                <p className='w-[70%] barlow-condensed-regular text-[20px] lg:text-[22px]'>We're sorry, but there was an error processing your request. Please try again later.</p>
            </div>
        </div>
    );
}

export default ServerError;