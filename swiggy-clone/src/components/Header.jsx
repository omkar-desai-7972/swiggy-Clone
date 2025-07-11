import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdAssignmentInd } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {

    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true);
    }
    const hideSideMenu = () => {
        setToggle(false);
    }

    const links = [
        {
            icon: <IoIosSearch />,
            name: "Search"
        },
        {
            icon: <CiDiscount1 />,
            name: "Offers",
            sup: "New",
        }
        ,
        {
            icon: <IoHelpCircleOutline />,
            name: "Help"
        },
        {
            icon: <MdAssignmentInd />,
            name: "Sign In"
        },
        {
            icon: <FaShoppingCart />,
            name: "Cart",
            sup: "10"
        },

    ]

    return (
        <>
            <div className='black-overlay w-full h-full fixed duration-500 '
                onClick={hideSideMenu}
                style={{
                    opacity: toggle ? 1 : 0,
                    visibility: toggle ? "visible" : "hidden"
                }}
            >

                <div className='w-[500px] bg-white h-full absolute duration-[400ms]'
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    style={{
                        left: toggle ? '0%' : '-100%'
                    }}></div>

            </div>

            <header className='p-[15px] shadow-xl sticky top-0 bg-white z-[9999]' >
                <div className='max-w-[1200px] mx-auto   flex items-center'>
                    <div className='w-[100px]'>
                        <img src="images/logo.png" className='w-full' />
                    </div>
                    <div className=''>
                        <span className='font-bold border-b-[3px] border-[black]'> Ratanada </span>
                        Jodhpur, Rajasthan,India <RxCaretDown onClick={showSideMenu} fontSize={25} className='font-bold  inline  text-[#ff7300] cursor-pointer' />
                    </div>

                    <nav className='hidden md:flex list-none gap-10 ml-auto text-[18px] font-semibold'>


                        {
                            links.map((link, index) => {
                                return <li key={index} className='flex items-center hover:text-[#ff7300] gap-2'>
                                    {link.icon}
                                    {link.name}
                                    <sup>{link.sup}</sup>
                                </li>
                            })
                        }



                    </nav>
                </div>
            </header>
        </>

    )
}

export default Header