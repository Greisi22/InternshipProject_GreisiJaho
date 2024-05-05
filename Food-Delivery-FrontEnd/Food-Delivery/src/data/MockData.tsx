export const users = [
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


  export const restaurants =[
    {
    id:1,    
    name: "Dea",
    website: "https://www.example.com",
    restaurantManager: {
      userId: 1
    },
    isAccepted: true,
    donePayments: 5000 ,
    totalAmount: 5000
    },

    {
        id:2,    
        name: "Era",
        website: "https://www.example.com",
        restaurantManager: {
          userId: 2
        },
        isAccepted: true,
        donePayments: 0,
        totalAmount: 5000
    },
    {
        id:3,    
        name: "Mado",
        website: "https://www.example.com",
        restaurantManager: {
          userId: 3
        },
        isAccepted: false,
        donePayments: 200,
        totalAmount: 5000
    },
    {
        id:4,    
        name: "Salt",
        website: "https://www.example.com",
        restaurantManager: {
          userId: 4
        },
        isAccepted: false,
        donePayments: 200,
        totalAmount: 5000
    }
  ];


  export const payment = [

  ];

  export const statistics = [
    
  ];