import axiosInstance, { ApiResponse } from '../../../config/axios';
import { Restaurant, RestaurantNotAproved } from 'src/types/Restaurant';
import { RestaurantAproved } from 'src/types/Restaurant';
import { AxiosError } from 'axios';
import { createProduct } from '../Product/ProductsApi';

//Retrieving data from the database with axios dependency
export async function retrieveAllRestaurant() {
    try {
        //Creating a variable that will contain the data that we need from the endpoint API
        const response = await axiosInstance.get<Restaurant[]>('/restaurant/all', {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true, // to include credentials in the request
        });
        console.log('Response: ', response);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}

export async function updateAllRestaurant(name: string) {
    try {
        //Creating a variable that will contain the data that we need from the endpoint API
        const response = await axiosInstance.put<ApiResponse>(`/restaurant/update/${name}`);
        console.log('Response: ', response);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}

export async function deleteAllRestaurant(id: number) {
    try {
        //Creating a variable that will contain the data that we need from the endpoint API
        const response = await axiosInstance.delete<ApiResponse>(`/restaurant/delete/${id}`);
        console.log('Response: ', response);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}

export async function getAllPayment() {
    try {
        //Creating a variable that will contain the data that we need from the endpoint API
        const response = await axiosInstance.get<ApiResponse>(
            '/restaurant/restaurantPayment/getAllPayments',
        );
        console.log('Response: ', response);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}

export async function getRestaurantPayment(id: number) {
    try {
        //Creating a variable that will contain the data that we need from the endpoint API
        const response = await axiosInstance.get<ApiResponse>(
            `/restaurant/restaurantPayment/getAllPaymentsRestaurant/${id}`,
        );
        console.log('Response: ', response);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}

export async function getNotApprovedRestaurants() {
    try {
        // Creating a variable that will contain the data that we need from the endpoint API
        const response = await axiosInstance.get<RestaurantNotAproved[]>(
            '/restaurant/notApprovedRestaurants',
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true, // to include credentials in the request
            },
        );
        return response.data;
    } catch (error) {
        console.log('Error: ', error);
        throw new Error('Failed to fetch data');
    }
}

export async function getApprovedRestaurants() {
    try {
        // Creating a variable that will contain the data that we need from the endpoint API
        const response = await axiosInstance.get<RestaurantAproved[]>(
            '/restaurant/approvedRestaurants',
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true, // to include credentials in the request
            },
        );
        return response.data;
    } catch (error) {
        console.log('Error: ', error);
        throw new Error('Failed to fetch data');
    }
}

export async function deleteRestaurant(name: string) {
    try {
        const response = await axiosInstance.delete<ApiResponse>(`/restaurant/delete/${name}`);
        console.log('Response: ', response);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}

export async function getRevenues(name: number) {
    try {
        const response = await axiosInstance.get<ApiResponse>(`/restaurant/delete/${name}`);
        console.log('Response: ', response);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}

export async function getRestaurantByUserIt(id: string) {
    try {
        const response = await axiosInstance.get<Restaurant>(`/restaurant/user/${id}`);
        console.log('Response: ', response);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}

import axios from 'axios';





export async function createRestaurant(restaurant: Restaurant, files:File[]) {
    try {
        const formData = new FormData();
        for (let file of files) {
            formData.append('files', file);
        }
        // If you want to send additional data like name
        formData.append('restaurant', JSON.stringify(restaurant));

        const response = await axios.post('http://localhost:8080/restaurant/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        });

        console.log('Created restaurant:', response.data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('Error status:', error.response?.status);
            return error.response?.status;
        } else {
            console.error('Error:', error);
            throw new Error('Failed to create restaurant');
        }
    }
}
