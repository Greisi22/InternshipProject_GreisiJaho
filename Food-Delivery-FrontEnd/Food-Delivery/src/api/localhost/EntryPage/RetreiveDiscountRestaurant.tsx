import axiosInstance, { ApiResponse } from '../../../config/axios';

//Retrieving data from the database with axios dependency
export async function retrieveDiscountRestaurant() {
    try {
        //Creating a variable that will contain the data that we need from the endpoint API
        const response = await axiosInstance.get<ApiResponse>('/restaurant/discount');
        console.log('THis is response: ', response.data);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}
