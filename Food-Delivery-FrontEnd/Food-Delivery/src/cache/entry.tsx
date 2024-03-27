import { retrieveDiscountRestaurant } from '../api/localhost/EntryPage/RetreiveDiscountRestaurant';
import { Restaurant } from 'src/types/Restaurant';

//Create a hash map with a key(category) datatype of string and a value for each key (List of restaurants).
// It will be empty at first.
const discountRestaurantCache: Record<string, Restaurant[]> = {};

//Create a asyncronized function to put the data of the restaurants with dicounts in the hash map that we created before.
async function putDiscountRestaurantCache() {
    try {

        //Create a variable that will contain the restaurants that we retreive form the database with the function from this path 
        //(../api/localhost/EntryPage/RetreiveDiscountRestaurant') 
        const restaurants = await retrieveDiscountRestaurant();
        console.log("restaurants: ", restaurants);

        //We check if the data from the database has the array datatype, so we can iterate through it later. 
        //If not we throw an error.
        if (!Array.isArray(restaurants)) {
            throw new Error('Invalid data returned from retrieveDiscountRestaurant');
        }

        //If is is an array than we iterate through it.
        restaurants.forEach((restaurant: Restaurant) => {
            //For each restaurant we create a variable that will contain the categories of that restaurant
            const categories = restaurant.category; 

            //We check if the datatype of category retreived from the restaurant is an array or not (Because this is how we have declared in the back end)
            if (!Array.isArray(categories)) {
                throw new Error('Invalid categories data in restaurant object');
            }


            //We itearte through each category
            categories.forEach(categoryy => {

                //We convert the categorie in lower case so we can use it as the key of the hashmap
                const lowerCategory = categoryy.toLowerCase(); 

                //We check if there is already an array associated with the lowercase category key in the discountRestaurantCache. 
                if (!discountRestaurantCache[lowerCategory]) {

                    //If not we initialize an empty array with that category
                    discountRestaurantCache[lowerCategory] = [];
                }
                //Then we add the restaurant with correspond to that key in discountRestaurantCache
                discountRestaurantCache[lowerCategory].push(restaurant);
            });
        });

        console.log('Discounted restaurants cached successfully:', discountRestaurantCache);
    } catch (error) {
        console.log('Error putting discounted restaurants into cache:', error);
    }
}


//We create an asynchronized function that will retrieve the restaurants with a specific category(as the argument of the function)
export async function getDiscountRestaurantCache(category: string) {

    // Convert input category to lowercase
    const lowerCategory = category.toLowerCase(); 

    //We check if this category exists in the hashmap discountRestaurantCache
    if (lowerCategory in discountRestaurantCache) {

        //If yes we return the value of that hashmap category
        return discountRestaurantCache[lowerCategory];
    } else {

        //If not we call the put function so it can be added as a new key and add the correcponding value to it
        await putDiscountRestaurantCache();

        //We return than the value of that key or an empty array in case that there are no values added to that key
        return discountRestaurantCache[lowerCategory] || [];
    }
}
