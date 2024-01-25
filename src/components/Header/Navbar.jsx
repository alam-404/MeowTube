import React from 'react';

// Hero icons
import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/16/solid"


const Navbar = () => {
    return (
        <div className='h-[4.7rem] bg-black px-3 py-2 flex justify-between items-center w-[calc(100%-14rem)] '>
            <div className='flex items-center justify-between mx-7 border-2 rounded-full px-4 w-1/2'>
                <MagnifyingGlassIcon className='w-6 h-6' />
                <input type='text' placeholder='Search' className='py-2 px-3 bg-transparent outline-none w-full' />
                <MicrophoneIcon className='w-6 h-6'/>
            </div>
            <div>
                <div className='border-2 rounded-full flex items-center justify-center hover:border-blue-500 transition-colors duration-1000'>
                    <img src='https://placekitten.com/300/300' className='w-12 h-12 rounded-full'/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;