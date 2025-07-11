import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Card from './Card';

const TopRest = () => {

    const [data, setData] = useState([]);

    const fetchTopRestaurant = async () => {

        const response = await fetch('http://localhost:5000/top-restaurant-chains');
        const apiData = await response.json();
        setData(apiData);
    }

    useEffect(
        () => {
            fetchTopRestaurant();
        },
        []
    )
    return (
        <div className='max-w-[1200px] mx-auto mt-10 px-2'>
            <div className='my-5 flex items-center justify-between'>
                <div className='text-[25px] font-bold'>Top resaurant chains in Jodhapur</div>
                <div className='flex'>
                    <div className=' cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center
                      justify-center' ><FaArrowLeft /></div>
                    <div className='cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center
                      justify-center'><FaArrowRight /></div>
                </div>
            </div>


            <div className='flex gap-5 overflow-hidden'>

                {
                    data.map((d, index) => {
                        return <Card  {...d} key={index} />
                    })
                }


            </div>
            <hr className='my-6  border-white ' />
        </div>

    )
}

export default TopRest