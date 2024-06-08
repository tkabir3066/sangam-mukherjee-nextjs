import Link from "next/link";

function NotFound() {
  return (
    <>
      <div>
        <h1>This page can not be found</h1>
        <Link>Go to Home Page</Link>
      </div>
    </>
  );
}

export default NotFound;
