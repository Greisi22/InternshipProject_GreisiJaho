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

import { Restaurant, Review, Product, Order, User } from 'src/types/Restaurant';

export const products: Product[] = [
    {
        id: 1,
        name: 'Tomato soup ',
        image: 'src/assets/soup.png',
        ingredients: ['Rosemary and thyme, chives and parsley'],
        price: 10.99,
        amount: 5,
        category: 'Soup',
    },
    {
        id: 2,
        name: 'Pizza pizamm',
        image: 'src/assets/soup.png',
        ingredients: ['Rosemary and thyme, chives and parsley'],
        price: 10.99,
        amount: 5,
        category: 'pizza',
    },
    {
        id: 4,
        name: 'Tomato soup ',
        image: 'src/assets/soup.png',
        ingredients: ['Rosemary and thyme, chives and parsley'],
        price: 10.99,
        amount: 5,
        category: 'Burger',
    },
    {
        id: 5,
        name: 'Tomato soup ',
        image: 'src/assets/soup.png',
        ingredients: ['Rosemary and thyme, chives and parsley'],
        price: 10.99,
        amount: 5,
        category: 'Salad',
    },
    {
        id: 6,
        name: 'Tomato soup ',
        image: 'src/assets/soup.png',
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
        userId: users[0].userId,
        productss: products,
        totalPrice: 21,
        orderStatus: StatusOfOrder.Finished,
        userEmail: users[0].userEmail,
        description: 'Sufllaqe pa qep',
        userAdress: 'ish parku i autobusave',
        userPhoneNumber: 23456,
        paymentMethod: PaymentMethod.Cart,
        orderPrice: 23,
        shippingPrice: 1,
        taxPrice: 1,
    },
    {
        id: 2,
        restaurantId: Restauran[0].id,
        userId: users[0].userId,
        productss: products,
        totalPrice: 21,
        orderStatus: StatusOfOrder.Finished,
        userEmail: users[0].userEmail,
        description: 'Sufllaqe pa qep',
        userAdress: 'ish parku i autobusave',
        userPhoneNumber: 23456,
        paymentMethod: PaymentMethod.Cart,
        orderPrice: 23,
        shippingPrice: 1,
        taxPrice: 1,
    },
    {
        id: 3,
        restaurantId: Restauran[0].id,
        userId: users[0].userId,
        productss: products,
        totalPrice: 21,
        orderStatus: StatusOfOrder.Finished,
        userEmail: users[0].userEmail,
        description: 'Sufllaqe pa qep',
        userAdress: 'ish parku i autobusave',
        userPhoneNumber: 23456,
        paymentMethod: PaymentMethod.Cart,
        orderPrice: 23,
        shippingPrice: 1,
        taxPrice: 1,
    },
];
