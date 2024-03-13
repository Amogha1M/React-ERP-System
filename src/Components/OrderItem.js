import React from 'react';
import './style/OrderItem.css';
function OrderItem({ order, onDelete }) {
    const handleEdit = () => {
        // Implement edit functionality
        console.log('Edit order:', order);
    };

    const handleDelete = () => {
        // Implement delete functionality
        onDelete(order.id);
    };

    return (
        <li className="order-item">
            <div className="order-details">
            <div>{order.orderId}</div>
            <div>{order.customerName}</div>
            <div>{order.orderDate}</div>
            <div>{order.status}</div>
            </div>
            <div className="order-buttons">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            </div>
        </li>
    );
}

export default OrderItem;
