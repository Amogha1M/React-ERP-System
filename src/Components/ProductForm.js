import React, { useEffect, useState } from 'react';
import './style/ProductForm.css';
function ProductForm({ productData, onEditProduct }) {
    
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        stock: ''
    });

    const [editData, setEditData] = useState({
        name: '',
        category: '',
        price: '',
        stock: ''
    });

    useEffect(() => {
        if(onEditProduct && Object.keys(onEditProduct).length > 0) {
            setEditData({
                name: onEditProduct.name,
                category: onEditProduct.category,
                price: onEditProduct.price,
                stock: onEditProduct.stock
            })
        }
    }, [onEditProduct]);

    const handleChange = e => {
        const { name, value } = e.target;
        if(onEditProduct && Object.keys(onEditProduct).length > 0) {
            setEditData(prevData => ({
                ...prevData,
                    [name]: value
            }));
        } else {
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));    
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        if(onEditProduct && Object.keys(onEditProduct).length > 0) {
            setEditData({
                name: '',
                category: '',
                price: '',
                stock: ''
            });
            productData(editData);    
        } else {
            setFormData({
                name: '',
                category: '',
                price: '',
                stock: ''
            });
            productData(formData);    
        }
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}> {
            onEditProduct ? 
            <><input type="text" name="name" placeholder="Name" value={editData.name} onChange={handleChange} />
            <input type="text" name="category" placeholder="Category" value={editData.category} onChange={handleChange} />
            <input type="text" name="price" placeholder="Price" value={editData.price} onChange={handleChange} />
            <input type="text" name="stock" placeholder="Stock" value={editData.stock} onChange={handleChange} />
            <button type="submit">edit</button></>
:
                <><input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
                <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
                <input type="text" name="stock" placeholder="Stock" value={formData.stock} onChange={handleChange} />
                <button type="submit">Submit</button></>

        }
        </form>
    );
}

export default ProductForm;
