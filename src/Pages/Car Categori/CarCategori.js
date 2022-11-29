
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
            
        </>
    );
};

export default CarCategori;