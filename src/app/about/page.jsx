import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
             <p className='flex justify-center text-5xl font-bold'>About Next</p>

             <Link href='/about/myself'>
             Myself
             </Link>
        </div>
    );
};

export default page;