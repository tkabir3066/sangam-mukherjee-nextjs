"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="bg-green-700 px-12 py-2 text-3xl font-bold">
        Welcome to Next js course
      </h1>

      <Link href="/products">Navigate to Products page</Link>
      <Link href="/contact">Navigate to Contact page</Link>

      <button
        className="bg-blue-800 text-white px-2 py-2 rounded-lg my-5 mx-5"
        onClick={() => router.push("/contact")}
      >
        Navigating to Contact page using useRouter Hook
      </button>

      <button
        className="bg-blue-800 text-white px-2 py-2 rounded-lg my-5 mx-5"
        onClick={() => router.push("/products")}
      >
        Navigating to product page using useRouter Hook
      </button>
      <button
        className="bg-blue-800 text-white px-2 py-2 rounded-lg my-5 mx-5"
        onClick={() => router.push("/counter")}
      >
        Go to Counter Page
      </button>
    </main>
  );
}
