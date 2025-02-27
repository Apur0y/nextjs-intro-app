import React from 'react';

const ServiceDetailsPage = ({params}) => {

    const id = params.id
    return (
        <div>
            <h1>Ser Details Page</h1>
            <h1>ID:{id}</h1>
        </div>
    );
};

export default ServiceDetailsPage;