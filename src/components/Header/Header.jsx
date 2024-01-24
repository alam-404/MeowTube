import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Header = () => {
    return (
        <>
            <div className='fixed z-10'>
                <Sidebar />
            </div>
            <div className='fixed left-[13rem] w-full z-10'>
                <Navbar />
            </div>
        </>
    );
};

export default Header;