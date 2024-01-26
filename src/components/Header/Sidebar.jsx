import React from 'react';
import { ArrowRightStartOnRectangleIcon, Cog6ToothIcon, FireIcon, HeartIcon, HomeIcon, Squares2X2Icon } from "@heroicons/react/16/solid"
import { Link, NavLink } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className='bg-[#1f1e25] w-52 h-screen text-[#666571] font-medium flex flex-col justify-between'>
            <div>
                {/* brand name */}
                <div className='flex items-center gap-2 mx-5 mt-8'>
                    <div className='w-8 h-8'>
                        <img src='/logo.png' className='w-full h-full bg-cover' />
                    </div>
                    <h1 className='text-2xl font-bold'>
                        <Link to='/'>
                            <span className='text-blue-500 inline'>Meow</span>
                            <span className='text-white inline'>Tube</span>
                        </Link>
                    </h1>
                </div>
                {/* for navigation */}
                <div className='mt-10'>
                    <div className='mb-5'>
                        <ActiveLink to='/'>
                            <div className='flex ms-5 items-center gap-2 cursor-pointer hover:text-blue-500 transition-colors duration-500'>
                                <HomeIcon className='w-6 h-6' />
                                <h1>Home</h1>
                            </div>
                        </ActiveLink>
                    </div>
                    <div className='mb-5'>
                        <ActiveLink to='/discover'>
                            <div className='flex ms-5 items-center gap-2 cursor-pointer hover:text-green-500 transition-colors duration-500'>
                                <Squares2X2Icon className='w-6 h-6' />
                                <h1>Discover</h1>
                            </div>
                        </ActiveLink>
                    </div>
                    <div className='mb-5'>
                        <ActiveLink to='/trending'>
                            <div className='flex ms-5 items-center gap-2 cursor-pointer hover:text-red-500 transition-colors duration-500'>
                                <FireIcon className='w-6 h-6' />
                                <h1>Hot</h1>
                            </div>
                        </ActiveLink>
                    </div>
                    <div className='mb-5'>
                        <ActiveLink to='/favorites'>
                            <div className='flex ms-5 items-center gap-2 cursor-pointer hover:text-pink-500 transition-colors duration-500'>
                                <HeartIcon className='w-6 h-6' />
                                <h1>Favorites</h1>
                            </div>
                        </ActiveLink>
                    </div>
                </div>
            </div>
            {/* for user */}
            <div className=' bottom-0 mx-5 mb-10'>
                <div className='mb-5'>
                    <ActiveLink to='/settings'>
                        <div className='flex items-center gap-2 cursor-pointer hover:text-white transition-colors duration-500 group'>
                            <Cog6ToothIcon className='w-6 h-6 group-hover:rotate-90 transition-transform duration-500' />
                            <h1>Settings</h1>
                        </div>
                    </ActiveLink>
                </div>
                <div>
                    <ActiveLink to='/logout'>
                        <div className='flex items-center gap-2 cursor-pointer hover:text-white transition-colors duration-500'>
                            <ArrowRightStartOnRectangleIcon className='w-6 h-6' />
                            <h1>Log out</h1>
                        </div>
                    </ActiveLink>
                </div>
            </div>
        </div>
    );
};

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to} className={
            ({ isActive }) =>
                isActive
                    ? "block mb-5 border-l-4 border-l-blue-500 bg-gray-500/50 text-white py-1"
                    : ""}>
            {children}
        </NavLink>
    )
}

export default Sidebar;