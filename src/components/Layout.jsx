import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, MapPin, Phone, Instagram, Facebook } from 'lucide-react';
import './Layout.css';

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/parts', label: 'Parts' },
        { path: '/booking', label: 'Booking' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <div className="layout">
            <header className="header">
                <div className="container header-content">
                    <Link to="/" className="logo">
                        <span className="logo-text">WESTGATE</span>
                        <span className="logo-sub">MOTO</span>
                    </Link>

                    <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="header-actions">
                        <button className="icon-btn" aria-label="Cart">
                            <ShoppingCart size={24} />
                        </button>
                        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            <main className="main-content">
                <Outlet />
            </main>

            <footer className="footer">
                <div className="container footer-grid">
                    <div className="footer-section">
                        <h3>WESTGATE MOTO</h3>
                        <p>Your trusted partner for motorcycle maintenance, performance parts, and expert advice.</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/parts">Shop Parts</Link></li>
                            <li><Link to="/booking">Book Service</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Contact</h4>
                        <p className="contact-item"><MapPin size={16} /> 123 Westgate Drive, Auckland</p>
                        <p className="contact-item"><Phone size={16} /> 09 123 4567</p>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Westgate Moto. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
