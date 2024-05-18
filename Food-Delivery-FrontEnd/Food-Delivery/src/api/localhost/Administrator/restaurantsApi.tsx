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

export async function createRestaurant(restaurant: Restaurant) {
    console.log(restaurant);
    try {
        const response = await axiosInstance.post<ApiResponse>('/restaurant/create', restaurant, {
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
