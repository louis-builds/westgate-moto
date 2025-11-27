import React from 'react';
import { products } from '../data/mockData';

const Admin = () => {
    return (
        <div className="admin-page section">
            <div className="container">
                <h1>Admin Dashboard</h1>
                <p className="text-muted mb-4">Manage your shop content and bookings.</p>

                <div className="grid grid-2">
                    <div className="card" style={{ padding: '1.5rem' }}>
                        <h3>Recent Bookings</h3>
                        <div className="table-responsive" style={{ marginTop: '1rem' }}>
                            <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                                <thead>
                                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                                        <th style={{ padding: '0.5rem' }}>Name</th>
                                        <th style={{ padding: '0.5rem' }}>Type</th>
                                        <th style={{ padding: '0.5rem' }}>Date</th>
                                        <th style={{ padding: '0.5rem' }}>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ padding: '0.5rem' }}>Alice Smith</td>
                                        <td style={{ padding: '0.5rem' }}>Service</td>
                                        <td style={{ padding: '0.5rem' }}>2024-11-28</td>
                                        <td style={{ padding: '0.5rem', color: 'orange' }}>Pending</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '0.5rem' }}>Bob Jones</td>
                                        <td style={{ padding: '0.5rem' }}>Parts</td>
                                        <td style={{ padding: '0.5rem' }}>2024-11-27</td>
                                        <td style={{ padding: '0.5rem', color: 'green' }}>Completed</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="card" style={{ padding: '1.5rem' }}>
                        <h3>Inventory Overview</h3>
                        <div style={{ marginTop: '1rem' }}>
                            <p>Total Products: {products.length}</p>
                            <button className="btn btn-outline mt-4">Add New Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
