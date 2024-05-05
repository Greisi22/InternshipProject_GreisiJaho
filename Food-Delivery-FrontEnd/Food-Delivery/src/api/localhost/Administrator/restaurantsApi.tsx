import axiosInstance, { ApiResponse } from '../../../config/axios';

//Retrieving data from the database with axios dependency
export async function retrieveAllRestaurant() {
    try {
        //Creating a variable that will contain the data that we need from the endpoint API
        const response = await axiosInstance.get<ApiResponse>('/restaurant/get/all');
        console.log("Response: ",response)
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}


export async function updateAllRestaurant(id: number) {
    try {
        //Creating a variable that will contain the data that we need from the endpoint API
        const response = await axiosInstance.put<ApiResponse>(`/restaurant/update/${id}`);
        console.log("Response: ",response)
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
        console.log("Response: ",response)
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}


export async function getAllPayment() {
    try {
        //Creating a variable that will contain the data that we need from the endpoint API
        const response = await axiosInstance.get<ApiResponse>('/restaurant/restaurantPayment/getAllPayments');
        console.log("Response: ",response)
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}

export async function getRestaurantPayment(id: number) {
    try {
        //Creating a variable that will contain the data that we need from the endpoint API
        const response = await axiosInstance.get<ApiResponse>(`/restaurant/restaurantPayment/getAllPaymentsRestaurant/${id}`);
        console.log("Response: ",response)
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}
