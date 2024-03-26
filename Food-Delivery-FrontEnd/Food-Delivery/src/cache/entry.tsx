import { retrieveDiscountRestaurant } from '../api/localhost/EntryPage/RetreiveDiscountRestaurant';
import { Restaurant } from 'src/types/Restaurant';

const discountRestaurantCache: Record<string, Restaurant[]> = {};

async function putDiscountRestaurantCache() {
    try {
        const restaurants = await retrieveDiscountRestaurant();

        restaurants.forEach((restaurant: Restaurant) => {
            const category = restaurant.category;
            // Check if the category exists in the cache
            if (!discountRestaurantCache[category]) {
                // If not, initialize it as an empty array
                discountRestaurantCache[category] = [];
            }
            // Push the restaurant into the category array
            discountRestaurantCache[category].push(restaurant);
        });

        console.log('Discounted restaurants cached successfully:', discountRestaurantCache);
    } catch (error) {
        console.log('Error putting discounted restaurants into cache:', error);
    }
}

export async function getDiscountRestaurantCache(category: string) {
    if (category in discountRestaurantCache) {
        return discountRestaurantCache[category];
    } else {
        // If the category is not in the cache, fetch and cache the data
        await putDiscountRestaurantCache();
        return discountRestaurantCache[category] || [];
    }
}
