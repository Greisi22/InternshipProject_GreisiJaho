export function retrieveDiscountRestaurant(){


    const fetchData = async () => {
        try {
            const response = await fetch('https://api.example.com/data');
    
          
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
    
         
            const result = await response.json();
            return result;
            
        } catch (error) {
            console.log('error: ', error);
        }
    };

return fetchData();    
}