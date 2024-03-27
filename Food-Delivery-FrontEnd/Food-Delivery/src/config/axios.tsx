// axiosInstance.ts
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

// Define types for API responses
interface ApiResponse {
  // Define your response structure here
  data: any;
}

// Define types for API errors
interface ApiError {
  // Define your error structure here
  message: string;
}

// Create Axios instance
const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
  }
});

export default instance;

// Export types for response and error
export type { ApiResponse, ApiError };
