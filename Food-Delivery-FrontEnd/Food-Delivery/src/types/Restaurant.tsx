export interface Restaurant {
    id: number;
    name: string;
    address: string;
    products: Product[];
    openingHours?: string[];
    phoneNumber?: string;
    website?: string;
    averageRating?: number;
    isOpen: boolean;
    reviews: Review[];
    images: string[];
    restaurantManager?: User;
    discount?: number;
    order?: Order[];
    category?: string[];
    restaurantPayments?: RestaurantPayment[];
    isApproved?: boolean;
    isActive?: boolean;
    revenue?: Revenue;
    documentation?: Documentation;
    rate:number;
}

interface Menu {
    // Define properties of Menu here
}

export interface Review {
    id: number;
    reviewText: string;
    rating: number;
    date: string; // Assuming the date is stored as a string
    restaurant?: Restaurant; // Assuming the restaurant is of type Restaurant
}

export interface userMap {
    user: User;
    token: String;
}

export enum UserRole {
    ROLE_CLIENT,
    ROLE_SUPER_ADMIN,
    ROLE_ADMIN,
    ROLE_RESTAURANT_MANAGER,
    ROLE_DELIVERY_PERSONNEL,
}

// Define the User interface
export interface User {
    active(
        active: (active: any, active1: any) => number,
        active1: (active: any, active1: any) => string,
    ): string;
    active(active: any, active1: any): number;
    userId: number;
    userEmail: string;
    userPassword: string;
    userRole: UserRole;
    managedRestaurants: Restaurant[];
    order: Order[];
}

export enum StatusOfOrder {
    Received = 'Received',
    Preparing = 'Preparing',
    Finished = 'Finished',
    Delivering = 'Delivering',
}

export interface Order {
    id?: number;
    restaurantId: number;
    userId: number;
    products: Product[];
    orderTime: string;
    totalPrice: number;
    orderStatus: StatusOfOrder;
    userEmail: string;
}

interface RestaurantPayment {
    // Define properties of RestaurantPayment here
}

interface Revenue {
    // Define properties of Revenue here
}

interface Documentation {
    // Define properties of Documentation here
}

interface Documentation {
    id: number;
    restaurantName: string;
    restaurantEmail: string;
    yearsOfExperiance: string;
    whatTheyOffer: string;
    rastaurant: {
        id: number;
        name: string;
    };
}

export interface RestaurantNotAproved {
    name: string;
    discount: number;
    images: string[];
    email: string;
    category: string[];
    documentation: Documentation;
}

export interface RestaurantAproved {
    name: string;
    discount: number;
    images: string[];
    email: string;
    category: string[];
    documentation: Documentation;
}

type HandleRestorantsFunction = (category: string) => void;

export interface NavBarProps {
    handleRestorants: HandleRestorantsFunction;
}

export interface Product {
    id?: number;
    name: string;
    description?: string;
    price: number;
    ingredients: string[];
    category: string;
    amount?: number;
    image: string;
}
