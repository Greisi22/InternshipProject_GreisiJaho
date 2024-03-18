import React from 'react';
import { Disclosure } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import NavMenu from './Menu';

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Menu', href: '#', current: false },
    { name: 'Service', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
    return (
        <Disclosure as="nav" className="h-20 align-center" style={{backgroundColor: "rgba(91, 77, 77, 0.33)"}}>
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start mr-10">
                                <div className="flex flex-shrink-0 items-center mr-5">
                                    <img
                                        className="h-8 w-auto"
                                        src="../assets/logo.png"
                                        alt="Your Company"
                                    />
                                </div>
                                <div >
                                    <h1 className='text-white text-3xl'>Tasty Rush</h1>
                                    <p className='text-white text-xs ml-14'>Food Delivery</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-end flex-1">
                                <div className="hidden md:ml-6 md:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-gray-900 text-white'
                                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-md font-medium',
                                                )}
                                                aria-current={item.current ? 'page' : undefined}>
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center justify-end md:hidden">
                                    <NavMenu />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    );
}
