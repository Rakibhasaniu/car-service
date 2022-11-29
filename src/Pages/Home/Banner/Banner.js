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
            </div>
        </div>
    );
};

export default Banner;