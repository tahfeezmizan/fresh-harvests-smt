'use client';

import { useGetAllUsersQuery } from '@/app/redux/api/auth/authApi';
import Link from 'next/link';
import React from 'react';

export default function Users() {
  const { data, isLoading, error } = useGetAllUsersQuery();

  const usersData = data?.data?.data;


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users.</p>;

  return (
    <div className="container mx-auto m-10 p-6 border border-[#D9D9D9] text-[#212337] rounded-md ">
      <h2 className="text-lg font-semibold mb-4">User Details</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse overflow-y-scroll">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-lg font-semibold">Profile Image</th>
              <th className="p-3 text-lg font-semibold">Full Name</th>
              <th className="p-3 text-lg font-semibold">Email</th>
              <th className="p-3 text-lg font-semibold">Role</th>
              <th className="p-3 text-lg font-semibold">Update</th>
            </tr>
          </thead>
          <tbody>
            {usersData?.map(user => (
              <tr key={user?.id} className="hover:bg-gray-50">
                <td className="p-3">
                  <img src={user?.profileImage || "/assets/user-icon.png"} alt={user?.fullName} className="w-10 h-10 rounded-full" />
                </td>
                <td className="p-3 text-sm">{user?.fullName}</td>
                <td className="p-3 text-sm">{user?.email}</td>
                <td className="p-3 text-sm">{user?.role}</td>
                <td className="p-3 text-sm">
                  <Link href={`/dashboard/users/${user?.id}`} className="text-blue-500 hover:underline">Update</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
