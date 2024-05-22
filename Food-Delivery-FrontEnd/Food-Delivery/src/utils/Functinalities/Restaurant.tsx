import axios from 'axios';

export async function putFiles(restaurantId: string, files: File[]) {
    const formData = new FormData();

    // Ensure files is an array before attempting to iterate over it
    if (Array.isArray(files)) {
        files.forEach(file => {
            formData.append('files', file);
        });
    } else {
        console.error('Files must be an array');
        return;
    }

    try {
        await axios.post(`/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log('Files uploaded successfully');
    } catch (error) {
        console.error('Error uploading files:', error);
    }
}
