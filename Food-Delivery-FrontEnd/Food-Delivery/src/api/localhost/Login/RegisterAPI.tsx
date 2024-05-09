import axiosInstance, { ApiResponse } from '../../../config/axios';
import { AxiosError } from 'axios';

export async function registerUser(email: string, password: string, role: string) {
    console.log(email, password, role);
    try {
        const requestData = {
            userEmail: email,
            userPassword: password,
            userRole: role,
        };

        const response = await axiosInstance.post<ApiResponse>('/user/register', requestData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        return response.status; // Return status if request is successful
    } catch (error: unknown) {
       
        if ((error as AxiosError).response) {
            console.log("Here")
            const axiosError = error as AxiosError;
            return  axiosError.response?.status;
        } else {
            console.error('Error:', error);
            throw new Error('Failed to fetch data');
        }
    }
}
