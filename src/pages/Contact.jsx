import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="contact-page section">
            <div className="container">
                <h1 className="text-center mb-4">Contact Us</h1>

                <div className="grid grid-2">
                    <div className="contact-info card" style={{ padding: '2rem' }}>
                        <h3>Get in Touch</h3>
                        <div className="contact-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div className="item" style={{ display: 'flex', gap: '1rem' }}>
                                <MapPin className="text-primary" />
                                <div>
                                    <h4>Visit Us</h4>
                                    <p className="text-muted">123 Westgate Drive<br />Westgate, Auckland 0614</p>
                                </div>
                            </div>

                            <div className="item" style={{ display: 'flex', gap: '1rem' }}>
                                <Phone className="text-primary" />
                                <div>
                                    <h4>Call Us</h4>
                                    <p className="text-muted">09 123 4567</p>
                                </div>
                            </div>

                            <div className="item" style={{ display: 'flex', gap: '1rem' }}>
                                <Mail className="text-primary" />
                                <div>
                                    <h4>Email Us</h4>
                                    <p className="text-muted">info@westgatemoto.co.nz</p>
                                </div>
                            </div>

                            <div className="item" style={{ display: 'flex', gap: '1rem' }}>
                                <Clock className="text-primary" />
                                <div>
                                    <h4>Opening Hours</h4>
                                    <p className="text-muted">
                                        Mon - Fri: 8:30am - 5:30pm<br />
                                        Sat: 9:00am - 2:00pm<br />
                                        Sun: Closed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="map-container card" style={{ overflow: 'hidden', minHeight: '400px' }}>
                        {/* Placeholder for Google Map */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.887038753268!2d174.6067!3d-36.8256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d3f8b0b0b0b0b%3A0x0!2sWestgate!5e0!3m2!1sen!2snz!4v1620000000000!5m2!1sen!2snz"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px' }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Westgate Map"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
