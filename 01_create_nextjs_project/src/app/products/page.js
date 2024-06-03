"use client";
import { useRouter } from "next/navigation";
import React from "react";

function page() {
  const router = useRouter();
  return (
    <>
      <h2>Products Page</h2>
      <button
        className="bg-blue-800 text-white px-2 py-2 rounded-lg my-5 mx-5"
        onClick={() => router.push("/")}
      >
        Go to Home Page
      </button>
    </>
  );
}

export default page;
