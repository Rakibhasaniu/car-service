import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Contexts/UseContext';
import useTitle from '../../hook/useTitle';

const AddProduct = () => {

    useTitle('Add New Product')
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    // const { displayName, email, photoURL, metadata } = user

    // const services = useLoaderData()
    // const { title, img, price, paragrap, _id } = services
    // console.log(user);

    // ======================== if user seller then she/he access or add product=============================





    const addServiceSubmitBtn = (event) => {

        event.preventDefault();

        const form = event.target;
        const name = form.name?.value;
        const email = form.email?.value;
        const servicePhoto = form.photo?.value;
        const Cartitle = form.title?.value;
        const Model = form.model?.value;
        const serialId = form.serialId?.value;
        const locations = form.location?.value;
        const resellPrice = form.orginalPrice?.value;
        const orginalPrice = form.ResellPrice?.value;
        const updateDate = form.Date?.value;
        const phone = form.phone?.value;
        const message = form.message?.value;

        const order = {
            img: servicePhoto,
            id: serialId,
            userImg: user?.photoURL,
            carName: Model,
            text: Cartitle,
            orginalPrice: orginalPrice,
            ResellPrice: resellPrice,
            sellerName: user?.displayName,
            date: updateDate,
            location: locations,
            message: message,
            email,
            phone: phone,
            sellerVerified: user?.emailVerified

        }

        console.log(order)

        fetch('https://assegnment-12-server-site.vercel.app/productAdd', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('success fully Service set Database')
                    event.target.reset()
                    // navigate('/all-services')
                }
            }).catch(error => toast.error(error))



    }

    const heldeleOnBlure = () => {

    }

    //Back navigate 
    const back = () => {
        navigate('/cetegories')
    }

    return (
        <>
           
        </>
    );
};

export default AddProduct;