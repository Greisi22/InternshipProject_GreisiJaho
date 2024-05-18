import MenuItem from '@mui/joy/MenuItem/MenuItem';
import { PaymentMethod, UserRole } from 'src/types/Restaurant';
export const users: User[] = [
    {
        userId: 1,
        userEmail: 'david@example.com',
        userRole: UserRole.ROLE_ADMIN,
    },
    {
        userId: 2,
        userEmail: 'david1@example.com',
        userRole: UserRole.ROLE_ADMIN,
    },
    {
        userId: 3,
        userEmail: 'david2@example.com',
        userRole: UserRole.ROLE_ADMIN,
    },
    {
        userId: 4,
        userEmail: 'david3@example.com',
        userRole: UserRole.ROLE_ADMIN,
    },
];

export const restaurants: Restaurant[] = [
    {
        id: 1,
        name: 'The Gourmet Kitchen',
        address: '123 Culinary Lane, Food City',
        products: [
            {
                id: 1,
                name: 'Cheeseburger',
                description: 'A classic cheeseburger with all the trimmings',
                price: 8.99,
                ingredients: [
                    'beef patty',
                    'cheddar cheese',
                    'lettuce',
                    'tomato',
                    'onion',
                    'pickles',
                ],
                category: 'Main Course',
                amount: 1,
                image: 'cheeseburger.jpg',
            },

            {
                id: 1,
                name: 'Pizza',
                description: 'A classic cheeseburger with all the trimmings',
                price: 8.99,
                ingredients: [
                    'beef patty',
                    'cheddar cheese',
                    'lettuce',
                    'tomato',
                    'onion',
                    'pickles',
                ],
                category: 'Main Course',
                amount: 1,
                image: 'pizza.jpg',
            },
            // Add more products as needed
        ],
        openingHours: ['9:00 AM - 9:00 PM'],
        phoneNumber: '555-1234',
        website: 'http://thegourmetkitchen.example.com',
        averageRating: 4.5,
        isOpen: true,
        reviews: [
            {
                id: 1,
                reviewText: 'Great food and atmosphere!',
                rating: 5,
                date: '2023-04-12',
            },
            // Add more reviews as needed
        ],
        images: ['image1.jpg', 'image2.jpg'],
        restaurantManager: {
            userId: 1,
            userEmail: 'manager@thegourmetkitchen.example.com',
            userName: 'John Doe',
            userPhoneNumber: 5551234567,
        },
        discount: 10,
        order: [
            {
                id: 1,
                restaurantId: 1,
                products: [
                    {
                        id: 1,
                        name: 'Cheeseburger',
                        price: 8.99,
                        ingredients: [
                            'beef patty',
                            'cheddar cheese',
                            'lettuce',
                            'tomato',
                            'onion',
                            'pickles',
                        ],
                        category: 'Main Course',
                        amount: 1,
                        image: 'cheeseburger.jpg',
                    },
                    // Add more products as needed
                ],
                orderTime: '2023-04-12T12:34:56',
                totalPrice: 18.98,
                orderStatus: StatusOfOrder.Received,
                user: {
                    userId: 2,
                    userEmail: 'customer@example.com',
                    userName: 'Jane Smith',
                    userPhoneNumber: 5559876543,
                },
                paymentMethod: PaymentMethod.Cash,
            },
            // Add more orders as needed
        ],
        category: ['Italian', 'Fast Food'],
        restaurantPayments: [
            // Define RestaurantPayment objects here
        ],
        isApproved: true,
        isActive: true,
        revenue: {
            // Define Revenue object here
        },
        documentation: {
            id: 1,
            restaurantName: 'The Gourmet Kitchen',
            restaurantEmail: 'info@thegourmetkitchen.example.com',
            yearsOfExperiance: '10 years',
            whatTheyOffer: 'Fine dining experience',
            rastaurant: {
                id: 1,
                name: 'The Gourmet Kitchen',
            },
        },
        rate: 5,
    },
    {
        id: 2,
        name: 'Sushi World',
        address: '456 Ocean Avenue, Sushi Town',
        products: [
            {
                id: 2,
                name: 'California Roll',
                description: 'Classic California roll with crab, avocado, and cucumber',
                price: 12.99,
                ingredients: ['crab', 'avocado', 'cucumber', 'rice', 'nori'],
                category: 'Sushi',
                amount: 1,
                image: 'california_roll.jpg',
            },


            
            // Add more products as needed
],



        openingHours: ['11:00 AM - 11:00 PM'],
        phoneNumber: '555-5678',
        website: 'http://sushiworld.example.com',
        averageRating: 4.7,
        isOpen: true,
        reviews: [
            {
                id: 2,
                reviewText: 'Fresh and delicious sushi!',
                rating: 5,
                date: '2023-04-15',
            },
            // Add more reviews as needed
        ],
        images: ['sushi1.jpg', 'sushi2.jpg'],
        restaurantManager: {
            userId: 3,
            userEmail: 'manager@sushiworld.example.com',
            userName: 'Akira Tanaka',
            userPhoneNumber: 5559876543,
        },
        discount: 15,
        order: [
            {
                id: 2,
                restaurantId: 2,
                products: [
                    {
                        id: 2,
                        name: 'California Roll',
                        price: 12.99,
                        ingredients: ['crab', 'avocado', 'cucumber', 'rice', 'nori'],
                        category: 'Sushi',
                        amount: 2,
                        image: 'california_roll.jpg',
                    },
                    // Add more products as needed
                ],
                orderTime: '2023-04-15T19:20:30',
                totalPrice: 25.98,
                orderStatus: StatusOfOrder.Preparing,
                user: {
                    userId: 4,
                    userEmail: 'customer2@example.com',
                    userName: 'Emily Johnson',
                    userPhoneNumber: 5551237890,
                },
                paymentMethod: PaymentMethod.Cart,
            },
            // Add more orders as needed
        ],
        category: ['Japanese', 'Seafood'],
        restaurantPayments: [
            // Define RestaurantPayment objects here
        ],
        isApproved: true,
        isActive: true,
        revenue: {
            // Define Revenue object here
        },
        documentation: {
            id: 2,
            restaurantName: 'Sushi World',
            restaurantEmail: 'info@sushiworld.example.com',
            yearsOfExperiance: '5 years',
            whatTheyOffer: 'Authentic sushi experience',
            rastaurant: {
                id: 2,
                name: 'Sushi World',
            },
        },
        rate: 4.7,
    },
    {
        id: 3,
        name: 'Sushi World',
        address: '456 Ocean Avenue, Sushi Town',
        products: [
            {
                id: 2,
                name: 'California Roll',
                description: 'Classic California roll with crab, avocado, and cucumber',
                price: 12.99,
                ingredients: ['crab', 'avocado', 'cucumber', 'rice', 'nori'],
                category: 'Sushi',
                amount: 1,
                image: 'california_roll.jpg',
            },
            // Add more products as needed
        ],
        openingHours: ['11:00 AM - 11:00 PM'],
        phoneNumber: '555-5678',
        website: 'http://sushiworld.example.com',
        averageRating: 4.7,
        isOpen: true,
        reviews: [
            {
                id: 2,
                reviewText: 'Fresh and delicious sushi!',
                rating: 5,
                date: '2023-04-15',
            },
            // Add more reviews as needed
        ],
        images: ['sushi1.jpg', 'sushi2.jpg'],
        restaurantManager: {
            userId: 3,
            userEmail: 'manager@sushiworld.example.com',
            userName: 'Akira Tanaka',
            userPhoneNumber: 5559876543,
        },
        discount: 15,
        order: [
            {
                id: 2,
                restaurantId: 2,
                products: [
                    {
                        id: 2,
                        name: 'California Roll',
                        price: 12.99,
                        ingredients: ['crab', 'avocado', 'cucumber', 'rice', 'nori'],
                        category: 'Sushi',
                        amount: 2,
                        image: 'california_roll.jpg',
                    },
                    // Add more products as needed
                ],
                orderTime: '2023-04-15T19:20:30',
                totalPrice: 25.98,
                orderStatus: StatusOfOrder.Preparing,
                user: {
                    userId: 4,
                    userEmail: 'customer2@example.com',
                    userName: 'Emily Johnson',
                    userPhoneNumber: 5551237890,
                },
                paymentMethod: PaymentMethod.Cart,
            },
            // Add more orders as needed
        ],
        category: ['Japanese', 'Seafood'],
        restaurantPayments: [
            // Define RestaurantPayment objects here
        ],
        isApproved: true,
        isActive: true,
        revenue: {
            // Define Revenue object here
        },
        documentation: {
            id: 2,
            restaurantName: 'Sushi World',
            restaurantEmail: 'info@sushiworld.example.com',
            yearsOfExperiance: '5 years',
            whatTheyOffer: 'Authentic sushi experience',
            rastaurant: {
                id: 2,
                name: 'Sushi World',
            },
        },
        rate: 4.7,
    },
    {
        id: 4,
        name: 'Sushi World',
        address: '456 Ocean Avenue, Sushi Town',
        products: [
            {
                id: 2,
                name: 'California Roll',
                description: 'Classic California roll with crab, avocado, and cucumber',
                price: 12.99,
                ingredients: ['crab', 'avocado', 'cucumber', 'rice', 'nori'],
                category: 'Sushi',
                amount: 1,
                image: 'california_roll.jpg',
            },
            // Add more products as needed
        ],
        openingHours: ['11:00 AM - 11:00 PM'],
        phoneNumber: '555-5678',
        website: 'http://sushiworld.example.com',
        averageRating: 4.7,
        isOpen: true,
        reviews: [
            {
                id: 2,
                reviewText: 'Fresh and delicious sushi!',
                rating: 5,
                date: '2023-04-15',
            },
            // Add more reviews as needed
        ],
        images: ['sushi1.jpg', 'sushi2.jpg'],
        restaurantManager: {
            userId: 3,
            userEmail: 'manager@sushiworld.example.com',
            userName: 'Akira Tanaka',
            userPhoneNumber: 5559876543,
        },
        discount: 15,
        order: [
            {
                id: 2,
                restaurantId: 2,
                products: [
                    {
                        id: 2,
                        name: 'California Roll',
                        price: 12.99,
                        ingredients: ['crab', 'avocado', 'cucumber', 'rice', 'nori'],
                        category: 'Sushi',
                        amount: 2,
                        image: 'california_roll.jpg',
                    },
                    // Add more products as needed
                ],
                orderTime: '2023-04-15T19:20:30',
                totalPrice: 25.98,
                orderStatus: StatusOfOrder.Preparing,
                user: {
                    userId: 4,
                    userEmail: 'customer2@example.com',
                    userName: 'Emily Johnson',
                    userPhoneNumber: 5551237890,
                },
                paymentMethod: PaymentMethod.Cart,
            },
            // Add more orders as needed
        ],
        category: ['Japanese', 'Seafood'],
        restaurantPayments: [
            // Define RestaurantPayment objects here
        ],
        isApproved: true,
        isActive: true,
        revenue: {
            // Define Revenue object here
        },
        documentation: {
            id: 2,
            restaurantName: 'Sushi World',
            restaurantEmail: 'info@sushiworld.example.com',
            yearsOfExperiance: '5 years',
            whatTheyOffer: 'Authentic sushi experience',
            rastaurant: {
                id: 2,
                name: 'Sushi World',
            },
        },
        rate: 4.7,
    },
    {
        id: 5,
        name: 'Sushi World',
        address: '456 Ocean Avenue, Sushi Town',
        products: [
            {
                id: 2,
                name: 'California Roll',
                description: 'Classic California roll with crab, avocado, and cucumber',
                price: 12.99,
                ingredients: ['crab', 'avocado', 'cucumber', 'rice', 'nori'],
                category: 'Sushi',
                amount: 1,
                image: 'california_roll.jpg',
            },
            // Add more products as needed
        ],
        openingHours: ['11:00 AM - 11:00 PM'],
        phoneNumber: '555-5678',
        website: 'http://sushiworld.example.com',
        averageRating: 4.7,
        isOpen: true,
        reviews: [
            {
                id: 2,
                reviewText: 'Fresh and delicious sushi!',
                rating: 5,
                date: '2023-04-15',
            },
            // Add more reviews as needed
        ],
        images: ['sushi1.jpg', 'sushi2.jpg'],
        restaurantManager: {
            userId: 3,
            userEmail: 'manager@sushiworld.example.com',
            userName: 'Akira Tanaka',
            userPhoneNumber: 5559876543,
        },
        discount: 15,
        order: [
            {
                id: 2,
                restaurantId: 2,
                products: [
                    {
                        id: 2,
                        name: 'California Roll',
                        price: 12.99,
                        ingredients: ['crab', 'avocado', 'cucumber', 'rice', 'nori'],
                        category: 'Sushi',
                        amount: 2,
                        image: 'california_roll.jpg',
                    },
                    // Add more products as needed
                ],
                orderTime: '2023-04-15T19:20:30',
                totalPrice: 25.98,
                orderStatus: StatusOfOrder.Preparing,
                user: {
                    userId: 4,
                    userEmail: 'customer2@example.com',
                    userName: 'Emily Johnson',
                    userPhoneNumber: 5551237890,
                },
                paymentMethod: PaymentMethod.Cart,
            },
            // Add more orders as needed
        ],
        category: ['Japanese', 'Seafood'],
        restaurantPayments: [
            // Define RestaurantPayment objects here
        ],
        isApproved: true,
        isActive: true,
        revenue: {
            // Define Revenue object here
        },
        documentation: {
            id: 2,
            restaurantName: 'Sushi World',
            restaurantEmail: 'info@sushiworld.example.com',
            yearsOfExperiance: '5 years',
            whatTheyOffer: 'Authentic sushi experience',
            rastaurant: {
                id: 2,
                name: 'Sushi World',
            },
        },
        rate: 4.7,
    },
    {
        id: 6,
        name: 'Sushi World',
        address: '456 Ocean Avenue, Sushi Town',
        products: [
            {
                id: 2,
                name: 'California Roll',
                description: 'Classic California roll with crab, avocado, and cucumber',
                price: 12.99,
                ingredients: ['crab', 'avocado', 'cucumber', 'rice', 'nori'],
                category: 'Sushi',
                amount: 1,
                image: 'california_roll.jpg',
            },
            // Add more products as needed
        ],
        openingHours: ['11:00 AM - 11:00 PM'],
        phoneNumber: '555-5678',
        website: 'http://sushiworld.example.com',
        averageRating: 4.7,
        isOpen: true,
        reviews: [
            {
                id: 2,
                reviewText: 'Fresh and delicious sushi!',
                rating: 5,
                date: '2023-04-15',
            },
            // Add more reviews as needed
        ],
        images: ['sushi1.jpg', 'sushi2.jpg'],
        restaurantManager: {
            userId: 3,
            userEmail: 'manager@sushiworld.example.com',
            userName: 'Akira Tanaka',
            userPhoneNumber: 5559876543,
        },
        discount: 15,
        order: [
            {
                id: 2,
                restaurantId: 2,
                products: [
                    {
                        id: 2,
                        name: 'California Roll',
                        price: 12.99,
                        ingredients: ['crab', 'avocado', 'cucumber', 'rice', 'nori'],
                        category: 'Sushi',
                        amount: 2,
                        image: 'california_roll.jpg',
                    },
                    // Add more products as needed
                ],
                orderTime: '2023-04-15T19:20:30',
                totalPrice: 25.98,
                orderStatus: StatusOfOrder.Preparing,
                user: {
                    userId: 4,
                    userEmail: 'customer2@example.com',
                    userName: 'Emily Johnson',
                    userPhoneNumber: 5551237890,
                },
                paymentMethod: PaymentMethod.Cart,
            },
            // Add more orders as needed
        ],
        category: ['Japanese', 'Seafood'],
        restaurantPayments: [
            // Define RestaurantPayment objects here
        ],
        isApproved: true,
        isActive: true,
        revenue: {
            // Define Revenue object here
        },
        documentation: {
            id: 2,
            restaurantName: 'Sushi World',
            restaurantEmail: 'info@sushiworld.example.com',
            yearsOfExperiance: '5 years',
            whatTheyOffer: 'Authentic sushi experience',
            rastaurant: {
                id: 2,
                name: 'Sushi World',
            },
        },
        rate: 4.7,
    },
    // Add more restaurants as needed
];

export const payment = [];

export const statistics = [];

export const UserList = [
    {
        id: 1,
        date: new Date(),
        email: 'teabegaj@gmail.com',
        active: 'hjjActive',
    },
    {
        id: 2,
        date: new Date(),
        email: 'teabegaj@gmail.com',
        active: 'Active',
    },
    {
        id: 3,
        date: new Date(),
        email: 'teabegaj@gmail.com',
        active: 'Active',
    },
    {
        id: 4,
        date: new Date(),
        email: 'teabegaj@gmail.com',
        active: 'Active',
    },
    {
        id: 5,
        date: new Date(),
        email: 'teabegaj@gmail.com',
        active: 'Active',
    },
    {
        id: 6,
        date: new Date(),
        email: 'teabegaj@gmail.com',
        active: 'Active',
    },
    {
        id: 7,
        date: new Date(),
        email: 'teabegaj@gmail.com',
        active: 'Active',
    },
];

import { Restaurant, Review, Product, Order, User } from 'src/types/Restaurant';

export const products: Product[] = [
    {
        id: 1,
        name: 'Tomato soup ',
        image: 'src/assets/pizza.png',
        ingredients: ['Rosemary and thyme, chives and parsley'],
        price: 10.99,
        amount: 5,
        category: 'Soup',
    },
    {
        id: 2,
        name: 'Pizza pizamm',
        image: 'src/assets/pizza.png',
        ingredients: ['Rosemary and thyme, chives and parsley'],
        price: 10.99,
        amount: 5,
        category: 'pizza',
    },
    {
        id: 4,
        name: 'Tomato soup ',
        image: 'src/assets/pizza.png',
        ingredients: ['Rosemary and thyme, chives and parsley'],
        price: 10.99,
        amount: 5,
        category: 'Burger',
    },
    {
        id: 5,
        name: 'Tomato soup ',
        image: 'src/assets/pizza.png',
        ingredients: ['Rosemary and thyme, chives and parsley'],
        price: 10.99,
        amount: 5,
        category: 'Salad',
    },
    {
        id: 6,
        name: 'Tomato soup ',
        image: 'src/assets/pizza.png',
        ingredients: ['Rosemary and thyme, chives and parsley'],
        price: 10.99,
        amount: 5,
        category: 'Salad',
    },
    {
        id: 7,
        name: 'Tomato soup ',
        image: 'src/assets/soup.png',
        ingredients: ['Rosemary and thyme, chives and parsley'],
        price: 10.99,
        amount: 5,
        category: 'Soup',
    },
];

export const Revieww: Review[] = [
    {
        id: 1,
        reviewText: 'Great food and service!',
        rating: 5,
        date: '2024-03-21',
    },
];
export const Restauran: Restaurant[] = [
    {
        id: 1,
        products: products,
        name: 'example',
        images: ['url....'],
        rate: 5,
        reviews: Revieww,
        isOpen: true,
        address: 'p bubit',
    },
    {
        id: 2,
        products: products,
        name: 'example',
        images: ['url....'],
        rate: 5,
        reviews: Revieww,
        isOpen: true,
        address: 'p bubit',
    },
    {
        id: 3,
        products: products,
        name: 'example',
        images: ['url....'],
        rate: 5,
        reviews: Revieww,
        isOpen: true,
        address: 'p bubit',
    },
];
import { StatusOfOrder } from 'src/types/Restaurant';

export const Orders: Order[] = [
    {
        id: 1,
        restaurantId: Restauran[0].id,
        products: products,
        orderTime: '273799',
        totalPrice: 21,
        orderStatus: StatusOfOrder.Finished,
        user: users[0],
        description: 'Sufllaqe pa qep',
        paymentMethod: PaymentMethod.Cart,
        orderPrice: 23,
        shippingPrice: 1,
        taxPrice: 1,
    },
    {
        id: 2,
        restaurantId: Restauran[0].id,
        products: products,
        orderTime: '273799',
        totalPrice: 21,
        orderStatus: StatusOfOrder.Finished,
        user: users[0],
        description: 'Sufllaqe pa qep',
        paymentMethod: PaymentMethod.Cart,
        orderPrice: 23,
        shippingPrice: 1,
        taxPrice: 1,
    },
    {
        id: 3,
        restaurantId: Restauran[0].id,
        products: products,
        orderTime: '273799',
        totalPrice: 21,
        orderStatus: StatusOfOrder.Finished,
        user: users[0],
        description: 'Sufllaqe pa qep',
        paymentMethod: PaymentMethod.Cart,
        orderPrice: 23,
        shippingPrice: 1,
        taxPrice: 1,
    },
];



