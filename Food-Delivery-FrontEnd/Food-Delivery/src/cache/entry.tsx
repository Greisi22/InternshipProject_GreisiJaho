import { retrieveDiscountRestaurant } from '../api/localhost/EntryPage/RetreiveDiscountRestaurant';
import { Restaurant } from 'src/types/Restaurant';

const discountRestaurantCache: Record<string, Restaurant[]> = {};

async function putDiscountRestaurantCache() {
    try {
        const restaurants = await retrieveDiscountRestaurant();
        console.log("restaurants: ", restaurants);

        if (!Array.isArray(restaurants)) {
            throw new Error('Invalid data returned from retrieveDiscountRestaurant');
        }

        restaurants.forEach((restaurant: Restaurant) => {
            const categories = restaurant.category; 
            if (!Array.isArray(categories)) {
                throw new Error('Invalid categories data in restaurant object');
            }

            categories.forEach(categoryy => {
                const lowerCategory = categoryy.toLowerCase(); 
                if (!discountRestaurantCache[lowerCategory]) {
                    discountRestaurantCache[lowerCategory] = [];
                }
                discountRestaurantCache[lowerCategory].push(restaurant);
            });
        });

        console.log('Discounted restaurants cached successfully:', discountRestaurantCache);
    } catch (error) {
        console.log('Error putting discounted restaurants into cache:', error);
    }
}

export async function getDiscountRestaurantCache(category: string) {
    const lowerCategory = category.toLowerCase(); // Convert input category to lowercase
    if (lowerCategory in discountRestaurantCache) {
        return discountRestaurantCache[lowerCategory];
    } else {
        await putDiscountRestaurantCache();
        return discountRestaurantCache[lowerCategory] || [];
    }
}
