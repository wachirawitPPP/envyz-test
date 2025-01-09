import React, { useState, useEffect } from 'react';

const SwitchLang = ({ locale }) => {
  const [currentPath, setCurrentPath] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const switchLanguage = (newLocale) => {
    const updatedPath = currentPath.replace(new RegExp(`^/${locale}`), `/${newLocale}`);
    window.location.href = updatedPath;
  };

  const flagMap = {
    en: 'https://flagcdn.com/us.svg', // English (US flag)
    fr: 'https://flagcdn.com/fr.svg', // French
    th: 'https://flagcdn.com/th.svg', // Thai
    la: 'https://flagcdn.com/la.svg', // La
  };

  return (
    <div className="relative ">
      <button
        onClick={() => setDropdownVisible((prev) => !prev)}
        type="button"
        className="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
        aria-haspopup="true"
        aria-expanded="false"
        aria-label="Change Language"
      >
        <img src={flagMap[locale]} alt={`${locale} flag`} className="w-5 h-5 mr-2  rounded-full" />
        <span className="uppercase">{locale}</span>
      </button>

      {dropdownVisible && (
        <ul
          className="absolute bg-white dark:bg-gray-700 rounded-lg shadow-lg mt-2 py-2 w-32"
          aria-label="Language Options"
        >
          {['en', 'fr', 'th','la'].map((loc) => (
            <li key={loc}>
              <button
                onClick={() => switchLanguage(loc)}
                className={`flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 w-full hover:bg-gray-100 dark:hover:bg-gray-600 ${
                  loc === locale ? 'font-bold' : ''
                }`}
              >
                <img src={flagMap[loc]} alt={`${loc} flag`} className="w-5 h-5 mr-2 rounded-full" />

                {loc.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SwitchLang;
