import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, Package, Send } from 'lucide-react';
import './Booking.css';

const Booking = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState('service');
    const [submitted, setSubmitted] = useState(false);

    // Pre-fill from navigation state if available
    const prefilledProduct = location.state?.product;

    useEffect(() => {
        if (prefilledProduct) {
            setActiveTab('parts');
        }
    }, [prefilledProduct]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
            window.scrollTo(0, 0);
        }, 1000);
    };

    if (submitted) {
        return (
            <div className="container section text-center">
                <div className="success-message">
                    <div className="success-icon">
                        <Send size={40} />
                    </div>
                    <h2>Request Received!</h2>
                    <p>We'll get back to you shortly to confirm your appointment or order.</p>
                    <button onClick={() => setSubmitted(false)} className="btn btn-outline mt-4">Submit Another Request</button>
                </div>
            </div>
        );
    }

    return (
        <div className="booking-page section">
            <div className="container">
                <h1 className="text-center mb-4">Bookings & Inquiries</h1>

                <div className="booking-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'service' ? 'active' : ''}`}
                        onClick={() => setActiveTab('service')}
                    >
                        <Calendar size={20} /> Service Booking
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'parts' ? 'active' : ''}`}
                        onClick={() => setActiveTab('parts')}
                    >
                        <Package size={20} /> Parts Order
                    </button>
                </div>

                <div className="booking-form-container card">
                    {activeTab === 'service' ? (
                        <form onSubmit={handleSubmit} className="booking-form">
                            <h3>Schedule a Service</h3>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" required placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" required placeholder="021 123 4567" />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Bike Make</label>
                                    <input type="text" required placeholder="e.g. Yamaha" />
                                </div>
                                <div className="form-group">
                                    <label>Model</label>
                                    <input type="text" required placeholder="e.g. R6" />
                                </div>
                                <div className="form-group">
                                    <label>Year</label>
                                    <input type="number" required placeholder="2020" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Service Type</label>
                                <select required>
                                    <option value="">Select Service...</option>
                                    <option value="general">General Service (Oil & Filter)</option>
                                    <option value="major">Major Service</option>
                                    <option value="tires">Tire Change</option>
                                    <option value="repair">Repair / Diagnostics</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Preferred Date</label>
                                <input type="text" required placeholder="e.g. 28 November 2024 or 28/11/2024" />
                            </div>
                            <div className="form-group">
                                <label>Notes / Issues</label>
                                <textarea rows="4" placeholder="Describe any specific issues..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Request Appointment</button>
                        </form>
                    ) : (
                        <form onSubmit={handleSubmit} className="booking-form">
                            <h3>Order / Inquire Parts</h3>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" required placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label>Contact Method</label>
                                <div className="radio-group">
                                    <label><input type="radio" name="contact" value="phone" defaultChecked /> Phone</label>
                                    <label><input type="radio" name="contact" value="email" /> Email</label>
                                    <label><input type="radio" name="contact" value="wechat" /> WeChat</label>
                                </div>
                                <input type="text" required placeholder="Enter number/email/ID" />
                            </div>
                            <div className="form-group">
                                <label>Bike Details</label>
                                <input type="text" required placeholder="Year Make Model (e.g. 2018 Kawasaki Ninja 400)" />
                            </div>
                            <div className="form-group">
                                <label>Part Name / Number</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="What are you looking for?"
                                    defaultValue={prefilledProduct ? prefilledProduct.name : ''}
                                />
                            </div>
                            <div className="form-group">
                                <label>Additional Details</label>
                                <textarea rows="4" placeholder="Any specific requirements?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Send Inquiry</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Booking;
