import React from 'react';
import OrderItem from './OrderItem';
import OrderForm from './OrderForm';
import './style/Orders.css';
import mockOrders from '../mockData/orders';

function Orders() {
    return (
        <div className="container">
            <h1>Orders Management</h1>
            <OrderForm />
            <ul className="order-list">
                {mockOrders.map(order => (
                    <OrderItem key={order.id} order={order} />
                ))}
            </ul>
        </div>
    );
}

export default Orders;
