import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 sm:p-1">
        <button
          data-collapse-toggle="navbar-hamburger"
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600"
          aria-controls="navbar-hamburger"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={`${isMenuOpen ? "block" : "hidden"} w-full`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg  dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-white rounded  hover:text-red-200"
                aria-current="page"
              >
                홈
              </a>
            </li>
            <li>
              <a
                href="/sponser"
                className="block py-2 pl-3 pr-4 text-white rounded  hover:text-red-200"
                aria-current="page"
              >
                스탬프
              </a>
            </li>
            <li>
              <a
                href="/booth/detail"
                className="block py-2 pl-3 pr-4 text-white rounded hover:text-red-200"
              >
                부스 전체보기
              </a>
            </li>
            <li>
              <a
                href="/booth/bar"
                className="block py-2 pl-3 pr-4 text-white rounded  hover:text-red-200"
              >
                주점 전체보기
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
