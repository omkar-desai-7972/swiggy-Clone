import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Category = () => {

    const [slide, setSlide] = useState(0);
    const [categories, setCategory] = useState([]);
    const fetchCategory = async () => {
        const response = await fetch("http://localhost:5000/categories");
        const data = await response.json();
        setCategory(data);
    }


    useEffect(
        () => {
            fetchCategory();
        }, []
    )

    const nextSlide = () => {
        if (categories.length - 8 == slide) return false;
        setSlide(slide + 3);
    }

    const prevSlide = () => {
        if (slide == 0) return false;
        setSlide(slide - 3);
    }

    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='my-3 flex items-center justify-between'>
                <div className='text-[25px] font-bold'>What's on your mind?</div>
                <div className='flex'>
                    <div className=' cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center
                    justify-center' onClick={prevSlide} ><FaArrowLeft /></div>
                    <div className='cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center
                    justify-center'  onClick={nextSlide}><FaArrowRight /></div>
                </div>
            </div>

            <div className='flex  overflow-hidden'>
                {

                    categories.map((cat, index) => {

                        return (
                            <div
                                style={{
                                    transform: `translateX(-${slide * 100}%)`
                                }}
                                className=' w-[150px] shrink-0 duration-500' key={index}>
                                <img src={"http://localhost:5000/images/" + cat.image} />
                                {/* {console.log("http://localhost:5000/images/" + cat.image)} checking image is
                                is loaded api is working or not */}
                            </div>


                        )
                    })
                }

            </div>
            <hr className='my-6  border-white ' />
        </div>

    )
}

export default Category