import { useState } from 'react';
import './styles/SideBar.css';
import { useNavigate } from 'react-router-dom';

function SideBarManager({ selected }: { selected: string }) {
    const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    const handleItemClick = (item: string) => {
        switch (item) {
            case '1':
                navigate('/RestaurantManager/Dashboard');
                break;
            case '2':
                navigate('/RestaurantManager/Order');
                break;
            case '3':
                navigate('/RestaurantManager/Product');
                break;

            default:
                break;
        }
    };

    return (
        <div>
            <nav className="navBarr navBar fixed top-0 z-50 bg-[#d9d9d9] dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3 w-full">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button
                                onClick={toggleSidebar}
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 opensidebarbutton">
                                <span className="sr-only">
                                    {isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
                                </span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="#" className="flex ms-2 md:me-24">
                                <img src={''} className="h-8 me-3" />
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                    TestyRush
                                </span>
                            </a>
                        </div>
                        <div className="w-full flex items-center justify-end">
                            <div className="flex items-center ms-3">
                                <div className="w-[100px] flex justify-between"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <aside
                id="logo-sidebar"
                className={`fixed bg-[#d9d9d9] top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } bg-[#d9d9d9] border-r sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
                aria-label="Sidebar">
                <div className="h-full bg-[#d9d9d9] px-3 pb-4 overflow-y-auto  dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a
                                onClick={() => handleItemClick('1')}
                                href="#"
                                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white ${
                                    selected === '1'
                                        ? 'bg-gray-100 dark:bg-gray-700'
                                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}>
                                <svg
                                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => handleItemClick('2')}
                                href="#"
                                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white ${
                                    selected === '2'
                                        ? 'bg-gray-100 dark:bg-gray-700'
                                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}>
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">Orders</span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                    3
                                </span>
                            </a>
                        </li>

                        <li>
                            <a
                                onClick={() => handleItemClick('3')}
                                href="#"
                                className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white ${
                                    selected === '3'
                                        ? 'bg-gray-100 dark:bg-gray-700'
                                        : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}>
                                <svg
                                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ms-3">Products</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
}

export default SideBarManager;
