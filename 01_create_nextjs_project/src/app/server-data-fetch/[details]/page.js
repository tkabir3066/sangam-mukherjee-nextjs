import Link from "next/link";

async function fetchUserDetails(currentUserId) {
  try {
    const response = await fetch(
      `https://dummyjson.com/users/${currentUserId}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

async function UserDetails({ params }) {
  const userDetails = await fetchUserDetails(params.details);

  return (
    <div>
      <h1>User Details</h1>

      <div className="my-5">
        <p>
          {userDetails?.firstName} {userDetails?.lastName}
        </p>
        <p>{userDetails?.email}</p>
        <p>{userDetails?.phone}</p>
        <p>{userDetails?.birthDate}</p>
      </div>
      <Link
        className="bg-cyan-700 py-3 px-4 mx-5 text-white rounded-lg "
        href={"/server-data-fetch"}
      >
        Go to Server Data fetch page
      </Link>
    </div>
  );
}

export default UserDetails;
