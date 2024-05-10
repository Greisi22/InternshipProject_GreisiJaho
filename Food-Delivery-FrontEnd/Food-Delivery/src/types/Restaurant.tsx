interface Restaurant {
    id: number;
    name: string;
    address: string;
    menu: Menu[];
    openingHours: string[];
    phoneNumber: string;
    website: string;
    averageRating: number;
    isOpen: boolean;
    reviews: Review[];
    images: string[];
    restaurantManager: User;
    discount: number;
    order: Order[];
    category: string[];
    restaurantPayments: RestaurantPayment[];
    isApproved: boolean;
    isActive: boolean;
    revenue: Revenue;
    documentation: Documentation;
  }
  
  interface Menu {
    // Define properties of Menu here
  }
  
  interface Review {
    // Define properties of Review here
  }
  
  enum UserRole {
    ROLE_CLIENT,
    ROLE_SUPER_ADMIN,
    ROLE_ADMIN,
    ROLE_RESTAURANT_MANAGER,
    ROLE_DELIVERY_PERSONNEL
  }
  
  // Define the User interface
  export interface User {
    userId: number;
    userEmail: string;
    userPassword: string;
    userRole: UserRole;
    managedRestaurants: Restaurant[];
    order: Order[];
  }
  
  interface Order {
    // Define properties of Order here
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


  
type HandleRestorantsFunction = (category: string) => void;

export interface NavBarProps {
    handleRestorants: HandleRestorantsFunction;
}


