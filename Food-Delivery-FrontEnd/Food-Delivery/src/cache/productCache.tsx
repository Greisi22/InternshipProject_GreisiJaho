import { retrieveAllProducts } from '../api/localhost/Product/ProductsApi';
import { Product } from 'src/types/Restaurant';

let ProductCache: Record<string, Product[]> = {};
let allProducts: Product[] = [];

async function putProductCache() {
    allProducts = await retrieveAllProducts();

    allProducts.forEach((product) => {
        const { category } = product;
        if (!ProductCache[category]) {
            ProductCache[category] = []; // Initialize array if category doesn't exist in cache
        }
        ProductCache[category].push(product); // Add product to category array
    });
    return ProductCache;
}

export async function getProductCategoryCache(category: string, updateCashe: boolean) {
    if (allProducts.length == 0 || updateCashe) {
        console.log('hereee');
        await putProductCache();
    }

    if (category === 'All') {
        return allProducts;
    }

    return ProductCache[category] || [];
}
