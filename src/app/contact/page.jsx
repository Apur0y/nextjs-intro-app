import Link from 'next/link';
import React from 'react';

export const getPosts = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    return data;
}

const page = async() => {
    const posts = await getPosts();

    return (
        <div className='grid grid-cols-4 gap-10'>
        {
            posts.map(p=><>

            <Link href={`/contact/${p.id}`}>
            <button className='btn btn-primary bg-stone-500'>
            {p.id}
            </button>
            </Link>
            
           
          
            </>)
        }
                       

        </div>
    );
};

export default page;