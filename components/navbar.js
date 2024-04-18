import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-500 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="w-full md:w-auto md:flex-grow md:flex md:justify-end">
                    <button
                        onClick={toggleMobileMenu}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <p className="sr-only">Open main menu</p>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                    <div className={`w-full md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 mt-4 space-y-4">
                            <li>
                                <Link href="/" className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <p>Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/why" className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <p>Why Edmonton?</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/points" className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <p>Points of Interest in Edmonton</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/near-saskatchewan-drive" className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <p>What&apos;s Near Saskatchewan Drive?</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden w-full md:flex md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <Link href="/" className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    <p>Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/why" className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    <p>Why Edmonton?</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/points" className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    <p>Points of Interest in Edmonton</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/near" className="cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    <p>What&apos;s Near Saskatchewan Drive?</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
