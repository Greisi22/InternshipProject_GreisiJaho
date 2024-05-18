import axiosInstance, { ApiResponse } from 'src/config/axios';
import { Product } from 'src/types/Restaurant';

export async function retrieveAllProducts() {
    try {
        const response = await axiosInstance.get<Product[]>('/product/get/all');
        console.log('Response: ', response);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}

export async function deleteProduct(id: number) {
    try {
        const response = await axiosInstance.delete<ApiResponse>(`/product/delete/${id}`);
        console.log('Response: ', response);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}

export async function revtrieveSpecificProduct(id: number) {
    try {
        const response = await axiosInstance.get<ApiResponse>(`/product/getProductById/${id}`);
        console.log('Response: ', response);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}

export async function updateProduct(id: number) {
    try {
        const response = await axiosInstance.put<ApiResponse>(`/product/update/${id}`);
        console.log('Response: ', response);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}

import { AxiosError } from 'axios';

export async function createProduct(product: Product) {
    console.log('Produkti ne db ', product);
    try {
        const response = await axiosInstance.post<ApiResponse>('/product/create', product, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        return response.status;
    } catch (error: unknown) {
        if ((error as AxiosError).response) {
            console.log('Here');
            const axiosError = error as AxiosError;
            return axiosError.response?.status;
        } else {
            console.error('Error:', error);
            throw new Error('Failed to fetch data');
        }
    }
}
