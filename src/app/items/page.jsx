import Link from "next/link";
import React from "react";


export const dynamic = "force-dynamic";


const GetItems = async () => {
  const res = await fetch("https://next-app-explore.vercel.app/api/items");
  const data = await res.json();

  return (
    <div className="grid grid-cols-4 gap-5">
      {data.map((p) => {
        return (
          <div >
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-2xl shadow-lg w-72">
              <h1 className="text-xl font-bold mb-2">
                {p?.userName || "Anonymous"}
              </h1>
              <p className="text-sm text-gray-200">{p.userEmail || "user@gamil.com"}</p>
              <div className="mt-4">
                <p className="font-semibold">
                  Genre: <span className="text-gray-100">{p.genre}</span>
                </p>
                <p className="font-semibold">
                  Rating: <span className="text-yellow-300">{p.rating}</span>
                </p>
                <p className="font-semibold">
                  Published:{" "}
                  <span className="text-gray-100">{p.publishingYear}</span>
                </p>

                <Link href={`/items/${p._id}`}>
                <button className="bg-gray-900">See Details</button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GetItems;
