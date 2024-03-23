import { Disclosure } from '@headlessui/react';
import DropDownItems from '../General/DropDownItems';

const navigation = [
    { name: 'Vegan', href: '#', current: true },
    { name: 'Sushi', href: '#', current: false },
    { name: 'Pizza & Fast food', href: '#', current: false },
    { name: 'Other', href: '#', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
    return (
        <Disclosure as="nav" className="h-24 align-center pt-4" >
            {() => (
                <>
                    <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8 align-center">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start mr-10">
                                <div >
                                <h1>Up to -40% 🎊 Tasty Rush exclusive deals</h1>
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
                                                        ? 'rounded-[20px] border-[1px] border-darkYellow text-darkYellow'
                                                        : 'text-black hover:bg-darkYellow  hover:rounded-[20px]',
                                                    'rounded-md px-5 py-2 text-md font-medium',
                                                )}
                                                aria-current={item.current ? 'page' : undefined}>
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center justify-end md:hidden">
                                    <DropDownItems />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    );
}
