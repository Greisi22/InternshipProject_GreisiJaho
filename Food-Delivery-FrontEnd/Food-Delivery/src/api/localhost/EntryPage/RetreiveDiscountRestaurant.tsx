import axiosInstance, { ApiResponse } from '../../../config/axios';

export async function retrieveDiscountRestaurant() {
  try {
    const response = await axiosInstance.get<ApiResponse>('/restaurant/discount');
    console.log("THis is response: " , response.data)
    return response.data;
  } catch (error) {
    console.log('error: ', error);
    throw new Error('Failed to fetch data');
  }
}
