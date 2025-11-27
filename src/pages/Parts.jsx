import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter } from 'lucide-react';
import { products, categories } from '../data/mockData';
import './Parts.css';

const Parts = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="parts-page section">
            <div className="container">
                <div className="parts-header">
                    <h1>Parts Catalog</h1>
                    <p className="text-muted">Find the perfect parts for your ride.</p>
                </div>

                <div className="parts-controls">
                    <div className="search-bar">
                        <Search size={20} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search parts..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="category-filter">
                        <Filter size={20} className="filter-icon" />
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-3">
                        {filteredProducts.map(product => (
                            <Link to={`/parts/${product.id}`} key={product.id} className="product-card">
                                <div className="product-image">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className="product-info">
                                    <div className="product-meta">
                                        <span className="category-tag">{categories.find(c => c.id === product.category)?.name}</span>
                                    </div>
                                    <h4>{product.name}</h4>
                                    <p className="product-desc-short">{product.description}</p>
                                    <p className="product-price">${product.price.toFixed(2)}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="no-results">
                        <h3>No parts found</h3>
                        <p>Try adjusting your search or filter.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Parts;
