import Link from "next/link";
import React from "react";

//fetch
async function fetchListOfUsers() {
  try {
    const res = await fetch("http://dummyjson.com/users");
    const data = await res.json();

    return data.users;
  } catch (error) {
    throw new Error(error);
  }
}

async function ServerSideDataFetching() {
  const listOfUsers = await fetchListOfUsers();
  // console.log(listOfUsers);
  return (
    <div className="p-10">
      <h1>Server Side Data Fetching: User list Page</h1>
      <ul>
        {listOfUsers && listOfUsers.length > 0
          ? listOfUsers.map((user) => (
              <div>
                <li className="m-5 cursor-pointer">
                  <Link href={`/server-data-fetch/${user.id}`}>
                    {user.firstName}
                  </Link>
                </li>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
}

export default ServerSideDataFetching;
