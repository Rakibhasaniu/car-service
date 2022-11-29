import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/UseContext';


const AllBookinPresent = () => {

    const { user } = useContext(AuthContext);

    const url = `https://assegnment-12-server-site.vercel.app/users`;

    //    --------- TenStand Query------------
    const { data: booking = [], } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    console.log(booking)

    return (