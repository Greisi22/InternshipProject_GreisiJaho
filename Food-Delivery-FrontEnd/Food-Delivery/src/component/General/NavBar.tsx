import React, { useState } from 'react';
import NavMenu from './Menu';
import { menuItemsHeader } from 'src/data/EntryPageData';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';

function NavBar() {
    const [activeLink, setActiveLink] = useState('Home');

    const handleNavLinkClick = (link: string) => {
        setActiveLink(link);
        setTimeout(() => {
            const element = document.getElementById(link);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href="https://flowbite.com/"
                        className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Flowbite
                        </span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button className="mr-[20px] rounded-md pl-2 pr-2 hover:bg-gray-300">
                            <LocalGroceryStoreOutlinedIcon />
                        </button>
                        <button
                            type="button"
                            className="text-white bg-[#e94339] hover:bg-[#e9443ce5] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            SignUp / Login
                        </button>
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <NavMenu items={menuItemsHeader} />
                        </button>
                    </div>
                    <div
                        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a
                                    href="#"
                                    className={`block py-2 px-3 rounded md:p-0 ${
                                        activeLink === 'Home'
                                            ? ' text-[#e94339]'
                                            : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#e94339] md:p-0 md:dark:text-[#e94339] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                                    }`}
                                    onClick={() => handleNavLinkClick('Home')}>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#e94339] md:p-0 md:dark:hover:text-[#e94339] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                                        activeLink === 'Discounts'
                                            ? 'text-[#e94339]'
                                            : 'text-gray-900'
                                    }`}
                                    onClick={() => handleNavLinkClick('Discounts')}>
                                    Discounts
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#e94339] md:p-0 md:dark:hover:text-[#e94339] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                                        activeLink === 'Popular'
                                            ? 'text-[#e94339]'
                                            : 'text-gray-900'
                                    }`}
                                    onClick={() => handleNavLinkClick('Popular')}>
                                    Popular
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#e94339] md:p-0 md:dark:hover:text-[#e94339] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                                        activeLink === 'Services'
                                            ? 'text-[#e94339]'
                                            : 'text-gray-900'
                                    }`}
                                    onClick={() => handleNavLinkClick('Services')}>
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#e94339] md:p-0 md:dark:hover:text-[#e94339] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                                        activeLink === 'Contact'
                                            ? 'text-[#e94339]'
                                            : 'text-gray-900'
                                    }`}
                                    onClick={() => handleNavLinkClick('Contact')}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
