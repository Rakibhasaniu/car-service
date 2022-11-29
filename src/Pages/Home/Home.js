import React from 'react';
import AllProductImg from './All product img/AllProductImg';
import Banner from './Banner/Banner';
import Revewsproduct from './reviews/Reviewsproduct';

const Home = () => {

   
    return (
        <div className='my-20'>
            <Banner></Banner>
            <section className=' py-[30px] mb-2'>
                <AllProductImg></AllProductImg>
                <Revewsproduct></Revewsproduct>
            </section>



        </div>
    );
};

export default Home;