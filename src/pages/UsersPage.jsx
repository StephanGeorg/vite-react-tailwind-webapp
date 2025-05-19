import React from 'react';
import UsersList from '../components/ui/UsersList';

export default function UsersPage() {
  return (
    <>
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Users List</h1>
        </div>
      </header>
      
      <main className="flex-grow flex flex-col min-h-0">
        <div className="mx-auto max-w-7xl w-full px-4 py-8 sm:px-6 lg:px-8 flex-grow">
          <UsersList />
        </div>
      </main>
    </>
  );
}