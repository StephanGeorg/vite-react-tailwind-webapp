import React from 'react';

const Stats = () => {
  return (
    <div className="flex items-center justify-center w-full mt-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <dl className="grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col bg-gray-400/5 p-8">
              <dt className="text-sm/6 font-semibold text-gray-600">per route<sup>+</sup></dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">1 cent</dd>
            </div>

            <div className="flex flex-col bg-gray-400/5 p-8">
              <dt className="text-sm/6 font-semibold text-gray-600">compliant</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">GDPR</dd>
            </div>

            <div className="flex flex-col bg-gray-400/5 p-8">
              <dt className="text-sm/6 font-semibold text-gray-600">paid customers</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">850+</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Stats;