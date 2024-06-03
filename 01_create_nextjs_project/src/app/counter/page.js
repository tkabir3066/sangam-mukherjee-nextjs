"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
function CounterPage() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <div className="counter">
          <h2>Counter: {count}</h2>

          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-green-700 text-white py-3 px-2 mx-2 my-3 rounded-lg hover:bg-red-400"
          >
            Increase
          </button>
          <button
            onClick={() => setCount((count) => count - 1)}
            className="bg-green-700 text-white py-3 px-2 mx-2 my-3 rounded-lg hover:bg-red-400"
          >
            Decrease
          </button>
        </div>

        <button onClick={() => router.push("/")}>Go to Home Page</button>
      </div>
    </>
  );
}

export default CounterPage;
