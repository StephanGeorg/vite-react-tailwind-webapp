import React from 'react';

export default function AboutPage() {
  return (
    <>
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">About Us</h1>
        </div>
      </header>
      
      <main className="flex-grow flex flex-col min-h-0">
        <div className="mx-auto max-w-7xl w-full px-4 py-8 sm:px-6 lg:px-8 flex-grow">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Vite React Tailwind Webapp</h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p className="mb-4">A modern webapp template with the latest technologies:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>⚡️ Vite - Ultra-fast development environment</li>
                  <li>⚛️ React 19 - With the new createRoot API</li>
                  <li>🎨 Tailwind CSS 4 - Utility-first CSS framework</li>
                  <li>🧩 Headless UI v2 - Accessible UI components</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}