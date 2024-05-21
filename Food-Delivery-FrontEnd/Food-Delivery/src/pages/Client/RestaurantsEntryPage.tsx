import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Restaurant } from 'src/types/Restaurant';
import { retrieveAllRestaurant } from 'src/api/localhost/Administrator/restaurantsApi';
import { FaSearch, FaSignOutAlt, FaUtensils } from 'react-icons/fa';
import logo from 'src/assets/Icons/EntryPage/logo.jpeg';

function NavBar({
    allRestaurants,
    onSearchSelect,
    onCategorySelect,
}: {
    allRestaurants: Restaurant[];
    onSearchSelect: (restaurant: Restaurant) => void;
    onCategorySelect: (category: string) => void;
}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState<Restaurant[]>([]);
    const [isFocused, setIsFocused] = useState(false);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.length > 1) {
            const filteredSuggestions = allRestaurants.filter((restaurant) =>
                restaurant.name?.toLowerCase().includes(value.toLowerCase()),
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
        if (searchTerm.length > 1) {
            const filteredSuggestions = allRestaurants.filter((restaurant) =>
                restaurant.name?.toLowerCase().includes(searchTerm.toLowerCase()),
            );
            setSuggestions(filteredSuggestions);
        }
    };

    const handleBlur = () => {
        setTimeout(() => setIsFocused(false), 100); // Delay to allow click on suggestion
    };

    const handleCategoryClick = (category: string) => {
        setSearchTerm(category); // Set search term to the clicked category
        const filtered = allRestaurants.filter(
            (restaurant) => restaurant.category && restaurant.category.includes(category),
        );
        setSuggestions([]);
        onCategorySelect(category);
    };

    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <img src={logo} alt="Tasty Rush Logo" className="w-10 h-10" />
                    <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
                        Tasty Rush
                    </span>
                </div>
                <div className="relative flex items-center w-1/2">
                    <input
                        type="text"
                        placeholder="Search for restaurants, food..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        className="block w-full px-4 py-2 text-sm border rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    />

                    <FaSearch className="absolute right-3 text-gray-500" />
                    {isFocused && (
                        <div className="absolute top-full left-0 w-full mt-2 bg-white border rounded-lg shadow-lg z-10 p-4">
                            <div className="mb-2">
                                <strong className="block text-sm text-gray-700 dark:text-gray-300">
                                    Më të kërkuarat
                                </strong>
                                <ul>
                                    {suggestions.length > 0 ? (
                                        suggestions.map((restaurant, index) => (
                                            <li
                                                key={index}
                                                onClick={() => onSearchSelect(restaurant)}
                                                className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                                {restaurant.name || 'Unnamed Restaurant'}
                                            </li>
                                        ))
                                    ) : (
                                        <li className="px-4 py-2 text-gray-500">
                                            No results found
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <div>
                                <strong className="block text-sm text-gray-700 dark:text-gray-300">
                                    Kategoritë
                                </strong>
                                <ul>
                                    {[
                                        'Burger',
                                        'Fast Food',
                                        'Sushi',
                                        'Healthy',
                                        'Restorante',
                                        'Pizza',
                                        'Peshk',
                                    ].map((category, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleCategoryClick(category)}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                                            {category}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                <FaSignOutAlt className="text-2xl text-gray-700 dark:text-gray-300 cursor-pointer" />
            </div>
        </nav>
    );
}

function RestaurantsEntryPage() {
    const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [suggestions, setSuggestions] = useState<Restaurant[]>([]);
    const navigate = useNavigate();

    const handleRestaurantClick = (restaurant: Restaurant) => {
        localStorage.setItem('CurrentRestaurant', JSON.stringify(restaurant));
        navigate('/Client/SpecificRestaurant');
    };

    const handleSearchSelect = (restaurant: Restaurant) => {
        setSearchTerm('');
        setSuggestions([]);
        handleRestaurantClick(restaurant);
    };

    const handleCategorySelect = (category: string) => {
        setSearchTerm(category);
        const filtered = allRestaurants.filter(
            (restaurant) => restaurant.category && restaurant.category.includes(category),
        );
        setFilteredRestaurants(filtered);
    };

    const fetchData = async () => {
        const allRestaurants = await retrieveAllRestaurant();
        setAllRestaurants(allRestaurants);
        setFilteredRestaurants(allRestaurants); // Initially show all restaurants
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <NavBar
                allRestaurants={allRestaurants}
                onSearchSelect={handleSearchSelect}
                onCategorySelect={handleCategorySelect}
            />
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {filteredRestaurants.map((restaurant, index) => (
                        <div
                            key={index}
                            onClick={() => handleRestaurantClick(restaurant)}
                            className="cursor-pointer flex flex-col border border-gray-200 rounded-lg shadow hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 active:bg-gray-200">
                            <img
                                className="object-cover w-full rounded-t-lg h-48"
                                src={restaurant.images && restaurant.images[0]}
                                alt={restaurant.name || 'Restaurant'}
                            />
                            <div className="p-4">
                                <h5 className="text-lg font-bold text-gray-900 dark:text-white">
                                    {restaurant.name || 'Unnamed Restaurant'}
                                </h5>
                                <p className="text-sm text-gray-700 dark:text-gray-400">
                                    {restaurant.category && restaurant.category.join(', ')}
                                </p>
                                <div className="flex items-center mt-2">
                                    <span className="text-green-500 font-bold">
                                        {restaurant.averageRating}
                                    </span>
                                    <span className="ml-2 text-gray-700 dark:text-gray-400">
                                        {restaurant.rate} ★
                                    </span>
                                    <span className="flex items-center ml-auto">
                                        <div
                                            className={`w-2.5 h-2.5 rounded-full mr-2 ${restaurant.open ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                        {restaurant.open ? 'Open' : 'Closed'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RestaurantsEntryPage;
