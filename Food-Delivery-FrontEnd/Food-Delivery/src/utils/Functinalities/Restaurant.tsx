import fs from 'fs';
import path from 'path';
import { Restaurant } from 'src/types/Restaurant';

// Function to save files to the designated restaurant folder
export async function putFiles(restaurantId: string, files: File[]): Promise<void> {
    // Specify the directory where you want the folders to be created
    const FILEPATH = "src/assets/RestaurantFolder"
    const baseDir = path.join(FILEPATH);

    // Check if the directory already exists
    if (!fs.existsSync(baseDir)) {
        fs.mkdirSync(baseDir, { recursive: true });
    }

    // Save each file to the directory
    for (const file of files) {
        const filePath = path.join(baseDir);
        const fileData = await file.arrayBuffer();
        fs.writeFileSync(filePath, Buffer.from(fileData));
    }

  
}

export async function createRestaurant1(restaurant: Restaurant ,files: File[] ) {
    // Here you would typically make an API call to create the restaurant
    // For the sake of this example, let's mock it by generating a random ID
    // const id = Math.random().toString(36).substr(2, 9);
    return { files};
}
