import React from 'react';

const SocialLink = ({ name, icon }) => {
  return (
    <a href="#" className="text-gray-400 hover:text-gray-300">
      <span className="sr-only">{name}</span>
      <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {icon}
      </svg>
    </a>
  );
};

export default SocialLink;