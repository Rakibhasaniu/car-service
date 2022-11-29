
import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const CarCategori = () => {

    const { data: services = [], } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch(`https://assegnment-12-server-site.vercel.app/cetegories`);
            const data = await res.json();
            return data;
        }
    })

    console.log(services);

    return (
        <>
            <div className="container my-[60px]">
                <h1 className='text-4xl text-gray-700 text-bold font-mono font-semibold text-yellow-600 py-5 text-center'>Best Used Car Collection are here </h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 md:px-12 px-5 justify-center items-center">

                    {
                        services?.map((item, i) => <>
                            <div key={i} className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 rounded-lg">
                                <div className="flex justify-between pb-4 border-bottom">
                                    <div className="flex items-center">
                                        <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">Brand:<span className='text-orange-500'> {item?.company}</span></a>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <img src={item?.img} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                                        <div className="flex items-center text-xs justify-between pt-2">
                                            <span>Uplode Date : {item?.date}</span>
                                            <span className='text-amber-700'>3 day ago</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <a rel="noopener noreferrer" href="#" className="block">
                                            <h3 className="text-xl font-semibold dark:text-violet-400">{item?.title.slice(0, 80)} More..</h3>
                                        </a>
                                        <p className="leading-snug dark:text-gray-400">{item?.paragrap.slice(0, 250)}</p>
                                        <div className="flex justify-center mt-3" >
                                            <Link to={`/cetegories/${item?.id}`} key={item?.id} ><button className="btn md:px-12 btn-primary my-2">View More</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </>
                        )
                    }



                </div>
            </div>
        </>
    );
};

export default CarCategori;