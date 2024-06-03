"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

//useEffect hook
//swr, useSwr hook
//with loading state
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function ClientSideDataFetching() {
  // const [loading, setLoading] = useState(false);
  // const [users, setUsers] = useState([]);

  // async function fetchListOfUsers() {
  //   try {
  //     setLoading(true);
  //     const response = await fetch("https://dummyjson.com/users");
  //     const data = await response.json();

  //     if (data?.users) {
  //       setUsers(data.users);
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setUsers([]);
  //     setLoading(false);
  //   }
  // }
  // useEffect(() => {
  //   fetchListOfUsers();
  // }, []);
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/users`,
    fetcher
  );

  if (error) {
    return <h1>{error}</h1>;
  }
  if (isLoading)
    return (
      <h3 className="font-extrabold text-3xl">Loading users! please wait</h3>
    );

  return (
    <>
      <div className="p-10">
        <h1>Client Side Data Fetching</h1>
        <ul>
          {data && data.users.length > 0
            ? data.users.map((user) => (
                <div>
                  <li className="m-5 cursor-pointer">
                    <Link href={`/client-data-fetch/${user.id}`}>
                      {user.firstName}
                    </Link>
                  </li>
                </div>
              ))
            : null}
        </ul>
      </div>
    </>
  );
}

export default ClientSideDataFetching;
