import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='flex justify-center items-center'>
            <h1 className='text-red-500 '>Page Not Found 404!</h1>
            <button className='btn bg-blue-600'>Go Home</button>
        </div>
    );
};

export default NotFoundPage;