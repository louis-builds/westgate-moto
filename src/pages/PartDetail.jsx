import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Truck } from 'lucide-react';
import { products, categories } from '../data/mockData';
import './PartDetail.css';

const PartDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="container section text-center">
                <h2>Product not found</h2>
                <Link to="/parts" className="btn btn-primary mt-4">Back to Parts</Link>
            </div>
        );
    }

    const handleInquire = () => {
        // Navigate to booking page with pre-filled part info (in a real app, use context or query params)
        navigate('/booking', { state: { product } });
    };

    return (
        <div className="part-detail-page section">
            <div className="container">
                <button onClick={() => navigate(-1)} className="back-btn">
                    <ArrowLeft size={20} /> Back
                </button>

                <div className="product-detail-grid">
                    <div className="detail-image">
                        <img src={product.image} alt={product.name} />
                    </div>

                    <div className="detail-info">
                        <span className="detail-category">
                            {categories.find(c => c.id === product.category)?.name}
                        </span>
                        <h1>{product.name}</h1>
                        <p className="detail-price">${product.price.toFixed(2)}</p>

                        <div className="detail-description">
                            <h3>Description</h3>
                            <p>{product.description}</p>
                        </div>

                        <div className="detail-compatibility">
                            <h3>Compatible Models</h3>
                            <ul>
                                {product.compatible.map((model, index) => (
                                    <li key={index}><Check size={16} className="text-primary" /> {model}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="detail-actions">
                            <button onClick={handleInquire} className="btn btn-primary btn-block">
                                Inquire / Order Now
                            </button>
                            <p className="shipping-note"><Truck size={16} /> Available for shipping or in-store pickup</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartDetail;
