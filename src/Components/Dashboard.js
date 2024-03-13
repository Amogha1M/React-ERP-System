import React from 'react';
import { Link } from 'react-router-dom';
import mockProducts from '../mockData/products';
import './style/Dashboard.css';
import mockOrders from '../mockData/orders';

function Dashboard() {
    const totalProducts = mockProducts.length;
    const totalOrders = mockOrders.length; // You can replace this with your actual orders data

    return (
        <div className="container">
            <h1>Dashboard</h1>
            <p>Summary of key metrics/features:</p>
            <div className="metrics-container">
                <div className="metric">
                    <h3>Total Products:</h3>
                    <p>{totalProducts}</p>
                </div>
                <div className="metric">
                    <h3>Total Orders:</h3>
                    <p>{totalOrders}</p>
                </div>
            </div>
            <div className="link-container">
                <Link to="/products">
                    <h1 className="h">Products Management</h1>
                </Link>
                <Link to="/orders">
                    <h1 className="h">Orders Management</h1>
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;