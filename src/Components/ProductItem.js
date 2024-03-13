import React from 'react';
import './style/ProductItem.css';
function ProductItem({ product, onDelete, onEdit }) {
    const handleEdit = (id) => {
        onEdit(id);
    };

    const handleDelete = (id) => {
        // Implement delete functionality
        onDelete(id);
    };

     return (
        <li className="product-item">
            <div className="product-details">
            <div>{product.name}</div>
            <div>{product.category}</div>
            <div>{product.price}</div>
            <div>{product.stock}</div>
            </div>
            <div className="product-buttons">
            <button onClick={() => handleEdit(product.id)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
            </div>
        </li>
    );
}

export default ProductItem;
