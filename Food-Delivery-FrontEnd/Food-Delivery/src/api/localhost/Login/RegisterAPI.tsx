import axiosInstance, { ApiResponse } from '../../../config/axios';

export async function registerUser(email: string, password: string, role: string) {
    console.log("here")
    console.log(email, password, role)
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
        console.log(response)
        if(response.status == 200){
            return 200;
        }
   
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}
