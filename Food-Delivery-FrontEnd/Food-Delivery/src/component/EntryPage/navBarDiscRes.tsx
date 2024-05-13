import { Disclosure } from '@headlessui/react';
import Menu from '../General/Menu';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import './style/DiscountRestaurant.css';
import { useState } from 'react';
import { NavBarProps } from 'src/types/Restaurant';

interface MenuItem {
  icon: JSX.Element | null;
  name: string;
  function?: (name: string) => void;
}

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar({ handleRestorants }: NavBarProps) {
  const [navigation, setNavigation] = useState([
    { name: 'Vegan', current: true },
    { name: 'Sushi', current: false },
    { name: 'Pizza & Fast food', current: false },
    { name: 'other', current: false },
  ]);

  const handleMenuItemClick = (name: string) => {
    handleRestorantData(name);
    handleRestorants(name);
  };

  const menuItems: MenuItem[] = [
    { icon: null, name: 'Categories' },
    {
      icon: <FoodBankOutlinedIcon />,
      name: 'vegan',
      function: handleMenuItemClick,
    },
    {
      icon: <FoodBankOutlinedIcon />,
      name: 'Sushi',
      function: handleMenuItemClick,
    },
    {
      icon: <LocalPizzaOutlinedIcon />,
      name: 'Pizza & Fast food',
      function: handleMenuItemClick,
    },
    {
      icon: <AccessAlarmOutlinedIcon />,
      name: 'prova1',
      function: handleMenuItemClick,
    },
    {
      icon: <FoodBankOutlinedIcon />,
      name: 'Prova2',
      function: handleMenuItemClick,
    },
    {
      icon: <LocalPizzaOutlinedIcon />,
      name: 'Prova3',
      function: handleMenuItemClick,
    },
    {
      icon: <AccessAlarmOutlinedIcon />,
      name: 'Prova4',
      function: handleMenuItemClick,
    },
  ];

  const handleRestorantData = async (category: string) => {
    if (category === 'other') {
      return;
    }
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: item.name === category,
    }));
    setNavigation(updatedNavigation);
    // const response = await getDiscountRestaurantCache(category);
    // console.log('Response', response);
  };

  return (
    <Disclosure as="nav" className="h-22 align-center" style={{ width: '98%' }}>
      {() => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8 align-center">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start mr-10">
                <div>
                  <h1 className="discount-text">
                    Up to -40% 🎊 Tasty Rush exclusive deals
                  </h1>
                </div>
              </div>

              <div className="flex items-center justify-end flex-1">
                <div className="hidden md:ml-6 md:block">
                  <div className="flex space-x-4 -mr-16">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        onClick={() => {
                          if (item.name != 'other') {
                            handleRestorantData(item.name);
                            handleRestorants(item.name);
                          }
                        }}
                        className={classNames(
                          item.name === 'other' && 'mt-[-5px]',
                          item.name !== 'other' &&
                            (item.current
                              ? 'rounded-[20px] border-[0.1px] border-rose-600 item'
                              : 'text-black hover:bg-zinc-300 hover:rounded-[5px] cursor-pointer'),
                          'rounded-md px-5 py-2 text-md font-medium item',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        style={{ whiteSpace: 'nowrap' }} // Prevent text from wrapping
                      >
                        {item.name !== 'other' ? (
                          item.name
                        ) : (
                          <span className="py-2 ">
                            <Menu items={menuItems.slice(3)} />{' '}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-end md:hidden">
                  <Menu items={menuItems} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
