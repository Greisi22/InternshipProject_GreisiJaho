import { Fragment } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'; // Import the ShoppingCartIcon
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import ReorderIcon from '@mui/icons-material/Reorder';
import './style/Header.css';
import logo from '../../assets/logo2.png';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Menu', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
  { name: 'Shop', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={logo} // Use the imported logo
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={logo} // Use the imported logo
                    alt="Workflow"
                  />
                  <Dropdown>
                    <MenuButton style={{ backgroundColor: 'transparent', border: 'none' }}>
                      <span><ReorderIcon/></span> 
                    </MenuButton>
                    <Menu style={{backgroundColor: "", border: ""}}>
                      {navigation.map((item, index) => (
                        <div key={index} >
                          <MenuItem className='menuItem'>
                            <span>{item.icon}</span> <span>{item.name}</span>
                          </MenuItem>
                        </div>
                      ))}
                    </Menu>
                  </Dropdown>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900',
                        'px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                    Log in
                  </button>
                  <button className="ml-4 bg-white border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900">
                    Sign up
                  </button>
                  <ShoppingCartIcon className="h-6 w-6 ml-4 text-gray-700 cursor-pointer" /> {/* Add the ShoppingCartIcon */}
                </div>
              </div>
            </div>
          </div>

          {/* Add the Disclosure.Panel for smaller screens */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Render navigation items */}
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-100' : 'hover:bg-gray-100',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
              {/* Add ShoppingCartIcon */}
              <ShoppingCartIcon className="h-6 w-6 text-gray-700 cursor-pointer ml-4" />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
