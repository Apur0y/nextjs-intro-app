import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-center items-center my-12'>
            <ul className='flex justify-between gap-9'>
                <Link href='/'>
                <li>Home</li>
                </Link>
                 <Link href='/services'>
                 <li>Services</li>
                 </Link>
                <Link href='/contact'>
                <li>Contacts</li>
                </Link>
                <Link href='/about'>
                <li>About</li>
                </Link>
            
                
            </ul>
        </div>
    );
};

export default Navbar;