import axiosInstance, { ApiResponse } from '../../../config/axios';
import { userMap } from 'src/types/Restaurant';

export async function checkLogin(email: string, password: string) {
    try {
        // Creating an object with email and password
        const requestData = {
            userEmail: email,
            userPassword: password,
        };

        // Making a POST request with the data
        const response = await axiosInstance.post<userMap>('/user/login', requestData, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true, // to include credentials in the request
        });

        return response;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}
