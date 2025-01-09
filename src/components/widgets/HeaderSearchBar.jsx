import React, { useState } from 'react';
import { getTranslations, t } from '../../i18n';

const HeaderSearchBar = (locale) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // Add your search logic here, like API calls or filtering
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center bg-white rounded-lg shadow-md px-4 py-2 w-full max-w"
    >
      {/* Search Input */}
      <input
        type="text"
        placeholder={t(locale,"Search")}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border-none focus:outline-none text-gray-700 placeholder-gray-400"
      />

      {/* Search Button */}
      <button
        type="submit"
        className="ml-2 text-gray-500 hover:text-blue-500 focus:outline-none"
        aria-label="Search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </form>
  );
};

export default HeaderSearchBar;
