"use client";
import { usePathname, useSearchParams } from "next/navigation";

function Cart() {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  console.log(searchParams.get("search"), searchParams.get("randomValue"));
  return (
    <div>
      <h1>This is Cart Component</h1>
    </div>
  );
}

export default Cart;
