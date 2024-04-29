const users = [
    {
      id: 1,
      userEmail: "david@example.com",
      userRole: "ROLE_ADMIN"
    },
    {
        id: 2,
        userEmail: "greisi@example.com",
        userRole: "ROLE_ADMIN"
    },
    {
        id: 3,
        userEmail: "era@example.com",
        userRole: "ROLE_ADMIN"
    },
    {
        id: 4,
        userEmail: "une@example.com",
        userRole: "ROLE_ADMIN"
    }
  ];

  export interface Restaurant {
    id: number;
    name: string;
    website: string;
    restaurantManager: {
        userId: number;
    };
    isAccepted: boolean;
}

export const restaurants: Restaurant[] = [
    {
        id: 1,
        name: "Dea",
        website: "https://www.example.com",
        restaurantManager: {
            userId: 1
        },
        isAccepted: true
    },
    {
        id: 2,
        name: "Era",
        website: "https://www.example.com",
        restaurantManager: {
            userId: 2
        },
        isAccepted: true
    },
    {
        id: 3,
        name: "Mado",
        website: "https://www.example.com",
        restaurantManager: {
            userId: 3
        },
        isAccepted: false
    },
    {
        id: 4,
        name: "Salt",
        website: "https://www.example.com",
        restaurantManager: {
            userId: 4
        },
        isAccepted: false
    }
];

  
export interface UserList {
  id: number;
  date: Date;
  email: string;
  active: string;
  isAccepted: boolean;
}


export const UserList: UserList[] = [
  {
    id: 1,
    date: new Date("2024-04-27"),
    email: "era@example.com",
    active: "Active",
    isAccepted: true
  },
  {
    id: 2,
    date: new Date("2024-04-26"),
    email: "mado@example.com",
    active: "Inactive",
    isAccepted: false
  },
  {
    id: 3,
    date: new Date("2024-04-25"),
    email: "salt@example.com",
    active: "Inactive",
    isAccepted: false
  },
  {
    id: 4,
    date: new Date("2024-04-24"),
    email: "john@example.com",
    active: "Active",
    isAccepted: true
  },
  {
    id: 5,
    date: new Date("2024-04-23"),
    email: "jane@example.com",
    active: "Active",
    isAccepted: false
  },
  {
    id: 6,
    date: new Date("2024-04-22"),
    email: "alex@example.com",
    active: "Inactive",
    isAccepted: true
  }
];


  const payment = [

  ];

  const statistics = [
    
  ];