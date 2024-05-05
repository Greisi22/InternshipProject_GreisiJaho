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
  
  interface User {
    // Define properties of User here
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

  
  
type HandleRestorantsFunction = (category: string) => void;

export interface NavBarProps {
    handleRestorants: HandleRestorantsFunction;
}