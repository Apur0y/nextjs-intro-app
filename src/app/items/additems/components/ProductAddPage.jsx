"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ProductAddPage = () => {

    const router = useRouter()

  const handleForm =async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.proname.value;
    const payload = {userName : productName};
    console.log(payload);

    const res = await fetch("https://next-app-explore.vercel.app/api/items",{
        method: "POST",
        body: JSON.stringify(payload),
        headers:{
            "Content-Type" : "application/json"
        }
    })
    const result = await res.json()
    console.log(result);
   router.push("/items")
   alert("The item is added")
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <label>Name:</label>
        <input type="text" className="text-black" name="proname" placeholder="Enter name" />
        <button className="btn bg-pink-600 p-3">Submit</button>
      </form>
    </div>
  );
};

export default ProductAddPage;
