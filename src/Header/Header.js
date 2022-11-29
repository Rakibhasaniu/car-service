import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Contexts/UseContext';
import logo from '../Image/5eeed3f1-1330-4a4d-8ff7-97412169d0fe.jpg'


const Header = () => {

    //import userContext(AuthContext)
    const { user, userLogOut } = useContext(AuthContext)

    const [sellerss, setSeller] = useState()

    const url = `https://assegnment-12-server-site.vercel.app/users/${user?.email}`;

    const [loding, setLoding] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {

                setSeller(data[0])
                setLoding(false)
            })

    }, [user?.email])

    if (loding) {
        <h1 className='mt-[100px] text-black text-4xl'>Loding</h1>
    }

    console.log(sellerss)

    const logoutBtn = () => {
        userLogOut()
            .then(() => {

                toast.success('User Log out successfully')
            })
            .catch(error => console.log(error))
    }


    return (
        <>

         

        </>
    );
};

export default Header;