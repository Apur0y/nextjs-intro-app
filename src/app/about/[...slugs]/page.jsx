import React from 'react';

const page = async({params}) => {

    const p = await params;
    console.log(p);
    return (
        <div>
            Slugs variable
        </div>
    );
};

export default page;