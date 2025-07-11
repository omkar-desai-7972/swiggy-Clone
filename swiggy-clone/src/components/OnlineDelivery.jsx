import React, { useEffect, useState } from 'react'
import Card from './Card';

const OnlineDelivery = () => {

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
        <div className='max-w-[1200px] mx-auto mt-10 '>
            <div className='my-5 flex items-center justify-between'>
                <div className='text-[25px] font-bold'>Restaurants with online food delivery in Jodhpur</div>
            </div>

            <div className='grid grid-cols-2 mid:grid-cols-4 gap-3 '>

                {
                    data.map((d, i) => {
                        return <Card {...d} key={i} />
                    })
                }
            </div>


        </div>
    )
}

export default OnlineDelivery