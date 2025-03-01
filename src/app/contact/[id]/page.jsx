import React from 'react';


export const getSinglePosts = async(id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data;
}


const PostDetails =async ({params}) => {
    const id =await params.id;
    console.log(id);
    const p=await getSinglePosts(id)

    return (
        <div>
            <h1>ID:{id}</h1>
            <p>Title: {p.title}</p>
            <p>Description:{p.body}</p>
        </div>
    );
};

export default PostDetails;