"use client"
import { usePathname,useRouter } from 'next/navigation';

import React, { use, useEffect, useState } from 'react';

const MealSearchInput = () => {
    const [search, setSearch] = useState("")
    const router = useRouter();
    const pathname= usePathname();

    useEffect(()=>{
         const searchQuery = {search}
         const urlQueryParam = new URLSearchParams(searchQuery);
         const url = `${pathname}?${urlQueryParam}`
         router.push(url)

    },[search])

    return (
        <div className='flex justify-center items-center my-7'>
           Search:    <input type="text" value={search} className='text-black ml=-5' onChange={(e)=>setSearch(e.target.value)}  />
        </div>
    );
};

export default MealSearchInput;