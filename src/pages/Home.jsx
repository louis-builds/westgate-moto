import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, ShoppingBag, Shield } from 'lucide-react';
import { products, services } from '../data/mockData';
import './Home.css';

const Home = () => {
    const featuredProducts = products.slice(0, 3);

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1>Ride With Confidence</h1>
                    <p>Premium parts, expert service, and a passion for performance. Westgate Moto is your one-stop shop for everything two wheels.</p>
                    <div className="hero-buttons">
                        <Link to="/booking" className="btn btn-primary">Book Service</Link>
                        <Link to="/parts" className="btn btn-outline">Shop Parts</Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section features-section">
                <div className="container grid grid-3">
                    <div className="feature-card">
                        <Wrench size={40} className="text-primary" />
                        <h3>Expert Service</h3>
                        <p>Certified mechanics ready to handle everything from oil changes to full engine rebuilds.</p>
                    </div>
                    <div className="feature-card">
                        <ShoppingBag size={40} className="text-primary" />
                        <h3>Premium Parts</h3>
                        <p>We stock only the best brands to ensure your bike performs at its peak.</p>
                    </div>
                    <div className="feature-card">
                        <Shield size={40} className="text-primary" />
                        <h3>Quality Guarantee</h3>
                        <p>All our work and parts come with a satisfaction guarantee for your peace of mind.</p>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section bg-surface">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured Parts</h2>
                        <Link to="/parts" className="view-all">View All <ArrowRight size={16} /></Link>
                    </div>
                    <div className="grid grid-3">
                        {featuredProducts.map(product => (
                            <Link to={`/parts/${product.id}`} key={product.id} className="product-card">
                                <div className="product-image">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className="product-info">
                                    <h4>{product.name}</h4>
                                    <p className="product-price">${product.price.toFixed(2)}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Preview */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center mb-4">Our Services</h2>
                    <div className="grid grid-2">
                        {services.map(service => (
                            <div key={service.id} className="service-card card">
                                <div className="card-body">
                                    <h3>{service.title}</h3>
                                    <p className="text-muted">{service.description}</p>
                                    <div className="service-footer">
                                        <span className="price-tag">{service.price}</span>
                                        <Link to="/booking" className="btn-link">Book Now</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
