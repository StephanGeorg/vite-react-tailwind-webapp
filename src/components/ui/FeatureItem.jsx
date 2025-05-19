import React from 'react';

const FeatureItem = ({ title, description, icon }) => {
  return (
    <div className="relative pl-9">
      <dt className="inline font-semibold text-gray-900">
        <svg className="absolute left-1 top-1 size-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
          {icon}
        </svg>
        {title}
      </dt>
      <dd className="inline"> {description}</dd>
    </div>
  );
};

export default FeatureItem;