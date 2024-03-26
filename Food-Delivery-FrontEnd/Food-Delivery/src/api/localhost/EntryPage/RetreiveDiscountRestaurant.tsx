export function retrieveDiscountRestaurant() {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/restaurant/discount');

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
