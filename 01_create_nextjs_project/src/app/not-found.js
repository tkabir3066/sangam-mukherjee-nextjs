import Link from "next/link";

function NotFound() {
  return (
    <>
      <h1>This page does not exist</h1>
      <Link href="/">Go Back to the Home Page</Link>
    </>
  );
}

export default NotFound;
