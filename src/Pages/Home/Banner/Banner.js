import React from 'react';

const Banner = () => {
    return (
        <div className="p-6 py-6 bg-violet-400 dark:text-gray-900">
            <div className="container mx-auto">
                <marquee
                    behavior='scroll'
                    scrollamount='15'
                    direction='right'
                >
                    <div className='flex items-center gap-3'>
                        <img className=' h-10 object-cover object-center' src="https://www.deshicar.com/images/deshicar.logo.png" alt="" srcset="" />
                    <h2 className='text-center text-4xl text-orange-600 font-bold p-2'>Up To  <span className='rounded-full text-green-600 bg-yellow-400 p-3'>15%</span> Discount
                    On Cash Delivary</h2>
                    </div>
                    
                </marquee>
                {/* <div className="flex flex-col lg:flex-row items-center justify-between">
                <h2 className="text-center text-6xl tracking-tighter text-orange-600 font-bold">Up to
                    <br className="sm:hidden "/> <span className='rounded-full text-green-600 bg-yellow-400 p-3'>15%</span>  off
                </h2>
                <div className="space-x-2 text-center py-2 lg:py-0">
                    <span className="font-bold text-5xl text-red-600 ">On Cash Delivary</span>
                </div>
                
                <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-yellow-400 text-gray-900 dark:border-gray-400">Buy Now</a>
            </div> */}
            </div>
        </div>
    );
};

export default Banner;