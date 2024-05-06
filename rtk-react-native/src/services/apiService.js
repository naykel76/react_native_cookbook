export const BASE_URL = 'https://fakestoreapi.com';

export const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getCategories = async () => {
    const url = `${BASE_URL}/products/categories`;
    const data = await fetchData(url);
    return data;
};
