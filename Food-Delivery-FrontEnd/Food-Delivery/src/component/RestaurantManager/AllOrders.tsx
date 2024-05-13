import { OrderCard } from './OrderCard';
import { useState } from 'react';
function AllOrders() {
    const [selected, setSelected] = useState(5);

    const handleButtonClick = (index: number) => {
        setSelected(index);
    };
    return (
        <div>
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <button
                    type="button"
                    onClick={() => {
                        handleButtonClick(5);
                    }}
                    className={
                        selected == 5
                            ? 'text-[#e94339] hover:text-white border border-[#e94339] bg-white hover:bg-[#e94339] focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800'
                            : 'text-gray-900 border  hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white  focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'
                    }>
                    All categories
                </button>
                <button
                    type="button"
                    onClick={() => {
                        handleButtonClick(0);
                    }}
                    className={
                        selected == 0
                            ? 'text-[#e94339] hover:text-white border border-[#e94339] bg-white hover:bg-[#e94339] focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800'
                            : 'text-gray-900 border  hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white  focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'
                    }>
                    Pizza
                </button>
                <button
                    type="button"
                    onClick={() => {
                        handleButtonClick(1);
                    }}
                    className={
                        selected == 1
                            ? 'text-[#e94339] hover:text-white border border-[#e94339] bg-white hover:bg-[#e94339] focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800'
                            : 'text-gray-900 border  hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white  focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'
                    }>
                    Drinks
                </button>
                <button
                    type="button"
                    onClick={() => {
                        handleButtonClick(2);
                    }}
                    className={
                        selected == 2
                            ? 'text-[#e94339] hover:text-white border border-[#e94339] bg-white hover:bg-[#e94339] focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800'
                            : 'text-gray-900 border  hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white  focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'
                    }>
                    Sweets
                </button>
                <button
                    type="button"
                    onClick={() => {
                        handleButtonClick(3);
                    }}
                    className={
                        selected == 3
                            ? 'text-[#e94339] hover:text-white border border-[#e94339] bg-white hover:bg-[#e94339] focus:ring-4 focus:outline-none focus:ring-red-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800'
                            : 'text-gray-900 border  hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white  focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'
                    }>
                    Prova
                </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div>
                    {OrderCard('example@gmail.com', '2 pizza sallam-proshute, 2 cola, ...', false)}
                </div>
                <div>
                    {OrderCard('example@gmail.com', '2 pizza sallam-proshute, 2 cola, ...', false)}
                </div>
                <div>
                    {OrderCard('example@gmail.com', '2 pizza sallam-proshute, 2 cola, ...', false)}
                </div>
                <div>
                    {OrderCard('example@gmail.com', '2 pizza sallam-proshute, 2 cola, ...', false)}
                </div>
                <div>
                    {OrderCard('example@gmail.com', '2 pizza sallam-proshute, 2 cola, ...', false)}
                </div>
                <div>
                    {OrderCard('example@gmail.com', '2 pizza sallam-proshute, 2 cola, ...', false)}
                </div>
                <div>
                    {OrderCard('example@gmail.com', '2 pizza sallam-proshute, 2 cola, ...', false)}
                </div>
            </div>
        </div>
    );
}

export default AllOrders;
