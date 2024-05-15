import { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import { Delete } from '@mui/icons-material';
import pizzaImage from 'src/assets/pizzaa.png'; // Corrected image import path
import { getProductCategoryCache } from 'src/cache/productCache';
import { Product } from 'src/types/Restaurant';
import ProductForm from '../Administrator/ProductForm';
import { deleteProduct } from 'src/api/localhost/Product/ProductsApi';

function MultiFilters() {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7);
    const [selectedArray, setSelectedArray] = useState<number[]>([]);
    const [loading, ] = useState(false);
    const [data, setData] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('All'); // Track selected category
    const [isEdited, setEditedProduct] = useState(false);

    const categories = ['All', 'Food', 'Drink', 'Pasta', 'Soup']; // Define categories

    useEffect(() => {
        const fetchDataAndUpdateData = async () => {
            const categoryData = await getProductCategoryCache(selectedCategory);
            setData(categoryData);
        };
        fetchDataAndUpdateData();
    }, [selectedCategory]);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleEdit = (id: number) => {
        setEditedProduct(true);
    };

    const handleDelete = async (id: number) => {
        await deleteProduct(id);
        const updatedData = data.filter((product) => product.id !== id);
        setData(updatedData);
    };

    return (
        <div className="mt-4">
            {isEdited && (
                <div className="absolute h-full  w-full  z-[100] mt-[-30px]">
                    <ProductForm setEditedProduct={setEditedProduct} />
                </div>
            )}{' '}
            {/* Add margin to the top */}
            {/* Category List */}
            <div className="flex space-x-4 mb-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`px-3 py-1 rounded-md ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                        onClick={() => handleCategoryClick(category)}>
                        {category}
                    </button>
                ))}
            </div>
            {/* Product Table */}
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200 table-sm">
                    {/* Table Headers */}
                    <thead className="h-[40px] text-xs text-gray-700 uppercase bg-gray-300">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center"></div>
                            </th>
                            {['Product Name', 'Image', 'Ingredients', 'Price', 'Actions'].map(
                                (columnName, index) => (
                                    <th key={index} scope="col" className="px-6">
                                        {columnName}
                                    </th>
                                ),
                            )}
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {loading === false ? (
                            data.map((product, index) => (
                                <tr
                                    key={product.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    {/* Checkbox */}
                                    <td className="w-4 p-4">
                                        <div className="flex items-center whitespace-nowrap">
                                            <input
                                                defaultChecked={selectedArray.includes(product.id)}
                                                onChange={() => {
                                                    const updatedSelectedArray = [...selectedArray];
                                                    if (updatedSelectedArray.includes(product.id)) {
                                                        updatedSelectedArray.splice(
                                                            updatedSelectedArray.indexOf(
                                                                product.id,
                                                            ),
                                                            1,
                                                        );
                                                    } else {
                                                        updatedSelectedArray.push(product.id);
                                                    }
                                                    setSelectedArray(updatedSelectedArray);
                                                }}
                                                id={`checkbox-table-search-${index}`}
                                                type="checkbox"
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor={`checkbox-table-search-${index}`}
                                                className="sr-only">
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    {/* Product Details */}
                                    <td className="px-6 whitespace-nowrap">{product.name}</td>
                                    <td className="px-6 whitespace-nowrap">
                                        <img
                                            src={pizzaImage}
                                            alt={product.name}
                                            className="h-12 w-12"
                                        />
                                    </td>
                                    <td className="px-6 whitespace-nowrap">
                                        {product.ingredients.join(', ')}
                                    </td>
                                    <td className="px-6 whitespace-nowrap">${product.price}</td>
                                    {/* Actions */}
                                    <td className="px-6 py-4 flex space-x-2">
                                        {/* Edit Button */}
                                        <a
                                            href="#"
                                            className="text-blue-500"
                                            onClick={() => handleEdit(product.id)}
                                            style={{
                                                cursor: 'pointer',
                                                maxWidth: '2.5rem',
                                                padding: '3px',
                                                marginTop: '8px',
                                                display: 'block',
                                            }}>
                                            Edit
                                        </a>
                                        {/* Delete Button */}
                                        <Delete
                                            className="icon text-red-500"
                                            onClick={() => handleDelete(product.id)}
                                            style={{
                                                cursor: 'pointer',
                                                maxWidth: '2.5rem',
                                                padding: '3px',
                                                marginTop: '8px',
                                                display: 'block',
                                            }}
                                        />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="px-6 py-4" colSpan={5}>
                                    Loading...
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <div className="flex justify-end mt-4">
                <Pagination
                    current={currentPage}
                    total={data.length}
                    defaultPageSize={itemsPerPage}
                    showSizeChanger={false}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default MultiFilters;