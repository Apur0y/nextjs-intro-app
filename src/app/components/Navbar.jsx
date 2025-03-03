"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {

    const pathname = usePathname();
    console.log(pathname);

    if(!pathname.includes("dashboard")){
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
                    <Link href='/meals'>
                    <li>Meals</li>
                    </Link>
                    <Link href='/items'>
                    <li>Items</li>
                    </Link>
                    <Link href='/items/additems'>
                    <li>Add Items</li>
                    </Link>
                
                    
                </ul>
                <div className='navbar-end ml-4'>
                               
                </div>
            </div>
        );
    }
    else{
        return <></>
    }

    
};

export default Navbar;