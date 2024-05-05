import axiosInstance, { ApiResponse } from '../../../config/axios';
import { User } from 'src/types/Restaurant';

export async function getAllUser() {
    try {
        const response = await axiosInstance.get<User[]>('/users/getAllUsers');

        sessionStorage.setItem('userId', '1');
        const userId = sessionStorage.getItem('userId');

        const filteredUsers = removeMySelf(Number(userId), response.data);
        console.log('users ', filteredUsers);
        return filteredUsers;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}

export async function getUser(id: number) {
    try {
        //Creating a variable that will contain the data that we need from the endpoint API
        const response = await axiosInstance.get<ApiResponse>(`/users/${id}`);
        console.log('Response: ', response);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}

export async function deleteUser(id: number) {
    try {
        //Creating a variable that will contain the data that we need from the endpoint API
        const response = await axiosInstance.delete<ApiResponse>(`/users/${id}`);
        console.log('Response: ', response);
        return response.data;
    } catch (error) {
        console.log('error: ', error);
        throw new Error('Failed to fetch data');
    }
}

const removeMySelf = (id: number, users: User[]): User[] => {
    const filteredUsers = users.filter((user) => user.userId !== id);
    return filteredUsers;
};
