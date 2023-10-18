import React, { useState, useEffect } from 'react'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { GoPerson } from 'react-icons/go'
import { MdArrowDropDown } from 'react-icons/md'

export const InHouseNav = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [bgColor, setBgColor] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
            if (window.scrollY > 0) {
                setBgColor('bg-black');
            } else {
                setBgColor('#242424');
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className={`flex h-12 w-full justify-between ${bgColor}`}>
            <LeftRight />
            <RightOptions />
        </div>
    )
}

const LeftRight = () => {
    return (
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-between items-center gap-5 px-8">
                <div className='bg-black p-1.5 rounded-full'>
                    <IoIosArrowBack size={25} color='white' />
                </div>

                <div className='bg-black p-1.5 rounded-full'>
                    <IoIosArrowForward size={25} color='white' />
                </div>
            </div>
        </div>
    )
}

const RightOptions = () => {
    return (
        <div className="flex flex-row justify-between items-center gap-5 px-8">
            <div className='bg-black px-10 py-1.5 border-[0.5px] rounded-full text-white'>
                <p className='text-[14px]'>UPGRADE</p>
            </div>

            <div className='bg-black p-1 rounded-full'>
                <div className='text-white flex justify-center items-center pr-2 gap-2'>
                    <div className='bg-[#242424] p-1.5 rounded-full'>
                        <GoPerson />
                    </div>
                    <p className=''>User</p>

                    <div>
                        <MdArrowDropDown size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}