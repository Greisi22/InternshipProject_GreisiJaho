import { useState } from 'react';
import './styles/Menu.css';

interface MenuItem {
    name: string;
    function: (name: string) => void;
}

interface Props {
    items: MenuItem[];
}

export default function DropDown({ items }: Props) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [, ...menuItems] = items;

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleMenuItemClick = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative w-full">
            <button
                id="dropdownDefaultButton"
                onClick={toggleDropdown}
                className="w-full  justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button">
                Role{' '}
                <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            {isDropdownOpen && (
                <div
                    id="dropdown"
                    className="absolute w-full top-full left-0 z-20 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
                    <ul
                        className="  text-center py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    className="block px-4 py-2 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={() => {
                                        handleMenuItemClick();
                                        item.function(item.name)
                                    }}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
