import Link from 'next/link';
import React from 'react';

const page = () => {

    const data =[
        {
          "id": 1,
          "name": "John Doe",
          "pic": "https://example.com/images/john_doe.jpg",
          "email": "johndoe@example.com"
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "pic": "https://example.com/images/jane_smith.jpg",
          "email": "janesmith@example.com"
        },
        {
          "id": 3,
          "name": "Alice Johnson",
          "pic": "https://example.com/images/alice_johnson.jpg",
          "email": "alicejohnson@example.com"
        },
        {
          "id": 4,
          "name": "Bob Brown",
          "pic": "https://example.com/images/bob_brown.jpg",
          "email": "bobbrown@example.com"
        },
        {
          "id": 5,
          "name": "Charlie White",
          "pic": "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
          "email": "charliewhite@example.com"
        }
      ]
      
    return (
        <div>
            <p className='flex justify-center text-5xl font-bold'>Export Service</p>
            <div>
                {
                    data.map(p=><>
                    <Link href={`/services/${p.id}`}>
                    <img src={p.pic} alt="" />
                    <h1></h1>
                    <h1>{p.name}</h1>
                    </Link>

                    </>)
                    
                }
            </div>
        </div>
    );
};

export default page;