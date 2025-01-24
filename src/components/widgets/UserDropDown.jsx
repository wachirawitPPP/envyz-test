import React, { useState, useEffect } from 'react';
import { getTranslations, t } from '../../i18n';
// import { Image } from 'astro:assets';
// import User from '../../assets/images/user.jpg';

const UserDropDown = ({ locale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(null);
  const [currentPath, setCurrentPath] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State to toggle modal

  // Safely get the token on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const signUpRoute = (newLocale) => {
    const SignUpPath = `/${newLocale}/register`;
    console.log(SignUpPath); // Logs `/en` or `/desired-locale`
    setIsModalOpen(false)
    return window.location.href = SignUpPath;

  };


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    localStorage.setItem('token', '1234456ui');
    setToken('1234456ui'); // Update token state
    setIsModalOpen(false); // Close modal after login
    window.location.reload();
  };

  return (
    <div className="relative">
      {/* If token exists, render the dropdown, else render login */}
      {token ? (
        <>
          <div className=" flex flex-row gap-2 p-1">
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-center w-28 h-10 rounded-sm focus:outline-none"
            >
              {/* User Icon */}
              <img src="../../../public/images/user.jpg" alt="user-img" className="rounded-full" width={45} />
              <div className="flex flex-col px-1">
                <span className="text-primary">User_test</span>
              </div>
            </button>
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <ul className="absolute top-10 right-0 left-0 mt-2 w-60 bg-white rounded-lg shadow-lg">
              <li className="text-center py-2 border-gray-200 rounded-t-lg bg-[#f0f0f0]">
                <span class='text-[#4a4a4a] '>My Account</span>
              </li>
              <li>
                <a href="/profile" className="flex border-b space-x-2 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <img src="../../../public/images/icon/user.png" className="w-[20px] h-[20px] opacity-80" alt="Profile Icon" />
                  <span className="text-[16px] font-normal text-[#4A4A4A] opacity-80">{t(locale, 'Profile')}</span>
                </a>
              </li>
              <li>
                <a href="/profile" className="flex border-b space-x-2 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <img src="../../../public/images/icon/user.png" className="w-[20px] h-[20px] opacity-80" alt="Profile Icon" />
                  <span className="text-[16px] font-normal text-[#4A4A4A] opacity-80">{t(locale, 'Settings')}</span>
                </a>
              </li>
              <li class='px-2 py-3'>

                <button
                  onClick={() => {
                    localStorage.removeItem('token');
                    window.location.reload();
                  }}
                  class="w-full h-[30px] border border-gray-400 text-[#4A4A4A] text-center rounded-lg hover:bg-gray-100 focus:outline-none">
                  {t(locale, 'Logout')}
                </button>

                {/* <button
                  onClick={() => {
                    localStorage.removeItem('token');
                    window.location.reload();
                  }}
                  className="block px-4 py-2 text-sm w-full text-gray-700 hover:bg-red-100"
                >
                  <span className="text-red-500">{t(locale, 'Logout')}</span>
                </button> */}
              </li>
            </ul>
          )}
        </>
      ) : (
        <>
          <button
            onClick={() => setIsModalOpen(true)}
            className="hover:text-[#53b6ac] bg-primary rounded-md text-white dark:text-white dark:hover:text-blue-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:rounded-md mx-2 p-2 flex items-center lg:justify-center whitespace-nowrap"
          >
            {t(locale, 'Sign Up')}
          </button>

          {/* Login Modal */}
          {isModalOpen && (
            <div
              onBlur={() => setIsModalOpen(false)}
              className={`fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 transition-opacity duration-300 ease-in-out ${isModalOpen ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <div
                className={`flex  flex-col md:flex-row w-full max-w-4xl h-auto bg-gray-100 transform transition-transform duration-300 ease-in-out   ${isModalOpen ? 'scale-100' : 'scale-95'
                  }`}
              >
                {/* Left Section */}
                <div className="flex flex-col justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white w-full md:w-1/2 p-8 md:p-12 rounded-lg shadow-lg">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                    Welcome to
                    <br />
                    <strong className="text-emerald-400 drop-shadow-lg">ENVY.ME</strong>
                  </h1>
                  <p className="text-sm md:text-base mb-4 md:mb-6">
                    MaterialM helps developers to build organized and well-coded dashboards full of beautiful and rich modules.
                  </p>
                  <button className="bg-emerald-500 text-white py-2 px-4 rounded hover:bg-emerald-600 transition">
                    Learn More
                  </button>
                </div>

                {/* Right Section */}
                <div className="flex flex-col justify-center w-full md:w-1/2 bg-white p-6 md:p-8 shadow-lg">
                  {/* Close Button */}
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="flex justify-end w-full"
                    aria-label="Close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="text-center mb-6">
                    <h2 className="text-xl md:text-2xl text-gray-800">{t(locale, 'Sign In')}</h2>
                  </div>

                  {/* Form */}
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                        {t(locale, 'Email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder={t(locale, 'Email')}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
                        {t(locale, 'Password')}
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder={t(locale, 'Password')}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      />
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <label className="flex items-center">
                        <input type="checkbox" name="remember_password" className="mr-2" />
                        {t(locale, 'Remember Password')}
                      </label>
                      <a href="#" className="text-emerald-500 hover:underline font-medium">
                        {t(locale, 'Forgot Password?')}
                      </a>
                    </div>

                    <button
                      onClick={() => {
                        localStorage.setItem("token", "asdasdasd")
                      }}
                      type="submit"
                      className="w-full py-2 bg-emerald-500 text-white rounded-md font-medium text-lg hover:bg-emerald-600 transition"
                    >
                      {t(locale, 'Sign In')}
                    </button>
                  </form>
                  <div className="relative text-center my-6">
                    <span className="text-sm text-gray-500 bg-white px-2 z-10 relative">
                      {t(locale, 'or sign in with')}
                    </span>
                    <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-[1px] bg-gray-300"></div>
                  </div>
                  <div className="space-y-4 mb-6 w-full">
                    <button className="flex items-center justify-center w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">
                      <img src="/images/google.png" alt="Google" className="w-5 h-5 mr-2" />
                      Sign In with Google
                    </button>
                    <button className="flex items-center justify-center w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                      <img src="/images/communication.png" alt="Facebook" className="w-5 h-5 mr-2" />
                      Sign In with Facebook
                    </button>
                    <button className="flex items-center justify-center w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">
                      <img src="/images/apple-black-logo.png" alt="Apple" className="w-5 h-5 mr-2" />
                      Sign In with Apple
                    </button>
                  </div>

                  <p className="text-center text-sm text-gray-600 mt-4">
                    {t(locale, "Don't have an account?")}{' '}
                    <button onClick={() => signUpRoute(locale)} className="text-emerald-500 hover:underline font-medium cursor-pointer">
                      {t(locale, 'Sign Up')}{' '}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          )}

        </>
      )}
    </div>
  );
};

export default UserDropDown;
