import axiosInstance, { ApiResponse } from 'src/config/axios';
import { Product } from 'src/types/Restaurant';

export async function retrieveAllProducts() {
    try {
        //Creating a variable that will contain the data that we need from the endpoint API
        const response = await axiosInstance.get<Product[]>('/product/get/all');
        console.log('Response: ', response);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}
