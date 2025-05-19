import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
      </header>
      
      <main className="flex-grow flex flex-col min-h-0">
        <div className="mx-auto max-w-7xl w-full px-4 py-8 sm:px-6 lg:px-8 flex-grow">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Welcome to Vite React Tailwind Webapp</h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>This modern webapp uses Vite, React 19 and Tailwind CSS 4.</p>
              </div>
              <div className="mt-5">
                <Link
                  to="/users"
                  className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  View Users List
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}