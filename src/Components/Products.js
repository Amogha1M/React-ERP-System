import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import ProductForm from './ProductForm';
import './style/Products.css';

function Products() {

    const mockProducts = [
        {
            id: 1,
            name: 'PName 1',
            category: 'Category A',
            price: 100.01,
            stock: 25
        },
        {
            id: 2,
            name: 'PName 2',
            category: 'Category B',
            price: 55.65,
            stock: 150
        },
        {
            id: 3,
            name: 'PName 3',
            category: 'Category A',
            price: 82.76,
            stock: 10
        },
        // Add more products as needed
    ];
    const [products, setProducts] = useState([]);
    const [editProduct, setEditProduct] = useState();


    const productData = (newProductData) => {
        const maxId = Math.max(...products.map((obj) => obj.id), 0);
        let obj = { id: maxId + 1, ...newProductData };
        setProducts([...products, obj]);
    };

    useEffect(() => {
        setProducts(mockProducts);
    }, []);

    useEffect(() => {
        console.log(products, 'lop0');
    }, [products]);

    const handleDelete = (id) => {
        var index = products.map(function(e){
            return e.id
        }).indexOf(id);
        products.splice(index, 1);
        setProducts([...products])
    }

    const handleEdit = (id) => {
        var editProduct = products.find((product)=> product.id === id);
        setEditProduct(editProduct)
        }


    return (
        <div className="container">
            <h1>Products Management</h1>
            <ProductForm productData={productData} onEditProduct={editProduct} />
            <ul className="product-list">
                {products.map(product => (
                    <ProductItem key={product.id} product={product} onDelete={(id)=>handleDelete(id)} onEdit={(id) => handleEdit(id)}/>
                ))}
            </ul>
        </div>
    );
}

export default Products;
