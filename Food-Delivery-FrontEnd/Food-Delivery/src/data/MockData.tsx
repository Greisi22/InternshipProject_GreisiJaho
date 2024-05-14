export const users = [
    {
        id: 1,
        userEmail: 'david@example.com',
        userRole: 'ROLE_ADMIN',
    },
    {
        id: 2,
        userEmail: 'greisi@example.com',
        userRole: 'ROLE_ADMIN',
    },
    {
        id: 3,
        userEmail: 'era@example.com',
        userRole: 'ROLE_ADMIN',
    },
    {
        id: 4,
        userEmail: 'une@example.com',
        userRole: 'ROLE_ADMIN',
    },
];

export const restaurants = [
    {
        id: 1,
        name: 'Dea',
        website: 'https://www.example.com',
        restaurantManager: {
            userId: 1,
        },
        isAccepted: true,
        donePayments: 5000,
        totalAmount: 5000,
    },

    {
        id: 2,
        name: 'Era',
        website: 'https://www.example.com',
        restaurantManager: {
            userId: 2,
        },
        isAccepted: true,
        donePayments: 0,
        totalAmount: 5000,
    },
    {
        id: 3,
        name: 'Mado',
        website: 'https://www.example.com',
        restaurantManager: {
            userId: 3,
        },
        isAccepted: false,
        donePayments: 200,
        totalAmount: 5000,
    },
    {
        id: 4,
        name: 'Salt',
        website: 'https://www.example.com',
        restaurantManager: {
            userId: 4,
        },
        isAccepted: false,
        donePayments: 200,
        totalAmount: 5000,
    },
    {
        id: 5,
        name: 'Dea',
        website: 'https://www.example.com',
        restaurantManager: {
            userId: 1,
        },
        isAccepted: true,
        donePayments: 5000,
        totalAmount: 5000,
    },

    {
        id: 6,
        name: 'Era',
        website: 'https://www.example.com',
        restaurantManager: {
            userId: 2,
        },
        isAccepted: true,
        donePayments: 0,
        totalAmount: 5000,
    },
    {
        id: 7,
        name: 'Mado',
        website: 'https://www.example.com',
        restaurantManager: {
            userId: 3,
        },
        isAccepted: false,
        donePayments: 200,
        totalAmount: 5000,
    },
    {
        id: 8,
        name: 'Salt',
        website: 'https://www.example.com',
        restaurantManager: {
            userId: 4,
        },
        isAccepted: false,
        donePayments: 200,
        totalAmount: 5000,
    },
    {
        id: 9,
        name: 'Dea',
        website: 'https://www.example.com',
        restaurantManager: {
            userId: 1,
        },
        isAccepted: true,
        donePayments: 5000,
        totalAmount: 5000,
    },

    {
        id: 10,
        name: 'Era',
        website: 'https://www.example.com',
        restaurantManager: {
            userId: 2,
        },
        isAccepted: true,
        donePayments: 0,
        totalAmount: 5000,
    },
    {
        id: 11,
        name: 'Mado',
        website: 'https://www.example.com',
        restaurantManager: {
            userId: 3,
        },
        isAccepted: false,
        donePayments: 200,
        totalAmount: 5000,
    },
    {
        id: 12,
        name: 'Salt',
        website: 'https://www.example.com',
        restaurantManager: {
            userId: 4,
        },
        isAccepted: false,
        donePayments: 200,
        totalAmount: 5000,
    },
    {
        id: 13,
        name: 'Dea',
        website: 'https://www.example.com',
        restaurantManager: {
            userId: 1,
        },
        isAccepted: true,
        donePayments: 5000,
        totalAmount: 5000,
    },

    {
        id: 14,
        name: 'Era',
        website: 'https://www.example.com',
        restaurantManager: {
            userId: 2,
        },
        isAccepted: true,
        donePayments: 0,
        totalAmount: 5000,
    },
    {
        id: 15,
        name: 'Mado',
        website: 'https://www.example.com',
        restaurantManager: {
            userId: 3,
        },
        isAccepted: false,
        donePayments: 200,
        totalAmount: 5000,
    },
    {
        id: 16,
        name: 'okokok',
        website: 'https://www.example.com',
        restaurantManager: {
            userId: 4,
        },
        isAccepted: false,
        donePayments: 200,
        totalAmount: 5000,
    },
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

import { Restaurant, Review, Product } from 'src/types/Restaurant';

export const products: Product[] = [
    {
        id: 1,
        name: 'Tomato soup ',
        image: 'src/assets/soup.png',
        ingredients: ['Rosemary and thyme, chives and parsley'],
        price: 10.99,

        category: 'Soup',
    },
    {
        id: 2,
        name: 'Tomato soup ',
        image: 'src/assets/soup.png',
        ingredients: ['Rosemary and thyme, chives and parsley'],
        price: 10.99,
        category: 'pizza',
    },
    {
        id: 2,
        name: 'Pizza',
        image: 'src/assets/pizza.png',
        ingredients: [
            'sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese',
        ],
        price: 8.99,
        category: 'pizza',
    },
    {
        id: 3,
        name: 'Tomato soup ',
        image: 'src/assets/soup.png',
        ingredients: ['Rosemary and thyme, chives and parsley'],
        price: 10.99,

        category: 'Soup',
    },
    {
        id: 4,
        name: 'Tomato soup ',
        image: 'src/assets/soup.png',
        ingredients: ['Rosemary and thyme, chives and parsley'],
        price: 10.99,
        category: 'Burger',
    },
    {
        id: 5,
        name: 'Tomato soup ',
        image: 'src/assets/soup.png',
        ingredients: ['Rosemary and thyme, chives and parsley'],
        price: 10.99,
        category: 'Salad',
    },
    {
        id: 6,
        name: 'Tomato soup ',
        image: 'src/assets/soup.png',
        ingredients: ['Rosemary and thyme, chives and parsley'],
        price: 10.99,
        category: 'Salad',
    },
    {
        id: 7,
        name: 'Tomato soup ',
        image: 'src/assets/soup.png',
        ingredients: ['Rosemary and thyme, chives and parsley'],
        price: 10.99,

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
