import { GET } from '@/app/api/items/[id]/route';
import React from 'react';

const SingleItemPage = async({params}) => {

    const p = await params;

    // const item = await GET()

    return (
        <div>
            Ho ohwo di 
        </div>
    );
};

export default SingleItemPage;