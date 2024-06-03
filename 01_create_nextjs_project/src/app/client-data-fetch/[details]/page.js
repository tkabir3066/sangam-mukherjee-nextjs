"use client";

import React from "react";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function UserDetails({ params }) {
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/users/${params.details}`,
    fetcher
  );

  if (error) {
    return <h1>Fail to load</h1>;
  }
  if (isLoading) {
    return <h1>Data Loading! please wait</h1>;
  }
  return (
    <div className="p-10">
      <h1>User Details</h1>
      <p>
        {data?.firstName} {data?.lastName}
      </p>
      <p>{data?.email}</p>
      <p>{data?.phone}</p>
      <p>{data?.birthDate}</p>
    </div>
  );
}

export default UserDetails;
