import { Disclosure } from '@headlessui/react';
import { getDiscountRestaurantCache } from '../../cache/entry';
import Menu from '../General/Menu';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';
import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';
import "./style/DiscountRestaurant.css"

const menuItems = [
    { icon: null, name: 'Categories' },
    {
        icon: <FoodBankOutlinedIcon />,
        name: 'Sushi',
    },
    {
        icon: <LocalPizzaOutlinedIcon />,
        name: 'Pizza & Fast food',
    },
    {
        icon: <AccessAlarmOutlinedIcon />,
        name: 'vegan',
    }
];

const navigation = [
    { name: 'Vegan', current: true },
    { name: 'Sushi', current: false },
    { name: 'Pizza & Fast food', current: false },
    { name: 'other', current: false },
];




function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
    const handleRestorantData = async (category: string) => {
        const response = await getDiscountRestaurantCache(category);
        console.log('Response', response);
    };

    return (
        <Disclosure as="nav" className="h-24 align-center pt-4">
            {() => (
                <>
                    <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8 align-center">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start mr-10">
                                <div>
                                    <h1>Up to -40% 🎊 Tasty Rush exclusive deals</h1>
                                </div>
                            </div>

                            <div className="flex items-center justify-end flex-1">
                                <div className="hidden md:ml-6 md:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                
                                                onClick={() => handleRestorantData(item.name)}
                                                className={classNames(
                                                    item.current
                                                        ? 'rounded-[20px] border-[1px] border-darkYellow text-darkYellow item'
                                                        : 'text-black hover:bg-darkYellow  hover:rounded-[20px]',
                                                    'rounded-md px-5 py-2 text-md font-medium item',
                                                )}
                                                aria-current={item.current ? 'page' : undefined}>
                                                {item.name != "other" ? item.name :   <span className='mb-4'><Menu items={menuItems}/> </span>}
                                            </a>
                                        ))}

                                    </div>
                                </div>
                                <div className="flex items-center justify-end md:hidden">
                                    <Menu items={menuItems}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    );
}
