import axiosInstance, { ApiResponse } from '../../../config/axios';

export async function RegisterUser(email: string, password: string, role: string) {
    try {
        const requestData = {
            userEmail: email,
            userPassword: password,
            userRole: role
        };

        const response = await axiosInstance.post<ApiResponse>('/user/register', requestData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('ResponseLogin: ', response.data);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}
