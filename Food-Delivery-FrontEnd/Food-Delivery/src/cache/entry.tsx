import { retrieveDiscountRestaurant } from '../api/localhost/EntryPage/RetreiveDiscountRestaurant';
import { Restaurant } from 'src/types/Restaurant';

//Create a hash map with a key(category) datatype of string and a value for each key (List of restaurants).
// It will be empty at first.
let discountRestaurantCache: Record<string, Restaurant[]> = {};

let putDiscountRestaurantPromise: Promise<void> | null = null;

async function putDiscountRestaurantCache() {
    if (putDiscountRestaurantPromise === null) {
        putDiscountRestaurantPromise = (async () => {
            discountRestaurantCache = {}; // Clear the cache
            console.log("ok", discountRestaurantCache);

            try {
                const restaurants = await retrieveDiscountRestaurant();

                if (!Array.isArray(restaurants)) {
                    throw new Error('Invalid data returned from retrieveDiscountRestaurant');
                }

                restaurants.forEach((restaurant: Restaurant) => {
                    const categories = restaurant.category;

                    if (!Array.isArray(categories)) {
                        throw new Error('Invalid categories data in restaurant object');
                    }

                    categories.forEach((categoryy) => {
                        const lowerCategory = categoryy.toLowerCase();

                        if (!discountRestaurantCache[lowerCategory]) {
                            discountRestaurantCache[lowerCategory] = [];
                        }
                        discountRestaurantCache[lowerCategory].push(restaurant);
                    });
                });
            } catch (error) {
                console.log('Error putting discounted restaurants into cache:', error);
            }
        })();
    }
    return putDiscountRestaurantPromise;
}

export async function getDiscountRestaurantCache(category: string) {
    await putDiscountRestaurantCache();
    const lowerCategory = category.toLowerCase();
    return discountRestaurantCache[lowerCategory] || [];
}
