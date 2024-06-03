"use client";

import { redirect, useRouter } from "next/navigation";
import React from "react";

function page() {
  const router = useRouter();
  const userProfileInfo = null;
  if (userProfileInfo === null) {
    redirect("/cart?search=product1&randomValue=123");
  }
  return (
    <>
      <h2>Contact Page</h2>

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
