import { retrieveAllProducts } from '../api/localhost/Product/ProductsApi';
import { Product } from 'src/types/Restaurant';

let ProductCache: Record<string, Product[]> = {};

async function putDiscountRestaurantCache() {
    const allProducts = await retrieveAllProducts();

    allProducts.forEach((product) => {
        const { category } = product;
        if (!ProductCache[category]) {
            ProductCache[category] = []; // Initialize array if category doesn't exist in cache
        }
        ProductCache[category].push(product); // Add product to category array
    });
    return ProductCache;
}

export async function getProductCategoryCache(category: string) {
    
    await putDiscountRestaurantCache();
    return ProductCache[category] || [];
}
